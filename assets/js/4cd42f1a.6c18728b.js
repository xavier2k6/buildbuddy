"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[3608],{60325:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var s=i(85893),c=i(11151);const t={id:"config-cache",title:"Cache Configuration",sidebar_label:"Cache"},r=void 0,l={id:"config-cache",title:"Cache Configuration",description:"Section",source:"@site/../docs/config-cache.md",sourceDirName:".",slug:"/config-cache",permalink:"/docs/config-cache",draft:!1,unlisted:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/config-cache.md",tags:[],version:"current",lastUpdatedBy:"Iain Macdonald",lastUpdatedAt:1722544857,formattedLastUpdatedAt:"Aug 1, 2024",frontMatter:{id:"config-cache",title:"Cache Configuration",sidebar_label:"Cache"},sidebar:"someSidebar",previous:{title:"Storage",permalink:"/docs/config-storage"},next:{title:"GitHub",permalink:"/docs/config-github"}},o={},d=[{value:"Section",id:"section",level:2},{value:"Options",id:"options",level:2},{value:"Example section",id:"example-section",level:2},{value:"Disk",id:"disk",level:3},{value:"GCS &amp; Redis (Enterprise only)",id:"gcs--redis-enterprise-only",level:3},{value:"S3 (Enterprise only)",id:"s3-enterprise-only",level:3},{value:"Minio (Enterprise only)",id:"minio-enterprise-only",level:3}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"section",children:"Section"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"cache:"})," The cache section enables the BuildBuddy cache and configures how and where it will store data. ",(0,s.jsx)(n.strong,{children:"Optional"})]}),"\n",(0,s.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Optional"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"max_size_bytes:"})," How big to allow the cache to be (in bytes)."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"in_memory:"})," Whether or not to use the in_memory cache."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"zstd_transcoding_enabled"}),": Whether or not to enable cache compression capabilities. You need to use ",(0,s.jsx)(n.code,{children:"--experimental_remote_cache_compression"})," to activate it on your build."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"disk:"})," The Disk section configures a disk-based cache."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"root_directory"})," The root directory to store cache data in, if using the disk cache. This directory must be readable and writable by the BuildBuddy process. The directory will be created if it does not exist."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Enterprise only"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"redis_target"}),": A redis target for improved RBE performance."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"gcs:"})," The GCS section configures Google Cloud Storage based blob storage."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"bucket"})," The name of the GCS bucket to store files in. Will be created if it does not already exist."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"credentials_file"})," A path to a ",(0,s.jsx)(n.a,{href:"https://cloud.google.com/docs/authentication/getting-started",children:"JSON credentials file"})," that will be used to authenticate to GCS."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"project_id"})," The Google Cloud project ID of the project owning the above credentials and GCS bucket."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ttl_days"})," The period after which cache files should be TTLd. Disabled if 0."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"s3:"})," The AWS section configures AWS S3 storage."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"region"})," The AWS region"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"bucket"})," The AWS S3 bucket (will be created automatically)"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"credentials_profile"})," If a profile other than default is chosen, use that one."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ttl_days"})," The period after which cache files should be TTLd. Disabled if 0."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["By default, the S3 blobstore will rely on environment variables, shared credentials, or IAM roles. See ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html#specifying-credentials",children:"AWS Go SDK docs"})," for more information."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example-section",children:"Example section"}),"\n",(0,s.jsx)(n.h3,{id:"disk",children:"Disk"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="config.yaml"',children:"cache:\n  max_size_bytes: 10000000000 # 10 GB\n  disk:\n    root_directory: /tmp/buildbuddy-cache\n"})}),"\n",(0,s.jsx)(n.h3,{id:"gcs--redis-enterprise-only",children:"GCS & Redis (Enterprise only)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="config.yaml"',children:'cache:\n  redis_target: "my-redis.local:6379"\n  gcs:\n    bucket: "buildbuddy_blobs"\n    project_id: "my-cool-project"\n    credentials_file: "enterprise/config/my-cool-project-7a9d15f66e69.json"\n    ttl_days: 30\n'})}),"\n",(0,s.jsx)(n.h3,{id:"s3-enterprise-only",children:"S3 (Enterprise only)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="config.yaml"',children:'cache:\n  s3:\n    # required\n    region: "us-west-2"\n    bucket: "buildbuddy-bucket"\n    # optional\n    credentials_profile: "other-profile"\n    ttl_days: 30\n'})}),"\n",(0,s.jsx)(n.h3,{id:"minio-enterprise-only",children:"Minio (Enterprise only)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="config.yaml"',children:'cache:\n  s3:\n    static_credentials_id: "YOUR_MINIO_ACCESS_KEY"\n    static_credentials_secret: "YOUR_MINIO_SECRET"\n    endpoint: "http://localhost:9000"\n    s3_force_path_style: true\n    region: "us-east-1"\n    bucket: "buildbuddy-cache-bucket"\n'})})]})}function h(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>r});var s=i(67294);const c={},t=s.createContext(c);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);