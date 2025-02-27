package pebble_test

import (
	"testing"
	"time"

	"github.com/buildbuddy-io/buildbuddy/enterprise/server/util/pebble"
	"github.com/buildbuddy-io/buildbuddy/server/testutil/testfs"
	"github.com/stretchr/testify/require"
	"golang.org/x/sync/errgroup"

	pebblev1 "github.com/cockroachdb/pebble"
)

func TestCloseLeasedDB(t *testing.T) {
	rootDir := testfs.MakeTempDir(t)
	db, err := pebble.Open(rootDir, "test", &pebble.Options{})
	require.NoError(t, err)

	leaser := pebble.NewDBLeaser(db)
	require.NotNil(t, leaser)

	var leaserCloseTime time.Time
	var dbReturnTime time.Time

	leasedDB, err := leaser.DB()
	require.NoError(t, err)
	require.NotNil(t, leasedDB)

	eg := errgroup.Group{}
	eg.Go(func() error {
		leaser.Close()
		leaserCloseTime = time.Now()
		return nil
	})
	time.Sleep(10 * time.Millisecond)
	eg.Go(func() error {
		leasedDB.Close()
		dbReturnTime = time.Now()
		return nil
	})

	require.NoError(t, eg.Wait())

	// DB is now closed; check that leasing fails.
	_, err = leaser.DB()
	require.Error(t, err)

	// Check that the db lease was returned before the leaser closed
	// (even though we did these in opposite order). This is to check
	// that the serialization is working properly.
	require.Less(t, dbReturnTime, leaserCloseTime)
}

func TestRachetDB(t *testing.T) {
	rootDir := testfs.MakeTempDir(t)

	// Open a new DB and write a value
	dbV1, err := pebblev1.Open(rootDir, &pebblev1.Options{})
	require.NoError(t, err)
	require.Equal(t, pebblev1.FormatMostCompatible, dbV1.FormatMajorVersion(), "expected new dbV1 to be at most compatible format")
	err = dbV1.Set([]byte("key"), []byte("value"), &pebblev1.WriteOptions{Sync: true})
	require.NoError(t, err)
	err = dbV1.Close()
	require.NoError(t, err)

	// Re-open DB with racheting
	db, err := pebble.Open(rootDir, "testing", &pebblev1.Options{FormatMajorVersion: pebblev1.FormatNewest})
	require.NoError(t, err)
	require.Equal(t, pebblev1.FormatNewest, db.FormatMajorVersion(), "expected rachetted DB to be at newest format")
	val, closer, err := db.Get([]byte("key"))
	require.NoError(t, err)
	require.Equal(t, "value", string(val), "expected value to be preserved after rachet")
	err = closer.Close()
	require.NoError(t, err)
	err = db.Close()
	require.NoError(t, err)
}
