package usage

import (
	"context"
	"crypto/sha256"
	"encoding/json"
	"flag"
	"fmt"
	"strconv"
	"time"

	"github.com/buildbuddy-io/buildbuddy/enterprise/server/util/redisutil"
	"github.com/buildbuddy-io/buildbuddy/server/environment"
	"github.com/buildbuddy-io/buildbuddy/server/interfaces"
	"github.com/buildbuddy-io/buildbuddy/server/tables"
	"github.com/buildbuddy-io/buildbuddy/server/util/alert"
	"github.com/buildbuddy-io/buildbuddy/server/util/authutil"
	"github.com/buildbuddy-io/buildbuddy/server/util/db"
	"github.com/buildbuddy-io/buildbuddy/server/util/flagutil"
	"github.com/buildbuddy-io/buildbuddy/server/util/log"
	"github.com/buildbuddy-io/buildbuddy/server/util/perms"
	"github.com/buildbuddy-io/buildbuddy/server/util/status"
	"github.com/buildbuddy-io/buildbuddy/server/util/timeutil"
	"github.com/go-redis/redis/v8"

	usage_config "github.com/buildbuddy-io/buildbuddy/enterprise/server/usage/config"
)

var (
	region        = flag.String("app.region", "", "The region in which the app is running.")
	enabledLabels = flagutil.New("app.usage.enabled_labels", []string{}, "Usage labels enabled for writing to the DB. These should match the DB column name.")
)

const (
	// collectionPeriodDuration determines the length of time for usage data
	// buckets in Redis. This directly affects the minimum period at which we
	// can flush data to the DB, since we only flush buckets for past time
	// periods.
	//
	// NOTE: this is not intended to be a "knob" that can be tweaked -- various
	// pieces of the implementation implicitly rely on this value, and the current
	// synchronization logic does not account for this being changed. If we do
	// decide to change this value while the usage tracker is running in production,
	// we need to be careful not to overcount usage when transitioning to the new
	// value.
	collectionPeriodDuration = 1 * time.Minute

	// collectionPeriodSettlingTime is the max length of time that we expect
	// usage data to be written to a collection period bucket in Redis after the
	// collection period has ended. This accounts for differences in clocks across
	// apps, Redis buffer flush delay (see redisutil.CommandBuffer), and latency
	// to Redis itself.
	collectionPeriodSettlingTime = 10 * time.Second

	// redisKeyTTL defines how long usage keys have to live before they are
	// deleted automatically by Redis.
	//
	// Keys should live for at least 2 collection periods since collection periods
	// aren't finalized until the period is past, plus some wiggle room for Redis
	// latency. We add a few more collection periods on top of that, in case
	// flushing fails due to transient errors.
	redisKeyTTL = 5 * collectionPeriodDuration

	// Redis storage (V2):
	// - Apps will poll Redis every so often for each "collection_period" in
	//   the recent past which is "settled," meaning that the usage counts for
	//   the collection period are considered final.
	//  - To do this polling, the apps look at
	//   "usage/collections/{collection_period}", where "{collection_period}" is
	//    a timestamp in a fixed format. This key contains a set of
	//   "collection hash" strings.
	// - "collection hashes" are just a SHA256 digest of a Collection struct,
	//   which contains (group_id, labels). The struct's JSON representation
	//   is stored CAS-style in "usage/collection-json/{hash}".
	// - "usage/counts/{hash}/{collection_period}" holds the usage counts
	//   for the collection during the collection period.

	redisUsageKeyPrefix          = "usage/"
	redisCollectionsKeyPrefix    = redisUsageKeyPrefix + "collections/"
	redisCountsKeyPrefix         = redisUsageKeyPrefix + "counts/"
	redisCollectionJSONKeyPrefix = redisUsageKeyPrefix + "collection-json/"

	// Time format used to store Redis keys.
	// Example: 2020-01-01T00:00:00Z
	redisTimeKeyFormat = time.RFC3339

	// Key used to get a lock on Redis usage data. The lock is acquired using the
	// Redlock protocol. See https://redis.io/topics/distlock
	//
	// This lock is purely to reduce load on the DB. Flush jobs should be
	// able to run concurrently (without needing this lock) and still write the
	// correct usage data. The atomicity of DB writes, combined with the
	// fact that we write usage data in monotonically increasing order of
	// timestamp, is really what prevents usage data from being overcounted.
	redisUsageLockKey = "lock.usage"

	// How long any given job can hold the usage lock for, before it expires
	// and other jobs may try to acquire it.
	redisUsageLockExpiry = 45 * time.Second

	// How often to wake up and attempt to flush usage data from Redis to the DB.
	flushInterval = collectionPeriodDuration
)

var (
	collectionPeriodZeroValue = collectionPeriodStartingAt(time.Unix(0, 0))
)

// NewFlushLock returns a distributed lock that can be used with NewTracker
// to help serialize access to the usage data in Redis across apps.
func NewFlushLock(env environment.Env) (interfaces.DistributedLock, error) {
	return redisutil.NewWeakLock(env.GetDefaultRedisClient(), redisUsageLockKey, redisUsageLockExpiry)
}

type tracker struct {
	env           environment.Env
	rdb           redis.UniversalClient
	clock         timeutil.Clock
	region        string
	enabledLabels []string

	flushLock interfaces.DistributedLock
	stopFlush chan struct{}
}

func RegisterTracker(env environment.Env) error {
	if !usage_config.UsageTrackingEnabled() {
		return nil
	}
	lock, err := NewFlushLock(env)
	if err != nil {
		return err
	}
	ut, err := NewTracker(env, timeutil.NewClock(), lock)
	if err != nil {
		return err
	}
	env.SetUsageTracker(ut)
	ut.StartDBFlush()
	env.GetHealthChecker().RegisterShutdownFunction(func(ctx context.Context) error {
		ut.StopDBFlush()
		return nil
	})
	return nil
}

func NewTracker(env environment.Env, clock timeutil.Clock, flushLock interfaces.DistributedLock) (*tracker, error) {
	if *region == "" {
		return nil, status.FailedPreconditionError("Usage tracking requires app.region to be configured.")
	}
	if env.GetDefaultRedisClient() == nil {
		return nil, status.FailedPreconditionError("Usage tracking is enabled, but no Redis client is configured.")
	}
	if env.GetMetricsCollector() == nil {
		return nil, status.FailedPreconditionError("Metrics Collector must be configured for usage tracker.")
	}
	// Validate that the enabled_labels flag only contains DB column names. We
	// flag-guard labels so that apps don't start writing new label columns
	// before other apps know about them.
	dbh := env.GetDBHandle().DB(env.GetServerContext())
	usageSchema, err := db.TableSchema(dbh, &tables.Usage{})
	if err != nil {
		return nil, status.FailedPreconditionErrorf("failed to get usage table schema: %s", err)
	}
	for _, label := range *enabledLabels {
		if _, ok := usageSchema.FieldsByDBName[label]; !ok {
			return nil, status.FailedPreconditionErrorf("unrecognized label %q", label)
		}
	}
	return &tracker{
		env:           env,
		rdb:           env.GetDefaultRedisClient(),
		region:        *region,
		clock:         clock,
		flushLock:     flushLock,
		stopFlush:     make(chan struct{}),
		enabledLabels: *enabledLabels,
	}, nil
}

func (ut *tracker) Increment(ctx context.Context, uc *tables.UsageCounts, ul *tables.UsageLabels) error {
	ul = ut.onlyEnabledLabels(ul)

	groupID, err := perms.AuthenticatedGroupID(ctx, ut.env)
	if err != nil {
		if authutil.IsAnonymousUserError(err) && ut.env.GetAuthenticator().AnonymousUsageEnabled() {
			// Don't track anonymous usage for now.
			return nil
		}
		return err
	}

	counts, err := countsToMap(uc)
	if err != nil {
		return err
	}
	if len(counts) == 0 {
		return nil
	}

	t := ut.currentCollectionPeriod()

	collection := &Collection{
		GroupID:     groupID,
		UsageLabels: *ul,
	}
	collectionJSON, err := json.Marshal(collection)
	if err != nil {
		return status.WrapError(err, "marshal collection")
	}
	collectionJSONHash := fmt.Sprintf("%x", sha256.Sum256(collectionJSON))

	// Store a mapping from collection hash => collection, using Redis as a CAS.
	if err := ut.env.GetMetricsCollector().Set(ctx, collectionJSONRedisKey(collectionJSONHash), string(collectionJSON), redisKeyTTL); err != nil {
		return status.WrapError(err, "store collection json in redis")
	}
	// Increment the hash values
	countsKey := countsRedisKey(collectionJSONHash, t)
	if err := ut.env.GetMetricsCollector().IncrementCountsWithExpiry(ctx, countsKey, counts, redisKeyTTL); err != nil {
		return status.WrapError(err, "increment counts in redis")
	}
	// Add the collection hash to the set of collections with usage
	if err := ut.env.GetMetricsCollector().SetAddWithExpiry(ctx, collectionsRedisKey(t), redisKeyTTL, collectionJSONHash); err != nil {
		return status.WrapError(err, "add collection hash to set in redis")
	}

	return nil
}

// StartDBFlush starts a goroutine that periodically flushes usage data from
// Redis to the DB.
func (ut *tracker) StartDBFlush() {
	go func() {
		ctx := context.Background()
		for {
			select {
			case <-time.After(flushInterval):
				if err := ut.FlushToDB(ctx); err != nil {
					alert.UnexpectedEvent("usage_data_flush_failed", "Error flushing usage data to DB: %s", err)
				}
			case <-ut.stopFlush:
				return
			}
		}
	}()
}

// StopDBFlush cancels the goroutine started by StartDBFlush.
func (ut *tracker) StopDBFlush() {
	ut.stopFlush <- struct{}{}
}

// FlushToDB flushes usage metrics from any finalized collection periods to the
// DB.
//
// Public for testing only; the server should call StartDBFlush to periodically
// flush usage.
func (ut *tracker) FlushToDB(ctx context.Context) error {
	// Grab lock. This will immediately return ResourceExhausted if
	// another client already holds the lock. In that case, we ignore the error.
	err := ut.flushLock.Lock(ctx)
	if status.IsResourceExhaustedError(err) {
		return nil
	}
	if err != nil {
		return err
	}
	defer func() {
		if err := ut.flushLock.Unlock(ctx); err != nil {
			log.Warningf("Failed to unlock distributed lock: %s", err)
		}
	}()
	return ut.flushToDB(ctx)
}

func (ut *tracker) flushToDB(ctx context.Context) error {
	// Don't run for longer than we have the Redis lock. This is mostly just to
	// avoid situations where multiple apps are trying to write usage data to the
	// DB at once while it is already under high load.
	ctx, cancel := context.WithTimeout(ctx, redisUsageLockExpiry)
	defer cancel()

	// Loop through collection periods starting from the oldest collection period
	// that may exist in Redis (based on key expiration time) and looping up until
	// we hit a collection period which is not yet "settled".
	for c := ut.oldestWritableCollectionPeriod(); ut.isSettled(c); c = c.Next() {
		// Read collections
		gk := collectionsRedisKey(c)
		collectionHashes, err := ut.rdb.SMembers(ctx, gk).Result()
		if err != nil {
			return err
		}
		if len(collectionHashes) == 0 {
			continue
		}

		for _, collectionHash := range collectionHashes {

			// Read the collection from Redis (group ID, labels).
			collectionJSON, err := ut.rdb.Get(ctx, collectionJSONRedisKey(collectionHash)).Result()
			if err != nil {
				return status.WrapError(err, "get collection json")
			}
			collection := &Collection{}
			if err := json.Unmarshal([]byte(collectionJSON), collection); err != nil {
				return status.WrapError(err, "unmarshal collection json")
			}
			// Read usage counts from Redis
			ck := countsRedisKey(collectionHash, c)
			h, err := ut.rdb.HGetAll(ctx, ck).Result()
			if err != nil {
				return err
			}
			counts, err := stringMapToCounts(h)
			if err != nil {
				return err
			}
			// Update counts in the DB
			if err := ut.flushCounts(ctx, collection.GroupID, c, counts, &collection.UsageLabels); err != nil {
				return err
			}
			// Clean up the counts from Redis. Don't delete the collection JSON
			// content though, since those aren't specific to collection periods
			// and they might still be needed. Instead, just let those expire.
			if _, err := ut.rdb.Del(ctx, ck).Result(); err != nil {
				return err
			}
		}

		// Delete the Redis data for the groups.
		if _, err := ut.rdb.Del(ctx, gk).Result(); err != nil {
			return err
		}
	}
	return nil
}

func (ut *tracker) flushCounts(ctx context.Context, groupID string, c collectionPeriod, counts *tables.UsageCounts, labels *tables.UsageLabels) error {
	pk := &tables.Usage{
		GroupID:         groupID,
		PeriodStartUsec: c.UsagePeriod().Start().UnixMicro(),
		Region:          ut.region,
		UsageLabels:     *labels,
	}
	dbh := ut.env.GetDBHandle()
	return dbh.TransactionWithOptions(ctx, db.Opts().WithQueryName("upsert_usage"), func(tx *db.DB) error {
		log.Debugf("Flushing usage counts for key %+v", pk)

		// First check whether the row already exists. Make sure to select for
		// update in order to lock the row.
		rows, err := tx.Raw(`
			SELECT *
			FROM "Usages"
			WHERE
				region = ?
				AND group_id = ?
				AND period_start_usec = ?
				AND origin = ?
				AND client = ?
			`+dbh.SelectForUpdateModifier(),
			pk.Region,
			pk.GroupID,
			pk.PeriodStartUsec,
			pk.Origin,
			pk.Client,
		).Rows()
		if err != nil {
			return err
		}

		schema, err := db.TableSchema(tx, &tables.Usage{})
		if err != nil {
			return status.WrapError(err, "failed to get usage table schema")
		}

		existingRowCount := 0
		for rows.Next() {
			existingRowCount++
			fields := map[string]any{}
			if err := tx.ScanRows(rows, &fields); err != nil {
				return err
			}

			unsupportedField := ""
			var unsupportedFieldValue any
			for f, v := range fields {
				if v == nil || v == "" {
					continue
				}
				if _, ok := schema.FieldsByDBName[f]; !ok {
					unsupportedField = f
					unsupportedFieldValue = v
					break
				}
			}
			if unsupportedField != "" {
				alert.UnexpectedEvent("usage_update_dropped", "Usage update transaction aborted since existing usage row contains unsupported column %q = %q (key = %+v)", unsupportedField, unsupportedFieldValue, pk)
				return nil
			}
		}
		if err := rows.Err(); err != nil {
			return err
		}

		tu := &tables.Usage{
			GroupID:         pk.GroupID,
			PeriodStartUsec: pk.PeriodStartUsec,
			Region:          pk.Region,
			FinalBeforeUsec: c.End().UnixMicro(),
			UsageCounts:     *counts,
			UsageLabels:     pk.UsageLabels,
		}
		if existingRowCount == 0 {
			log.Debugf("Creating new usage row for key %+v", pk)
			return tx.Create(tu).Error
		}
		if existingRowCount > 1 {
			// Drop the usage update and alert about it, but there's not much we
			// can do to recover in this case so don't roll back the transaction
			// (since that would cause the flush to keep being retried).
			alert.UnexpectedEvent("usage_update_dropped", "Usage update transaction aborted since it would affect more than one row (key = %+v)", pk)
			return nil
		}

		// Update the usage row, but only if collection period data has not already
		// been written (for example, if the previous flush failed to delete the
		// data from Redis).
		log.Debugf("Updating existing usage row for key %+v", pk)
		res := tx.Exec(`
			UPDATE "Usages"
			SET
				final_before_usec = ?,
				invocations = invocations + ?,
				cas_cache_hits = cas_cache_hits + ?,
				action_cache_hits = action_cache_hits + ?,
				total_download_size_bytes = total_download_size_bytes + ?,
				linux_execution_duration_usec = linux_execution_duration_usec + ?,
				mac_execution_duration_usec = mac_execution_duration_usec + ?,
				total_upload_size_bytes = total_upload_size_bytes + ?,
				total_cached_action_exec_usec = total_cached_action_exec_usec + ?
			WHERE
				group_id = ?
				AND period_start_usec = ?
				AND region = ?
				AND final_before_usec <= ?
				AND origin = ?
				AND client = ?
		`,
			c.End().UnixMicro(),
			tu.Invocations,
			tu.CASCacheHits,
			tu.ActionCacheHits,
			tu.TotalDownloadSizeBytes,
			tu.LinuxExecutionDurationUsec,
			tu.MacExecutionDurationUsec,
			tu.TotalUploadSizeBytes,
			tu.TotalCachedActionExecUsec,
			tu.GroupID,
			tu.PeriodStartUsec,
			tu.Region,
			c.Start().UnixMicro(),
			tu.Origin,
			tu.Client,
		)
		if res.Error != nil {
			return res.Error
		}
		if res.RowsAffected > 1 {
			// Note: this should never happen since we should be first querying
			// the rows to update above, and only applying the update if the
			// number of selected rows was 1.
			alert.UnexpectedEvent("usage_update_logic_error", "Usage update transaction rolled back due to unexpected affected row count %d (key = %+v)", res.RowsAffected, pk)
			// Note: returning an error here causes the transaction to be rolled
			// back.
			return status.InternalErrorf("unexpected number of rows affected (%d)", res.RowsAffected)
		}
		return nil
	})
}

func (ut *tracker) currentCollectionPeriod() collectionPeriod {
	return collectionPeriodStartingAt(ut.clock.Now())
}

func (ut *tracker) oldestWritableCollectionPeriod() collectionPeriod {
	return collectionPeriodStartingAt(ut.clock.Now().Add(-redisKeyTTL))
}

func (ut *tracker) lastSettledCollectionPeriod() collectionPeriod {
	return collectionPeriodStartingAt(ut.clock.Now().Add(-(collectionPeriodDuration + collectionPeriodSettlingTime)))
}

// isSettled returns whether the given collection period will no longer have
// usage data written to it and is therefore safe to flush to the DB.
func (ut *tracker) isSettled(c collectionPeriod) bool {
	return !time.Time(c).After(time.Time(ut.lastSettledCollectionPeriod()))
}

func (ut *tracker) onlyEnabledLabels(in *tables.UsageLabels) *tables.UsageLabels {
	out := &tables.UsageLabels{}
	for _, l := range ut.enabledLabels {
		switch l {
		case "origin":
			out.Origin = in.Origin
		case "client":
			out.Client = in.Client
		default:
			continue
		}
	}
	return out
}

// collectionPeriod is an interval of time starting at the beginning of a minute
// in UTC time and lasting one minute. Usage data is bucketed by collection
// period in Redis.
type collectionPeriod time.Time

func collectionPeriodStartingAt(t time.Time) collectionPeriod {
	utc := t.UTC()
	return collectionPeriod(time.Date(
		utc.Year(), utc.Month(), utc.Day(),
		utc.Hour(), utc.Minute(), 0, 0,
		utc.Location()))
}

func parseCollectionPeriod(s string) (collectionPeriod, error) {
	usec, err := strconv.ParseInt(s, 10, 64)
	if err != nil {
		return collectionPeriodZeroValue, err
	}
	t := time.UnixMicro(usec)
	return collectionPeriodStartingAt(t), nil
}

func (c collectionPeriod) Start() time.Time {
	return time.Time(c)
}

func (c collectionPeriod) End() time.Time {
	return c.Start().Add(collectionPeriodDuration)
}

// Next returns the next collection period after this one.
func (c collectionPeriod) Next() collectionPeriod {
	return collectionPeriod(c.End())
}

// UsagePeriod returns the usage period that this collection period is contained
// within. A usage period corresponds to the coarse-level time range of usage
// rows in the DB (1 hour), while a collection period corresponds to the more
// fine-grained time ranges of Redis keys (1 minute).
func (c collectionPeriod) UsagePeriod() usagePeriod {
	t := c.Start()
	return usagePeriod(time.Date(
		t.Year(), t.Month(), t.Day(),
		t.Hour(), 0, 0, 0,
		t.Location()))
}

// String returns a string uniquely identifying this collection period. It can
// later be reconstructed with parseCollectionPeriod.
func (c collectionPeriod) String() string {
	return c.Start().Format(redisTimeKeyFormat)
}

// usagePeriod is an interval of time starting at the beginning of each UTC hour
// and ending at the start of the following hour.
type usagePeriod time.Time

func (u usagePeriod) Start() time.Time {
	return time.Time(u)
}

type Collection struct {
	// TODO: maybe make GroupID a field of tables.UsageLabels.
	GroupID string `json:"group_id,omitempty"`
	tables.UsageLabels
}

func collectionsRedisKey(c collectionPeriod) string {
	return fmt.Sprintf("%s%s", redisCollectionsKeyPrefix, c)
}

func collectionJSONRedisKey(collectionJSONHash string) string {
	return fmt.Sprintf("%s%s", redisCollectionJSONKeyPrefix, collectionJSONHash)
}

func countsRedisKey(collectionJSONHash string, c collectionPeriod) string {
	return fmt.Sprintf("%s%s/%s", redisCountsKeyPrefix, collectionJSONHash, c)
}

func countsToMap(tu *tables.UsageCounts) (map[string]int64, error) {
	counts := map[string]int64{}
	if tu.ActionCacheHits > 0 {
		counts["action_cache_hits"] = tu.ActionCacheHits
	}
	if tu.CASCacheHits > 0 {
		counts["cas_cache_hits"] = tu.CASCacheHits
	}
	if tu.Invocations > 0 {
		counts["invocations"] = tu.Invocations
	}
	if tu.TotalDownloadSizeBytes > 0 {
		counts["total_download_size_bytes"] = tu.TotalDownloadSizeBytes
	}
	if tu.LinuxExecutionDurationUsec > 0 {
		counts["linux_execution_duration_usec"] = tu.LinuxExecutionDurationUsec
	}
	if tu.MacExecutionDurationUsec > 0 {
		counts["mac_execution_duration_usec"] = tu.MacExecutionDurationUsec
	}
	if tu.TotalUploadSizeBytes > 0 {
		counts["total_upload_size_bytes"] = tu.TotalUploadSizeBytes
	}
	if tu.TotalCachedActionExecUsec > 0 {
		counts["total_cached_action_exec_usec"] = tu.TotalCachedActionExecUsec
	}
	return counts, nil
}

func labelsFromJSON(j string) (*tables.UsageLabels, error) {
	labels := &tables.UsageLabels{}
	if err := json.Unmarshal([]byte(j), labels); err != nil {
		return nil, err
	}
	return labels, nil
}

// stringMapToCounts converts a Redis hashmap containing usage counts to
// tables.UsageCounts.
func stringMapToCounts(h map[string]string) (*tables.UsageCounts, error) {
	hInt64 := make(map[string]int64, len(h))
	for k, v := range h {
		count, err := strconv.ParseInt(v, 10, 64)
		if err != nil {
			return nil, status.InvalidArgumentErrorf("Invalid usage count in Redis hash: %q => %q", k, v)
		}
		hInt64[k] = count
	}
	return &tables.UsageCounts{
		Invocations:                hInt64["invocations"],
		CASCacheHits:               hInt64["cas_cache_hits"],
		ActionCacheHits:            hInt64["action_cache_hits"],
		TotalDownloadSizeBytes:     hInt64["total_download_size_bytes"],
		LinuxExecutionDurationUsec: hInt64["linux_execution_duration_usec"],
		MacExecutionDurationUsec:   hInt64["mac_execution_duration_usec"],
		TotalUploadSizeBytes:       hInt64["total_upload_size_bytes"],
		TotalCachedActionExecUsec:  hInt64["total_cached_action_exec_usec"],
	}, nil
}
