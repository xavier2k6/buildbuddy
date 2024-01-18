package featureflag

import (
	"context"
	"database/sql"
	ffpb "github.com/buildbuddy-io/buildbuddy/proto/featureflag"
	"github.com/buildbuddy-io/buildbuddy/server/environment"
	"github.com/buildbuddy-io/buildbuddy/server/interfaces"
	"github.com/buildbuddy-io/buildbuddy/server/tables"
	"github.com/buildbuddy-io/buildbuddy/server/util/db"
	"github.com/buildbuddy-io/buildbuddy/server/util/status"
	"strings"
)

type FeatureFlagService struct {
	env environment.Env
}

func NewFeatureFlagService(env environment.Env) *FeatureFlagService {
	ff := &FeatureFlagService{
		env: env,
	}
	return ff
}

type FeatureFlag struct {
	Name        string
	Enabled     bool
	Description string
	// If Enabled=true and this is set, the list of group IDs the feature flag applies to
	// If Enabled=true and this is not set, the feature flag is enabled for all groups
	// If Enabled=false and this is set, the feature flag will still be disabled for all groups.
	AssignedGroupIDs []string
}

// featureFlagAssignment is a temporary struct used when joining featureflag related tables
type featureFlagAssignment struct {
	name        string
	enabled     bool
	description string
	groupID     *string
}

func (ffs *FeatureFlagService) GetAll(ctx context.Context) ([]*ffpb.FeatureFlag, error) {
	rq := ffs.env.GetDBHandle().NewQuery(ctx, "feature_flag_service_get_all").Raw(
		`SELECT ff.name, enabled, description, group_id FROM "FeatureFlags" ff LEFT JOIN "ExperimentAssignments" ea on ff.name = ea.name;`,
	)
	assignments := make([]*featureFlagAssignment, 0)
	err := rq.IterateRaw(func(ctx context.Context, row *sql.Rows) error {
		a := &featureFlagAssignment{}
		if err := row.Scan(
			&a.name,
			&a.enabled,
			&a.description,
			&a.groupID,
		); err != nil {
			return status.WrapError(err, "parse feature flag join")
		}
		assignments = append(assignments, a)
		return nil
	})
	if err != nil {
		if db.IsRecordNotFound(err) {
			return nil, status.NotFoundError("no feature flags found")
		}
		return nil, status.InternalError(err.Error())
	}
	if len(assignments) == 0 {
		return nil, status.NotFoundError("no feature flags found")
	}

	ffMap := make(map[string]*ffpb.FeatureFlag, 0)
	for _, assignment := range assignments {
		var ff *ffpb.FeatureFlag
		var exists bool
		if ff, exists = ffMap[assignment.name]; !exists {
			ff = &ffpb.FeatureFlag{
				Name:               assignment.name,
				Enabled:            assignment.enabled,
				Description:        assignment.description,
				ExperimentGroupIds: []string{},
			}
			ffMap[assignment.name] = ff
		}
		if assignment.groupID != nil && *assignment.groupID != "" {
			ff.ExperimentGroupIds = append(ff.ExperimentGroupIds, *assignment.groupID)
		}
	}

	ffSlice := make([]*ffpb.FeatureFlag, 0, len(ffMap))
	for _, ff := range ffMap {
		ffSlice = append(ffSlice, ff)
	}

	return ffSlice, nil
}

func (ffs *FeatureFlagService) CreateFeatureFlag(ctx context.Context, req *ffpb.CreateFeatureFlagRequest) (*ffpb.CreateFeatureFlagResponse, error) {
	if err := ffs.checkPreconditions(ctx); err != nil {
		return nil, err
	}

	if req.GetName() == "" {
		return nil, status.InvalidArgumentError("A name is required to create a new workflow.")
	}

	err := ffs.env.GetDBHandle().Transaction(ctx, func(tx interfaces.DB) error {
		ff := &tables.FeatureFlag{
			Name:        req.GetName(),
			Description: req.GetDescription(),
			Enabled:     false,
		}
		return tx.NewQuery(ctx, "featureflag_service_insert_featureflag").Create(ff)
	})
	if err != nil {
		return nil, err
	}
	return &ffpb.CreateFeatureFlagResponse{}, nil
}

func (ffs *FeatureFlagService) UpdateFeatureFlag(ctx context.Context, req *ffpb.UpdateFeatureFlagRequest) (*ffpb.UpdateFeatureFlagResponse, error) {
	err := ffs.env.GetDBHandle().Transaction(ctx, func(tx interfaces.DB) error {
		if err := tx.NewQuery(ctx, "featureflag_service_update_featureflag").Raw(`
				UPDATE "FeatureFlags"
				SET enabled = ?, description = ?
				WHERE name = ?`,
			req.Enabled, req.Description, req.Name,
		).Exec().Error; err != nil {
			return status.WrapError(err, "update featureflag")
		}
		if err := tx.NewQuery(ctx, "featureflag_service_delete_group_featureflag").Raw(`
				DELETE FROM "ExperimentAssignments"
				WHERE name = ? AND group_id NOT IN ?`,
			req.Name, req.GetConfiguredGroupIds(),
		).Exec().Error; err != nil {
			return status.WrapError(err, "delete experiment assignments")
		}

		if len(req.GetConfiguredGroupIds()) > 0 {
			valueStrArr := make([]string, len(req.GetConfiguredGroupIds()))
			valueArr := make([]interface{}, len(req.GetConfiguredGroupIds())*2)
			for i, groupID := range req.GetConfiguredGroupIds() {
				valueStrArr[i] = "(?, ?)"
				valueArr[i*2] = req.Name
				valueArr[i*2+1] = groupID
			}
			valueStr := strings.Join(valueStrArr, ", ")

			if err := tx.NewQuery(ctx, "featureflag_service_insert_group_featureflag").Raw(`
				INSERT OR IGNORE INTO "ExperimentAssignments"
				(name, group_id) VALUES `+valueStr,
				valueArr...,
			).Exec().Error; err != nil {
				return status.WrapError(err, "update experiment assignments")
			}
		}

		return nil
	})

	if err != nil {
		return nil, err
	}
	return &ffpb.UpdateFeatureFlagResponse{}, nil
}

func (ffs *FeatureFlagService) GetGroups(ctx context.Context) ([]*ffpb.Group, error) {
	rq := ffs.env.GetDBHandle().NewQuery(ctx, "feature_flag_service_get_groups").Raw(
		`SELECT group_id, name FROM "Groups"`,
	)
	groups := make([]*ffpb.Group, 0)
	err := rq.IterateRaw(func(ctx context.Context, row *sql.Rows) error {
		g := &ffpb.Group{}
		if err := row.Scan(
			&g.GroupId,
			&g.Name,
		); err != nil {
			return status.WrapError(err, "parse group")
		}
		groups = append(groups, g)
		return nil
	})
	if err != nil {
		return nil, status.InternalError(err.Error())
	}
	return groups, nil
}

// Check that user is in BB org
// Won't have to do this if we put the page on something like flagz
func (ffs *FeatureFlagService) checkPreconditions(ctx context.Context) error {
	//if ws.env.GetDBHandle() == nil {
	//	return status.FailedPreconditionError("database not configured")
	//}
	//if ws.env.GetAuthenticator() == nil {
	//	return status.FailedPreconditionError("anonymous workflow access is not supported")
	//}
	//if _, err := ws.env.GetAuthenticator().AuthenticatedUser(ctx); err != nil {
	//	return err
	//}

	return nil
}
