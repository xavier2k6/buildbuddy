"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[7847],{43786:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=o(85893),r=o(11151);const i={id:"workflows-setup",title:"Workflows setup",sidebar_label:"Workflows setup"},s=void 0,l={id:"workflows-setup",title:"Workflows setup",description:"Workflows automatically build and test your code with",source:"@site/../docs/workflows-setup.md",sourceDirName:".",slug:"/workflows-setup",permalink:"/docs/workflows-setup",draft:!1,unlisted:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/workflows-setup.md",tags:[],version:"current",lastUpdatedBy:"Iain Macdonald",lastUpdatedAt:1722544857,formattedLastUpdatedAt:"Aug 1, 2024",frontMatter:{id:"workflows-setup",title:"Workflows setup",sidebar_label:"Workflows setup"},sidebar:"someSidebar",previous:{title:"Workflows introduction",permalink:"/docs/workflows-introduction"},next:{title:"Workflows configuration",permalink:"/docs/workflows-config"}},u={},d=[{value:"Enable workflows for a repo",id:"enable-workflows-for-a-repo",level:2},{value:"Running workflows",id:"running-workflows",level:2},{value:"Configuring your workflow",id:"configuring-your-workflow",level:2},{value:"Setting up branch protection rules",id:"setting-up-branch-protection-rules",level:2},{value:"Building in the workflow runner environment",id:"building-in-the-workflow-runner-environment",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Workflows automatically build and test your code with\nBuildBuddy whenever a commit is pushed to your GitHub repo."}),"\n",(0,t.jsx)(n.p,{children:"When combined with GitHub's branch protection rules, workflows can help prevent\nunwanted code (that doesn't build or pass tests) from being merged into the main branch."}),"\n",(0,t.jsx)(n.p,{children:"Best of all, workflows let you run any Bazel commands you would like,\nso you can leverage all the same BuildBuddy features that you get when\nrunning Bazel locally, like the results UI, remote caching, remote execution."}),"\n",(0,t.jsx)(n.h2,{id:"enable-workflows-for-a-repo",children:"Enable workflows for a repo"}),"\n",(0,t.jsx)(n.p,{children:"To enable workflows, take the following steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Log in to the BuildBuddy app, and use the organization picker in the\nsidebar to select your preferred organization."}),"\n",(0,t.jsxs)(n.li,{children:["Navigate to the ",(0,t.jsx)(n.strong,{children:"Workflows"})," page using the sidebar."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Link a repository"}),", then follow the steps displayed in the app."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"running-workflows",children:"Running workflows"}),"\n",(0,t.jsxs)(n.p,{children:["Once a repository is linked, BuildBuddy will automatically run ",(0,t.jsx)(n.code,{children:"bazel test //..."})," whenever a commit is pushed to your repo's default branch\nor whenever a pull request branch is updated. It will report commit\nstatuses to GitHub, which you can see on the repo's home page or in pull\nrequest branches. The \"Details\" links in these statuses point to the\nBuildBuddy UI, where you can see the result of the workflow run."]}),"\n",(0,t.jsx)(n.h2,{id:"configuring-your-workflow",children:"Configuring your workflow"}),"\n",(0,t.jsxs)(n.p,{children:["To learn how to change the default configuration, see ",(0,t.jsx)(n.a,{href:"/docs/workflows-config",children:"workflows configuration"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"setting-up-branch-protection-rules",children:"Setting up branch protection rules"}),"\n",(0,t.jsx)(n.p,{children:"After you have created a workflow and you've pushed at least one commit\nto the repo, you can configure your repo so that branches cannot be\nmerged unless the workflow succeeds."}),"\n",(0,t.jsxs)(n.p,{children:["To do this, go to ",(0,t.jsx)(n.strong,{children:"Settings"})," > ",(0,t.jsx)(n.strong,{children:"Branches"})," and find ",(0,t.jsx)(n.strong,{children:"Branch protection rules"}),".\nThen, you click ",(0,t.jsx)(n.strong,{children:"Add rule"})," (or edit an existing rule)."]}),"\n",(0,t.jsxs)(n.p,{children:["Select the box ",(0,t.jsx)(n.strong,{children:"Require status checks to pass before merging"})," and enable\nthe check corresponding to the BuildBuddy workflow (by default, this should\nbe ",(0,t.jsx)(n.strong,{children:"Test all targets"}),")."]}),"\n",(0,t.jsx)(n.p,{children:"After you save your changes, pull requests will not be mergeable unless\nthe tests pass on BuildBuddy."}),"\n",(0,t.jsx)(n.h2,{id:"building-in-the-workflow-runner-environment",children:"Building in the workflow runner environment"}),"\n",(0,t.jsx)(n.p,{children:"BuildBuddy workflows execute using a Firecracker MicroVM on an Ubuntu\n18.04-based image, with some commonly used tools and libraries\npre-installed."}),"\n",(0,t.jsxs)(n.p,{children:["If you would like to test whether your build will succeed on\nBuildBuddy workflows without having to set up and trigger the workflow,\nyou can get a good approximation of the workflow VM environment by running\nthe image locally with Docker, cloning your Git repo, and invoking\n",(0,t.jsx)(n.code,{children:"bazel"})," to run your tests:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'# Start a new shell inside the workflows Ubuntu 18.04 environment (requires docker)\ndocker run --rm -it "gcr.io/flame-public/buildbuddy-ci-runner:latest"\n\n# Clone your repo and test it\ngit clone https://github.com/acme-inc/acme\ncd acme\nbazel test //...\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The Dockerfile we use to build the image (at ",(0,t.jsx)(n.code,{children:"HEAD"}),") is ",(0,t.jsx)(n.a,{href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/enterprise/dockerfiles/ci_runner_image/Dockerfile",children:"here"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If you plan to use the Ubuntu 20.04 image (requires ",(0,t.jsx)(n.a,{href:"workflows-config#linux-image-configuration",children:"advanced configuration"}),"), use\n",(0,t.jsx)(n.code,{children:'"gcr.io/flame-public/rbe-ubuntu20-04-workflows:latest"'})," in the command\nabove."]})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>l,a:()=>s});var t=o(67294);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);