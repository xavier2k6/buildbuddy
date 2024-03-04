"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[5035],{21869:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var r=l(85893),i=l(11151);const s={id:"enterprise-helm",title:"Enterprise Helm Charts",sidebar_label:"Enterprise Helm Charts"},t=void 0,d={id:"enterprise-helm",title:"Enterprise Helm Charts",description:"If you run or have access to a Kubernetes cluster and are comfortable with Helm, we maintain official BuildBuddy Helm charts that are easy to configure and deploy.",source:"@site/../docs/enterprise-helm.md",sourceDirName:".",slug:"/enterprise-helm",permalink:"/docs/enterprise-helm",draft:!1,unlisted:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/enterprise-helm.md",tags:[],version:"current",lastUpdatedBy:"Lulu Zhang",lastUpdatedAt:1709572165,formattedLastUpdatedAt:"Mar 4, 2024",frontMatter:{id:"enterprise-helm",title:"Enterprise Helm Charts",sidebar_label:"Enterprise Helm Charts"},sidebar:"someSidebar",previous:{title:"Enterprise Configuration",permalink:"/docs/enterprise-config"},next:{title:"Enterprise RBE Setup",permalink:"/docs/enterprise-rbe"}},a={},o=[{value:"TL;DR",id:"tldr",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installing the repo",id:"installing-the-repo",level:2},{value:"Installing the Chart",id:"installing-the-chart",level:2},{value:"Uninstalling the Chart",id:"uninstalling-the-chart",level:2},{value:"Updating your release",id:"updating-your-release",level:2},{value:"Writing deployment to a file",id:"writing-deployment-to-a-file",level:2},{value:"Example configurations",id:"example-configurations",level:3},{value:"Example MySQL configuration",id:"example-mysql-configuration",level:3},{value:"Example external database configuration",id:"example-external-database-configuration",level:3},{value:"Example ingress and certs configuration",id:"example-ingress-and-certs-configuration",level:3},{value:"Example with auth (required for enterprise features)",id:"example-with-auth-required-for-enterprise-features",level:2},{value:"Example with remote build execution",id:"example-with-remote-build-execution",level:2},{value:"More examples",id:"more-examples",level:2},{value:"Local development",id:"local-development",level:3},{value:"Learn more",id:"learn-more",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["If you run or have access to a Kubernetes cluster and are comfortable with ",(0,r.jsx)(n.a,{href:"https://helm.sh/",children:"Helm"}),", we maintain official BuildBuddy Helm charts that are easy to configure and deploy."]}),"\n",(0,r.jsx)(n.p,{children:"They have options to deploy everything necessary to use all of BuildBuddy's bells and whistles - including MySQL, nginx, remote build execution and more."}),"\n",(0,r.jsxs)(n.p,{children:["The official BuildBuddy charts live in our ",(0,r.jsx)(n.a,{href:"https://github.com/buildbuddy-io/buildbuddy-helm",children:"buildbuddy-helm repo"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"tldr",children:"TL;DR"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"helm repo add buildbuddy https://helm.buildbuddy.io\nhelm install buildbuddy buildbuddy/buildbuddy-enterprise \\\n  --set mysql.mysqlUser=sampleUser \\\n  --set mysql.mysqlPassword=samplePassword\n"})}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Kubernetes 1.15+ with Beta APIs enabled"}),"\n",(0,r.jsx)(n.li,{children:"Helm v2/v3"}),"\n",(0,r.jsx)(n.li,{children:"Tiller (the Helm v2 server-side component) installed on the cluster"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"installing-the-repo",children:"Installing the repo"}),"\n",(0,r.jsx)(n.p,{children:"To install the BuildBuddy Helm repo:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"helm repo add buildbuddy https://helm.buildbuddy.io\n"})}),"\n",(0,r.jsx)(n.h2,{id:"installing-the-chart",children:"Installing the Chart"}),"\n",(0,r.jsxs)(n.p,{children:["To install the chart with the release name ",(0,r.jsx)(n.code,{children:"my-release"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"$ helm install my-release buildbuddy/buildbuddy-enterprise\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Helm v2 command"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"$ helm install --name my-release buildbuddy/buildbuddy-enterprise\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The command deploys BuildBuddy on the Kubernetes cluster in the default configuration. The ",(0,r.jsx)(n.a,{href:"#configuration",children:"configuration"}),"\nsection lists the parameters that can be configured during installation."]}),"\n",(0,r.jsx)(n.h2,{id:"uninstalling-the-chart",children:"Uninstalling the Chart"}),"\n",(0,r.jsxs)(n.p,{children:["To uninstall/delete the ",(0,r.jsx)(n.code,{children:"my-release"})," deployment:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"$ helm delete my-release\n"})}),"\n",(0,r.jsx)(n.p,{children:"The command removes all the Kubernetes components associated with the chart and deletes the release."}),"\n",(0,r.jsx)(n.h2,{id:"updating-your-release",children:"Updating your release"}),"\n",(0,r.jsx)(n.p,{children:"If you change configuration, you can update your deployment:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"$ helm upgrade my-release -f my-values.yaml buildbuddy/buildbuddy-enterprise\n"})}),"\n",(0,r.jsx)(n.h2,{id:"writing-deployment-to-a-file",children:"Writing deployment to a file"}),"\n",(0,r.jsxs)(n.p,{children:["You can write your Kubernetes deployment configuration to a file with release name ",(0,r.jsx)(n.code,{children:"my-release"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"$ helm template my-release buildbuddy/buildbuddy-enterprise > buildbuddy-deploy.yaml\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can then check this configuration in to your source repository, or manually apply it to your cluster with:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"$ kubectl apply -f buildbuddy-deploy.yaml\n"})}),"\n",(0,r.jsx)(n.h3,{id:"example-configurations",children:"Example configurations"}),"\n",(0,r.jsxs)(n.p,{children:["Below are some examples of ",(0,r.jsx)(n.code,{children:".yaml"})," files with values that could be passed to the ",(0,r.jsx)(n.code,{children:"helm"}),"\ncommand with the ",(0,r.jsx)(n.code,{children:"-f"})," or ",(0,r.jsx)(n.code,{children:"--values"})," flag to get started."]}),"\n",(0,r.jsx)(n.h3,{id:"example-mysql-configuration",children:"Example MySQL configuration"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'mysql:\n  enabled: true\n  mysqlUser: "sampleUser"\n  mysqlPassword: "samplePassword"\n'})}),"\n",(0,r.jsx)(n.h3,{id:"example-external-database-configuration",children:"Example external database configuration"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'mysql:\n  enabled: false\n\nconfig:\n  database:\n    ## mysql:     "mysql://<USERNAME>:<PASSWORD>@tcp(<HOST>:3306)/<DATABASE_NAME>"\n    ## sqlite:    "sqlite3:///tmp/buildbuddy-enterprise.db"\n    data_source: "" # Either set this or mysql.enabled, not both!\n'})}),"\n",(0,r.jsx)(n.h3,{id:"example-ingress-and-certs-configuration",children:"Example ingress and certs configuration"}),"\n",(0,r.jsxs)(n.p,{children:["Note: make sure to run ",(0,r.jsx)(n.code,{children:"kubectl apply --validate=false -f https://github.com/jetstack/cert-manager/releases/download/v0.16.1/cert-manager.crds.yaml"})," to install CRDs before deploying this configuration."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'ingress:\n  enabled: true\n  sslEnabled: true\n  httpHost: buildbuddy.example.com\n  grpcHost: buildbuddy-grpc.example.com\n\nmysql:\n  enabled: true\n  mysqlUser: "sampleUser"\n  mysqlPassword: "samplePassword"\n\ncertmanager:\n  enabled: true\n  emailAddress: your-email@gmail.com\n\nconfig:\n  app:\n    build_buddy_url: "https://buildbuddy.example.com"\n    events_api_url: "grpcs://buildbuddy-grpc.example.com"\n    cache_api_url: "grpcs://buildbuddy-grpc.example.com"\n  ssl:\n    enable_ssl: true\n'})}),"\n",(0,r.jsx)(n.h2,{id:"example-with-auth-required-for-enterprise-features",children:"Example with auth (required for enterprise features)"}),"\n",(0,r.jsx)(n.p,{children:"Auth can be configured with any provider that supports OpenID Connect (OIDC) including Google GSuite, Okta, Auth0 and others."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'ingress:\n  enabled: true\n  sslEnabled: true\n  httpHost: buildbuddy.example.com\n  grpcHost: buildbuddy-grpc.example.com\n\nmysql:\n  enabled: true\n  mysqlUser: "sampleUser"\n  mysqlPassword: "samplePassword"\n\ncertmanager:\n  enabled: true\n  emailAddress: your-email@gmail.com\n\nconfig:\n  app:\n    build_buddy_url: "https://buildbuddy.example.com"\n    events_api_url: "grpcs://buildbuddy-grpc.example.com"\n    cache_api_url: "grpcs://buildbuddy-grpc.example.com"\n  auth:\n    ## To use Google auth, get client_id and client_secret here:\n    ## https://console.developers.google.com/apis/credentials\n    oauth_providers:\n      - issuer_url: "https://accounts.google.com" # OpenID Connect Discovery URL\n        client_id: "MY_CLIENT_ID"\n        client_secret: "MY_CLIENT_SECRET"\n  ssl:\n    enable_ssl: true\n'})}),"\n",(0,r.jsx)(n.h2,{id:"example-with-remote-build-execution",children:"Example with remote build execution"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"executor:\n  enabled: true\n  replicas: 3\nredis:\n  enabled: true\nconfig:\n  remote_execution:\n    enable_remote_exec: true\n"})}),"\n",(0,r.jsx)(n.h2,{id:"more-examples",children:"More examples"}),"\n",(0,r.jsxs)(n.p,{children:["For more example ",(0,r.jsx)(n.code,{children:"config:"})," blocks, see our ",(0,r.jsx)(n.a,{href:"https://www.buildbuddy.io/docs/config#configuration-options",children:"configuration docs"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"local-development",children:"Local development"}),"\n",(0,r.jsxs)(n.p,{children:["For local testing use ",(0,r.jsx)(n.a,{href:"https://github.com/kubernetes/minikube",children:"minikube"})]}),"\n",(0,r.jsxs)(n.p,{children:["Create local cluster using with specified Kubernetes version (e.g. ",(0,r.jsx)(n.code,{children:"1.15.6"}),")"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"$ minikube start --kubernetes-version v1.15.6\n"})}),"\n",(0,r.jsx)(n.p,{children:"Initialize helm"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"$ helm init\n"})}),"\n",(0,r.jsx)(n.p,{children:"Above command is not required for Helm v3"}),"\n",(0,r.jsx)(n.p,{children:"Get dependencies"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"$ helm dependency update\n"})}),"\n",(0,r.jsx)(n.p,{children:"Perform local installation"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"$ helm install . \\\n    --set image.tag=5.12.4 \\\n    --set mysql.mysqlUser=sampleUser \\\n    --set mysql.mysqlPassword=samplePassword\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Helm v3 command"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"$ helm install . \\\n    --generate-name \\\n    --set image.tag=5.12.4 \\\n    --set mysql.mysqlUser=sampleUser \\\n    --set mysql.mysqlPassword=samplePassword\n"})}),"\n",(0,r.jsx)(n.h2,{id:"learn-more",children:"Learn more"}),"\n",(0,r.jsx)(n.p,{children:"For more information on configuring your BuildBuddy Enterprise Helm deploy, check out the chart:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/buildbuddy-io/buildbuddy-helm/tree/master/charts/buildbuddy-enterprise",children:"BuildBuddy Enterprise"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For more information on configuring BuildBuddy, see our ",(0,r.jsx)(n.a,{href:"/docs/config",children:"Configuration docs"}),". If you have questions please don\u2019t hesitate to email us at ",(0,r.jsx)(n.a,{href:"mailto:setup@buildbuddy.io",children:"setup@buildbuddy.io"})," or ping us on our ",(0,r.jsx)(n.a,{href:"https://community.buildbuddy.io",children:"Slack channel"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,n,l)=>{l.d(n,{Z:()=>d,a:()=>t});var r=l(67294);const i={},s=r.createContext(i);function t(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);