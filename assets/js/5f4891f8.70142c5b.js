"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[5880],{711:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>a,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=n(85893),t=n(11151);const i={id:"workflows-introduction",title:"Introduction to Workflows",sidebar_label:"Workflows introduction"},r=void 0,l={id:"workflows-introduction",title:"Introduction to Workflows",description:"Traditional CI systems, like Jenkins, Travis, CircleCI, and BuildKite, are built around the concept of a pipeline. Pipelines allow you to specify a list of build/test steps to run for each commit or pull request to your repo. Pipelines are great because you can run many in parallel across multiple machines. Unfortunately, there are often dependencies between these pipelines, for example a build step that must be completed before a test step can begin.",source:"@site/../docs/workflows-introduction.md",sourceDirName:".",slug:"/workflows-introduction",permalink:"/docs/workflows-introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/workflows-introduction.md",tags:[],version:"current",lastUpdatedBy:"Siggi Simonarson",lastUpdatedAt:1707767612,formattedLastUpdatedAt:"Feb 12, 2024",frontMatter:{id:"workflows-introduction",title:"Introduction to Workflows",sidebar_label:"Workflows introduction"},sidebar:"someSidebar",previous:{title:"RBE Executor Pools",permalink:"/docs/rbe-pools"},next:{title:"Workflows setup",permalink:"/docs/workflows-setup"}},a={},d=[{value:"Introducing a Bazel-focused CI Solution",id:"introducing-a-bazel-focused-ci-solution",level:2},{value:"How fast are BuildBuddy Workflows?",id:"how-fast-are-buildbuddy-workflows",level:2},{value:"How did we make BuildBuddy Workflows so fast?",id:"how-did-we-make-buildbuddy-workflows-so-fast",level:2},{value:"Fast connection to BuildBuddy RBE",id:"fast-connection-to-buildbuddy-rbe",level:3},{value:"Hosted, Warm, Bazel instances",id:"hosted-warm-bazel-instances",level:3},{value:"How do I use BuildBuddy Workflows?",id:"how-do-i-use-buildbuddy-workflows",level:2}];function u(e){const o={a:"a",blockquote:"blockquote",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:["Traditional ",(0,s.jsx)(o.a,{href:"https://en.wikipedia.org/wiki/Continuous_integration",children:"CI systems"}),", like Jenkins, Travis, CircleCI, and BuildKite, are built around the concept of a pipeline. Pipelines allow you to specify a list of build/test steps to run for each commit or pull request to your repo. Pipelines are great because you can run many in parallel across multiple machines. Unfortunately, there are often dependencies between these pipelines, for example a build step that must be completed before a test step can begin."]}),"\n",(0,s.jsxs)(o.p,{children:["Some tools, like ",(0,s.jsx)(o.a,{href:"https://docs.gitlab.com/ee/ci/pipelines/",children:"GitLab Pipelines"}),", attempt to solve this problem by allowing you to specify dependencies between pipelines. This approach is better, but forces you to manually maintain the relationships between pipelines in a pile of YAML configuration files. As the number of dependencies grow, any sufficiently complex CI system ",(0,s.jsx)(o.a,{href:"https://gregoryszorc.com/blog/2021/04/07/modern-ci-is-too-complex-and-misdirected/",children:"starts to resemble a build system"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["None of these pipeline-based approaches are well suited for Bazel's approach to dependency management and remote build execution, which involves generating a ",(0,s.jsx)(o.a,{href:"https://en.wikipedia.org/wiki/Directed_acyclic_graph",children:"Directed Acyclic Graph"})," of all build and test actions. Bazel's approach allows for optimal parallelization and caching of these actions. It also enables rebuilding and retesting only affected targets, saving both engineering time and compute resources."]}),"\n",(0,s.jsx)(o.h2,{id:"introducing-a-bazel-focused-ci-solution",children:"Introducing a Bazel-focused CI Solution"}),"\n",(0,s.jsx)(o.p,{children:"BuildBuddy Workflows is a Continuous Integration (CI) solution for Bazel repositories hosted on GitHub (with support for other providers coming soon)."}),"\n",(0,s.jsx)(o.p,{children:"Like other CI solutions, Workflows give you the confidence that your code\nbuilds successfully and passes all tests before you merge pull requests or\ndeploy a new release."}),"\n",(0,s.jsxs)(o.p,{children:["But because BuildBuddy Workflows were built for Bazel repos and tightly\nintegrated with BuildBuddy RBE and Remote Caching, they are ",(0,s.jsx)(o.strong,{children:(0,s.jsx)(o.em,{children:"really fast"})}),"."]}),"\n",(0,s.jsx)(o.h2,{id:"how-fast-are-buildbuddy-workflows",children:"How fast are BuildBuddy Workflows?"}),"\n",(0,s.jsx)(o.p,{children:"We've used BuildBuddy Workflows on our own repos for the past few\nmonths, comparing them side-by-side with our existing CI solution built on GitHub Actions with BuildBuddy RBE and Remote Caching enabled."}),"\n",(0,s.jsxs)(o.p,{children:["By leveraging warm, hosted, Bazel processes, as well as BuildBuddy's\nremote caching and execution, Workflows dramatically sped up our CI runs.\nCompared to our previous solution (which used BuildBuddy RBE and Remote Caching on GitHub Runners), we reduced the median duration by nearly ",(0,s.jsx)(o.strong,{children:"8X"})," \u2014 with most CI runs completing in just a few seconds."]}),"\n",(0,s.jsx)(o.p,{children:"This overlapping histogram chart shows the complete picture. Note that\nthe majority of BuildBuddy workflow runs took 30 seconds or less, while\nnearly all runs on GitHub Actions took at least 2 minutes and 15 seconds:"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"overlapping histogram comparing BuildBuddy and GitHub actions",src:n(97963).Z+"",width:"700",height:"306"})}),"\n",(0,s.jsx)(o.h2,{id:"how-did-we-make-buildbuddy-workflows-so-fast",children:"How did we make BuildBuddy Workflows so fast?"}),"\n",(0,s.jsx)(o.p,{children:"In addition to convenience and security, one of our main goals for Workflows\nwas to maximize performance, even for very large source repositories."}),"\n",(0,s.jsx)(o.p,{children:"We did this in two main ways:"}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsxs)(o.li,{children:["Ensuring a ",(0,s.jsx)(o.strong,{children:"fast network connection between Bazel and BuildBuddy's RBE & caching servers"}),"."]}),"\n",(0,s.jsxs)(o.li,{children:["Running workflows against ",(0,s.jsx)(o.strong,{children:"hosted, warm, Bazel instances"}),"."]}),"\n"]}),"\n",(0,s.jsx)(o.h3,{id:"fast-connection-to-buildbuddy-rbe",children:"Fast connection to BuildBuddy RBE"}),"\n",(0,s.jsx)(o.p,{children:"In our experience, network latency is often the biggest bottleneck in many Bazel Remote Build Execution and Remote Caching setups."}),"\n",(0,s.jsx)(o.p,{children:"The solution here was simple: run Workflows on executors in the same datacenters where BuildBuddy RBE and Cache nodes are deployed."}),"\n",(0,s.jsxs)(o.p,{children:["With GitHub actions or other CI solutions, the network connection might\nbe fast (particularly after the recent network optimizations we made in\n",(0,s.jsx)(o.a,{href:"https://blog.buildbuddy.io/blog/introducing-buildbuddy-v2",children:"BuildBuddy v2"}),") \u2014 but not nearly as fast\nas having workflow runners on the same local network as BuildBuddy\nitself."]}),"\n",(0,s.jsx)(o.h3,{id:"hosted-warm-bazel-instances",children:"Hosted, Warm, Bazel instances"}),"\n",(0,s.jsxs)(o.p,{children:["Once you have a sufficiently fast RBE and Remote Caching setup, and have removed network bottlenecks \u2014 the CI bottleneck often becomes Bazel's ",(0,s.jsx)(o.a,{href:"https://docs.bazel.build/versions/main/glossary.html#analysis-phase",children:"analysis phase"}),"."]}),"\n",(0,s.jsx)(o.p,{children:"By re-using warm Bazel processes when possible, we're able to re-use Bazel's analysis cache across CI runs of the same repo. This can save several minutes per build, depending on the size of your repository and the number of external dependencies being pulled in."}),"\n",(0,s.jsxs)(o.p,{children:["This is similar to how ",(0,s.jsx)(o.a,{href:"https://dl.acm.org/doi/pdf/10.1145/3395363.3397371",children:"Google's Build Dequeuing Service"})," performs workspace selection:"]}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsx)(o.p,{children:"A well-chosen workspace can increase the build speed by an\norder of magnitude by reusing the various cached results from the\nprevious execution. [...] We have observed that builds that execute the same targets as a previous\nbuild are effectively no-ops using this technique"}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"how-do-i-use-buildbuddy-workflows",children:"How do I use BuildBuddy Workflows?"}),"\n",(0,s.jsxs)(o.p,{children:["BuildBuddy Workflows are launching today, in Beta, for all GitHub users. You can get started with BuildBuddy Workflows by checking out our ",(0,s.jsx)(o.a,{href:"https://docs.buildbuddy.io/docs/workflows-setup/",children:"setup guide"}),".\nIf you've already linked your GitHub account to BuildBuddy, it'll only take\nabout 30 seconds to enable Workflows for your repo \u2014 just select a repo\nto link, and we'll take care of the rest!"]})]})}function c(e={}){const{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},97963:(e,o,n)=>{n.d(o,{Z:()=>s});const s=n.p+"assets/images/workflows-5e3a4008b17abce93baa478089e90f9b.png"},11151:(e,o,n)=>{n.d(o,{Z:()=>l,a:()=>r});var s=n(67294);const t={},i=s.createContext(t);function r(e){const o=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(i.Provider,{value:o},e.children)}}}]);