"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[7053],{98929:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"enterprise-config","title":"Configuring BuildBuddy Enterprise","description":"BuildBuddy Enterprise allows configuration of many features that are not available in the open-core version. Below you\u2019ll find examples for configuring some of these features. If you don\u2019t see what you\u2019re looking for below, please don\u2019t hesitate to ask us! For a full overview of what can be configured, see our Configuration docs.","source":"@site/../docs/enterprise-config.md","sourceDirName":".","slug":"/enterprise-config","permalink":"/docs/enterprise-config","draft":false,"unlisted":false,"editUrl":"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/enterprise-config.md","tags":[],"version":"current","lastUpdatedBy":"Zoey Greer","lastUpdatedAt":1734530822000,"frontMatter":{"id":"enterprise-config","title":"Configuring BuildBuddy Enterprise","sidebar_label":"Enterprise Configuration"},"sidebar":"someSidebar","previous":{"title":"Enterprise On-prem Setup","permalink":"/docs/enterprise-setup"},"next":{"title":"Enterprise Helm Charts","permalink":"/docs/enterprise-helm"}}');var a=t(74848),s=t(28453);const r={id:"enterprise-config",title:"Configuring BuildBuddy Enterprise",sidebar_label:"Enterprise Configuration"},o=void 0,d={},l=[{value:"MySQL Data Storage",id:"mysql-data-storage",level:3},{value:"Default Redis Target",id:"default-redis-target",level:3},{value:"GCS Based Cache / Object Storage / Redis",id:"gcs-based-cache--object-storage--redis",level:3},{value:"Authentication Provider Integration",id:"authentication-provider-integration",level:3},{value:"Certificate Based Authentication",id:"certificate-based-authentication",level:3},{value:"Remote Build Execution",id:"remote-build-execution",level:3},{value:"Putting It All Together",id:"putting-it-all-together",level:3},{value:"Learn more",id:"learn-more",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["BuildBuddy Enterprise allows configuration of many features that are not available in the open-core version. Below you\u2019ll find examples for configuring some of these features. If you don\u2019t see what you\u2019re looking for below, please don\u2019t hesitate to ask us! For a full overview of what can be configured, see our ",(0,a.jsx)(n.a,{href:"/docs/config",children:"Configuration docs"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"mysql-data-storage",children:"MySQL Data Storage"}),"\n",(0,a.jsx)(n.p,{children:"BuildBuddy uses a SQL connection string to specify the database it will connect to. An example string is:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'"mysql://user:pass@tcp(12.34.56.78)/database_name"\n'})}),"\n",(0,a.jsx)(n.p,{children:"To connect BuildBuddy to your own MySQL server:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Create a new database on your MySQL server"}),"\n",(0,a.jsx)(n.li,{children:"Create a new user with full access to that database"}),"\n",(0,a.jsx)(n.li,{children:"Put the username, password, IP address of your MySQL server, and database name into the BuildBuddy data_source connection string:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="config.yaml"',children:'app:\n  build_buddy_url: "https://app.buildbuddy.mydomain.com"\n  events_api_url: "grpcs://events.buildbuddy.mydomain.com:1986"\n  cache_api_url: "grpcs://cache.buildbuddy.mydomain.com:1986"\ndatabase:\n  data_source: "mysql://user:pass@tcp(12.34.56.78)/database_name"\n'})}),"\n",(0,a.jsxs)(n.p,{children:["If using the ",(0,a.jsx)(n.a,{href:"https://github.com/buildbuddy-io/buildbuddy-helm/tree/master/charts/buildbuddy-enterprise",children:"BuildBuddy Enterprise Helm charts"}),", MySQL can be configured for you using the ",(0,a.jsx)(n.code,{children:"mysql.enabled"}),", ",(0,a.jsx)(n.code,{children:"mysql.username"}),", and ",(0,a.jsx)(n.code,{children:"mysql.password"})," values."]}),"\n",(0,a.jsx)(n.h3,{id:"default-redis-target",children:"Default Redis Target"}),"\n",(0,a.jsx)(n.p,{children:"For a BuildBuddy deployment running multiple apps, it is necessary to provide a default redis target for some features to work correctly. Metrics collection, usage tracking, and responsive build logs all depend on this."}),"\n",(0,a.jsx)(n.p,{children:"If no default redis target is configured, we will fall back to using the cache redis target, if available, and then the remote execution target, if available. The default redis target also acts as the primary fallback if the remote execution redis target is left unspecified. The default redis target does NOT act as a fallback for the cache redis target."}),"\n",(0,a.jsx)(n.p,{children:"The configuration below demostrates a default redis target:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="config.yaml"',children:'app:\n  default_redis_target: "my-redis.local:6379"\n'})}),"\n",(0,a.jsx)(n.h3,{id:"gcs-based-cache--object-storage--redis",children:"GCS Based Cache / Object Storage / Redis"}),"\n",(0,a.jsx)(n.p,{children:"By default, BuildBuddy will cache objects and store uploaded build events on the local disk. If you want to store them in a shared durable location, like a Google Cloud Storage bucket, you can do that by configuring a GCS cache or storage backend."}),"\n",(0,a.jsxs)(n.p,{children:["If your BuildBuddy instance is running on a machine with Google Default Credentials, no credentials file will be necessary. If not, you should ",(0,a.jsx)(n.a,{href:"https://cloud.google.com/docs/authentication/getting-started",children:"create a service account"})," with permissions to write to cloud storage, and download the credentials .json file."]}),"\n",(0,a.jsxs)(n.p,{children:["We also recommend providing a Redis instance for improved remote build execution & small file performance. This can be configured automatically using the ",(0,a.jsx)(n.a,{href:"https://github.com/buildbuddy-io/buildbuddy-helm/tree/master/charts/buildbuddy-enterprise",children:"BuildBuddy Enterprise Helm charts"})," with the ",(0,a.jsx)(n.code,{children:"redis.enabled"})," value."]}),"\n",(0,a.jsx)(n.p,{children:"The configuration below configures Redis & GCS storage bucket to act as a storage backend and cache:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="config.yaml"',children:'storage:\n  ttl_seconds: 2592000 # 30 days\n  chunk_file_size_bytes: 3000000 # 3 MB\n  gcs:\n    bucket: "buildbuddy_prod_blobs"\n    project_id: "flame-build"\n    credentials_file: "your_service-acct.json"\ncache:\n  redis_target: "my-redis.local:6379"\n  gcs:\n    bucket: "buildbuddy_cache"\n    project_id: "your_gcs_project_id"\n    credentials_file: "/path/to/your/credential/file.json"\n    ttl_days: 30\n'})}),"\n",(0,a.jsx)(n.p,{children:"If using Amazon S3, you can configure your storage and cache similarly:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="config.yaml"',children:'storage:\n  ttl_seconds: 2592000 # 30 days\n  chunk_file_size_bytes: 3000000 # 3 MB\n  aws_s3:\n    region: "us-west-2"\n    bucket: "buildbuddy-bucket"\n    credentials_profile: "other-profile"\ncache:\n  redis_target: "my-redis.local:6379"\n  s3:\n    region: "us-west-2"\n    bucket: "buildbuddy-bucket"\n    credentials_profile: "other-profile"\n    ttl_days: 30\n'})}),"\n",(0,a.jsx)(n.h3,{id:"authentication-provider-integration",children:"Authentication Provider Integration"}),"\n",(0,a.jsx)(n.p,{children:"BuildBuddy supports OpenID Connect (OIDC) as a way of interacting with an Auth Provider like Google, Okta, or similar to authenticate your users when they log in. Configuring this is easy, below is an example of using BuildBuddy with Okta. Configuring your Auth Provider to support OIDC is outside the scope of this doc, but we\u2019ve done it for Google, Okta, and others, and are happy to lend a helping hand if you\u2019re stuck."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="config.yaml"',children:'auth:\n  oauth_providers:\n    - issuer_url: "https://your-custom-domain.okta.com"\n      client_id: "0aaa5twc0asdkUW123x6"\n      client_secret: "P8fRAYxWMmG9asd040GV2_q9MZ6esTJif1n4BubxU"\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Here\u2019s another example of Google login using credentials obtained from: ",(0,a.jsx)(n.a,{href:"https://console.developers.google.com/apis/credentials",children:"https://console.developers.google.com/apis/credentials"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="config.yaml"',children:'auth:\n  oauth_providers:\n    - issuer_url: "https://accounts.google.com"\n      client_id: "YOUR_CLIENT_ID.apps.googleusercontent.com"\n      Client_secret: "YOUR_CLIENT_SECRET"\n'})}),"\n",(0,a.jsx)(n.h3,{id:"certificate-based-authentication",children:"Certificate Based Authentication"}),"\n",(0,a.jsxs)(n.p,{children:["Your users can authenticate to BuildBuddy using an API key or they can use Certificate based authentication over mTLS. To configure mTLS, you must generate a new server certificate authority and key. You can do this using the ",(0,a.jsx)(n.code,{children:"openssl"})," command, for example:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'# Change these CN\'s to match your BuildBuddy host name\nSERVER_SUBJECT=buildbuddy.io\nPASS=$(openssl rand -base64 32) # <- Save this :)\n\n# Generates ca.key\nopenssl genrsa -passout pass:${PASS} -des3 -out ca.key 4096\n\n# Generates ca.crt\nopenssl req -passin pass:${PASS} -new -x509 -days 365000 -key ca.key -out ca.crt -subj "/CN=${SERVER_SUBJECT}"\n\n# Generates ca.pem\nopenssl pkcs8 -passin pass:${PASS} -topk8 -nocrypt -in ca.key -out ca.pem\n'})}),"\n",(0,a.jsx)(n.p,{children:"Then, you can use the generated ca.csr and ca.pem files in your BuildBuddy configuration like this:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="config.yaml"',children:"ssl:\n  enable_ssl: true\n  client_ca_cert_file: your_ca.crt\n  client_ca_key_file: your_ca.pem\n"})}),"\n",(0,a.jsx)(n.h3,{id:"remote-build-execution",children:"Remote Build Execution"}),"\n",(0,a.jsx)(n.p,{children:"To enable Remote Build Execution, you'll need to add the following to your config.yaml:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="config.yaml"',children:"remote_execution:\n  enable_remote_exec: true\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You'll also need to deploy executors to handle remote builds. The recommended way of deploying these is using our ",(0,a.jsx)(n.a,{href:"/docs/enterprise-helm",children:"Enterprise Helm Chart"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["For more information on configuring on-prem RBE, see our ",(0,a.jsx)(n.a,{href:"/docs/enterprise-rbe",children:"enterprise on-prem RBE setup docs"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"putting-it-all-together",children:"Putting It All Together"}),"\n",(0,a.jsx)(n.p,{children:"Here\u2019s what a fully-featured config.yaml looks like which includes all of the features listed above."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="config.yaml"',children:'app:\n  build_buddy_url: "https://app.buildbuddy.mydomain"\n  events_api_url: "grpcs://events.buildbuddy.mydomain:1986"\n  cache_api_url: "grpcs://cache.buildbuddy.mydomain:1986"\ndatabase:\n  data_source: "mysql://user:pass@tcp(12.34.56.78)/database_name"\nstorage:\n  ttl_seconds: 2592000 # 30 days\n  chunk_file_size_bytes: 3000000 # 3 MB\n  gcs:\n    bucket: "buildbuddy_prod_blobs"\n    project_id: "flame-build"\n    credentials_file: "your_service-acct.json"\ncache:\n  gcs:\n    bucket: "buildbuddy_cache"\n    project_id: "your_gcs_project_id"\n    credentials_file: "/path/to/your/credential/file.json"\n    ttl_days: 30\nauth:\n  oauth_providers:\n    - issuer_url: "https://your-custom-domain.okta.com"\n      client_id: "0aaa5twc0asdkUW123x6"\n      client_secret: "P8fRAYxWMmG9asd040GV2_q9MZ6esTJif1n4BubxU"\nssl:\n  enable_ssl: true\n  client_ca_cert_file: your_ca.crt\n  client_ca_key_file: your_ca.pem\nremote_execution:\n  enable_remote_exec: true\n'})}),"\n",(0,a.jsx)(n.h2,{id:"learn-more",children:"Learn more"}),"\n",(0,a.jsxs)(n.p,{children:["For more information on configuring BuildBuddy, see our ",(0,a.jsx)(n.a,{href:"/docs/config",children:"Configuration docs"}),". If you have questions please don\u2019t hesitate to email us at ",(0,a.jsx)(n.a,{href:"mailto:setup@buildbuddy.io",children:"setup@buildbuddy.io"})," or ping us on our ",(0,a.jsx)(n.a,{href:"https://community.buildbuddy.io",children:"Slack channel"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(96540);const a={},s=i.createContext(a);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);