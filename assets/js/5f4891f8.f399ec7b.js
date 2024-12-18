"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[8758],{53453:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"workflows-introduction","title":"Introduction to Workflows","description":"BuildBuddy Workflows is a Continuous Integration (CI) solution for Bazel","source":"@site/../docs/workflows-introduction.md","sourceDirName":".","slug":"/workflows-introduction","permalink":"/docs/workflows-introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/workflows-introduction.md","tags":[],"version":"current","lastUpdatedBy":"Zoey Greer","lastUpdatedAt":1734530822000,"frontMatter":{"id":"workflows-introduction","title":"Introduction to Workflows","sidebar_label":"Workflows introduction"},"sidebar":"someSidebar","previous":{"title":"RBE Executor Pools","permalink":"/docs/rbe-pools"},"next":{"title":"Workflows setup","permalink":"/docs/workflows-setup"}}');var o=s(74848),i=s(28453);const r={id:"workflows-introduction",title:"Introduction to Workflows",sidebar_label:"Workflows introduction"},a=void 0,l={},c=[{value:"Colocation with BuildBuddy servers",id:"colocation-with-buildbuddy-servers",level:2},{value:"Hosted, warm, Bazel instances",id:"hosted-warm-bazel-instances",level:2},{value:"Bazel instance matching",id:"bazel-instance-matching",level:3},{value:"Firecracker VMs (Linux only)",id:"firecracker-vms-linux-only",level:4},{value:"Runner recycling (macOS only)",id:"runner-recycling-macos-only",level:4},{value:"Getting started",id:"getting-started",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"BuildBuddy Workflows is a Continuous Integration (CI) solution for Bazel\nrepositories hosted on GitHub."}),"\n",(0,o.jsx)(n.p,{children:"BuildBuddy Workflows are specifically designed for Bazel builds, and are\ntightly integrated with BuildBuddy RBE and Remote Caching, making them\nsignificantly faster than other CI options."}),"\n",(0,o.jsx)(n.p,{children:"BuildBuddy Workflows provides the following unique advantages:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Colocation with BuildBuddy servers, ensuring a ",(0,o.jsx)(n.strong,{children:"fast network\nconnection between Bazel and BuildBuddy's RBE & caching servers"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Running workflows against ",(0,o.jsx)(n.strong,{children:"hosted, warm, Bazel instances"})," using VM\nsnapshotting (on Linux) and persistent runners (on macOS)."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"https://www.buildbuddy.io/blog/meet-buildbuddy-workflows",children:"our blog post"}),"\nfor more details on the motivation behind workflows as well as some\nreal-world results."]}),"\n",(0,o.jsx)(n.h2,{id:"colocation-with-buildbuddy-servers",children:"Colocation with BuildBuddy servers"}),"\n",(0,o.jsx)(n.p,{children:"Network latency is often the biggest bottleneck in many Bazel Remote Build\nExecution and Remote Caching setups. This is because Bazel's remote APIs\nrequire several chained RPCs due to dependencies between actions."}),"\n",(0,o.jsx)(n.p,{children:"To address this bottleneck, BuildBuddy Workflows are executed in the same\ndatacenters where BuildBuddy RBE and Cache nodes are deployed. This\nresults in sub-millisecond round trip times to BuildBuddy's servers,\nminimizing the overhead incurred by Bazel's remote APIs."}),"\n",(0,o.jsx)(n.h2,{id:"hosted-warm-bazel-instances",children:"Hosted, warm, Bazel instances"}),"\n",(0,o.jsx)(n.p,{children:"Running Bazel on most CI solutions is typically expensive and slow.\nThere are several sources of overhead:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"When using Bazelisk, Bazel itself is re-downloaded and extracted on each\nCI run."}),"\n",(0,o.jsx)(n.li,{children:"The Bazel server starts from a cold JVM, meaning that it will be running\nunoptimized code until the JIT compiler kicks in."}),"\n",(0,o.jsx)(n.li,{children:"Bazel's analysis cache starts empty, which often means the entire\nworkspace has to be re-scanned on each CI run."}),"\n",(0,o.jsx)(n.li,{children:"Any remote repositories referenced by the Bazel workspace all have to be\nre-fetched on each run."}),"\n",(0,o.jsx)(n.li,{children:"Bazel's on-disk cache starts completely empty, causing action\nre-execution or excess remote cache usage."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["A common solution is to use something like\n",(0,o.jsx)(n.a,{href:"https://github.com/actions/cache",children:"actions/cache"})," to store Bazel's cache\nfor reuse between runs, but this solution is extremely data-intensive, as\nBazel's cache can be several GB in size and consist of many individual\nfiles which are expensive to unpack from an archive. It also does not\nsolve the problems associated with the Bazel server having starting from\nscratch."]}),"\n",(0,o.jsxs)(n.p,{children:["By contrast, BuildBuddy uses a Bazel workspace reuse approach, similar to\nhow ",(0,o.jsx)(n.a,{href:"https://dl.acm.org/doi/pdf/10.1145/3395363.3397371",children:"Google's Build Dequeuing Service"})," performs\nworkspace selection:"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"A well-chosen workspace can increase the build speed by an\norder of magnitude by reusing the various cached results from the\nprevious execution. [...] We have observed that builds that execute the same targets as a previous\nbuild are effectively no-ops using this technique"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"bazel-instance-matching",children:"Bazel instance matching"}),"\n",(0,o.jsxs)(n.p,{children:["To match workflow attempts to warm Bazel instances, BuildBuddy uses VM\nsnapshotting powered by\n",(0,o.jsx)(n.a,{href:"https://github.com/firecracker-microvm/firecracker",children:"Firecracker"})," on\nLinux, and a simpler runner-recycling based approach on macOS."]}),"\n",(0,o.jsx)(n.h4,{id:"firecracker-vms-linux-only",children:"Firecracker VMs (Linux only)"}),"\n",(0,o.jsx)(n.p,{children:"On Linux, BuildBuddy Workflows are executed inside Firecracker VMs, which\nhave a low startup time (hundreds of milliseconds). VM snapshots include\nthe full disk and memory contents of the machine, meaning that the Bazel\nserver is effectively kept warm between workflow runs."}),"\n",(0,o.jsx)(n.p,{children:"Workflows use a sophisticated snapshotting mechanism that minimizes the\nwork that Bazel has to do on each CI run."}),"\n",(0,o.jsx)(n.p,{children:"First, VM snapshots are stored both locally on the machine that ran the\nworkflow, as well as remotely in BuildBuddy's cache. This way, if the\noriginal machine that ran a workflow is fully occupied with other\nworkloads, subsequent workflow runs can be executed on another machine,\nbut still be able to resume from a warm VM snapshot. BuildBuddy stores VM\nsnapshots in granular chunks that are downloaded lazily, so that unneeded\ndisk and memory chunks are not re-downloaded."}),"\n",(0,o.jsx)(n.p,{children:"Second, snapshots are stored using a branching model that closely mirrors\nthe branching structure of the git repository itself, allowing CI\nworkloads to be matched optimally to VM snapshots."}),"\n",(0,o.jsx)(n.p,{children:"After a workflow runs on a particular git branch, BuildBuddy snapshots the\nworkflow VM and saves it under a cache key which includes the git\nbranch."}),"\n",(0,o.jsx)(n.p,{children:"When starting a workflow execution on a particular git branch, BuildBuddy\nattempts to locate an optimal snapshot to run the workflow. It considers\nthe following snapshot keys in order:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"The latest snapshot matching the git branch associated with the\nworkflow run."}),"\n",(0,o.jsx)(n.li,{children:"The latest snapshot matching the base branch of the PR associated with\nthe workflow run."}),"\n",(0,o.jsx)(n.li,{children:"The latest snapshot matching the default branch of the repo associated\nwith the workflow run."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["For example, consider a BuildBuddy workflow that runs on pull requests\n(PRs). Given a PR that is attempting to merge the branch ",(0,o.jsx)(n.code,{children:"users-ui"})," into a\nPR base branch ",(0,o.jsx)(n.code,{children:"users-api"}),", BuildBuddy will first try to resume the latest\nsnapshot associated with the ",(0,o.jsx)(n.code,{children:"users-ui"})," branch. If that doesn't exist,\nwe'll try to resume from the snapshot associated with the ",(0,o.jsx)(n.code,{children:"users-api"}),"\nbranch. If that doesn't exist, we'll look for a snapshot for the ",(0,o.jsx)(n.code,{children:"main"}),"\nbranch (the repo's default branch). If all of that fails, only then do we\nboot a new VM from scratch. When the workflow finishes and we save a\nsnapshot, we only overwrite the snapshot for the ",(0,o.jsx)(n.code,{children:"users-ui"})," branch,\nmeaning that the ",(0,o.jsx)(n.code,{children:"users-api"})," and ",(0,o.jsx)(n.code,{children:"main"})," branch snapshots will not be\naffected."]}),"\n",(0,o.jsxs)(n.p,{children:["For more technical details on our VM implementation, see our BazelCon\ntalk ",(0,o.jsx)(n.a,{href:"https://www.youtube.com/watch?v=YycEXBlv7ZA",children:"Reusing Bazel's Analysis Cache by Cloning Micro-VMs"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"runner-recycling-macos-only",children:"Runner recycling (macOS only)"}),"\n",(0,o.jsx)(n.p,{children:"On macOS, workflows are matched to workspaces using a simpler\nrunner-recycling based approach. Workflow runs are associated with Git\nrepositories, and matched to any runner associated with the repository.\nEach runner keeps a separate Bazel workspace directory and on-disk cache,\nas well as its own Bazel server instance, which is kept alive between\nruns. Runners are evicted from the machine only if the number of runners\nexceeds a configured limit or if the disk resource usage exceeds a\nconfigured amount."}),"\n",(0,o.jsxs)(n.p,{children:["macOS workflows are only available for self-hosted Macs. See our\n",(0,o.jsx)(n.a,{href:"workflows-config#mac-configuration",children:"configuration docs"})," for more details,\nor ",(0,o.jsx)(n.a,{href:"https://www.buildbuddy.io/contact",children:"contact us"})," for more info about\nBuildBuddy-managed Macs."]}),"\n",(0,o.jsx)(n.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,o.jsxs)(n.p,{children:["You can get started with BuildBuddy Workflows by checking out our\n",(0,o.jsx)(n.a,{href:"https://docs.buildbuddy.io/docs/workflows-setup/",children:"setup guide"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"If you've already linked your GitHub account to BuildBuddy, it'll only take\nabout 30 seconds to enable Workflows for your repo \u2014 just select a repo\nto link, and we'll take care of the rest!"})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var t=s(96540);const o={},i=t.createContext(o);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);