"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[2187],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1131:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),i=["components"],l={id:"config-storage",title:"Storage Configuration",sidebar_label:"Storage"},s=void 0,c={unversionedId:"config-storage",id:"config-storage",title:"Storage Configuration",description:"storage: The Storage section configures where and how BuildBuddy will store blob data. Required",source:"@site/../docs/config-storage.md",sourceDirName:".",slug:"/config-storage",permalink:"/docs/config-storage",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/config-storage.md",tags:[],version:"current",lastUpdatedBy:"Brandon Duffany",lastUpdatedAt:1682690374,formattedLastUpdatedAt:"4/28/2023",frontMatter:{id:"config-storage",title:"Storage Configuration",sidebar_label:"Storage"},sidebar:"someSidebar",previous:{title:"Database",permalink:"/docs/config-database"},next:{title:"Cache",permalink:"/docs/config-cache"}},p=[{value:"Options",id:"options",children:[],level:2},{value:"Example sections",id:"example-sections",children:[{value:"Disk",id:"disk",children:[],level:3},{value:"GCS",id:"gcs",children:[],level:3},{value:"AWS S3",id:"aws-s3",children:[],level:3},{value:"Minio",id:"minio",children:[],level:3},{value:"Azure",id:"azure",children:[],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"storage:")," The Storage section configures where and how BuildBuddy will store blob data. ",(0,o.kt)("strong",{parentName:"p"},"Required")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,"One of the following sections is ",(0,o.kt)("strong",{parentName:"p"},"Required")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"disk:")," The Disk section configures disk-based blob storage."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"root_directory")," The root directory to store all blobs in, if using disk based storage. This directory must be readable and writable by the BuildBuddy process. The directory will be created if it does not exist."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"gcs:")," The GCS section configures Google Cloud Storage based blob storage."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"bucket")," The name of the GCS bucket to store files in. Will be created if it does not already exist.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"credentials_file")," A path to a ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/docs/authentication/getting-started"},"JSON credentials file")," that will be used to authenticate to GCS.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"project_id")," The Google Cloud project ID of the project owning the above credentials and GCS bucket.")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"aws_s3:")," The AWS section configures AWS S3 storage."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"region")," The AWS region")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"bucket")," The AWS S3 bucket (will be created automatically)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"credentials_profile")," If a profile other than default is chosen, use that one.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"By default, the S3 blobstore will rely on environment variables, shared credentials, or IAM roles. See ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html#specifying-credentials"},"AWS Go SDK docs")," for more information.")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"azure:")," The Azure section configures Azure Storage."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"account_name")," The name of the Azure storage account")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"account_key")," The key for the Azure storage account")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"container_name")," The name of the Azure storage container."))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Optional")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"chunk_file_size_bytes:")," How many bytes to buffer in memory before flushing a chunk of build protocol data to disk.")),(0,o.kt)("h2",{id:"example-sections"},"Example sections"),(0,o.kt)("h3",{id:"disk"},"Disk"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"storage:\n  ttl_seconds: 86400  # One day in seconds.\n  chunk_file_size_bytes: 3000000  # 3 MB\n  disk:\n    root_directory: /tmp/buildbuddy\n")),(0,o.kt)("h3",{id:"gcs"},"GCS"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'storage:\n  ttl_seconds: 0  # No TTL.\n  chunk_file_size_bytes: 3000000  # 3 MB\n  gcs:\n    bucket: "buildbuddy_blobs"\n    project_id: "my-cool-project"\n    credentials_file: "enterprise/config/my-cool-project-7a9d15f66e69.json"\n')),(0,o.kt)("h3",{id:"aws-s3"},"AWS S3"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'storage:\n  aws_s3:\n    # required\n    region: "us-west-2"\n    bucket: "buildbuddy-bucket"\n    # optional\n    credentials_profile: "other-profile"\n')),(0,o.kt)("h3",{id:"minio"},"Minio"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'storage:\n  aws_s3:\n    static_credentials_id: "YOUR_MINIO_ACCESS_KEY"\n    static_credentials_secret: "YOUR_MINIO_SECRET"\n    endpoint: "http://localhost:9000"\n    disable_ssl: true\n    s3_force_path_style: true\n    region: "us-east-1"\n    bucket: "buildbuddy-storage-bucket"\n')),(0,o.kt)("h3",{id:"azure"},"Azure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'storage:\n  azure:\n    account_name: "mytestblobstore"\n    account_key: "XXXxxxXXXxXXXXxxXXXXXxXXXXXxX"\n    container_name: "my-container"\n')))}d.isMDXComponent=!0}}]);