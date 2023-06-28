"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[5880],{3905:function(e,t,o){o.d(t,{Zo:function(){return d},kt:function(){return m}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(o),f=r,m=c["".concat(l,".").concat(f)]||c[f]||p[f]||i;return o?n.createElement(m,a(a({ref:t},d),{},{components:o})):n.createElement(m,a({ref:t},d))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},94830:function(e,t,o){o.r(t),o.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var n=o(83117),r=o(80102),i=(o(67294),o(3905)),a=["components"],s={id:"workflows-introduction",title:"Introduction to Workflows",sidebar_label:"Workflows introduction"},l=void 0,u={unversionedId:"workflows-introduction",id:"workflows-introduction",title:"Introduction to Workflows",description:"Traditional CI systems, like Jenkins, Travis, CircleCI, and BuildKite, are built around the concept of a pipeline. Pipelines allow you to specify a list of build/test steps to run for each commit or pull request to your repo. Pipelines are great because you can run many in parallel across multiple machines. Unfortunately, there are often dependencies between these pipelines, for example a build step that must be completed before a test step can begin.",source:"@site/../docs/workflows-introduction.md",sourceDirName:".",slug:"/workflows-introduction",permalink:"/docs/workflows-introduction",draft:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/workflows-introduction.md",tags:[],version:"current",lastUpdatedBy:"Lulu Zhang",lastUpdatedAt:1687986083,formattedLastUpdatedAt:"Jun 28, 2023",frontMatter:{id:"workflows-introduction",title:"Introduction to Workflows",sidebar_label:"Workflows introduction"},sidebar:"someSidebar",previous:{title:"RBE Executor Pools",permalink:"/docs/rbe-pools"},next:{title:"Workflows setup",permalink:"/docs/workflows-setup"}},d={},c=[{value:"Introducing a Bazel-focused CI Solution",id:"introducing-a-bazel-focused-ci-solution",level:2},{value:"How fast are BuildBuddy Workflows?",id:"how-fast-are-buildbuddy-workflows",level:2},{value:"How did we make BuildBuddy Workflows so fast?",id:"how-did-we-make-buildbuddy-workflows-so-fast",level:2},{value:"Fast connection to BuildBuddy RBE",id:"fast-connection-to-buildbuddy-rbe",level:3},{value:"Hosted, Warm, Bazel instances",id:"hosted-warm-bazel-instances",level:3},{value:"How do I use BuildBuddy Workflows?",id:"how-do-i-use-buildbuddy-workflows",level:2}],p={toc:c},f="wrapper";function m(e){var t=e.components,s=(0,r.Z)(e,a);return(0,i.kt)(f,(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Traditional ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Continuous_integration"},"CI systems"),", like Jenkins, Travis, CircleCI, and BuildKite, are built around the concept of a pipeline. Pipelines allow you to specify a list of build/test steps to run for each commit or pull request to your repo. Pipelines are great because you can run many in parallel across multiple machines. Unfortunately, there are often dependencies between these pipelines, for example a build step that must be completed before a test step can begin."),(0,i.kt)("p",null,"Some tools, like ",(0,i.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/ci/pipelines/"},"GitLab Pipelines"),", attempt to solve this problem by allowing you to specify dependencies between pipelines. This approach is better, but forces you to manually maintain the relationships between pipelines in a pile of YAML configuration files. As the number of dependencies grow, any sufficiently complex CI system ",(0,i.kt)("a",{parentName:"p",href:"https://gregoryszorc.com/blog/2021/04/07/modern-ci-is-too-complex-and-misdirected/"},"starts to resemble a build system"),"."),(0,i.kt)("p",null,"None of these pipeline-based approaches are well suited for Bazel's approach to dependency management and remote build execution, which involves generating a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Directed_acyclic_graph"},"Directed Acyclic Graph")," of all build and test actions. Bazel's approach allows for optimal parallelization and caching of these actions. It also enables rebuilding and retesting only affected targets, saving both engineering time and compute resources."),(0,i.kt)("h2",{id:"introducing-a-bazel-focused-ci-solution"},"Introducing a Bazel-focused CI Solution"),(0,i.kt)("p",null,"BuildBuddy Workflows is a Continuous Integration (CI) solution for Bazel repositories hosted on GitHub (with support for other providers coming soon)."),(0,i.kt)("p",null,"Like other CI solutions, Workflows give you the confidence that your code\nbuilds successfully and passes all tests before you merge pull requests or\ndeploy a new release."),(0,i.kt)("p",null,"But because BuildBuddy Workflows were built for Bazel repos and tightly\nintegrated with BuildBuddy RBE and Remote Caching, they are ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"really fast")),"."),(0,i.kt)("h2",{id:"how-fast-are-buildbuddy-workflows"},"How fast are BuildBuddy Workflows?"),(0,i.kt)("p",null,"We've used BuildBuddy Workflows on our own repos for the past few\nmonths, comparing them side-by-side with our existing CI solution built on GitHub Actions with BuildBuddy RBE and Remote Caching enabled."),(0,i.kt)("p",null,"By leveraging warm, hosted, Bazel processes, as well as BuildBuddy's\nremote caching and execution, Workflows dramatically sped up our CI runs.\nCompared to our previous solution (which used BuildBuddy RBE and Remote Caching on GitHub Runners), we reduced the median duration by nearly ",(0,i.kt)("strong",{parentName:"p"},"8X")," ","\u2014"," with most CI runs completing in just a few seconds."),(0,i.kt)("p",null,"This overlapping histogram chart shows the complete picture. Note that\nthe majority of BuildBuddy workflow runs took 30 seconds or less, while\nnearly all runs on GitHub Actions took at least 2 minutes and 15 seconds:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"overlapping histogram comparing BuildBuddy and GitHub actions",src:o(97963).Z,width:"700",height:"306"})),(0,i.kt)("h2",{id:"how-did-we-make-buildbuddy-workflows-so-fast"},"How did we make BuildBuddy Workflows so fast?"),(0,i.kt)("p",null,"In addition to convenience and security, one of our main goals for Workflows\nwas to maximize performance, even for very large source repositories."),(0,i.kt)("p",null,"We did this in two main ways:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Ensuring a ",(0,i.kt)("strong",{parentName:"li"},"fast network connection between Bazel and BuildBuddy's RBE & caching servers"),"."),(0,i.kt)("li",{parentName:"ol"},"Running workflows against ",(0,i.kt)("strong",{parentName:"li"},"hosted, warm, Bazel instances"),".")),(0,i.kt)("h3",{id:"fast-connection-to-buildbuddy-rbe"},"Fast connection to BuildBuddy RBE"),(0,i.kt)("p",null,"In our experience, network latency is often the biggest bottleneck in many Bazel Remote Build Execution and Remote Caching setups."),(0,i.kt)("p",null,"The solution here was simple: run Workflows on executors in the same datacenters where BuildBuddy RBE and Cache nodes are deployed."),(0,i.kt)("p",null,"With GitHub actions or other CI solutions, the network connection might\nbe fast (particularly after the recent network optimizations we made in\n",(0,i.kt)("a",{parentName:"p",href:"https://blog.buildbuddy.io/blog/introducing-buildbuddy-v2"},"BuildBuddy v2"),") ","\u2014"," but not nearly as fast\nas having workflow runners on the same local network as BuildBuddy\nitself."),(0,i.kt)("h3",{id:"hosted-warm-bazel-instances"},"Hosted, Warm, Bazel instances"),(0,i.kt)("p",null,"Once you have a sufficiently fast RBE and Remote Caching setup, and have removed network bottlenecks ","\u2014"," the CI bottleneck often becomes Bazel's ",(0,i.kt)("a",{parentName:"p",href:"https://docs.bazel.build/versions/main/glossary.html#analysis-phase"},"analysis phase"),"."),(0,i.kt)("p",null,"By re-using warm Bazel processes when possible, we're able to re-use Bazel's analysis cache across CI runs of the same repo. This can save several minutes per build, depending on the size of your repository and the number of external dependencies being pulled in."),(0,i.kt)("p",null,"This is similar to how ",(0,i.kt)("a",{parentName:"p",href:"https://dl.acm.org/doi/pdf/10.1145/3395363.3397371"},"Google's Build Dequeuing Service")," performs workspace selection:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A well-chosen workspace can increase the build speed by an\norder of magnitude by reusing the various cached results from the\nprevious execution. ","[...]"," We have observed that builds that execute the same targets as a previous\nbuild are effectively no-ops using this technique")),(0,i.kt)("h2",{id:"how-do-i-use-buildbuddy-workflows"},"How do I use BuildBuddy Workflows?"),(0,i.kt)("p",null,"BuildBuddy Workflows are launching today, in Beta, for all GitHub users. You can get started with BuildBuddy Workflows by checking out our ",(0,i.kt)("a",{parentName:"p",href:"https://docs.buildbuddy.io/docs/workflows-setup/"},"setup guide"),".\nIf you've already linked your GitHub account to BuildBuddy, it'll only take\nabout 30 seconds to enable Workflows for your repo ","\u2014"," just select a repo\nto link, and we'll take care of the rest!"))}m.isMDXComponent=!0},97963:function(e,t,o){t.Z=o.p+"assets/images/workflows-5e3a4008b17abce93baa478089e90f9b.png"}}]);