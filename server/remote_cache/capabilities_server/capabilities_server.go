package capabilities_server

import (
	"context"

	"github.com/buildbuddy-io/buildbuddy/server/environment"
	"github.com/buildbuddy-io/buildbuddy/server/real_environment"
	"github.com/buildbuddy-io/buildbuddy/server/remote_cache/digest"
	"github.com/buildbuddy-io/buildbuddy/server/util/bazel_request"

	cappb "github.com/buildbuddy-io/buildbuddy/proto/capability"
	repb "github.com/buildbuddy-io/buildbuddy/proto/remote_execution"
	smpb "github.com/buildbuddy-io/buildbuddy/proto/semver"
	remote_cache_config "github.com/buildbuddy-io/buildbuddy/server/remote_cache/config"
)

const (
	MinExecutionPriority = -1000
	MaxExecutionPriority = 1000
)

var (
	bazel6 = bazel_request.MustParseVersion("6.0.0")
)

type CapabilitiesServer struct {
	env environment.Env

	supportCAS        bool
	supportRemoteExec bool
	supportZstd       bool
}

func Register(env *real_environment.RealEnv) error {
	// Register to handle GetCapabilities messages, which tell the client
	// that this server supports CAS functionality.
	env.SetCapabilitiesServer(NewCapabilitiesServer(
		env,
		/*supportCAS=*/ env.GetCache() != nil,
		/*supportRemoteExec=*/ env.GetRemoteExecutionService() != nil,
		/*supportZstd=*/ remote_cache_config.ZstdTranscodingEnabled(),
	))
	return nil
}

func NewCapabilitiesServer(env environment.Env, supportCAS, supportRemoteExec, supportZstd bool) *CapabilitiesServer {
	return &CapabilitiesServer{
		env:               env,
		supportCAS:        supportCAS,
		supportRemoteExec: supportRemoteExec,
		supportZstd:       supportZstd,
	}
}

func (s *CapabilitiesServer) GetCapabilities(ctx context.Context, req *repb.GetCapabilitiesRequest) (*repb.ServerCapabilities, error) {
	c := repb.ServerCapabilities{
		// Support bazel 2.0 -> 2.3
		LowApiVersion:  &smpb.SemVer{Major: int32(2)},
		HighApiVersion: &smpb.SemVer{Major: int32(2), Minor: int32(3)},
	}
	var compressors []repb.Compressor_Value
	if s.supportZstd {
		compressors = []repb.Compressor_Value{repb.Compressor_IDENTITY, repb.Compressor_ZSTD}
	}
	if s.supportCAS {
		c.CacheCapabilities = &repb.CacheCapabilities{
			DigestFunctions: digest.SupportedDigestFunctions(),
			ActionCacheUpdateCapabilities: &repb.ActionCacheUpdateCapabilities{
				UpdateEnabled: s.actionCacheUpdateEnabled(ctx),
			},
			CachePriorityCapabilities: &repb.PriorityCapabilities{
				Priorities: []*repb.PriorityCapabilities_PriorityRange{
					{
						MinPriority: 0,
						MaxPriority: 0,
					},
				},
			},
			MaxBatchTotalSizeBytes:          0, // Default to protocol limit.
			SymlinkAbsolutePathStrategy:     repb.SymlinkAbsolutePathStrategy_ALLOWED,
			SupportedCompressors:            compressors,
			SupportedBatchUpdateCompressors: compressors,
		}
	}
	if s.supportRemoteExec {
		c.ExecutionCapabilities = &repb.ExecutionCapabilities{
			DigestFunction: repb.DigestFunction_SHA256,
			ExecEnabled:    true,
			ExecutionPriorityCapabilities: &repb.PriorityCapabilities{
				Priorities: []*repb.PriorityCapabilities_PriorityRange{
					{
						MinPriority: MinExecutionPriority,
						MaxPriority: MaxExecutionPriority,
					},
				},
			},
			DigestFunctions: digest.SupportedDigestFunctions(),
		}
	}
	return &c, nil
}

func (s *CapabilitiesServer) actionCacheUpdateEnabled(ctx context.Context) bool {
	// Bazel 6.0.0 is the earliest bazel version that supports returning
	// "update_enabled: false" while also having the flag
	// "--remote_upload_local_results=true" (which is the default). So to avoid
	// unnecessary errors, return true for bazel versions below 6.0 (or if
	// we couldn't detect the Bazel version).
	if v := bazel_request.GetVersion(ctx); v == nil || !v.IsAtLeast(bazel6) {
		return true
	}
	// Note, we only ever return false as an optimization in the case where we
	// successfully authenticated the user and we know that they don't have
	// action cache write capabilities. This way, the client knows to avoid
	// making AC write requests that would just be dropped anyway. In other
	// cases, we return true here and defer any auth error handling to the
	// action cache server when the update is actually attempted.
	u, err := s.env.GetAuthenticator().AuthenticatedUser(ctx)
	if err != nil {
		return true
	}
	return u.HasCapability(cappb.Capability_CACHE_WRITE)
}
