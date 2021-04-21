(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{111:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return d})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(3),o=a(7),i=(a(0),a(153)),r={slug:"buildbuddy-v1-2-1-release-notes",title:"BuildBuddy v1.2.1 Release Notes",author:"Siggi Simonarson",author_title:"Co-founder @ BuildBuddy",date:"2020-07-15:12:00:00",author_url:"https://www.linkedin.com/in/siggisim/",author_image_url:"https://avatars.githubusercontent.com/u/1704556?v=4",tags:["product","release-notes","team"]},d={permalink:"/blog/buildbuddy-v1-2-1-release-notes",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/website/blog/buildbuddy-v1-1-0-release-notes.md",source:"@site/blog/buildbuddy-v1-1-0-release-notes.md",description:"Excited to share that v1.2.1 of BuildBuddy is live on both Cloud Hosted BuildBuddy and open source via Github and Docker!",date:"2020-07-15T12:00:00.000Z",formattedDate:"July 15, 2020",tags:[{label:"product",permalink:"/blog/tags/product"},{label:"release-notes",permalink:"/blog/tags/release-notes"},{label:"team",permalink:"/blog/tags/team"}],title:"BuildBuddy v1.2.1 Release Notes",readingTime:4.395,truncated:!1,prevItem:{title:"BuildBuddy v1.1.0 Release Notes",permalink:"/blog/buildbuddy-v1-1-0-release-notes"},nextItem:{title:"BuildBuddy v1.0.6 Release Notes",permalink:"/blog/buildbuddy-v1-0-6-release-notes"}},l=[{value:"<strong>New to Open Source BuildBuddy</strong>",id:"new-to-open-source-buildbuddy",children:[]},{value:"New to Cloud &amp; Enterprise BuildBuddy",id:"new-to-cloud--enterprise-buildbuddy",children:[]}],u={toc:l};function s(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Excited to share that v1.2.1 of BuildBuddy is live on both ",Object(i.b)("a",{parentName:"p",href:"https://app.buildbuddy.io/"},"Cloud Hosted BuildBuddy")," and open source via ",Object(i.b)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy"},"Github")," and ",Object(i.b)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/docs/on-prem.md#docker-image"},"Docker"),"!"),Object(i.b)("p",null,"Thanks to everyone that has tested open source and cloud-hosted BuildBuddy. We've made lots of improvements in this release based on your feedback."),Object(i.b)("p",null,"A special welcome to our newest contributor and ",Object(i.b)("strong",{parentName:"p"},"team member"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/bduffany"},"Brandon Duffany")," - Brandon is an ex-Googler and Cornell alumn who's worked as a software engineer on Google Assistant and Google Ads. He'll start off focused on surfacing better profiling and timing information to help users track down and fix slow builds!")),Object(i.b)("p",null,"Our focus for this release was on expanding access to BuildBuddy as well as improving scalability and performance.\xa0"),Object(i.b)("p",null,"We're also excited to announce that we're expanding the BuildBuddy Cloud free tier. BuildBuddy Cloud is now ",Object(i.b)("strong",{parentName:"p"},"free for teams of up to 3 engineers")," in addition to being free for individuals open source projects of any size."),Object(i.b)("h2",{id:"new-to-open-source-buildbuddy"},Object(i.b)("strong",{parentName:"h2"},"New to Open Source BuildBuddy")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Official BuildBuddy Helm charts")," - thanks to a ",Object(i.b)("a",{parentName:"li",href:"https://github.com/buildbuddy-io/buildbuddy/issues/35"},"request")," from ",Object(i.b)("a",{parentName:"li",href:"https://github.com/nathanhleung"},"Nathan Leung")," we've created official ",Object(i.b)("a",{parentName:"li",href:"https://github.com/buildbuddy-io/buildbuddy-helm"},"BuildBuddy Helm Charts")," that are available for both ",Object(i.b)("a",{parentName:"li",href:"https://github.com/buildbuddy-io/buildbuddy-helm/tree/master/charts/buildbuddy"},"Open Source")," and ",Object(i.b)("a",{parentName:"li",href:"https://github.com/buildbuddy-io/buildbuddy-helm/tree/master/charts/buildbuddy-enterprise"},"Enterprise")," deployments.\xa0",Object(i.b)("a",{parentName:"li",href:"https://helm.sh/"},"Helm")," enables you to deploy BuildBuddy to a Kubernetes cluster with a single command, and makes configuration a breeze.\xa0The charts can optionally take care of provisioning a MySQL instance, an Nginx ingress, and even Memcached.",Object(i.b)("strong",{parentName:"li"},"\u200d"))),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://uploads-ssl.webflow.com/5eeba6a6c5230ea3d1a60d83/5f5044fa08c11ed1be6b7ddb_Screen%20Shot%202020-09-02%20at%206.19.37%20PM.png",alt:null})),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Build metadata")," - a frequent request from users is the ability to associate a BuildBuddy invocation with a particular git commit and repo. To support this, we've added optional build metadata including repo URL, commit SHA, and CI role that can be passed up with your build. This metadata can be passed up using the ",Object(i.b)("strong",{parentName:"p"},"--build_metadata")," flag, using a ",Object(i.b)("strong",{parentName:"p"},"--workspace_status_command")," script, or using environment variables commonly set by CI\xa0providers like CircleCI, BuildKite, GitHub Actions, and others. More information on how to configure your metadata can be found in our ",Object(i.b)("a",{parentName:"p",href:"https://www.buildbuddy.io/docs/guide-metadata"},"build metadata guide."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"GitHub commit status publishing")," - now that you can configure build metadata to associate invocations with a GitHub repo and commit, we've added the ability to publish commit statuses straight to GitHub when you've set your metadata role to ",Object(i.b)("strong",{parentName:"p"},"CI"),". To enable this feature, simply click ",Object(i.b)("strong",{parentName:"p"},"Link\xa0GitHub Account"),"\xa0in your BuildBuddy profile dropdown\xa0(if you're using self hosted BuildBuddy, you'll need to ",Object(i.b)("a",{parentName:"p",href:"https://www.buildbuddy.io/docs/config-github"},"create a Github OAuth app")," and add it to your config.yaml file)."))),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://uploads-ssl.webflow.com/5eeba6a6c5230ea3d1a60d83/5f5044c5bc9cf35e30ca6fb2_Screen%20Shot%202020-09-02%20at%206.19.15%20PM.png",alt:null})),Object(i.b)("p",null,"BuildBuddy links directly on GitHub"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Improved cache hit rate")," - we've made improvement to our Action Cache validation logic that should result in higher cache hit rates.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"New guides")," - we've added new guides to our documentation, including our ",Object(i.b)("a",{parentName:"p",href:"https://www.buildbuddy.io/docs/guide-auth"},"Authentication Guide"),", ",Object(i.b)("a",{parentName:"p",href:"https://www.buildbuddy.io/docs/guide-metadata"},"Build Metadata Guide"),", ",Object(i.b)("a",{parentName:"p",href:"https://www.buildbuddy.io/docs/rbe-github-actions"},"Remote Build Execution with Github Actions Guide"),", with more coming soon. We've also started collecting troubleshooting documentation for common errors including ",Object(i.b)("a",{parentName:"p",href:"https://www.buildbuddy.io/docs/troubleshooting-rbe"},"RBE\xa0Failures"),", and ",Object(i.b)("a",{parentName:"p",href:"https://www.buildbuddy.io/docs/troubleshooting-slow-upload"},"Slow Uploads"),". Contributions ",Object(i.b)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy/tree/master/docs"},"welcome"),"!")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Target information in timing tab")," - in Bazel 3.4.0, the experimental ",Object(i.b)("a",{parentName:"p",href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--experimental_profile_include_target_label"},"flag")," ",Object(i.b)("strong",{parentName:"p"},"--experimental_profile_include_target_label")," was introduced which adds target information to profiling events. When this flag is enabled, this target information is now displayed in the BuildBuddy Timing tab."))),Object(i.b)("h2",{id:"new-to-cloud--enterprise-buildbuddy"},"New to Cloud & Enterprise BuildBuddy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"BuildBuddy Cloud is now free for teams of up to 3")," - we want to make BuildBuddy available to every team - regardless of size.\xa0BuildBuddy has always been free for individuals and open source projects and today we're expanding this to teams of up to 3 engineers. As your team continues to grow, we have reasonably priced plans that scale from startups to the largest enterprises.")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://uploads-ssl.webflow.com/5eeba6a6c5230ea3d1a60d83/5f50458c4b4e4668b318e974_Screen%20Shot%202020-09-02%20at%206.23.09%20PM.png",alt:null})),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Distributed scheduler")," - the scheduler is a core component of any remote execution platform.\xa0In many cases, it is a single point of failure that turns an otherwise robust system into a fragile, stateful service that's hard to scale. In BuildBuddy 1.2.1, we rewrote our ",Object(i.b)("strong",{parentName:"p"},"distributed")," Remote Build Execution scheduler from the ground up based on many learnings and best practices from state-of-the-art systems like Apache Spark. This enables BuildBuddy to scale to handle the largest workloads with no single point of failure, single digit millisecond queue wait times, and fault tolerance that enables execution on preemptible nodes.\xa0This allows for more cost effective high availability configurations, and allows you to deploy new BuildBuddy releases without a blip in ongoing executions.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Remote asset API\xa0")," - in Bazel 3.0.0 the Remote\xa0Asset API was introduced along with the --experimental_remote_downloader ",Object(i.b)("a",{parentName:"p",href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--experimental_remote_downloader"},"flag"),". In this release, we've added basic support for this experimental API.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Organization configuration")," - we've added configuration options for on-prem installs that allow you to configure an organization's name and limit signups to emails from a specific domain.\xa0More information in the ",Object(i.b)("a",{parentName:"p",href:"https://www.buildbuddy.io/docs/config-org"},"org config documentation"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Configurable anonymous access")," - we've added a configuration option that allows organizations with authentication configured to choose whether or not anonymous access should be enabled.\xa0Anonymous access is off by default when auth is configured.\xa0More information in the ",Object(i.b)("a",{parentName:"p",href:"https://www.buildbuddy.io/docs/config-auth"},"auth config documentation"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"S3 cache support")," - BuildBuddy ",Object(i.b)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy/pull/12"},"previously")," had support for using Amazon S3 as a backing store for build events. In this release, we've added Amazon S3 support for as a backing store for caching as well, with support for streaming, ContainsMulti, and more."))),Object(i.b)("p",null,"That's it for this release. Stay tuned for more updates coming soon!"),Object(i.b)("p",null,"As always, we love your feedback - join our ",Object(i.b)("a",{parentName:"p",href:"https://slack.buildbuddy.io"},"Slack channel")," or email us at ",Object(i.b)("a",{parentName:"p",href:"mailto:hello@buildbuddy.io"},"hello@buildbuddy.io")," with any questions, comments, or thoughts."))}s.isMDXComponent=!0},153:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},b=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=s(a),p=n,m=b["".concat(r,".").concat(p)]||b[p]||c[p]||i;return a?o.a.createElement(m,d(d({ref:t},u),{},{components:a})):o.a.createElement(m,d({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=p;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:n,r[1]=d;for(var u=2;u<i;u++)r[u]=a[u];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);