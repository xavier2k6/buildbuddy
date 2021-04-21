(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{107:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return d}));var a=r(3),n=r(7),o=(r(0),r(153)),i={slug:"buildbuddy-v1-5-0-release-notes",title:"BuildBuddy v1.5.0 Release Notes",author:"Siggi Simonarson",author_title:"Co-founder @ BuildBuddy",date:"2021-01-08:12:00:00",author_url:"https://www.linkedin.com/in/siggisim/",author_image_url:"https://avatars.githubusercontent.com/u/1704556?v=4",tags:["product","release-notes"]},l={permalink:"/blog/buildbuddy-v1-5-0-release-notes",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/website/blog/buildbuddy-v1-5-0-release-notes.md",source:"@site/blog/buildbuddy-v1-5-0-release-notes.md",description:"We're excited to share that v1.5.0 of BuildBuddy is live on both Cloud Hosted BuildBuddy and open-source via Github, Docker, and our Helm Charts!",date:"2021-01-08T12:00:00.000Z",formattedDate:"January 8, 2021",tags:[{label:"product",permalink:"/blog/tags/product"},{label:"release-notes",permalink:"/blog/tags/release-notes"}],title:"BuildBuddy v1.5.0 Release Notes",readingTime:2.745,truncated:!1,prevItem:{title:"BuildBuddy v1.8.0 Release Notes",permalink:"/blog/buildbuddy-v1-8-0-release-notes"},nextItem:{title:"BuildBuddy v1.4.0 Release Notes",permalink:"/blog/buildbuddy-v1-4-0-release-notes"}},s=[{value:"<strong>New in v1.5.0</strong>",id:"new-in-v150",children:[]}],u={toc:s};function d(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We're excited to share that v1.5.0 of BuildBuddy is live on both ",Object(o.b)("a",{parentName:"p",href:"https://app.buildbuddy.io/"},"Cloud Hosted BuildBuddy")," and open-source via ",Object(o.b)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy"},"Github"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/docs/on-prem.md#docker-image"},"Docker"),", and ",Object(o.b)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy-helm"},"our Helm Charts"),"!"),Object(o.b)("p",null,"Thanks to everyone using open source, cloud-hosted, and enterprise BuildBuddy. We've made lots of improvements in this release based on your feedback."),Object(o.b)("p",null,"A special thank you to our new open-source contributor:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/restingbull"},Object(o.b)("strong",{parentName:"a"},"Corbin McNeely-Smith"))," who contributed to making our auth flow more resilient to error cases, and made our health-check handlers more flexible to support different load-balancers.")),Object(o.b)("p",null,"Our focus for this release was on giving\xa0users more visibility into test flakiness, monitoring &\xa0scaling improvements, and security hardening."),Object(o.b)("h2",{id:"new-in-v150"},Object(o.b)("strong",{parentName:"h2"},"New in v1.5.0")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Test flakiness dashboard")," - one of the feature requests we get most frequently from BuildBuddy users is the ability to collect target-level data and analyze it across invocations. Today we're taking the first step in the direction with our new test dashboard. The test dashboard allows you to monitor per-target test statuses by commit - so you can quickly identify and fix flaky test targets that slow down developer velocity.\xa0It also has a timing view that gives you a heat-map to quickly identify slow targets.\xa0This is just the first step we're taking in exposing more target-level data and are excited to build additional features based on your feedback!")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://uploads-ssl.webflow.com/5eeba6a6c5230ea3d1a60d83/6010c6df601bb5e1c1e16a78_Screen%20Shot%202021-01-26%20at%205.49.46%20PM.png",alt:null})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Prometheus metrics")," - we've added a ton of new Prometheus metrics to BuildBuddy that allow open-source and Enterprise users to monitor not only BuildBuddy's performance, but the overall health of their developer productivity efforts. This allows you to hook into existing monitoring and alerting tools like Grafana to analyze and get notified when your developers are experiencing issues.\xa0Metrics include build duration, cache hit & miss rates, remote execution queue length, and more. For a full list of the new metrics we now expose, see our ",Object(o.b)("a",{parentName:"li",href:"https://www.buildbuddy.io/docs/prometheus-metrics"},"Prometheus metric documentation"),". Interested in some metrics that aren't on this list? Let us know!")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://uploads-ssl.webflow.com/5eeba6a6c5230ea3d1a60d83/6010ccfb707b665aa637bb30_Screen%20Shot%202021-01-26%20at%206.16.10%20PM.png",alt:null})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Auto-scaling")," - with the addition of our new Prometheus metrics, we've also made improvements to the autoscaling capabilities of BuildBuddy executors. Now in addition to scaling off of raw compute metrics like CPU\xa0and RAM, BuildBuddy executors can also be configured to scale based on executor queue length and other custom metrics. This allows you to achieve better performance under heavy load while also managing your compute resources more efficiently and cost-effectively.")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://uploads-ssl.webflow.com/5eeba6a6c5230ea3d1a60d83/6010cd9f28a90e7c5a1dd1b4_Screen%20Shot%202021-01-26%20at%206.18.49%20PM.png",alt:null})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Security hardening")," - as part of our SOC 2 compliance controls, BuildBuddy undergoes regularly scheduled penetration tests by paid security professionals.\xa0This release contains fixes for all three non-critical findings from our January 2021 pen-test.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Memory leak fixes")," - we found and fixed 2 memory leaks in our BuildBuddy app (using our new Prometheus metrics!) that would occasionally cause BuildBuddy app servers to restart due to memory pressure.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Mac executor bug fix")," - we fixed a tricky bug caused by quirks in the way OS\xa0X handles hard-linking that significantly improves the reliability of our Mac RBE executors.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"More bug fixes")," - there are lots of other bug fixes in this release including improved deadline and timeout handling, executor task scheduling improvements, and more!"))),Object(o.b)("p",null,"That's it for this release. Stay tuned for more updates coming soon!"),Object(o.b)("p",null,"As always, we love your feedback - join our ",Object(o.b)("a",{parentName:"p",href:"https://slack.buildbuddy.io"},"Slack channel")," or email us at ",Object(o.b)("a",{parentName:"p",href:"mailto:hello@buildbuddy.io"},"hello@buildbuddy.io")," with any questions, comments, or thoughts."))}d.isMDXComponent=!0},153:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=n.a.createContext({}),d=function(e){var t=n.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=d(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(r),p=a,m=c["".concat(i,".").concat(p)]||c[p]||b[p]||o;return r?n.a.createElement(m,l(l({ref:t},u),{},{components:r})):n.a.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);