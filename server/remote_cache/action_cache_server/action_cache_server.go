package action_cache_server

import (
	"context"
	"encoding/binary"
	"fmt"
	"strings"
	"sync"

	"github.com/buildbuddy-io/buildbuddy/server/environment"
	"github.com/buildbuddy-io/buildbuddy/server/hostid"
	"github.com/buildbuddy-io/buildbuddy/server/interfaces"
	"github.com/buildbuddy-io/buildbuddy/server/metrics"
	"github.com/buildbuddy-io/buildbuddy/server/real_environment"
	"github.com/buildbuddy-io/buildbuddy/server/remote_cache/digest"
	"github.com/buildbuddy-io/buildbuddy/server/util/bazel_request"
	"github.com/buildbuddy-io/buildbuddy/server/util/capabilities"
	"github.com/buildbuddy-io/buildbuddy/server/util/flag"
	"github.com/buildbuddy-io/buildbuddy/server/util/log"
	"github.com/buildbuddy-io/buildbuddy/server/util/prefix"
	"github.com/buildbuddy-io/buildbuddy/server/util/proto"
	"github.com/buildbuddy-io/buildbuddy/server/util/status"
	"github.com/prometheus/client_golang/prometheus"
	"golang.org/x/sync/errgroup"

	cappb "github.com/buildbuddy-io/buildbuddy/proto/capability"
	repb "github.com/buildbuddy-io/buildbuddy/proto/remote_execution"
	rspb "github.com/buildbuddy-io/buildbuddy/proto/resource"
)

var (
	checkClientActionResultDigests = flag.Bool("cache.check_client_action_result_digests", false, "If true, the server will check (and honor) the bb-specific cached_action_result_digest field on ActionCache.getActionResult requests to reduce bandwidth")

	restrictedPrefixes = []string{interfaces.OCIImageInstanceNamePrefix}
)

type ActionCacheServer struct {
	env   environment.Env
	cache interfaces.Cache
}

func Register(env *real_environment.RealEnv) error {
	// OPTIONAL CACHE API -- only enable if configured.
	if env.GetCache() == nil {
		return nil
	}
	actionCacheServer, err := NewActionCacheServer(env)
	if err != nil {
		return status.InternalErrorf("Error initializing ActionCacheServer: %s", err)
	}
	env.SetActionCacheServer(actionCacheServer)
	return nil
}

func NewActionCacheServer(env environment.Env) (*ActionCacheServer, error) {
	cache := env.GetCache()
	if cache == nil {
		return nil, fmt.Errorf("A cache is required to enable the ActionCacheServer")
	}
	return &ActionCacheServer{
		env:   env,
		cache: cache,
	}, nil
}

func checkFilesExist(ctx context.Context, cache interfaces.Cache, digests []*rspb.ResourceName) error {
	missing, err := cache.FindMissing(ctx, digests)
	if err != nil {
		return err
	}
	if len(missing) > 0 {
		return status.NotFoundErrorf("ActionResult output file: '%s' not found in cache", missing[0])
	}
	return nil
}

func ValidateActionResult(ctx context.Context, cache interfaces.Cache, remoteInstanceName string, digestFunction repb.DigestFunction_Value, r *repb.ActionResult) error {
	outputFileDigests := make([]*rspb.ResourceName, 0, len(r.OutputFiles))
	mu := &sync.Mutex{}
	appendDigest := func(d *repb.Digest) {
		if d != nil && d.GetSizeBytes() > 0 {
			mu.Lock()
			rn := digest.NewResourceName(d, remoteInstanceName, rspb.CacheType_CAS, digestFunction).ToProto()
			outputFileDigests = append(outputFileDigests, rn)
			mu.Unlock()
		}
	}
	for _, f := range r.OutputFiles {
		appendDigest(f.GetDigest())
	}

	g, gCtx := errgroup.WithContext(ctx)
	for _, d := range r.OutputDirectories {
		dc := d
		g.Go(func() error {
			rn := digest.NewResourceName(dc.GetTreeDigest(), remoteInstanceName, rspb.CacheType_CAS, digestFunction).ToProto()
			blob, err := cache.Get(gCtx, rn)
			if err != nil {
				return err
			}
			tree := &repb.Tree{}
			if err := proto.Unmarshal(blob, tree); err != nil {
				return err
			}
			for _, f := range tree.GetRoot().GetFiles() {
				appendDigest(f.GetDigest())
			}
			for _, dir := range tree.GetChildren() {
				for _, f := range dir.GetFiles() {
					appendDigest(f.GetDigest())
				}
			}
			return nil
		})
	}
	if err := g.Wait(); err != nil {
		return err
	}

	return checkFilesExist(ctx, cache, outputFileDigests)
}

func setWorkerMetadata(ar *repb.ActionResult) error {
	if ar.ExecutionMetadata == nil {
		ar.ExecutionMetadata = &repb.ExecutedActionMetadata{
			// This will return the Host ID in the normal case and
			// fall back to a safe ID if permissions don't allow a
			// Host ID. Don't warn in that case because this func is
			// called on every UpdateActionResult, and the
			// consequences of this ID changing are none.
			Worker: hostid.GetFailsafeHostID(""),
		}
	}
	return nil
}

func (s *ActionCacheServer) fetchActionResult(ctx context.Context, rn *digest.ACResourceName, req *repb.GetActionResultRequest) (*repb.ActionResult, *repb.ExecutedActionMetadata, int64, error) {
	blob, err := s.cache.Get(ctx, rn.ToProto())
	if err != nil {
		return nil, nil, 0, status.NotFoundErrorf("ActionResult (%s) not found: %s", req.GetActionDigest(), err)
	}

	rsp := &repb.ActionResult{}
	if err := proto.Unmarshal(blob, rsp); err != nil {
		return nil, nil, 0, err
	}

	if err := ValidateActionResult(ctx, s.cache, req.GetInstanceName(), req.GetDigestFunction(), rsp); err != nil {
		return nil, nil, 0, status.NotFoundErrorf("ActionResult (%s) not found: %s", req.GetActionDigest(), err)
	}
	// The default limit on incoming gRPC messages is 4MB and Bazel doesn't
	// change it.
	if err := s.maybeInlineOutputFiles(ctx, req, rsp, 4*1024*1024); err != nil {
		return nil, nil, 0, err
	}

	if !req.GetIncludeTimelineData() && rsp.GetExecutionMetadata().GetUsageStats() != nil {
		rsp.GetExecutionMetadata().GetUsageStats().Timeline = nil
	}

	// See if the caller specified a cached value.  If they did and it matches
	// the full response that we just computed, then we won't bother sending the
	// data, and instead just tell the caller that their cache is correct.
	if *checkClientActionResultDigests && req.GetCachedActionResultDigest().GetHash() != "" {
		d, err := digest.ComputeForMessage(rsp, req.GetDigestFunction())
		if err != nil {
			return nil, nil, 0, err
		}
		// NOTE: To avoid double-counting AC hits, callers that specify a
		// cached_action_result_digest don't do hit tracking on their own.  This
		// means we need to track the full response size here instead.

		originalMetadata := rsp.GetExecutionMetadata()
		originalResultSize := int64(proto.Size(rsp))

		// Now that we've tracked size and metadata, wipe out the response.
		if proto.Equal(req.GetCachedActionResultDigest(), d) {
			rsp = &repb.ActionResult{
				ActionResultDigest: d,
			}
		}
		return rsp, originalMetadata, originalResultSize, nil
	}

	return rsp, rsp.GetExecutionMetadata(), int64(proto.Size(rsp)), nil
}

// Retrieve a cached execution result.
//
// Implementations SHOULD ensure that any blobs referenced from the
// [ContentAddressableStorage][build.bazel.remote.execution.v2.ContentAddressableStorage]
// are available at the time of returning the
// [ActionResult][build.bazel.remote.execution.v2.ActionResult] and will be
// for some period of time afterwards. The TTLs of the referenced blobs SHOULD be increased
// if necessary and applicable.
//
// Errors:
//
// * `NOT_FOUND`: The requested `ActionResult` is not in the cache.
func (s *ActionCacheServer) GetActionResult(ctx context.Context, req *repb.GetActionResultRequest) (*repb.ActionResult, error) {
	if req.ActionDigest == nil {
		return nil, status.InvalidArgumentError("ActionDigest is a required field")
	}
	rn := digest.NewACResourceName(req.GetActionDigest(), req.GetInstanceName(), req.GetDigestFunction())
	if err := rn.Validate(); err != nil {
		return nil, err
	}
	ctx, err := prefix.AttachUserPrefixToContext(ctx, s.env.GetAuthenticator())
	if err != nil {
		return nil, err
	}
	if err := s.validateRestrictedAccess(ctx, req.GetInstanceName()); err != nil {
		return nil, err
	}

	ht := s.env.GetHitTrackerFactory().NewACHitTracker(ctx, bazel_request.GetRequestMetadata(ctx))
	// Fetch the "ActionResult" object which enumerates all the files in the action.
	d := req.GetActionDigest()
	downloadTracker := ht.TrackDownload(d)

	rsp, metadata, downloadSizeBytes, err := s.fetchActionResult(ctx, rn, req)
	ht.SetExecutedActionMetadata(metadata)
	if err == nil {
		if trackerErr := downloadTracker.CloseWithBytesTransferred(downloadSizeBytes, downloadSizeBytes, repb.Compressor_IDENTITY, "ac_server"); trackerErr != nil {
			log.Debugf("GetActionResult: download tracker error: %s", trackerErr)
		}
	} else {
		if trackerErr := ht.TrackMiss(d); trackerErr != nil {
			log.Debugf("GetActionResult: hit tracker error: %s", trackerErr)
		}
	}
	return rsp, err
}

// Upload a new execution result.
//
// In order to allow the server to perform access control based on the type of
// action, and to assist with client debugging, the client MUST first upload
// the [Action][build.bazel.remote.execution.v2.Execution] that produced the
// result, along with its
// [Command][build.bazel.remote.execution.v2.Command], into the
// `ContentAddressableStorage`.
//
// Errors:
//
//   - `INVALID_ARGUMENT`: One or more arguments are invalid.
//   - `FAILED_PRECONDITION`: One or more errors occurred in updating the
//     action result, such as a missing command or action.
//   - `RESOURCE_EXHAUSTED`: There is insufficient storage space to add the
//     entry to the cache.
func (s *ActionCacheServer) UpdateActionResult(ctx context.Context, req *repb.UpdateActionResultRequest) (*repb.ActionResult, error) {
	if req.ActionDigest == nil {
		return nil, status.InvalidArgumentError("ActionDigest is a required field")
	}
	if req.ActionResult == nil {
		return nil, status.InvalidArgumentError("ActionResult is a required field")
	}
	rn := digest.NewResourceName(req.GetActionDigest(), req.GetInstanceName(), rspb.CacheType_AC, req.GetDigestFunction())
	if err := rn.Validate(); err != nil {
		return nil, err
	}
	ctx, err := prefix.AttachUserPrefixToContext(ctx, s.env.GetAuthenticator())
	if err != nil {
		return nil, err
	}

	canWrite, err := capabilities.IsGranted(ctx, s.env.GetAuthenticator(), cappb.Capability_CACHE_WRITE)
	if err != nil {
		return nil, err
	}
	// For read-only API keys, pretend the request succeeded so bazel doesn't error out.
	if !canWrite {
		return req.ActionResult, nil
	}

	if err := s.validateRestrictedAccess(ctx, req.GetInstanceName()); err != nil {
		return nil, err
	}

	ht := s.env.GetHitTrackerFactory().NewACHitTracker(ctx, bazel_request.GetRequestMetadata(ctx))
	ht.SetExecutedActionMetadata(req.GetActionResult().GetExecutionMetadata())
	d := req.GetActionDigest()
	acResource := digest.NewResourceName(d, req.GetInstanceName(), rspb.CacheType_AC, req.GetDigestFunction())
	uploadTracker := ht.TrackUpload(d)

	// Context: https://github.com/bazelbuild/remote-apis/pull/131
	// More: https://github.com/buchgr/bazel-remote/commit/7de536f47bf163fb96bc1e38ffd5e444e2bcaa00
	if err := setWorkerMetadata(req.ActionResult); err != nil {
		return nil, err
	}

	blob, err := proto.Marshal(req.ActionResult)
	if err != nil {
		return nil, err
	}

	if err := s.cache.Set(ctx, acResource.ToProto(), blob); err != nil {
		return nil, err
	}
	if err := uploadTracker.CloseWithBytesTransferred(int64(len(blob)), int64(len(blob)), repb.Compressor_IDENTITY, "ac_server"); err != nil {
		log.Debugf("UpdateActionResult: upload tracker error: %s", err)
	}
	return req.ActionResult, nil
}

// Inlines the contents of output files requested to be inlined as long as the
// total size of the ActionResult is below maxResultSize.
func (s *ActionCacheServer) maybeInlineOutputFiles(ctx context.Context, req *repb.GetActionResultRequest, ar *repb.ActionResult, maxResultSize int) error {
	if ar == nil || len(req.InlineOutputFiles) == 0 {
		return nil
	}
	requestedFiles := make(map[string]struct{}, len(req.InlineOutputFiles))
	for _, f := range req.InlineOutputFiles {
		requestedFiles[f] = struct{}{}
	}

	budget := int64(max(0, maxResultSize-proto.Size(ar)))
	var filesToInline []*repb.OutputFile
	inlinedBytes := int64(0)
	for _, f := range ar.OutputFiles {
		if _, ok := requestedFiles[f.Path]; !ok {
			continue
		}
		contentsSize := f.GetDigest().GetSizeBytes()
		if contentsSize == 0 {
			// Empty files don't need to be inlined as they can be recognized
			// by their size.
			continue
		}

		// An additional "contents" field requires 1 byte for the tag field
		// (5:LEN), the bytes for the varint encoding of the length of the
		// contents and the contents themselves.
		totalSize := 1 + int64(len(binary.AppendUvarint(nil, uint64(contentsSize)))) + contentsSize
		if budget < totalSize {
			continue
		}
		inlinedBytes += contentsSize
		budget -= totalSize
		filesToInline = append(filesToInline, f)
	}

	metrics.CacheRequestedInlineSizeBytes.With(prometheus.Labels{}).Observe(float64(inlinedBytes))

	if len(filesToInline) == 0 {
		return nil
	}

	ht := s.env.GetHitTrackerFactory().NewCASHitTracker(ctx, bazel_request.GetRequestMetadata(ctx))
	resourcesToInline := make([]*rspb.ResourceName, 0, len(filesToInline))
	downloadTrackers := make([]interfaces.TransferTimer, 0, len(filesToInline))
	for _, f := range filesToInline {
		resourcesToInline = append(resourcesToInline, digest.NewResourceName(f.GetDigest(), req.GetInstanceName(), rspb.CacheType_CAS, req.GetDigestFunction()).ToProto())
		downloadTrackers = append(downloadTrackers, ht.TrackDownload(f.GetDigest()))
	}
	blobs, err := s.cache.GetMulti(ctx, resourcesToInline)
	if err != nil {
		resourcesStr := make([]string, 0, len(resourcesToInline))
		for _, r := range resourcesToInline {
			resourcesStr = append(resourcesStr, r.String())
		}
		// Don't track misses here as GetMulti doesn't tell us which blobs
		// were missing.
		return status.NotFoundErrorf("Not all requested CAS entries (%s) were found: %s", strings.Join(resourcesStr, ", "), err)
	}
	for i, f := range filesToInline {
		blob := blobs[resourcesToInline[i].Digest]
		f.Contents = blob
		if err := downloadTrackers[i].CloseWithBytesTransferred(int64(len(blob)), int64(len(blob)), repb.Compressor_IDENTITY, "ac_server"); err != nil {
			log.Debugf("GetActionResult: download tracker error: %s", err)
		}
	}
	return nil
}

// validateRestrictedAccess checks to see if the instance name has a restricted prefix.
// If it does, validateRestrictedAccess uses the ClientIdentityService to assert that the
// request comes from a trusted client: the app or an executor.
// If the client is not trusted, the ClientIdentityService is not available, or there are any other errors,
// validateRestrictedAccess returns an UnauthenticatedError.
func (s *ActionCacheServer) validateRestrictedAccess(ctx context.Context, instanceName string) error {
	if !isRestricted(instanceName) {
		return nil
	}
	if s.env.GetClientIdentityService() == nil {
		return status.UnauthenticatedError("No client ID service available to check restricted instance name prefix")
	}
	identity, err := s.env.GetClientIdentityService().IdentityFromContext(ctx)
	if err != nil {
		return status.UnauthenticatedErrorf("Could not check identity for restricted instance name prefix: %s", err)
	}
	if identity.Client != interfaces.ClientIdentityApp && identity.Client != interfaces.ClientIdentityExecutor {
		return status.UnauthenticatedError("Cannot access restricted ActionResult from untrusted client")
	}
	return nil
}

// isRestricted indicates whether the input instance name has a restricted prefix.
func isRestricted(instanceName string) bool {
	for _, prefix := range restrictedPrefixes {
		if strings.HasPrefix(instanceName, prefix) {
			return true
		}
	}
	return false
}
