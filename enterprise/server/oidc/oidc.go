package oidc

import (
	"context"
	"fmt"
	"net/http"
	"net/url"
	"strings"
	"sync"
	"time"

	"github.com/buildbuddy-io/buildbuddy/enterprise/server/selfauth"
	"github.com/buildbuddy-io/buildbuddy/server/endpoint_urls/build_buddy_url"
	"github.com/buildbuddy-io/buildbuddy/server/environment"
	"github.com/buildbuddy-io/buildbuddy/server/interfaces"
	"github.com/buildbuddy-io/buildbuddy/server/tables"
	"github.com/buildbuddy-io/buildbuddy/server/util/alert"
	"github.com/buildbuddy-io/buildbuddy/server/util/authutil"
	"github.com/buildbuddy-io/buildbuddy/server/util/claims"
	"github.com/buildbuddy-io/buildbuddy/server/util/cookie"
	"github.com/buildbuddy-io/buildbuddy/server/util/flag"
	"github.com/buildbuddy-io/buildbuddy/server/util/log"
	"github.com/buildbuddy-io/buildbuddy/server/util/random"
	"github.com/buildbuddy-io/buildbuddy/server/util/status"
	"github.com/buildbuddy-io/buildbuddy/server/util/subdomain"
	"github.com/buildbuddy-io/buildbuddy/server/util/urlutil"
	"github.com/google/uuid"
	"golang.org/x/oauth2"
	"google.golang.org/grpc/credentials"
	"google.golang.org/grpc/metadata"
	"google.golang.org/grpc/peer"

	oidc "github.com/coreos/go-oidc/v3/oidc"
)

var (
	enableAnonymousUsage = flag.Bool("auth.enable_anonymous_usage", false, "If true, unauthenticated build uploads will still be allowed but won't be associated with your organization.")
	oauthProviders       = flag.Slice("auth.oauth_providers", []OauthProvider{}, "The list of oauth providers to use to authenticate.")
	disableRefreshToken  = flag.Bool("auth.disable_refresh_token", false, "If true, the offline_access scope which requests refresh tokens will not be requested.")
	forceApproval        = flag.Bool("auth.force_approval", false, "If true, when a user doesn't have a session (first time logging in, or manually logged out) force the auth provider to show the consent screen allowing the user to select an account if they have multiple. This isn't supported by all auth providers.")
	additionalScopes     = flag.Slice("auth.oauth_scopes", []string{}, "The list of any additional OAuth scopes needed by the application.")
)

type OauthProvider struct {
	IssuerURL    string `yaml:"issuer_url" json:"issuer_url" usage:"The issuer URL of this OIDC Provider."`
	ClientID     string `yaml:"client_id" json:"client_id" usage:"The oauth client ID."`
	ClientSecret string `yaml:"client_secret" json:"client_secret" usage:"The oauth client secret." config:"secret"`
	Slug         string `yaml:"slug" json:"slug" usage:"The slug of this OIDC Provider." config:"secret"`
}

const (
	// The key that the user object is stored under in the
	// context.
	contextUserKey = "auth.user"

	// The key that the basicAuth object is stored under in the
	// context.
	contextBasicAuthKey = "basicauth.user"

	// The key any error is stored under if the user could not be
	// authenticated.
	contextBasicAuthErrorKey = "basicauth.error"
	authorityHeader          = ":authority"
	basicAuthHeader          = "authorization"

	// The key is stored in HTTP Authroization header as follows:
	// Authorization: x-buildbuddy-api-key <api-key>
	authorizationHeader = "Authorization"
	authScheme          = "x-buildbuddy-api-key"

	// The key that the current access token expiration time is stored under in the context.
	contextTokenExpiryKey = "auth.tokenExpiry"

	contextAPIKeyKey = "api.key"
	SSLCertHeader    = "x-ssl-cert"

	// The name of params read on /login to understand which
	// issuer to use and where to redirect the client after
	// login.
	authRedirectParam = "redirect_url"
	authIssuerParam   = "issuer_url"
	slugParam         = "slug"

	stateCookie = "State-Token"

	tempCookieDuration = 24 * time.Hour

	// Maximum number of entries in API Key -> Group cache.
	apiKeyGroupCacheSize = 10_000
)

type userToken struct {
	Email      string `json:"email"`
	Sub        string `json:"sub"`
	Name       string `json:"name"`
	GivenName  string `json:"given_name"`
	FamilyName string `json:"family_name"`
	Picture    string `json:"picture"`
	issuer     string
	slug       string
}

func (t *userToken) getIssuer() string {
	return t.issuer
}

func (t *userToken) GetSubscriber() string {
	return t.Sub
}

func (t *userToken) GetSubID() string {
	return t.issuer + "/" + t.Sub
}

type authenticator interface {
	getSlug() string
	getIssuer() string
	authCodeURL(state string, opts ...oauth2.AuthCodeOption) (string, error)
	exchange(ctx context.Context, code string, opts ...oauth2.AuthCodeOption) (*oauth2.Token, error)
	verifyTokenAndExtractUser(ctx context.Context, jwt string, checkExpiry bool) (*userToken, error)
	checkAccessToken(ctx context.Context, jwt, accessToken string) error
	renewToken(ctx context.Context, refreshToken string) (*oauth2.Token, error)
}

type oidcAuthenticator struct {
	oauth2Config       func() (*oauth2.Config, error)
	cachedOauth2Config *oauth2.Config
	oidcConfig         *oidc.Config
	cachedProvider     *oidc.Provider
	provider           func() (*oidc.Provider, error)
	issuer             string
	slug               string
}

func extractToken(issuer, slug string, idToken *oidc.IDToken) (*userToken, error) {
	ut := &userToken{
		issuer: issuer,
		slug:   slug,
	}
	if err := idToken.Claims(ut); err != nil {
		return nil, err
	}
	return ut, nil
}

func (a *oidcAuthenticator) getIssuer() string {
	return a.issuer
}

func (a *oidcAuthenticator) getSlug() string {
	return a.slug
}

func (a *oidcAuthenticator) authCodeURL(state string, opts ...oauth2.AuthCodeOption) (string, error) {
	oauth2Config, err := a.oauth2Config()
	if err != nil {
		return "", err
	}
	return oauth2Config.AuthCodeURL(state, opts...), nil
}

func (a *oidcAuthenticator) exchange(ctx context.Context, code string, opts ...oauth2.AuthCodeOption) (*oauth2.Token, error) {
	oauth2Config, err := a.oauth2Config()
	if err != nil {
		return nil, err
	}
	return oauth2Config.Exchange(ctx, code, opts...)
}

func (a *oidcAuthenticator) verifyTokenAndExtractUser(ctx context.Context, jwt string, checkExpiry bool) (*userToken, error) {
	conf := *a.oidcConfig // copy
	conf.SkipExpiryCheck = !checkExpiry
	provider, err := a.provider()
	if err != nil {
		return nil, err
	}
	validToken, err := provider.Verifier(&conf).Verify(ctx, jwt)
	if err != nil {
		return nil, err
	}
	return extractToken(a.issuer, a.slug, validToken)
}

func (a *oidcAuthenticator) checkAccessToken(ctx context.Context, jwt, accessToken string) error {
	provider, err := a.provider()
	if err != nil {
		return err
	}
	conf := *a.oidcConfig // copy
	// We're only checking the access token here, not checking for jwt expiry.
	conf.SkipExpiryCheck = true
	validToken, err := provider.Verifier(&conf).Verify(ctx, jwt)
	if err != nil {
		return err
	}
	// at_hash is optional:
	// https://github.com/coreos/go-oidc/blob/d42db69c79f2fa664fd4156e939bf27bba0d2f68/oidc/oidc.go#L373
	if validToken.AccessTokenHash == "" {
		return nil
	}
	return validToken.VerifyAccessToken(accessToken)
}

func (a *oidcAuthenticator) renewToken(ctx context.Context, refreshToken string) (*oauth2.Token, error) {
	oauth2Config, err := a.oauth2Config()
	if err != nil {
		return nil, err
	}
	src := oauth2Config.TokenSource(ctx, &oauth2.Token{RefreshToken: refreshToken})
	t, err := src.Token() // this actually renews the token
	if err != nil {
		return nil, status.PermissionDeniedErrorf("%s: %s", authutil.ExpiredSessionMsg, err.Error())
	}
	return t, nil
}

type apiKeyGroupCacheEntry struct {
	data         interfaces.APIKeyGroup
	expiresAfter time.Time
}

type OpenIDAuthenticator struct {
	env                  environment.Env
	myURL                *url.URL
	parseClaims          func(token string) (*claims.Claims, error)
	authenticators       []authenticator
	enableAnonymousUsage bool
	adminGroupID         string
}

func createAuthenticatorsFromConfig(ctx context.Context, env environment.Env, authConfigs []OauthProvider, authURL *url.URL) ([]authenticator, error) {
	var authenticators []authenticator
	for _, authConfig := range authConfigs {
		// declare local var that shadows loop var for closure capture
		authConfig := authConfig
		oidcConfig := &oidc.Config{
			ClientID:        authConfig.ClientID,
			SkipExpiryCheck: false,
		}
		authenticator := &oidcAuthenticator{
			slug:       authConfig.Slug,
			issuer:     authConfig.IssuerURL,
			oidcConfig: oidcConfig,
		}

		// initialize provider and oauth2Config.Endpoint on-demand, since our self oauth provider won't be reachable until the server starts
		var oauth2ConfigMutex sync.Mutex
		authenticator.oauth2Config = func() (*oauth2.Config, error) {
			oauth2ConfigMutex.Lock()
			defer oauth2ConfigMutex.Unlock()
			var err error
			if authenticator.cachedOauth2Config == nil {
				var provider *oidc.Provider
				if provider, err = authenticator.provider(); err == nil {
					// "openid" is a required scope for OpenID Connect flows.
					scopes := []string{oidc.ScopeOpenID, "profile", "email"}
					// Google reject the offline_access scope in favor of access_type=offline url param which already gets
					// set in our auth flow thanks to the oauth2.AccessTypeOffline authCodeOption at the top of this file.
					// https://github.com/coreos/go-oidc/blob/v2.2.1/oidc.go#L30
					if authConfig.IssuerURL != "https://accounts.google.com" && !*disableRefreshToken {
						scopes = append(scopes, oidc.ScopeOfflineAccess)
					}
					// Add in additional user-provided scopes.
					if len(*additionalScopes) > 0 {
						scopes = append(scopes, *additionalScopes...)
					}
					// Configure an OpenID Connect aware OAuth2 client.
					authenticator.cachedOauth2Config = &oauth2.Config{
						ClientID:     authConfig.ClientID,
						ClientSecret: authConfig.ClientSecret,
						RedirectURL:  authURL.String(),
						Endpoint:     provider.Endpoint(),
						Scopes:       scopes,
					}
				}
			}
			return authenticator.cachedOauth2Config, err
		}

		var providerMutex sync.Mutex
		authenticator.provider = func() (*oidc.Provider, error) {
			providerMutex.Lock()
			defer providerMutex.Unlock()
			var err error
			if authenticator.cachedProvider == nil {
				if authenticator.cachedProvider, err = oidc.NewProvider(ctx, authConfig.IssuerURL); err != nil {
					log.Errorf("Error Initializing auth: %v", err)
				}
			}
			return authenticator.cachedProvider, err
		}

		authenticators = append(authenticators, authenticator)
	}
	return authenticators, nil
}

func newOpenIDAuthenticator(ctx context.Context, env environment.Env, oauthProviders []OauthProvider, adminGroupID string) (*OpenIDAuthenticator, error) {
	authenticators, err := createAuthenticatorsFromConfig(
		ctx,
		env,
		oauthProviders,
		build_buddy_url.WithPath("/auth/"),
	)
	if err != nil {
		return nil, err
	}

	claimsFunc := claims.ParseClaims
	claimsCache, err := claims.NewClaimsCache()
	if err != nil {
		return nil, err
	}
	if claimsCache != nil {
		claimsFunc = claimsCache.Get
	}

	return &OpenIDAuthenticator{
		env:                  env,
		myURL:                build_buddy_url.WithPath(""),
		authenticators:       authenticators,
		parseClaims:          claimsFunc,
		enableAnonymousUsage: AnonymousUsageEnabled(),
		adminGroupID:         adminGroupID,
	}, nil
}

func AnonymousUsageEnabled() bool {
	return *enableAnonymousUsage || (len(*oauthProviders) == 0 && !selfauth.Enabled())
}

func newForTesting(ctx context.Context, env environment.Env, testAuthenticator authenticator) (*OpenIDAuthenticator, error) {
	oia, err := newOpenIDAuthenticator(ctx, env, nil /*oauthProviders=*/, "")
	if err != nil {
		return nil, err
	}
	oia.authenticators = append(oia.authenticators, testAuthenticator)
	return oia, nil
}

func NewOpenIDAuthenticator(ctx context.Context, env environment.Env, adminGroupID string) (*OpenIDAuthenticator, error) {
	authConfigs := make([]OauthProvider, len(*oauthProviders))
	copy(authConfigs, *oauthProviders)
	if selfauth.Enabled() {
		authConfigs = append(
			authConfigs,
			OauthProvider{
				IssuerURL:    selfauth.IssuerURL(),
				ClientID:     selfauth.ClientID,
				ClientSecret: selfauth.ClientSecret,
			},
		)
	}

	if len(authConfigs) == 0 {
		return nil, status.FailedPreconditionErrorf("No auth providers specified in config!")
	}

	a, err := newOpenIDAuthenticator(ctx, env, authConfigs, adminGroupID)
	if err != nil {
		alert.UnexpectedEvent("authentication_configuration_failed", "Failed to configure authentication: %s", err)
	}

	return a, err
}

func (a *OpenIDAuthenticator) AdminGroupID() string {
	return a.adminGroupID
}

func (a *OpenIDAuthenticator) AnonymousUsageEnabled(ctx context.Context) bool {
	if sd := subdomain.Get(ctx); sd != "" {
		return false
	}
	if len(*oauthProviders) == 0 && !selfauth.Enabled() {
		return true
	}
	return a.enableAnonymousUsage
}

func (a *OpenIDAuthenticator) PublicIssuers() []string {
	providers := make([]string, len(a.authenticators))
	i := 0
	for _, authenticator := range a.authenticators {
		if authenticator.getSlug() != "" {
			// Skip "private" issuers and shorten the new slice to account for it
			providers = providers[:len(providers)-1]
			continue
		}
		providers[i] = authenticator.getIssuer()
		i++
	}

	return providers
}

func (a *OpenIDAuthenticator) SSOEnabled() bool {
	for _, authenticator := range a.authenticators {
		if authenticator.getSlug() != "" {
			return true
		}
	}
	return false
}

func (a *OpenIDAuthenticator) validateRedirectURL(redirectURL string) error {
	if a.myURL.Host == "" {
		return status.FailedPreconditionError("You must specify a build_buddy_url in your config to enable authentication. For more information, see: https://www.buildbuddy.io/docs/config-app")
	}
	return build_buddy_url.ValidateRedirect(redirectURL)
}

func (a *OpenIDAuthenticator) getAuthConfig(issuer string) authenticator {
	for _, a := range a.authenticators {
		if urlutil.SameHostname(a.getIssuer(), issuer) {
			return a
		}
	}
	return nil
}

func (a *OpenIDAuthenticator) getAuthConfigForSlug(slug string) authenticator {
	for _, a := range a.authenticators {
		if strings.EqualFold(a.getSlug(), slug) {
			return a
		}
	}
	return nil
}

func (a *OpenIDAuthenticator) getAuthCodeOptions(r *http.Request) []oauth2.AuthCodeOption {
	options := []oauth2.AuthCodeOption{}
	if !*disableRefreshToken {
		options = append(options, oauth2.AccessTypeOffline)
	}
	sessionID := cookie.GetCookie(r, cookie.SessionIDCookie)
	// If a session doesn't already exist, force a consent screen (so the user can select between multiple accounts) if enabled.
	if (sessionID == "" && *forceApproval) || r.URL.Query().Get("show_picker") == "true" {
		options = append(options, oauth2.ApprovalForce)
	}
	return options
}

func (a *OpenIDAuthenticator) lookupAPIKeyGroupFromAPIKey(ctx context.Context, apiKey string) (interfaces.APIKeyGroup, error) {
	if apiKey == "" {
		return nil, status.UnauthenticatedError("missing API key")
	}
	authDB := a.env.GetAuthDB()
	if authDB == nil {
		return nil, status.FailedPreconditionError("AuthDB not configured")
	}
	return authDB.GetAPIKeyGroupFromAPIKey(ctx, apiKey)
}

func (a *OpenIDAuthenticator) lookupAPIKeyGroupFromAPIKeyID(ctx context.Context, apiKeyID string) (interfaces.APIKeyGroup, error) {
	if apiKeyID == "" {
		return nil, status.UnauthenticatedError("missing API key ID")
	}
	authDB := a.env.GetAuthDB()
	if authDB == nil {
		return nil, status.FailedPreconditionError("AuthDB not configured")
	}
	return authDB.GetAPIKeyGroupFromAPIKeyID(ctx, apiKeyID)
}

func (a *OpenIDAuthenticator) AuthContextFromAPIKey(ctx context.Context, apiKey string) context.Context {
	if _, ok := ctx.Value(authutil.APIKeyHeader).(string); ok {
		alert.UnexpectedEvent("overwrite_api_key", "Overwriting existing value of %q in context.", authutil.APIKeyHeader)
	}
	ctx = context.WithValue(ctx, authutil.APIKeyHeader, apiKey)
	c, err := a.claimsFromAPIKey(ctx, apiKey)
	return claims.AuthContextWithJWT(ctx, c, err)
}

func (a *OpenIDAuthenticator) TrustedJWTFromAuthContext(ctx context.Context) string {
	jwt, ok := ctx.Value(authutil.ContextTokenStringKey).(string)
	if !ok {
		return ""
	}
	return jwt
}

func (a *OpenIDAuthenticator) AuthContextFromTrustedJWT(ctx context.Context, jwt string) context.Context {
	return context.WithValue(ctx, authutil.ContextTokenStringKey, jwt)
}

func (a *OpenIDAuthenticator) claimsFromAPIKey(ctx context.Context, apiKey string) (*claims.Claims, error) {
	akg, err := a.lookupAPIKeyGroupFromAPIKey(ctx, apiKey)
	if err != nil {
		return nil, err
	}
	return claims.APIKeyGroupClaims(ctx, akg)
}

func (a *OpenIDAuthenticator) claimsFromAPIKeyID(ctx context.Context, apiKeyID string) (*claims.Claims, error) {
	akg, err := a.lookupAPIKeyGroupFromAPIKeyID(ctx, apiKeyID)
	if err != nil {
		return nil, err
	}
	return claims.APIKeyGroupClaims(ctx, akg)
}

func (a *OpenIDAuthenticator) claimsFromAuthorityString(ctx context.Context, authority string) (*claims.Claims, error) {
	return a.claimsFromAPIKey(ctx, authority)
}

func (a *OpenIDAuthenticator) AuthenticateGRPCRequest(ctx context.Context) (interfaces.UserInfo, error) {
	return a.authenticateGRPCRequest(ctx, false /* acceptJWT= */)
}

func (a *OpenIDAuthenticator) authenticateGRPCRequest(ctx context.Context, acceptJWT bool) (*claims.Claims, error) {
	p, ok := peer.FromContext(ctx)

	if ok && p != nil && p.AuthInfo != nil {
		certs := p.AuthInfo.(credentials.TLSInfo).State.PeerCertificates
		if len(certs) > 0 && certs[0].Subject.CommonName == "BuildBuddy API Key" && certs[0].Subject.SerialNumber != "" {
			return a.claimsFromAPIKey(ctx, certs[0].Subject.SerialNumber)
		}
		if len(certs) > 0 && certs[0].Subject.CommonName == "BuildBuddy ID" && certs[0].Subject.SerialNumber != "" {
			return a.claimsFromAPIKeyID(ctx, certs[0].Subject.SerialNumber)
		}
	}

	certHeaders := metadata.ValueFromIncomingContext(ctx, SSLCertHeader)
	if len(certHeaders) > 0 {
		commonName, serialNumber, err := a.env.GetSSLService().ValidateCert(certHeaders[0])
		if err != nil {
			return nil, err
		}
		if commonName == "BuildBuddy ID" {
			return a.claimsFromAPIKeyID(ctx, serialNumber)
		}
		if commonName == "BuildBuddy API Key" {
			return a.claimsFromAPIKey(ctx, serialNumber)
		}
	}

	if apiKeys := metadata.ValueFromIncomingContext(ctx, authutil.APIKeyHeader); len(apiKeys) > 0 {
		// get the last key
		return a.claimsFromAPIKey(ctx, apiKeys[len(apiKeys)-1])
	}

	if basicAuth := metadata.ValueFromIncomingContext(ctx, basicAuthHeader); len(basicAuth) > 0 {
		return a.claimsFromAuthorityString(ctx, basicAuth[0])
	}

	if authority := metadata.ValueFromIncomingContext(ctx, authorityHeader); len(authority) > 0 {
		// Authenticate with :authority header
		lpAndHost := strings.SplitN(authority[0], "@", 2)
		if len(lpAndHost) == 2 {
			return a.claimsFromAuthorityString(ctx, lpAndHost[0])
		}
	}

	if acceptJWT {
		// Check if we're already authenticated from incoming headers.
		return claims.ClaimsFromContext(ctx)
	}

	return nil, authutil.AnonymousUserError("gRPC request is missing credentials.")
}

// AuthenticatedGRPCContext attempts to authenticate the gRPC request using peer info,
// API key header, or basic auth headers.
//
// If none of the above information is provided, UnauthenticatedError is returned via the
// `contextUserErrorKey` context value.
func (a *OpenIDAuthenticator) AuthenticatedGRPCContext(ctx context.Context) context.Context {
	c, err := a.authenticateGRPCRequest(ctx, true /* acceptJWT= */)
	return claims.AuthContextWithJWT(ctx, c, err)
}

func (a *OpenIDAuthenticator) AuthenticatedHTTPContext(w http.ResponseWriter, r *http.Request) context.Context {
	c, userToken, err := a.authenticateUser(w, r)
	ctx := r.Context()
	if userToken != nil {
		// Store the user information in the context even if authentication fails.
		// This information is used in the user creation flow.
		ctx = context.WithValue(ctx, contextUserKey, userToken)
	}
	if err != nil {
		return authutil.AuthContextWithError(ctx, err)
	}
	return claims.AuthContextWithJWT(ctx, c, err)
}

func (a *OpenIDAuthenticator) authenticateUser(w http.ResponseWriter, r *http.Request) (*claims.Claims, *userToken, error) {
	ctx := r.Context()
	if apiKey := r.Header.Get(authutil.APIKeyHeader); apiKey != "" {
		claims, err := a.claimsFromAPIKey(ctx, apiKey)
		return claims, nil, err
	}

	if authHeader := r.Header.Get(authorizationHeader); authHeader != "" {
		apiKey := strings.TrimPrefix(authHeader, authScheme+" ")
		apiKey = strings.TrimPrefix(apiKey, "Bearer ")
		claims, err := a.claimsFromAPIKey(ctx, apiKey)
		return claims, nil, err
	}

	jwt := cookie.GetCookie(r, cookie.JWTCookie)
	if jwt == "" {
		return nil, nil, status.PermissionDeniedErrorf("%s: no jwt set", authutil.LoggedOutMsg)
	}
	issuer := cookie.GetCookie(r, cookie.AuthIssuerCookie)
	sessionID := cookie.GetCookie(r, cookie.SessionIDCookie)

	auth := a.getAuthConfig(issuer)
	if auth == nil {
		return nil, nil, status.PermissionDeniedErrorf("No config found for issuer: %s", issuer)
	}

	authDB := a.env.GetAuthDB()
	if authDB == nil {
		return nil, nil, status.FailedPreconditionError("AuthDB not configured")
	}

	// If the token is corrupt for some reason (not just out of date); then
	// bail.
	ut, err := auth.verifyTokenAndExtractUser(ctx, jwt, false /*checkExpiry*/)
	if err != nil {
		return nil, nil, err
	}

	// If the session is not found, bail.
	sesh, err := authDB.ReadSession(ctx, sessionID)
	if err != nil {
		log.Debugf("Session not found: %s", err)
		// Clear auth cookies if the session is not found. This allows the login
		// flow to request a refresh token, since otherwise the login flow will
		// assume (based on the existence of this cookie) that a valid session exists with a refresh token already set.
		cookie.ClearLoginCookie(w)
		return nil, ut, status.PermissionDeniedErrorf("%s: session not found", authutil.LoggedOutMsg)
	}

	if err := auth.checkAccessToken(ctx, jwt, sesh.AccessToken); err != nil {
		log.Debugf("Invalid token: %s", err)
		return nil, ut, status.PermissionDeniedErrorf("%s: invalid token", authutil.LoggedOutMsg)
	}

	// Now try to verify the token again -- this time we check for expiry.
	// If it succeeds, we're done! Otherwise we fall through to refreshing
	// the token below.
	if ut, err := auth.verifyTokenAndExtractUser(ctx, jwt, true /*=checkExpiry*/); err == nil {
		claims, err := claims.ClaimsFromSubID(ctx, a.env, ut.GetSubID())
		return claims, ut, err
	}

	// WE only refresh the token if:
	//   - there is a valid session
	//   - at_hash matches (so no other update has happened in the mean time)
	//   - token is just out of date.
	// Still here? Token needs a refresh. Do that now.
	newToken, err := auth.renewToken(ctx, sesh.RefreshToken)
	if err != nil {
		// If we failed to renew the session, then the refresh token is likely
		// either empty or expired. When this happens, clear the session from
		// the DB, since it is no longer usable. Also make sure to clear the
		// Session-ID cookie so that the client is forced to go through the
		// consent screen when they next login, which will let us get a new
		// refresh token from the oauth provider. (Without going through the
		// consent screen, we only get an access token, not a refresh token).
		log.Warningf("Failed to renew token for session %+v: %s", sesh, err)
		cookie.ClearLoginCookie(w)
		if err := authDB.ClearSession(ctx, sessionID); err != nil {
			log.Errorf("Failed to clear session %+v: %s", sesh, err)
		}
		return nil, nil, status.PermissionDeniedErrorf("%s: failed to renew session", authutil.LoggedOutMsg)
	}

	sesh.ExpiryUsec = time.Unix(0, newToken.Expiry.UnixNano()).UnixMicro()
	sesh.AccessToken = newToken.AccessToken

	// If token renewal returns a new refresh token, update it on the session
	if refreshToken, ok := newToken.Extra("refresh_token").(string); ok {
		sesh.RefreshToken = refreshToken
	}

	if err := authDB.InsertOrUpdateUserSession(ctx, sessionID, sesh); err != nil {
		return nil, nil, err
	}
	// If token renewal returns a new id token, update it on the login cookie
	if newJWT, ok := newToken.Extra("id_token").(string); ok {
		jwt = newJWT
	}

	cookie.SetLoginCookie(w, jwt, issuer, sessionID, newToken.Expiry.Unix())
	claims, err := claims.ClaimsFromSubID(ctx, a.env, ut.GetSubID())
	return claims, ut, err
}

func (a *OpenIDAuthenticator) AuthenticatedUser(ctx context.Context) (interfaces.UserInfo, error) {
	// We don't return directly so that we can return a nil-interface instead of an interface holding a nil *Claims.
	// Callers should be checking err before before accessing the user, but in case they don't this will prevent a nil
	// dereference.
	claims, err := claims.ClaimsFromContext(ctx)
	if err != nil {
		return nil, err
	}
	return claims, nil
}

func (a *OpenIDAuthenticator) FillUser(ctx context.Context, user *tables.User) error {
	t, ok := ctx.Value(contextUserKey).(*userToken)
	if !ok {
		// WARNING: app/auth/auth_service.ts depends on this status being UNAUTHENTICATED.
		return status.UnauthenticatedError("No user token available to fill user")
	}

	pk, err := tables.PrimaryKeyForTable("Users")
	if err != nil {
		return err
	}
	user.UserID = pk
	user.SubID = t.GetSubID()
	user.FirstName = t.GivenName
	user.LastName = t.FamilyName
	user.Email = t.Email
	user.ImageURL = t.Picture
	if t.slug != "" {
		user.Groups = []*tables.GroupRole{
			{Group: tables.Group{URLIdentifier: t.slug}},
		}
	}
	return nil
}

func (a *OpenIDAuthenticator) Login(w http.ResponseWriter, r *http.Request) error {
	issuer := cookie.GetCookie(r, cookie.AuthIssuerCookie)
	if issuerParam := r.URL.Query().Get(authIssuerParam); issuerParam != "" {
		issuer = issuerParam
	}
	auth := a.getAuthConfig(issuer)

	if slug := r.URL.Query().Get(slugParam); slug != "" {
		auth = a.getAuthConfigForSlug(slug)
		if auth == nil {
			return status.PermissionDeniedErrorf("No SSO config found for slug: %s", slug)
		}
		issuer = auth.getIssuer()
	}

	if issuer == "" {
		return status.PermissionDeniedErrorf("No auth issuer set")
	}

	if auth == nil {
		return status.PermissionDeniedErrorf("No config found for issuer: %s", issuer)
	}

	// Set the "state" cookie which will be returned to us by tha authentication
	// provider in the URL. We verify that it matches.
	state := fmt.Sprintf("%d", random.RandUint64())
	cookie.SetCookie(w, stateCookie, state, time.Now().Add(tempCookieDuration), true /* httpOnly= */)

	redirectURL := r.URL.Query().Get(authRedirectParam)
	if err := a.validateRedirectURL(redirectURL); err != nil {
		return err
	}

	// Redirect to the login provider (and ask for a refresh token).
	u, err := auth.authCodeURL(state, a.getAuthCodeOptions(r)...)
	if err != nil {
		return err
	}

	// Set the redirection URL in a cookie so we can use it after validating
	// the user in our /auth callback.
	cookie.SetCookie(w, cookie.RedirCookie, redirectURL, time.Now().Add(tempCookieDuration), true /* httpOnly= */)

	// Set the issuer cookie so we remember which issuer to use when exchanging
	// a token later in our /auth callback.
	cookie.SetCookie(w, cookie.AuthIssuerCookie, issuer, time.Now().Add(tempCookieDuration), true /* httpOnly= */)

	http.Redirect(w, r, u, http.StatusTemporaryRedirect)
	return nil
}

func (a *OpenIDAuthenticator) Logout(w http.ResponseWriter, r *http.Request) error {
	cookie.ClearLoginCookie(w)

	// Attempt to mark the user as logged out in the database by clearing
	// their access token.
	jwt := cookie.GetCookie(r, cookie.JWTCookie)
	if jwt == "" {
		return nil
	}
	sessionID := cookie.GetCookie(r, cookie.SessionIDCookie)
	if sessionID == "" {
		return nil
	}

	if authDB := a.env.GetAuthDB(); authDB != nil {
		if err := authDB.ClearSession(r.Context(), sessionID); err != nil {
			log.Errorf("Error clearing user session on logout: %s", err)
		}
	}
	return nil
}

func (a *OpenIDAuthenticator) Auth(w http.ResponseWriter, r *http.Request) error {
	ctx := r.Context()

	authDB := a.env.GetAuthDB()
	if authDB == nil {
		return status.FailedPreconditionError("AuthDB not configured")
	}

	// Verify "state" cookie match.
	if r.FormValue("state") != cookie.GetCookie(r, stateCookie) {
		return status.PermissionDeniedErrorf("state mismatch: %s != %s", r.FormValue("state"), cookie.GetCookie(r, stateCookie))
	}

	authError := r.URL.Query().Get("error")
	if authError != "" {
		return status.PermissionDeniedErrorf("Authenticator returned error: %s (%s %s)", authError, r.URL.Query().Get("error_desc"), r.URL.Query().Get("error_description"))
	}

	// Lookup issuer from the cookie we set in /login.
	issuer := cookie.GetCookie(r, cookie.AuthIssuerCookie)
	auth := a.getAuthConfig(issuer)
	if auth == nil {
		return status.PermissionDeniedErrorf("No config found for issuer: %s", issuer)
	}

	code := r.URL.Query().Get("code")
	oauth2Token, err := auth.exchange(ctx, code, a.getAuthCodeOptions(r)...)
	if err != nil {
		log.Debugf("Error exchanging code for auth token for code %s, got error: %s", code, err)
		return status.PermissionDeniedErrorf("Error exchanging code for auth token: %s", code)
	}

	// Extract the ID Token (JWT) from OAuth2 token.
	jwt, ok := oauth2Token.Extra("id_token").(string)
	if !ok {
		return status.PermissionDeniedError("ID Token not present in auth response")
	}

	ut, err := auth.verifyTokenAndExtractUser(ctx, jwt /*checkExpiry=*/, true)
	if err != nil {
		return err
	}

	guid, err := uuid.NewRandom()
	if err != nil {
		return err
	}
	sessionID := guid.String()

	// OK, the token is valid so we will: store the token in our DB for
	// later & set the login cookie so we know this user is logged in.
	cookie.SetLoginCookie(w, jwt, issuer, sessionID, oauth2Token.Expiry.Unix())

	expireTime := time.Unix(0, oauth2Token.Expiry.UnixNano())
	sesh := &tables.Session{
		SessionID:   sessionID,
		SubID:       ut.GetSubID(),
		AccessToken: oauth2Token.AccessToken,
		ExpiryUsec:  expireTime.UnixMicro(),
	}
	refreshToken, ok := oauth2Token.Extra("refresh_token").(string)
	if ok {
		sesh.RefreshToken = refreshToken
	}
	if err := authDB.InsertOrUpdateUserSession(ctx, sessionID, sesh); err != nil {
		return err
	}
	redirURL := cookie.GetCookie(r, cookie.RedirCookie)
	if redirURL == "" {
		redirURL = "/" // default to redirecting home.
	}
	http.Redirect(w, r, redirURL, http.StatusTemporaryRedirect)
	return nil
}
