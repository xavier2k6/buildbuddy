"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[5059],{81267:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>r,default:()=>a,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var s=i(74848),d=i(28453);const l={id:"config-auth",title:"Auth Configuration",sidebar_label:"Auth"},r=void 0,c={id:"config-auth",title:"Auth Configuration",description:"Auth is only configurable in the Enterprise version of BuildBuddy.",source:"@site/../docs/config-auth.md",sourceDirName:".",slug:"/config-auth",permalink:"/docs/config-auth",draft:!1,unlisted:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/config-auth.md",tags:[],version:"current",lastUpdatedBy:"Brandon Duffany",lastUpdatedAt:1734369399e3,frontMatter:{id:"config-auth",title:"Auth Configuration",sidebar_label:"Auth"},sidebar:"someSidebar",previous:{title:"SSL",permalink:"/docs/config-ssl"},next:{title:"Integrations",permalink:"/docs/config-integrations"}},t={},o=[{value:"OIDC",id:"oidc",level:2},{value:"Section",id:"section",level:3},{value:"Options",id:"options",level:3},{value:"Redirect URL",id:"redirect-url",level:3},{value:"OIDC Examples",id:"oidc-examples",level:3},{value:"Google auth provider",id:"google-auth-provider",level:4},{value:"Gitlab auth provider",id:"gitlab-auth-provider",level:4},{value:"Azure AD provider",id:"azure-ad-provider",level:4},{value:"SAML 2.0",id:"saml-20",level:2},{value:"Okta SAML provider",id:"okta-saml-provider",level:3},{value:"Azure AD / Entra SAML provider",id:"azure-ad--entra-saml-provider",level:3},{value:"Other providers",id:"other-providers",level:3},{value:"User management via SCIM",id:"user-management-via-scim",level:2},{value:"Okta",id:"okta",level:3},{value:"Azure AD / Entra",id:"azure-ad--entra",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Auth is only configurable in the ",(0,s.jsx)(n.a,{href:"/docs/enterprise",children:"Enterprise version"})," of BuildBuddy."]}),"\n",(0,s.jsx)(n.h2,{id:"oidc",children:"OIDC"}),"\n",(0,s.jsx)(n.h3,{id:"section",children:"Section"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"auth:"})," The Auth section enables BuildBuddy authentication using an OpenID Connect provider that you specify. ",(0,s.jsx)(n.strong,{children:"Optional"})]}),"\n",(0,s.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"oauth_providers:"})," A list of configured OAuth Providers.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"issuer_url: "})," The issuer URL of this OIDC Provider."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"client_id: "})," The oauth client ID."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"client_secret: "})," The oauth client secret."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"enable_anonymous_usage:"})," If true, unauthenticated build uploads will still be allowed but won't be associated with your organization."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"redirect-url",children:"Redirect URL"}),"\n",(0,s.jsxs)(n.p,{children:["If during your OpenID provider configuration you're asked to enter a ",(0,s.jsx)(n.strong,{children:"Redirect URL"}),", you should enter ",(0,s.jsx)(n.code,{children:"https://YOUR_BUILDBUDDY_URL/auth/"}),". For example if your BuildBuddy instance was hosted on ",(0,s.jsx)(n.code,{children:"https://buildbuddy.acme.com"}),", you'd enter ",(0,s.jsx)(n.code,{children:"https://buildbuddy.acme.com/auth/"})," as your redirect url."]}),"\n",(0,s.jsx)(n.h3,{id:"oidc-examples",children:"OIDC Examples"}),"\n",(0,s.jsx)(n.h4,{id:"google-auth-provider",children:"Google auth provider"}),"\n",(0,s.jsxs)(n.p,{children:["If you'd like to use Google as an auth provider, you can easily obtain your client id and client secret ",(0,s.jsx)(n.a,{href:"https://console.developers.google.com/apis/credentials",children:"here"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="config.yaml"',children:'auth:\n  oauth_providers:\n    - issuer_url: "https://accounts.google.com"\n      client_id: "12345678911-f1r0phjnhbabcdefm32etnia21keeg31.apps.googleusercontent.com"\n      client_secret: "sEcRetKeYgOeShErE"\n'})}),"\n",(0,s.jsx)(n.h4,{id:"gitlab-auth-provider",children:"Gitlab auth provider"}),"\n",(0,s.jsx)(n.p,{children:"You can use Gitlab as an OIDC identity provider for BuildBuddy.\nThis feature is available for both Gitlab On-Prem Deployment and Gitlab SaaS offering."}),"\n",(0,s.jsxs)(n.p,{children:["For more details, please refer to ",(0,s.jsx)(n.a,{href:"https://docs.gitlab.com/ee/integration/openid_connect_provider.html",children:"Gitlab's latest Official Documentation"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),": Because ",(0,s.jsx)(n.a,{href:"https://gitlab.com/gitlab-org/gitlab/-/issues/16620",children:"Gitlab has yet to support refresh tokens"}),", you need to configure BuildBuddy to not request the ",(0,s.jsx)(n.code,{children:"offline_access"})," scope from Gitlab:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="config.yaml"',children:"auth:\n  disable_refresh_token: true\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Configuration"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["First, register a Gitlab Application:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["For Gitlab SaaS, follow ",(0,s.jsx)(n.a,{href:"https://docs.gitlab.com/ee/integration/oauth_provider.html#create-a-group-owned-application",children:"Group-Owned Application Documentation"})," instructions."]}),"\n",(0,s.jsxs)(n.li,{children:["For Gitlab On-Prem, follow ",(0,s.jsx)(n.a,{href:"https://docs.gitlab.com/ee/integration/oauth_provider.html#create-a-group-owned-application",children:"Instance-Wide Application Documentation"})," instructions."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["The Redirect URL should be ",(0,s.jsx)(n.code,{children:"https://YOUR_BUILDBUDDY_URL/auth/"}),", pointing to your existing BuildBuddy deployment."]}),"\n",(0,s.jsxs)(n.li,{children:["The scopes needed are ",(0,s.jsx)(n.code,{children:"openid"}),", ",(0,s.jsx)(n.code,{children:"profile"})," and ",(0,s.jsx)(n.code,{children:"email"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Once the Gitlab application is created, you can configure it as a BuildBuddy auth provider like so:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="config.yaml"',children:'auth:\n  oauth_providers:\n    - issuer_url: "https://gitlab.com"\n      client_id: "<GITLAB APPLICATION ID>"\n      client_secret: "<GITLAB APPLICATION SECRET>"\n'})}),"\n",(0,s.jsx)(n.h4,{id:"azure-ad-provider",children:"Azure AD provider"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Navigate to the ",(0,s.jsx)(n.a,{href:"https://portal.azure.com/",children:"Azure Portal"}),".\nIf there are multiple Azure AD tenants available, select the tenant that will be using BuildBuddy."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Register a BuildBuddy application:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Search for and select Azure Active Directory"}),"\n",(0,s.jsxs)(n.li,{children:["Under ",(0,s.jsx)(n.code,{children:"Manage"}),", select ",(0,s.jsx)(n.code,{children:"App registration"})," -> ",(0,s.jsx)(n.code,{children:"New registration"})]}),"\n",(0,s.jsxs)(n.li,{children:["Enter ",(0,s.jsx)(n.code,{children:"BuildBuddy"})," for application name."]}),"\n",(0,s.jsxs)(n.li,{children:["Select the account types in Azure AD that should have access to BuildBuddy.\nUsually ",(0,s.jsx)(n.code,{children:"Accounts in this organizational directory only"}),' is correct for the single-tenant use case,\n"Accounts in any organizational directory" is correct for the multi-tenant use case.']}),"\n",(0,s.jsxs)(n.li,{children:["Redirect URI should be ",(0,s.jsx)(n.code,{children:"https://YOUR_BUILDBUDDY_URL/auth/"})," with ",(0,s.jsx)(n.code,{children:"Web"})," platform."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.code,{children:"Register"})]}),"\n",(0,s.jsxs)(n.li,{children:["Take note of ",(0,s.jsx)(n.code,{children:"Application (client) ID"})," and ",(0,s.jsx)(n.code,{children:"Directory (tenant) ID"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Configure Application Secret"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Click on ",(0,s.jsx)(n.code,{children:"Certificates & secrets"})," -> ",(0,s.jsx)(n.code,{children:"Client secrets"})," -> ",(0,s.jsx)(n.code,{children:"New client secret"}),"\nWe recommend set the expiry date of the secret to 12 months."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.code,{children:"Add"})," -> Take note of the ",(0,s.jsx)(n.code,{children:"Value"})," of the newly created secret."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Configure Application API scope"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Navigate to ",(0,s.jsx)(n.code,{children:"API permissions"})]}),"\n",(0,s.jsxs)(n.li,{children:["Select ",(0,s.jsx)(n.code,{children:"Add a permission"})," -> ",(0,s.jsx)(n.code,{children:"Microsoft Graph"})," -> ",(0,s.jsx)(n.code,{children:"Delegated permission"})]}),"\n",(0,s.jsxs)(n.li,{children:["In ",(0,s.jsx)(n.code,{children:"OpenId permissions"}),", select ",(0,s.jsx)(n.code,{children:"email"}),", ",(0,s.jsx)(n.code,{children:"offline_access"}),", ",(0,s.jsx)(n.code,{children:"openid"}),", ",(0,s.jsx)(n.code,{children:"profile"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["In ",(0,s.jsx)(n.code,{children:"User"}),", select ",(0,s.jsx)(n.code,{children:"User.Read"})]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.code,{children:"Add permissions"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"After that, your BuildBuddy config should be like this"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'auth:\n  oauth_providers:\n    - issuer_url: "https://login.microsoftonline.com/<DIRECTORY_ID>/v2.0"\n      client_id: "<CLIENT_ID>"\n      client_secret: "<CLIENT_SECRET>"\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"saml-20",children:"SAML 2.0"}),"\n",(0,s.jsx)(n.p,{children:"SAML 2.0 authentication is avaliable for BuildBuddy Cloud (SaaS)."}),"\n",(0,s.jsx)(n.h3,{id:"okta-saml-provider",children:"Okta SAML provider"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Find your organization's short name (slug) in your ",(0,s.jsx)(n.a,{href:"https://app.buildbuddy.io/settings/",children:"BuildBuddy Organization Settings"})," and replace instances of ",(0,s.jsx)(n.code,{children:"<org-slug>"})," below with this value."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["On the Okta Applications page, click ",(0,s.jsx)(n.code,{children:"Create App Integration"}),", select ",(0,s.jsx)(n.code,{children:"SAML 2.0"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Enter ",(0,s.jsx)(n.code,{children:"BuildBuddy"})," and hit ",(0,s.jsx)(n.code,{children:"Next"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Enter the following fields under ",(0,s.jsx)(n.strong,{children:"General"}),", making sure to replace ",(0,s.jsx)(n.code,{children:"<org-slug>"})," with the value froms step 1:"]}),"\n",(0,s.jsxs)(n.p,{children:["a. For Single sign on URL enter: ",(0,s.jsx)(n.code,{children:"https://app.buildbuddy.io/auth/saml/acs?slug=<org-slug>"})]}),"\n",(0,s.jsxs)(n.p,{children:["b. For Audience URI (SP Entity ID) enter: ",(0,s.jsx)(n.code,{children:"https://app.buildbuddy.io/saml/metadata?slug=<org-slug>"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Add an ",(0,s.jsx)(n.code,{children:"Attribute Statement"})," to map ",(0,s.jsx)(n.code,{children:"email"})," and value ",(0,s.jsx)(n.code,{children:"user.email"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.code,{children:"Finish"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Under ",(0,s.jsx)(n.code,{children:"Metadata URL"})," click copy and share this URL (which should have the format ",(0,s.jsx)(n.code,{children:"https://xxxx.okta.com/app/XXXX/sso/saml/metadata"}),") with BuildBuddy support."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"azure-ad--entra-saml-provider",children:"Azure AD / Entra SAML provider"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Find your organization's short name (slug) in your ",(0,s.jsx)(n.a,{href:"https://app.buildbuddy.io/settings/",children:"BuildBuddy Organization Settings"})," and replace instances of ",(0,s.jsx)(n.code,{children:"<org-slug>"})," below with this value."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Visit the ",(0,s.jsx)(n.a,{href:"https://entra.microsoft.com/",children:"Entra portal page"}),", navigate to ",(0,s.jsx)(n.code,{children:"Applications"})," -> ",(0,s.jsx)(n.code,{children:"Enterprise applications"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.code,{children:"New application"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.code,{children:"Create your own application"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Enter ",(0,s.jsx)(n.code,{children:"BuildBuddy"})," for the name and hit ",(0,s.jsx)(n.code,{children:"Create"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the newly created appliction view, navigate to ",(0,s.jsx)(n.code,{children:"Single sign-on"})," and select ",(0,s.jsx)(n.code,{children:"SAML"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click on ",(0,s.jsx)(n.code,{children:"Edit"})," in the first section ",(0,s.jsx)(n.code,{children:"Basic SAML Configuration"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["a. ",(0,s.jsx)(n.code,{children:"Identified (Entity ID)"})," should be ",(0,s.jsx)(n.code,{children:"https://app.buildbuddy.io/saml/metadata?slug=<org-slug>"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["b. ",(0,s.jsx)(n.code,{children:"Reply URL (Assertion Consumer Service URL)"})," should be ",(0,s.jsx)(n.code,{children:"https://app.buildbuddy.io/auth/saml/acs?slug=<org-slug>"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["c. ",(0,s.jsx)(n.code,{children:"Sign on URL"})," should be ",(0,s.jsx)(n.code,{children:"https://app.buildbuddy.io/login?slug=<org-slug>"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["d. Hit ",(0,s.jsx)(n.code,{children:"Save"})," button."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click on ",(0,s.jsx)(n.code,{children:"Edit"})," in the second section ",(0,s.jsx)(n.code,{children:"Attributes & Claims"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["a. Select ",(0,s.jsx)(n.code,{children:"Add new claim"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["b. For ",(0,s.jsx)(n.code,{children:"Name"}),", fill in ",(0,s.jsx)(n.code,{children:"email"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["c. For ",(0,s.jsx)(n.code,{children:"Source"})," select ",(0,s.jsx)(n.code,{children:"Attribute"})," and for ",(0,s.jsx)(n.code,{children:"Source attribute"}),", search and select ",(0,s.jsx)(n.code,{children:"user.mail"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["d. Hit the ",(0,s.jsx)(n.code,{children:"Save"})," button."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the 3rd section ",(0,s.jsx)(n.code,{children:"SAML Certificates"}),", copy the ",(0,s.jsx)(n.code,{children:"App Federation Metadata Url"})," and share it with BuildBuddy support."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"other-providers",children:"Other providers"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Find the short name (slug) for your organization in your ",(0,s.jsx)(n.a,{href:"https://app.buildbuddy.io/settings/",children:"BuildBuddy Organization Settings"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Assertion Consumer Service (ACS) URL"}),": ",(0,s.jsx)(n.code,{children:"https://app.buildbuddy.io/auth/saml/acs?slug=<org-slug>"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Audience URL (SP Entity ID)"}),": ",(0,s.jsx)(n.code,{children:"https://app.buildbuddy.io/saml/metadata?slug=<org-slug>"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Make sure the ",(0,s.jsx)(n.code,{children:"email"})," attribute is mapped to ",(0,s.jsx)(n.code,{children:"user.email"})," (or equivalent)."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Once the app is created, share the ",(0,s.jsx)(n.strong,{children:"Identity Provider Metadata"})," URL with BuildBuddy support."]}),"\n",(0,s.jsx)(n.h2,{id:"user-management-via-scim",children:"User management via SCIM"}),"\n",(0,s.jsx)(n.p,{children:"Users can be provisioned and deprovisioned within BuildBuddy by external auth providers using the SCIM API."}),"\n",(0,s.jsx)(n.p,{children:'First, create an API key that will be used for managing users on the organization settings page. Select "Org admin key"\nas the key type.'}),"\n",(0,s.jsx)(n.h3,{id:"okta",children:"Okta"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"First, we will add a custom User attribute that will determine the role of the synced user."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Open the ",(0,s.jsx)(n.code,{children:"Profile Editor"})," page in Okta."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select the ",(0,s.jsx)(n.code,{children:"User (default)"})," profile."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Add a new attribute with the following settings:"}),"\n",(0,s.jsxs)(n.p,{children:["Display name: ",(0,s.jsx)(n.code,{children:"BuildBuddy role"})]}),"\n",(0,s.jsxs)(n.p,{children:["Variable name: ",(0,s.jsx)(n.code,{children:"buildBuddyRole"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Within Okta, open the BuildBuddy application that was created for SAML integration."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Edit the ",(0,s.jsx)(n.code,{children:"App Settings"})," on the ",(0,s.jsx)(n.code,{children:"General Page"}),", enable ",(0,s.jsx)(n.code,{children:"SCIM provisioning"})," and Save."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Go to the ",(0,s.jsx)(n.code,{children:"Provisioning"})," tab, click ",(0,s.jsx)(n.code,{children:"Edit"})," and make the following changes:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["For ",(0,s.jsx)(n.code,{children:"SCIM connector base URL"}),", enter ",(0,s.jsx)(n.code,{children:"https://app.buildbuddy.io/scim"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["For ",(0,s.jsx)(n.code,{children:"Unique identifier field for users "}),", enter ",(0,s.jsx)(n.code,{children:"userName"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Under ",(0,s.jsx)(n.code,{children:"Supported provisioning actions"}),", enable ",(0,s.jsx)(n.code,{children:"Import New Users and Profile Updates"}),", ",(0,s.jsx)(n.code,{children:"Push New Users"})," and ",(0,s.jsx)(n.code,{children:"Push Profile Updates"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["For ",(0,s.jsx)(n.code,{children:"Authentication Mode"}),", select ",(0,s.jsx)(n.code,{children:"HTTP Header"})," and enter the previously created API key as the ",(0,s.jsx)(n.code,{children:"Token"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.code,{children:"Save"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["On the ",(0,s.jsx)(n.code,{children:"Provisioning"})," tab, click ",(0,s.jsx)(n.code,{children:"Edit"})," next to ",(0,s.jsx)(n.code,{children:"Provisioning to App"}),"."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Enable ",(0,s.jsx)(n.code,{children:"Create Users"}),", ",(0,s.jsx)(n.code,{children:"Update User Attributes"})," and ",(0,s.jsx)(n.code,{children:"Deactivate Users"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.code,{children:"Save"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Under ",(0,s.jsx)(n.code,{children:"Attribute Mappings"})," perform the following changes:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Delete all mappings except ",(0,s.jsx)(n.code,{children:"userName"}),", ",(0,s.jsx)(n.code,{children:"givenName"})," and ",(0,s.jsx)(n.code,{children:"familyName"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.code,{children:"Go to Profile Editor"}),", click ",(0,s.jsx)(n.code,{children:"Add Attribute"})," and create an attribute with the following details:"]}),"\n",(0,s.jsxs)(n.p,{children:["Display name: ",(0,s.jsx)(n.code,{children:"Role"})]}),"\n",(0,s.jsxs)(n.p,{children:["Variable name: ",(0,s.jsx)(n.code,{children:"role"})]}),"\n",(0,s.jsxs)(n.p,{children:["External name: ",(0,s.jsx)(n.code,{children:"role"})]}),"\n",(0,s.jsxs)(n.p,{children:["External namespace: ",(0,s.jsx)(n.code,{children:"urn:ietf:params:scim:schemas:core:2.0:User"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Navigate back to the ",(0,s.jsx)(n.code,{children:"Provisioning"})," page."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Under ",(0,s.jsx)(n.code,{children:"Attribute Mappings"})," do the following:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.code,{children:"Show Unmapped Attributes"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Find the ",(0,s.jsx)(n.code,{children:"Role"})," attribute and click the edit icon."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Under ",(0,s.jsx)(n.code,{children:"Attribute value"})," select ",(0,s.jsx)(n.code,{children:"Map from Okta Profile"})," and choose ",(0,s.jsx)(n.code,{children:"buildBuddyRole"})," as the source attribute."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["For ",(0,s.jsx)(n.code,{children:"Apply on"}),", select ",(0,s.jsx)(n.code,{children:"Create and update"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.code,{children:"Save"})," to finish adding the attribute."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["By default, users that do not have the attribute field set will be created with the ",(0,s.jsx)(n.code,{children:"developer"})," role."]}),"\n",(0,s.jsx)(n.p,{children:"You can modify the attribute value in Okta if you wish to grant them a different role."}),"\n",(0,s.jsx)(n.h3,{id:"azure-ad--entra",children:"Azure AD / Entra"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Within Entra, open the BuildBuddy application that was created for SAML integration."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Go to the ",(0,s.jsx)(n.code,{children:"Provisioning"})," page."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Under the ",(0,s.jsx)(n.code,{children:"Manage"})," section of side-bar, select ",(0,s.jsx)(n.code,{children:"Provisioning"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Change ",(0,s.jsx)(n.code,{children:"Provisioning Mode"})," to ",(0,s.jsx)(n.code,{children:"Automatic"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Under ",(0,s.jsx)(n.code,{children:"Admin Credentials"}),", enter the following information:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Tenant URL: ",(0,s.jsx)(n.code,{children:"https://app.buildbuddy.io/scim"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Secret Token: Enter the value of the ",(0,s.jsx)(n.code,{children:"Org admin key"})," that was created earlier."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Press ",(0,s.jsx)(n.code,{children:"Save"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["After pressing ",(0,s.jsx)(n.code,{children:"Save"})," in the previous step, you should see a new ",(0,s.jsx)(n.code,{children:"Mappings"})," section. Under that section do the following:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Open ",(0,s.jsx)(n.code,{children:"Provision Microsoft Entra ID Groups"})," and set ",(0,s.jsx)(n.code,{children:"Enabled"})," to No as BuildBuddy does not support syncing groups. Save and return to the previous page."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Open ",(0,s.jsx)(n.code,{children:"Provision Microsoft Entra ID Users"})," and make the following changes:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Delete all mappings except ",(0,s.jsx)(n.code,{children:"userName"}),", ",(0,s.jsx)(n.code,{children:"active"}),", ",(0,s.jsx)(n.code,{children:"name.givenName"})," and ",(0,s.jsx)(n.code,{children:"name.familyName"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Ensure the ",(0,s.jsx)(n.code,{children:"userName"})," mapping matches the attribute that was configured for SAML login."]}),"\n",(0,s.jsxs)(n.p,{children:["e.g. If SAML claims were configured to use ",(0,s.jsx)(n.code,{children:"user.mail"})," then the ",(0,s.jsx)(n.code,{children:"userName"})," mapping should also be set to ",(0,s.jsx)(n.code,{children:"user.mail"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Add an attribute for the application role:"}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"expression"})]}),"\n",(0,s.jsxs)(n.p,{children:["Expression: ",(0,s.jsx)(n.code,{children:"SingleAppRoleAssignment([appRoleAssignments])"})]}),"\n",(0,s.jsxs)(n.p,{children:["Target attribute: ",(0,s.jsx)(n.code,{children:'roles[primary eq "True"].value'})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The last step is to configure the BuildBuddy specific roles:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["From the main Entra page, open the ",(0,s.jsx)(n.code,{children:"App registrations"})," page."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click on the ",(0,s.jsx)(n.code,{children:"BuildBuddy"})," application (you may need to select ",(0,s.jsx)(n.code,{children:"All applications"})," to see it)"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Go to the ",(0,s.jsx)(n.code,{children:"App roles"})," page."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Delete the ",(0,s.jsx)(n.code,{children:"Users"})," role."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create a role for each BuildBuddy role to use."}),"\n",(0,s.jsx)(n.p,{children:'The available roles are "admin", "developer", "writer", "reader".'}),"\n",(0,s.jsx)(n.p,{children:"The display name should exactly match one of the values listed above and the value can be anything."}),"\n",(0,s.jsx)(n.p,{children:"When sending role information downstream, Entra only sends the role display name, ignoring the role value."}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>c});var s=i(96540);const d={},l=s.createContext(d);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);