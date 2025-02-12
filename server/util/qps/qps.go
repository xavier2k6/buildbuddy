package qps

import (
	"sync/atomic"
	"time"

	"github.com/buildbuddy-io/buildbuddy/server/util/bucketer"
)

const numBuckets = 60

type Counter struct {
	bucketer *bucketer.Bucketer[*atomic.Uint64]
}

// NewCounter returns a QPS counter using the given duration as the averaging
// window. The caller must call Stop() on the returned counter when it is no
// longer needed.
func NewCounter(window time.Duration) *Counter {
	return new(window, nil)
}

func NewCounterForTesting(window time.Duration, ticker <-chan time.Time) *Counter {
	return new(window, ticker)
}

func new(window time.Duration, ticker <-chan time.Time) *Counter {
	reset := func(value *atomic.Uint64) *atomic.Uint64 {
		if value == nil {
			return &atomic.Uint64{}
		}
		value.Store(0)
		return value
	}
	return &Counter{
		bucketer: bucketer.NewBucketer[*atomic.Uint64](window, numBuckets, reset, ticker),
	}
}

func (c *Counter) Get() float64 {
	sum := uint64(0)
	buckets := c.bucketer.Buckets()
	for _, bucket := range c.bucketer.Buckets() {
		sum += bucket.Load()
	}
	binDurationSec := float64(c.bucketer.BucketSize()) * 1e-9 / float64(numBuckets)
	summedDurationSec := binDurationSec * float64(len(buckets))
	qps := float64(sum) / float64(summedDurationSec)
	return qps
}

func (c *Counter) Stop() {
	c.bucketer.Stop()
}

func (c *Counter) Inc() {
	c.bucketer.Get().Add(1)
}
