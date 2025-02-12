package bucketer

import (
	"sync"
	"time"
)

// Bucketer buckets values into discrete time ranges, rotating through the
// buckets automatically. Values can be read from and written to the bucketer.
type Bucketer[T any] struct {
	buckets []T // TODO(iain): make bucket size configurable
	idx     uint64

	// The number of buckets that have ever been populated. After the first
	// full bucketer period elapses, this will always equal len(buckets).
	nValidbuckets uint64

	bucketSize time.Duration
	resetFunc  func(value T) T

	startOnce sync.Once
	ticker    <-chan time.Time
	stop      chan struct{}
	mu        sync.RWMutex
}

func NewBucketer[T any](bucketSize time.Duration, numBuckets int64, resetFunc func(val T) T, ticker <-chan time.Time) *Bucketer[T] {
	buckets := make([]T, numBuckets)
	for i := 0; i < int(numBuckets); i++ {
		buckets[i] = resetFunc(buckets[i])
	}
	return &Bucketer[T]{
		buckets:       buckets,
		nValidbuckets: 1,
		bucketSize:    bucketSize,
		ticker:        ticker,
		resetFunc:     resetFunc,
	}
}

func (w *Bucketer[T]) Buckets() []T {
	w.mu.RLock()
	defer w.mu.RUnlock()
	validbuckets := w.nValidbuckets
	result := make([]T, validbuckets)
	for i := 0; i < int(validbuckets); i++ {
		result[i] = w.buckets[i]
	}
	return result
}

func (w *Bucketer[T]) BucketSize() time.Duration {
	return w.bucketSize
}

func (w *Bucketer[T]) start() {
	if w.ticker == nil {
		ticker := time.NewTicker(time.Duration(float64(w.bucketSize) / float64(len(w.buckets))))
		w.ticker = ticker.C
		defer ticker.Stop()
	}

	for {
		select {
		case <-w.stop:
			return
		case <-w.ticker:
		}

		// Advance to the next bin, reset its current count, and mark it valid
		// if we haven't done so already.
		w.mu.Lock()
		w.idx = (w.idx + 1) % uint64(len(w.buckets))
		w.buckets[w.idx] = w.resetFunc(w.buckets[w.idx])
		w.nValidbuckets = min(w.nValidbuckets+1, uint64(len(w.buckets)))
		w.mu.Unlock()
	}
}

func (w *Bucketer[T]) Stop() {
	close(w.stop)
}

func (w *Bucketer[T]) Get() T {
	w.startOnce.Do(func() {
		go w.start()
	})
	w.mu.RLock()
	defer w.mu.RUnlock()
	return w.buckets[int(w.idx)]
}
