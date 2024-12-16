"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[5758],{12543:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>c,frontMatter:()=>r,metadata:()=>t,toc:()=>l});var t=i(75502),o=i(74848),s=i(28453);const r={slug:"introducing-buildbuddy-v1",title:"Introducing BuildBuddy Version 1.0",authors:"siggi",date:"2020-04-24:12:00:00",tags:["product","release-notes"]},d=void 0,a={authorsImageUrls:[void 0]},l=[{value:"New to Open Source BuildBuddy",id:"new-to-open-source-buildbuddy",level:2},{value:"New to Enterprise BuildBuddy",id:"new-to-enterprise-buildbuddy",level:2}];function u(e){const n={a:"a",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"We released our initial open source version of BuildBuddy to the Bazel community last month and have received a ton of interest, support, and feedback. We really appreciate everyone who's taken the time to kick the tires and try it out!"}),"\n",(0,o.jsx)(n.p,{children:"We're excited to share that BuildBuddy has been run on-prem at over 20 companies, and hundreds more developers have tried our cloud-hosted version."}),"\n",(0,o.jsx)(n.p,{children:"People have found the shareable invocation links particularly useful when debugging builds remotely with co-workers while working from home. No more pasting console outputs into Pastebin!"}),"\n",(0,o.jsx)(n.p,{children:"We've taken all of the feedback we've gotten and made lots of improvements to both the open source and enterprise versions of BuildBuddy."}),"\n",(0,o.jsx)(n.p,{children:"Our three major focuses for this release were on better build artifact handling, better test support, and enterprise authentication. We hope these changes help you continue to build and debug software faster. Keep the feedback coming!"}),"\n",(0,o.jsx)(n.h2,{id:"new-to-open-source-buildbuddy",children:"New to Open Source BuildBuddy"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Remote cache support"})," - we've added a built-in Bazel remote cache to BuildBuddy, implementing the gRPC remote caching APIs. This allows BuildBuddy to optionally collect build artifacts, timing profile information, test logs, and more."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Clickable build artifacts"})," - this was our most requested feature. Clicking on build artifacts in the BuildBuddy UI now downloads the artifact when using either the built-in BuildBuddy cache, or a third-party cache running in gRPC mode that supports the Byte Stream API - like ",(0,o.jsx)(n.a,{href:"https://github.com/buchgr/bazel-remote",children:"bazel-remote"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Detailed timing information"}),' - getting detailed timing information on your Bazel builds can be a hassle. Now BuildBuddy invocations include a new "Timing" tab - which pulls the Bazel profile logs from your build cache and displays them in a human-readable format. Stay tuned for flame charts!']}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Viewable test logs"})," - digging into test logs for your Bazel runs can be a pain. Now BuildBuddy surfaces test logs directly in the UI when you click on a test target (gRPC remote cache required)."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Multiple test-run support"})," - one of our favorite features of Bazel is that it will rerun flaky tests for you. BuildBuddy now supports viewing information about multiple attempts of a single test run."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Client environment variable redaction"})," - client environment variables are now redacted from BuildBuddy's invocation details to avoid over-sharing."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Dense UI mode"}),' - based on feedback on information density of the default BuildBuddy UI, we added a "Dense mode" that packs more information into every square inch.']}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"BES backend multiplexing"})," - we heard from some of you that you'd like to try BuildBuddy, but were already pointing your bes_backend flag at another service. We've added the build_event_proxy configuration option that allows you to specify other backends that your build events should be forwarded to. See the ",(0,o.jsx)(n.a,{href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/CONFIG.md#buildeventproxy",children:"configuration docs"})," for more information."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Slack webhook support"})," - we've added a configuration option that allows you to message a Slack channel when builds finish. This is a nice way of getting a quick notification when a long running build completes, or a CI build fails. See the ",(0,o.jsx)(n.a,{href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/CONFIG.md#integrations",children:"configuration docs"})," for more information."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Our open source BuildBuddy distribution is targeted at individuals viewing and debugging their Bazel builds. For teams and organizations, we provide an enterprise version of BuildBuddy that adds support for team-specific features."}),"\n",(0,o.jsx)(n.h2,{id:"new-to-enterprise-buildbuddy",children:"New to Enterprise BuildBuddy"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"OpenID Connect auth support"})," - organizations can now specify an OpenID Connect provider to handle authentication for their BuildBuddy instance. This allows for the flexibility to use Google login if you use GSuite, auth services like Okta, or an in-house solution that supports OpenID Connect."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Authenticated build log & cache uploads"})," - BuildBuddy now supports generating authenticated upload URLs for both the build event and remote cache backends. Events uploaded with authentication will be associated with your organization and will not be viewable by unauthorized clients."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Organization support"})," - BuildBuddy now supports creating organizations that allow builds to be viewed and aggregated across your team/company."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Organization build history"})," - with organization support comes a new view that allows you to see recent builds across your organization."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"User & host overviews"})," - you can now see all of the users and hosts that have uploaded builds to your organization. This allows you to drill into all of the builds uploaded from a CI machine for example."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Build grid"})," - the new build grid gives you a visual overview of the build history for an organization, host, or user. This allows you to quickly find and fix failing builds."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"That's it for this release. Stay tuned for more updates coming soon!"}),"\n",(0,o.jsxs)(n.p,{children:["As always, we love your feedback - email us at ",(0,o.jsx)(n.a,{href:"mailto:hello@buildbuddy.io",children:"hello@buildbuddy.io"})," with any questions, comments, or thoughts."]})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>d});var t=i(96540);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}},75502:e=>{e.exports=JSON.parse('{"permalink":"/blog/introducing-buildbuddy-v1","editUrl":"https://github.com/buildbuddy-io/buildbuddy/edit/master/website/blog/introducing-buildbuddy-v1.md","source":"@site/blog/introducing-buildbuddy-v1.md","title":"Introducing BuildBuddy Version 1.0","description":"We released our initial open source version of BuildBuddy to the Bazel community last month and have received a ton of interest, support, and feedback. We really appreciate everyone who\'s taken the time to kick the tires and try it out!","date":"2020-04-24T12:00:00.000Z","tags":[{"inline":true,"label":"product","permalink":"/blog/tags/product"},{"inline":true,"label":"release-notes","permalink":"/blog/tags/release-notes"}],"readingTime":3.9,"hasTruncateMarker":true,"authors":[{"name":"Siggi Simonarson","title":"Co-founder @ BuildBuddy","url":"https://www.linkedin.com/in/siggisim/","imageURL":"https://avatars.githubusercontent.com/u/1704556?v=4","key":"siggi","page":null}],"frontMatter":{"slug":"introducing-buildbuddy-v1","title":"Introducing BuildBuddy Version 1.0","authors":"siggi","date":"2020-04-24:12:00:00","tags":["product","release-notes"]},"unlisted":false,"prevItem":{"title":"BuildBuddy v1.0.6 Release Notes","permalink":"/blog/buildbuddy-v1-0-6-release-notes"},"nextItem":{"title":"BuildBuddy joins Y Combinator","permalink":"/blog/buildbuddy-joins-y-combinator"}}')}}]);