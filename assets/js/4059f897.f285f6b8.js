"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[8311],{29706:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>d,metadata:()=>s,toc:()=>r});var s=i(43301),n=i(74848),o=i(28453);const d={slug:"buildbuddy-v2-5-0-release-notes",title:"BuildBuddy v2.5.0 Release Notes",authors:"siggi",date:"2021-08-30:12:00:00",image:"/img/global_filter.png",tags:["product","release-notes"]},l=void 0,a={authorsImageUrls:[void 0]},r=[{value:"New in v2.5.0",id:"new-in-v250",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["We're excited to share that v2.5.0 of BuildBuddy is live on both ",(0,n.jsx)(t.a,{href:"https://app.buildbuddy.io/",children:"Cloud Hosted BuildBuddy"})," and open-source via ",(0,n.jsx)(t.a,{href:"https://github.com/buildbuddy-io/buildbuddy",children:"Github"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/docs/on-prem.md#docker-image",children:"Docker"}),", and ",(0,n.jsx)(t.a,{href:"https://github.com/buildbuddy-io/buildbuddy-helm",children:"our Helm Charts"}),"!"]}),"\n",(0,n.jsx)(t.p,{children:"Thanks to everyone using open source, cloud-hosted, and enterprise BuildBuddy. We've made lots of improvements in this release based on your feedback."}),"\n",(0,n.jsx)(t.h2,{id:"new-in-v250",children:"New in v2.5.0"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"The new global filter"})," - BuildBuddy collects lots of build information across CI and local builds. In order to make navigating these builds easier, we've introduced a new global filter. The global filter allows you to filter by status and role on any page - with more options including user, repo, and branch coming soon."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(76660).A+"",width:"3104",height:"1974"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Date picker"})," - To complement the new global filter, we've also added a date picker. The date picker allows you to select a time range and see builds, trends, etc. for exactly the time period you're interested in."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(39051).A+"",width:"3104",height:"1974"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Clickable trends"})," - Now that you can filter any view by date, we've added a feature to the Trends page that allows you to click on a data point and be taken to a filtered view of builds from just that time period. As part of this change, the trends page now also respects your local time zone."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(29248).A+"",width:"3104",height:"1974"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Branch information"})," - BuildBuddy now collects information about a build's git branch in addition to the repo and commit info already collected. This makes it even easier to navigate your builds."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(38932).A+"",width:"3104",height:"1974"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Light terminal theme"})," - For those of you who suffer from eye strain when reading light text on dark backgrounds: we've heard your feedback. We've added a new light terminal theme that can be enabled in your personal settings."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(21163).A+"",width:"3104",height:"1974"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Improved flaky test support"})," - Flaky tests can destroy developer productivity. To make them easier to deal with, we've added a new feature that calls out flaky tests & timeouts more explicitly. We've also improved the behavior of our RBE to reduce flakes due to timeouts when caused by external factors like Docker image pulls."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(46742).A+"",width:"3064",height:"1934"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Remote executions tab"})," - We've had a hidden feature for a while that allowed you to click on the ",(0,n.jsx)(t.code,{children:"Remote execution on"})," label to see an overview of remotely executed actions for RBE builds. We've now promoted this feature to its own ",(0,n.jsx)(t.code,{children:"Executions"})," tab. With this change come new features like search and filtering."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(47137).A+"",width:"3064",height:"1934"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Action input & output files"})," - When clicking on an individual remotely executed actions, we now have a new file viewer that allows you to navigate the input files of the action. You can click on any of these files (as well as any output files the action has) to download them from the remote cache."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(4719).A+"",width:"3064",height:"1934"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Action timing"})," - The timing tab gives you a breakdown of execution timing from Bazel's point of view, but there's another story to tell from the remote executor's point of view. Action pages now show a visual breakdown of time spent in queue, downloading inputs, executing, and uploading outputs for each remotely executed action."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(86282).A+"",width:"3064",height:"1934"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Revamped settings page"})," - We've revamped the settings page to make it easier to manage your BuildBuddy account."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(43707).A+"",width:"3104",height:"1974"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"And much much more"})," - Every release comes packed with so many new features, performance improvements and bug fixes that we can't get to them all. Here are some more highlights:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Support for serving static files from a CDN"}),"\n",(0,n.jsx)(t.li,{children:"Support for MinIO as a storage backend"}),"\n",(0,n.jsx)(t.li,{children:"Buildkite links now link to the specific Buildkite job that spawned the invocation"}),"\n",(0,n.jsx)(t.li,{children:"Support for distributed tracing backends like Jaeger, Google Cloud Trace, and others"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"That's it for this release. Stay tuned for more updates coming soon!"}),"\n",(0,n.jsxs)(t.p,{children:["As always, we love your feedback - join our ",(0,n.jsx)(t.a,{href:"https://community.buildbuddy.io",children:"Slack channel"})," or email us at ",(0,n.jsx)(t.a,{href:"mailto:hello@buildbuddy.io",children:"hello@buildbuddy.io"})," with any questions, comments, or thoughts."]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},86282:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/action_timeline-84f6ed5070db6429e1b718a044ff859b.png"},38932:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/branch-d222883683a88e9890ab72d7bb1bbb05.png"},39051:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/date_picker-0f46318ddb09c89dda3c824dd64c3ad6.png"},47137:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/executions_tab-2673cb07615d444d20401143290c70c2.png"},4719:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/file_tree-7e5a319297d73465af9bd1bf3dbb4bc5.png"},46742:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/flaky_test-3c9e478ded34f653686fee761b538996.png"},76660:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/global_filter-3178bb5ce27beae2d329f9d97829ec8a.png"},21163:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/light_terminal-984754c3d6ea30b5e03f158a394bff9b.png"},43707:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/settings-0b64eae8229c732016ac3d13e8c09c90.png"},29248:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/trends-eb184602b80b6c87c7f3dfb0e1ae7c3b.png"},28453:(e,t,i)=>{i.d(t,{R:()=>d,x:()=>l});var s=i(96540);const n={},o=s.createContext(n);function d(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(o.Provider,{value:t},e.children)}},43301:e=>{e.exports=JSON.parse('{"permalink":"/blog/buildbuddy-v2-5-0-release-notes","editUrl":"https://github.com/buildbuddy-io/buildbuddy/edit/master/website/blog/buildbuddy-v2-5-0-release-notes.md","source":"@site/blog/buildbuddy-v2-5-0-release-notes.md","title":"BuildBuddy v2.5.0 Release Notes","description":"We\'re excited to share that v2.5.0 of BuildBuddy is live on both Cloud Hosted BuildBuddy and open-source via Github, Docker, and our Helm Charts!","date":"2021-08-30T12:00:00.000Z","tags":[{"inline":true,"label":"product","permalink":"/blog/tags/product"},{"inline":true,"label":"release-notes","permalink":"/blog/tags/release-notes"}],"readingTime":3.205,"hasTruncateMarker":true,"authors":[{"name":"Siggi Simonarson","title":"Co-founder @ BuildBuddy","url":"https://www.linkedin.com/in/siggisim/","imageURL":"https://avatars.githubusercontent.com/u/1704556?v=4","key":"siggi","page":null}],"frontMatter":{"slug":"buildbuddy-v2-5-0-release-notes","title":"BuildBuddy v2.5.0 Release Notes","authors":"siggi","date":"2021-08-30:12:00:00","image":"/img/global_filter.png","tags":["product","release-notes"]},"unlisted":false,"prevItem":{"title":"BuildBuddy v2.7.0 Release Notes","permalink":"/blog/buildbuddy-v2-7-0-release-notes"},"nextItem":{"title":"Meet BuildBuddy Workflows","permalink":"/blog/meet-buildbuddy-workflows"}}')}}]);