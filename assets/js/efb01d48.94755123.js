"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[7075],{46710:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var i=t(74848),d=t(28453);const s={id:"config-samples",title:"Sample Configuration Files",sidebar_label:"Samples"},a=void 0,l={id:"config-samples",title:"Sample Configuration Files",description:"Running locally (disk only)",source:"@site/../docs/config-samples.md",sourceDirName:".",slug:"/config-samples",permalink:"/docs/config-samples",draft:!1,unlisted:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/config-samples.md",tags:[],version:"current",lastUpdatedBy:"Zoey Greer",lastUpdatedAt:1726089949,formattedLastUpdatedAt:"Sep 11, 2024",frontMatter:{id:"config-samples",title:"Sample Configuration Files",sidebar_label:"Samples"},sidebar:"someSidebar",previous:{title:"Overview",permalink:"/docs/config"},next:{title:"App",permalink:"/docs/config-app"}},r={},o=[{value:"Running locally (disk only)",id:"running-locally-disk-only",level:3},{value:"Running with MySQL and in-memory cache",id:"running-with-mysql-and-in-memory-cache",level:3},{value:"Enterprise",id:"enterprise",level:2},{value:"Running with your own auth provider",id:"running-with-your-own-auth-provider",level:3},{value:"Fully loaded",id:"fully-loaded",level:3}];function c(e){const n={code:"code",h2:"h2",h3:"h3",pre:"pre",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"running-locally-disk-only",children:"Running locally (disk only)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="config.yaml"',children:'app:\n  build_buddy_url: "http://localhost:8080"\ndatabase:\n  data_source: "sqlite3:///tmp/buildbuddy.db"\nstorage:\n  ttl_seconds: 86400 # One day in seconds.\n  chunk_file_size_bytes: 3000000 # 3 MB\n  disk:\n    root_directory: /tmp/buildbuddy\ncache:\n  max_size_bytes: 10000000000 # 10 GB\n  disk:\n    root_directory: /tmp/buildbuddy-cache\n'})}),"\n",(0,i.jsx)(n.h3,{id:"running-with-mysql-and-in-memory-cache",children:"Running with MySQL and in-memory cache"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="config.yaml"',children:'app:\n  build_buddy_url: "http://acme.corp"\ndatabase:\n  data_source: "mysql://buildbuddy_user:pAsSwOrD@tcp(12.34.56.78)/buildbuddy_db"\nstorage:\n  ttl_seconds: 86400 # One day in seconds.\n  chunk_file_size_bytes: 3000000 # 3 MB\n  disk:\n    root_directory: /data/buildbuddy\ncache:\n  max_size_bytes: 10000000000 # 10 GB\n  in_memory: true\n'})}),"\n",(0,i.jsx)(n.h2,{id:"enterprise",children:"Enterprise"}),"\n",(0,i.jsx)(n.h3,{id:"running-with-your-own-auth-provider",children:"Running with your own auth provider"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="config.yaml"',children:'app:\n  build_buddy_url: "http://acme.corp"\ndatabase:\n  data_source: "mysql://buildbuddy_user:pAsSwOrD@tcp(12.34.56.78)/buildbuddy_db"\nstorage:\n  ttl_seconds: 86400 # One day in seconds.\n  chunk_file_size_bytes: 3000000 # 3 MB\n  disk:\n    root_directory: /data/buildbuddy\ncache:\n  max_size_bytes: 10000000000 # 10 GB\n  in_memory: true\nauth:\n  oauth_providers:\n    - issuer_url: "https://accounts.google.com"\n      client_id: "12345678911-f1r0phjnhbabcdefm32etnia21keeg31.apps.googleusercontent.com"\n      client_secret: "sEcRetKeYgOeShErE"\n'})}),"\n",(0,i.jsx)(n.h3,{id:"fully-loaded",children:"Fully loaded"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="config.yaml"',children:'app:\n  build_buddy_url: "https://app.buildbuddy.mydomain"\n  events_api_url: "grpcs://events.buildbuddy.mydomain:1986"\n  cache_api_url: "grpcs://cache.buildbuddy.mydomain:1986"\ndatabase:\n  data_source: "mysql://user:pass@tcp(12.34.56.78)/database_name"\nstorage:\n  ttl_seconds: 2592000 # 30 days\n  chunk_file_size_bytes: 3000000 # 3 MB\n  gcs:\n    bucket: "buildbuddy_prod_blobs"\n    project_id: "flame-build"\n    credentials_file: "your_service-acct.json"\ncache:\n  redis_target: "12.34.56.79:6379"\n  gcs:\n    bucket: "buildbuddy_cache"\n    project_id: "your_gcs_project_id"\n    credentials_file: "/path/to/your/credential/file.json"\n    ttl_days: 30\nauth:\n  oauth_providers:\n    - issuer_url: "https://your-custom-domain.okta.com"\n      client_id: "0aaa5twc7sx0kUW123x6"\n      client_secret: "P8fRAYxWMmGhdA9040GV2_q9MZ6esTJif1n4BubxU"\nssl:\n  enable_ssl: true\n  client_ca_cert_file: your_ca.crt\n  client_ca_key_file: your_ca.pem\nremote_execution:\n  enable_remote_exec: true\n'})})]})}function u(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var i=t(96540);const d={},s=i.createContext(d);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);