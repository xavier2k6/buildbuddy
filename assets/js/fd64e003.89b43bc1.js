"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[4339],{61705:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>a,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=t(85893),l=t(11151);const r={id:"rbe-pools",title:"RBE Executor Pools",sidebar_label:"RBE Executor Pools"},s=void 0,i={id:"rbe-pools",title:"RBE Executor Pools",description:"By default, all BuildBuddy executors are placed in a single pool - and any task can run on any executor (running the same operating system and cpu architecture).",source:"@site/../docs/rbe-pools.md",sourceDirName:".",slug:"/rbe-pools",permalink:"/docs/rbe-pools",draft:!1,unlisted:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/rbe-pools.md",tags:[],version:"current",lastUpdatedBy:"Brandon Duffany",lastUpdatedAt:1704207755,formattedLastUpdatedAt:"Jan 2, 2024",frontMatter:{id:"rbe-pools",title:"RBE Executor Pools",sidebar_label:"RBE Executor Pools"},sidebar:"someSidebar",previous:{title:"RBE with GitHub Actions",permalink:"/docs/rbe-github-actions"},next:{title:"Workflows introduction",permalink:"/docs/workflows-introduction"}},a={},d=[{value:"Deploying executors in a pool",id:"deploying-executors-in-a-pool",level:2},{value:"Setting the app&#39;s default pool name",id:"setting-the-apps-default-pool-name",level:2},{value:"Selecting a pool to run your builds on",id:"selecting-a-pool-to-run-your-builds-on",level:2},{value:"Platform level",id:"platform-level",level:3},{value:"Target level",id:"target-level",level:3}];function u(e){const o={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.p,{children:"By default, all BuildBuddy executors are placed in a single pool - and any task can run on any executor (running the same operating system and cpu architecture)."}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.a,{href:"/docs/rbe-platforms",children:"Platforms"})," can be used to specify custom Docker images in which to run your actions, but sometimes you want control over more properties of the executor machine - like available memory, access to GPUs, or physical location."]}),"\n",(0,n.jsx)(o.p,{children:"To support these use cases, BuildBuddy allows executors to be registered in different pools - and for Bazel to select from these pools at either the Platform level or the target level, depending on your needs."}),"\n",(0,n.jsx)(o.h2,{id:"deploying-executors-in-a-pool",children:"Deploying executors in a pool"}),"\n",(0,n.jsxs)(o.p,{children:["When creating an executor deployment, you can specify the name of the pool its executors should be registered to with the ",(0,n.jsx)(o.code,{children:"MY_POOL"})," environment variable. This can be set to any string value."]}),"\n",(0,n.jsxs)(o.p,{children:["If using the ",(0,n.jsx)(o.code,{children:"buildbuddy/buildbuddy-executor"})," ",(0,n.jsx)(o.a,{href:"https://github.com/buildbuddy-io/buildbuddy-helm/tree/master/charts/buildbuddy-executor",children:"Helm charts"}),", you can set this using the ",(0,n.jsx)(o.a,{href:"https://github.com/buildbuddy-io/buildbuddy-helm/blob/master/charts/buildbuddy-executor/values.yaml#L15",children:"poolName value"}),"."]}),"\n",(0,n.jsx)(o.h2,{id:"setting-the-apps-default-pool-name",children:"Setting the app's default pool name"}),"\n",(0,n.jsxs)(o.p,{children:["By default, both executors and the BuildBuddy app do not set a pool name and any RBE request that comes in without a ",(0,n.jsx)(o.code,{children:"Pool"})," property set will be sent to the default pool. If you'd like requests without a ",(0,n.jsx)(o.code,{children:"Pool"})," property to be sent to a different default pool, you can set the app's ",(0,n.jsx)(o.code,{children:"default_pool_name"})," in the ",(0,n.jsx)(o.code,{children:"remote_execution"})," block of its ",(0,n.jsx)(o.code,{children:"config.yaml"}),"."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"remote_execution:\n    enable_remote_exec: true\n    default_pool_name: my-default-pool\n"})}),"\n",(0,n.jsx)(o.h2,{id:"selecting-a-pool-to-run-your-builds-on",children:"Selecting a pool to run your builds on"}),"\n",(0,n.jsx)(o.p,{children:"Now that you've deployed multiple executor pools, you can select which pool you'd like your builds to run on - either at the platform level or the target level."}),"\n",(0,n.jsx)(o.h3,{id:"platform-level",children:"Platform level"}),"\n",(0,n.jsx)(o.p,{children:"You can configure BuildBuddy RBE to use a custom executor pool at the platform level, by adding the following rule to a BUILD file:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:'platform(\n    name = "gpu_platform",\n    exec_properties = {\n        "OSFamily": "Linux",\n        "Pool": "my-gpu-pool",\n    },\n)\n'})}),"\n",(0,n.jsxs)(o.p,{children:["Make sure to replace ",(0,n.jsx)(o.code,{children:"my-gpu-pool"})," with your docker image url."]}),"\n",(0,n.jsx)(o.p,{children:"You can then pass this configuration to BuildBuddy RBE with the following flag:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"--host_platform=//:gpu_platform\n"})}),"\n",(0,n.jsx)(o.p,{children:"This assumes you've placed this rule in your root BUILD file. If you place it elsewhere, make sure to update the path accordingly."}),"\n",(0,n.jsx)(o.h3,{id:"target-level",children:"Target level"}),"\n",(0,n.jsxs)(o.p,{children:["If you want different targets to run in different RBE environments, you can specify ",(0,n.jsx)(o.code,{children:"exec_properties"})," at the target level. For example if you want to run one set of tests in a high-memory pool, or another set of targets on executors with GPUs."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:'go_test(\n    name = "memory_hogging_test",\n    srcs = ["memory_hogging_test.go"],\n    embed = [":go_default_library"],\n    exec_properties = {\n        "Pool": "high-memory-pool",\n    },\n)\n'})})]})}function c(e={}){const{wrapper:o}={...(0,l.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},11151:(e,o,t)=>{t.d(o,{Z:()=>i,a:()=>s});var n=t(67294);const l={},r=n.createContext(l);function s(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);