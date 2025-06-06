package registry_test

import (
	"context"
	"fmt"
	"testing"

	"github.com/buildbuddy-io/buildbuddy/enterprise/server/raft/registry"
	"github.com/buildbuddy-io/buildbuddy/server/gossip"
	"github.com/buildbuddy-io/buildbuddy/server/testutil/testport"
	"github.com/buildbuddy-io/buildbuddy/server/util/log"
	"github.com/buildbuddy-io/buildbuddy/server/util/status"
	"github.com/stretchr/testify/require"
)

func init() {
	*log.LogLevel = "debug"
	*log.IncludeShortFileName = true
	log.Configure()
}

func localAddr(t *testing.T) string {
	return fmt.Sprintf("127.0.0.1:%d", testport.FindFree(t))
}

func newGossipManager(t testing.TB, nodeAddr string, seeds []string) *gossip.GossipManager {
	node, err := gossip.New("name-"+nodeAddr, nodeAddr, seeds)
	require.NoError(t, err)
	t.Cleanup(func() {
		node.Shutdown()
	})
	return node
}

func requireResolves(t testing.TB, dnr registry.NodeRegistry, rangeID, replicaID uint64, nhid, raftAddr, grpcAddr string) {
	addr, key, err := dnr.Resolve(rangeID, replicaID)
	require.NoError(t, err)
	require.Equal(t, raftAddr, addr, dnr.String())
	require.NotNil(t, key)

	ctx := context.Background()
	addr, err = dnr.ResolveGRPC(ctx, nhid)
	require.NoError(t, err)
	require.Equal(t, grpcAddr, addr, dnr.String())
}

func TestStaticRegistryAdd(t *testing.T) {
	nr := registry.NewStaticNodeRegistry(1, nil, log.Logger{})
	nr.Add(1, 1, "nhid-1")
	nr.AddNode("nhid-1", "raftaddress:1", "grpcaddress:1")
	requireResolves(t, nr, 1, 1, "nhid-1", "raftaddress:1", "grpcaddress:1")
}

func TestStaticRegistryRemove(t *testing.T) {
	nr := registry.NewStaticNodeRegistry(1, nil, log.Logger{})
	nr.Add(1, 1, "nhid-1")
	nr.Add(2, 1, "nhid-1")
	nr.Add(1, 2, "nhid-2")
	nr.AddNode("nhid-1", "raftaddress:1", "grpcaddress:1")
	nr.AddNode("nhid-2", "raftaddress:2", "grpcaddress:2")
	requireResolves(t, nr, 1, 1, "nhid-1", "raftaddress:1", "grpcaddress:1")
	requireResolves(t, nr, 2, 1, "nhid-1", "raftaddress:1", "grpcaddress:1")
	requireResolves(t, nr, 1, 2, "nhid-2", "raftaddress:2", "grpcaddress:2")

	nr.Remove(1, 1)
	requireResolves(t, nr, 2, 1, "nhid-1", "raftaddress:1", "grpcaddress:1")
	requireResolves(t, nr, 1, 2, "nhid-2", "raftaddress:2", "grpcaddress:2")
	_, _, err := nr.Resolve(1, 1)
	require.True(t, status.IsNotFoundError(err))
}

func TestStaticRegistryRemoveShard(t *testing.T) {
	nr := registry.NewStaticNodeRegistry(1, nil, log.Logger{})
	nr.Add(1, 1, "nhid-1")
	nr.Add(2, 1, "nhid-1")
	nr.Add(1, 2, "nhid-2")
	nr.AddNode("nhid-1", "raftaddress:1", "grpcaddress:1")
	nr.AddNode("nhid-2", "raftaddress:2", "grpcaddress:2")
	requireResolves(t, nr, 1, 1, "nhid-1", "raftaddress:1", "grpcaddress:1")
	requireResolves(t, nr, 2, 1, "nhid-1", "raftaddress:1", "grpcaddress:1")
	requireResolves(t, nr, 1, 2, "nhid-2", "raftaddress:2", "grpcaddress:2")

	nr.RemoveShard(1)
	requireResolves(t, nr, 2, 1, "nhid-1", "raftaddress:1", "grpcaddress:1")
	_, _, err := nr.Resolve(1, 1)
	require.True(t, status.IsNotFoundError(err))
	_, _, err = nr.Resolve(1, 2)
	require.True(t, status.IsNotFoundError(err))
}

func TestDynamicRegistryAdd(t *testing.T) {
	nodeAddr := localAddr(t)
	gm := newGossipManager(t, nodeAddr, nil)
	dnr := registry.NewDynamicNodeRegistry(gm, 1, nil, log.Logger{})
	dnr.Add(1, 1, "nhid-1")
	dnr.AddNode("nhid-1", "raftaddress:1", "grpcaddress:1")
	requireResolves(t, dnr, 1, 1, "nhid-1", "raftaddress:1", "grpcaddress:1")

	// When the target changes addresses, the registry should resolve the target
	// to the new address.
	dnr.AddNode("nhid-1", "raftaddress:2", "grpcaddress:2")
	requireResolves(t, dnr, 1, 1, "nhid-1", "raftaddress:2", "grpcaddress:2")
}

func TestDynamicRegistryRemove(t *testing.T) {
	nodeAddr := localAddr(t)
	gm := newGossipManager(t, nodeAddr, nil)
	dnr := registry.NewDynamicNodeRegistry(gm, 1, nil, log.Logger{})
	dnr.Add(1, 1, "nhid-1")
	dnr.Add(2, 1, "nhid-1")
	dnr.Add(1, 2, "nhid-2")
	dnr.AddNode("nhid-1", "raftaddress:1", "grpcaddress:1")
	dnr.AddNode("nhid-2", "raftaddress:2", "grpcaddress:2")
	requireResolves(t, dnr, 1, 1, "nhid-1", "raftaddress:1", "grpcaddress:1")
	requireResolves(t, dnr, 2, 1, "nhid-1", "raftaddress:1", "grpcaddress:1")
	requireResolves(t, dnr, 1, 2, "nhid-2", "raftaddress:2", "grpcaddress:2")

	dnr.Remove(1, 1)
	requireResolves(t, dnr, 2, 1, "nhid-1", "raftaddress:1", "grpcaddress:1")
	requireResolves(t, dnr, 1, 2, "nhid-2", "raftaddress:2", "grpcaddress:2")
	_, _, err := dnr.Resolve(1, 1)
	require.True(t, status.IsNotFoundError(err))
}

func TestDynamicRegistryRemoveShard(t *testing.T) {
	nodeAddr := localAddr(t)
	gm := newGossipManager(t, nodeAddr, nil)
	dnr := registry.NewDynamicNodeRegistry(gm, 1, nil, log.Logger{})
	dnr.Add(1, 1, "nhid-1")
	dnr.Add(2, 1, "nhid-1")
	dnr.Add(1, 2, "nhid-2")
	dnr.AddNode("nhid-1", "raftaddress:1", "grpcaddress:1")
	dnr.AddNode("nhid-2", "raftaddress:2", "grpcaddress:2")
	requireResolves(t, dnr, 1, 1, "nhid-1", "raftaddress:1", "grpcaddress:1")
	requireResolves(t, dnr, 2, 1, "nhid-1", "raftaddress:1", "grpcaddress:1")
	requireResolves(t, dnr, 1, 2, "nhid-2", "raftaddress:2", "grpcaddress:2")

	dnr.RemoveShard(1)
	requireResolves(t, dnr, 2, 1, "nhid-1", "raftaddress:1", "grpcaddress:1")
	_, _, err := dnr.Resolve(1, 1)
	require.True(t, status.IsNotFoundError(err))
	_, _, err = dnr.Resolve(1, 2)
	require.True(t, status.IsNotFoundError(err))
}

func TestDynamicRegistryResolution(t *testing.T) {
	node1Addr := localAddr(t)
	node2Addr := localAddr(t)
	node3Addr := localAddr(t)
	seeds := []string{node1Addr, node2Addr}

	gm1 := newGossipManager(t, node1Addr, seeds)
	gm2 := newGossipManager(t, node2Addr, seeds)
	gm3 := newGossipManager(t, node3Addr, seeds)

	dnr1 := registry.NewDynamicNodeRegistry(gm1, 1, nil, log.Logger{})
	dnr2 := registry.NewDynamicNodeRegistry(gm2, 1, nil, log.Logger{})
	dnr3 := registry.NewDynamicNodeRegistry(gm3, 1, nil, log.Logger{})

	dnr1.Add(1, 1, "nhid-1")
	dnr1.AddNode("nhid-1", "raftaddress:1", "grpcaddress:1")
	requireResolves(t, dnr1, 1, 1, "nhid-1", "raftaddress:1", "grpcaddress:1")
	requireResolves(t, dnr2, 1, 1, "nhid-1", "raftaddress:1", "grpcaddress:1")
	requireResolves(t, dnr3, 1, 1, "nhid-1", "raftaddress:1", "grpcaddress:1")

	dnr2.Add(1, 2, "nhid-2")
	dnr2.AddNode("nhid-2", "raftaddress:2", "grpcaddress:2")
	requireResolves(t, dnr1, 1, 2, "nhid-2", "raftaddress:2", "grpcaddress:2")
	requireResolves(t, dnr2, 1, 2, "nhid-2", "raftaddress:2", "grpcaddress:2")
	requireResolves(t, dnr3, 1, 2, "nhid-2", "raftaddress:2", "grpcaddress:2")

	dnr3.Add(1, 3, "nhid-3")
	dnr3.AddNode("nhid-3", "raftaddress:3", "grpcaddress:3")
	requireResolves(t, dnr1, 1, 3, "nhid-3", "raftaddress:3", "grpcaddress:3")
	requireResolves(t, dnr2, 1, 3, "nhid-3", "raftaddress:3", "grpcaddress:3")
	requireResolves(t, dnr3, 1, 3, "nhid-3", "raftaddress:3", "grpcaddress:3")
}
