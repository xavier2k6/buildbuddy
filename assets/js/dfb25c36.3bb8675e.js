"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[2187],{46280:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var i=s(85893),o=s(11151);const t={id:"config-storage",title:"Storage Configuration",sidebar_label:"Storage"},r=void 0,d={id:"config-storage",title:"Storage Configuration",description:"storage: The Storage section configures where and how BuildBuddy will store blob data. Required",source:"@site/../docs/config-storage.md",sourceDirName:".",slug:"/config-storage",permalink:"/docs/config-storage",draft:!1,unlisted:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/config-storage.md",tags:[],version:"current",lastUpdatedBy:"Lulu Zhang",lastUpdatedAt:1702055153,formattedLastUpdatedAt:"Dec 8, 2023",frontMatter:{id:"config-storage",title:"Storage Configuration",sidebar_label:"Storage"},sidebar:"someSidebar",previous:{title:"Database",permalink:"/docs/config-database"},next:{title:"Cache",permalink:"/docs/config-cache"}},c={},l=[{value:"Options",id:"options",level:2},{value:"Example sections",id:"example-sections",level:2},{value:"Disk",id:"disk",level:3},{value:"GCS",id:"gcs",level:3},{value:"AWS S3",id:"aws-s3",level:3},{value:"Minio",id:"minio",level:3},{value:"Azure",id:"azure",level:3}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"storage:"})," The Storage section configures where and how BuildBuddy will store blob data. ",(0,i.jsx)(n.strong,{children:"Required"})]}),"\n",(0,i.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,i.jsxs)(n.p,{children:["One of the following sections is ",(0,i.jsx)(n.strong,{children:"Required"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"disk:"})," The Disk section configures disk-based blob storage."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"root_directory"})," The root directory to store all blobs in, if using disk based storage. This directory must be readable and writable by the BuildBuddy process. The directory will be created if it does not exist."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"gcs:"})," The GCS section configures Google Cloud Storage based blob storage."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"bucket"})," The name of the GCS bucket to store files in. Will be created if it does not already exist."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"credentials_file"})," A path to a ",(0,i.jsx)(n.a,{href:"https://cloud.google.com/docs/authentication/getting-started",children:"JSON credentials file"})," that will be used to authenticate to GCS."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"project_id"})," The Google Cloud project ID of the project owning the above credentials and GCS bucket."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"aws_s3:"})," The AWS section configures AWS S3 storage."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"region"})," The AWS region"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"bucket"})," The AWS S3 bucket (will be created automatically)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"credentials_profile"})," If a profile other than default is chosen, use that one."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["By default, the S3 blobstore will rely on environment variables, shared credentials, or IAM roles. See ",(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html#specifying-credentials",children:"AWS Go SDK docs"})," for more information."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"azure:"})," The Azure section configures Azure Storage."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"account_name"})," The name of the Azure storage account"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"account_key"})," The key for the Azure storage account"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"container_name"})," The name of the Azure storage container."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Optional"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"chunk_file_size_bytes:"})," How many bytes to buffer in memory before flushing a chunk of build protocol data to disk."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example-sections",children:"Example sections"}),"\n",(0,i.jsx)(n.h3,{id:"disk",children:"Disk"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"storage:\n  ttl_seconds: 86400  # One day in seconds.\n  chunk_file_size_bytes: 3000000  # 3 MB\n  disk:\n    root_directory: /tmp/buildbuddy\n"})}),"\n",(0,i.jsx)(n.h3,{id:"gcs",children:"GCS"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'storage:\n  ttl_seconds: 0  # No TTL.\n  chunk_file_size_bytes: 3000000  # 3 MB\n  gcs:\n    bucket: "buildbuddy_blobs"\n    project_id: "my-cool-project"\n    credentials_file: "enterprise/config/my-cool-project-7a9d15f66e69.json"\n'})}),"\n",(0,i.jsx)(n.h3,{id:"aws-s3",children:"AWS S3"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'storage:\n  aws_s3:\n    # required\n    region: "us-west-2"\n    bucket: "buildbuddy-bucket"\n    # optional\n    credentials_profile: "other-profile"\n'})}),"\n",(0,i.jsx)(n.h3,{id:"minio",children:"Minio"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'storage:\n  aws_s3:\n    static_credentials_id: "YOUR_MINIO_ACCESS_KEY"\n    static_credentials_secret: "YOUR_MINIO_SECRET"\n    endpoint: "http://localhost:9000"\n    s3_force_path_style: true\n    region: "us-east-1"\n    bucket: "buildbuddy-storage-bucket"\n'})}),"\n",(0,i.jsx)(n.h3,{id:"azure",children:"Azure"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'storage:\n  azure:\n    account_name: "mytestblobstore"\n    account_key: "XXXxxxXXXxXXXXxxXXXXXxXXXXXxX"\n    container_name: "my-container"\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>r});var i=s(67294);const o={},t=i.createContext(o);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);