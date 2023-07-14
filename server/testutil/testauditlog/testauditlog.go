package testauditlog

import (
	"context"

	alpb "github.com/buildbuddy-io/buildbuddy/proto/auditlog"
	"github.com/buildbuddy-io/buildbuddy/server/util/status"
	"google.golang.org/protobuf/proto"
)

type FakeEntry struct {
	Resource *alpb.ResourceID
	Action   alpb.Action
	Request  proto.Message
}

type FakeAuditLog struct {
	entries []*FakeEntry
}

func (f *FakeAuditLog) Log(ctx context.Context, resource *alpb.ResourceID, action alpb.Action, req proto.Message) {
	f.entries = append(f.entries, &FakeEntry{
		Resource: resource,
		Action:   action,
		Request:  req,
	})
}

func (f *FakeAuditLog) GetLogs(ctx context.Context, req *alpb.GetAuditLogsRequest) (*alpb.GetAuditLogsResponse, error) {
	return nil, status.UnimplementedError("not implemented")
}

func (f *FakeAuditLog) GetAllEntries() []*FakeEntry {
	return f.entries
}

func (f *FakeAuditLog) Reset() {
	f.entries = nil
}
