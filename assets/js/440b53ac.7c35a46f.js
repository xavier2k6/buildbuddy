"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[7847],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),s=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,h=p["".concat(a,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=p;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:o,l[1]=u;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2677:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return a},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(4137)),l=["components"],u={id:"workflows-setup",title:"Workflows setup",sidebar_label:"Workflows setup"},a=void 0,s={unversionedId:"workflows-setup",id:"workflows-setup",title:"Workflows setup",description:"Workflows automatically build and test your code with",source:"@site/../docs/workflows-setup.md",sourceDirName:".",slug:"/workflows-setup",permalink:"/docs/workflows-setup",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/workflows-setup.md",tags:[],version:"current",lastUpdatedBy:"Siggi Simonarson",lastUpdatedAt:1670547152,formattedLastUpdatedAt:"12/9/2022",frontMatter:{id:"workflows-setup",title:"Workflows setup",sidebar_label:"Workflows setup"},sidebar:"someSidebar",previous:{title:"Workflows introduction",permalink:"/docs/workflows-introduction"},next:{title:"Workflows configuration",permalink:"/docs/workflows-config"}},c=[{value:"Enable workflows for a repo",id:"enable-workflows-for-a-repo",children:[{value:"1. Link GitHub account",id:"1-link-github-account",children:[],level:3},{value:"2. Link the repository",id:"2-link-the-repository",children:[],level:3}],level:2},{value:"Configuring your workflow",id:"configuring-your-workflow",children:[],level:2},{value:"Setting up branch protection rules",id:"setting-up-branch-protection-rules",children:[],level:2},{value:"Building in the workflow runner environment",id:"building-in-the-workflow-runner-environment",children:[],level:2}],d={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Workflows automatically build and test your code with\nBuildBuddy whenever a commit is pushed to your GitHub repo."),(0,i.kt)("p",null,"When combined with GitHub's branch protection rules, workflows can help prevent\nunwanted code (that doesn't build or pass tests) from being merged into the main branch."),(0,i.kt)("p",null,"Best of all, workflows let you run any Bazel commands you would like,\nso you can leverage all the same BuildBuddy features that you get when\nrunning Bazel locally, like the results UI, remote caching, remote execution."),(0,i.kt)("h2",{id:"enable-workflows-for-a-repo"},"Enable workflows for a repo"),(0,i.kt)("h3",{id:"1-link-github-account"},"1. Link GitHub account"),(0,i.kt)("p",null,'If you use GitHub, make sure that your BuildBuddy org has a GitHub\norg linked to it, using the "Link GitHub account" button from the\nsettings page.'),(0,i.kt)("h3",{id:"2-link-the-repository"},"2. Link the repository"),(0,i.kt)("p",null,"Click ",(0,i.kt)("strong",{parentName:"p"},"Workflows")," in the BuildBuddy app and select a repo to\nbe linked to BuildBuddy."),(0,i.kt)("p",null,"Then, BuildBuddy will run ",(0,i.kt)("inlineCode",{parentName:"p"},"bazel test //...")," whenever a commit is pushed to\nyour repo. It reports the status of the test as well as BuildBuddy links to\nGitHub, which you can see on the repo's home page or in pull request branches."),(0,i.kt)("h2",{id:"configuring-your-workflow"},"Configuring your workflow"),(0,i.kt)("p",null,"To learn how to change the default configuration, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/workflows-config"},"workflows configuration"),"."),(0,i.kt)("h2",{id:"setting-up-branch-protection-rules"},"Setting up branch protection rules"),(0,i.kt)("p",null,"After you have created a workflow and you've pushed at least one commit\nto the repo, you can configure your repo so that branches cannot be\nmerged unless the workflow succeeds."),(0,i.kt)("p",null,"To do this, go to ",(0,i.kt)("strong",{parentName:"p"},"Settings")," > ",(0,i.kt)("strong",{parentName:"p"},"Branches")," and find ",(0,i.kt)("strong",{parentName:"p"},"Branch protection rules"),".\nThen, you click ",(0,i.kt)("strong",{parentName:"p"},"Add rule")," (or edit an existing rule)."),(0,i.kt)("p",null,"Select the box ",(0,i.kt)("strong",{parentName:"p"},"Require status checks to pass before merging")," and enable\nthe check corresponding to the BuildBuddy workflow (by default, this should\nbe ",(0,i.kt)("strong",{parentName:"p"},"Test all targets"),")."),(0,i.kt)("p",null,"After you save your changes, pull requests will not be mergeable unless\nthe tests pass on BuildBuddy."),(0,i.kt)("h2",{id:"building-in-the-workflow-runner-environment"},"Building in the workflow runner environment"),(0,i.kt)("p",null,"BuildBuddy workflows execute using Docker on a recent Ubuntu base image\n(Ubuntu 18.04 at the time of this writing), with some commonly used tools\nand libraries pre-installed."),(0,i.kt)("p",null,"If you would like to test whether your build will succeed with\nBuildBuddy workflows without having to set up and trigger the workflow,\nyou can instead run the image with Docker, clone your Git repo, and invoke\n",(0,i.kt)("inlineCode",{parentName:"p"},"bazel")," to run your tests."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Start a new shell inside the workflows environment (requires docker)\ndocker run --rm -it "gcr.io/flame-public/buildbuddy-ci-runner:latest"\n\n# Clone your repo and test it\ngit clone https://github.com/acme-inc/acme\ncd acme\nbazel test //...\n')),(0,i.kt)("p",null,"The Dockerfile we use to build the image (at ",(0,i.kt)("inlineCode",{parentName:"p"},"HEAD"),") is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/enterprise/dockerfiles/ci_runner_image/Dockerfile"},"here"),"."))}p.isMDXComponent=!0}}]);