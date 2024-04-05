"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[1790],{12480:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var t=n(85893),l=n(11151);const s={id:"cli",title:"BuildBuddy CLI",sidebar_label:"CLI Overview"},o=void 0,d={id:"cli",title:"BuildBuddy CLI",description:"The BuildBuddy CLI brings the power of BuildBuddy to the command line. It's a Bazel wrapper that's built on top of Bazelisk and brings support for plugins, authentication, flaky network conditions, and more.",source:"@site/../docs/cli.md",sourceDirName:".",slug:"/cli",permalink:"/docs/cli",draft:!1,unlisted:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/cli.md",tags:[],version:"current",lastUpdatedBy:"Brentley Jones",lastUpdatedAt:1712340347,formattedLastUpdatedAt:"Apr 5, 2024",frontMatter:{id:"cli",title:"BuildBuddy CLI",sidebar_label:"CLI Overview"},sidebar:"someSidebar",previous:{title:"Workflows configuration",permalink:"/docs/workflows-config"},next:{title:"CLI Plugins",permalink:"/docs/cli-plugins"}},r={},a=[{value:"Installation",id:"installation",level:2},{value:"Updating",id:"updating",level:2},{value:"Installing for a project",id:"installing-for-a-project",level:2},{value:"Features",id:"features",level:2},{value:"Networking",id:"networking",level:3},{value:"Plugins",id:"plugins",level:3},{value:"Authentication",id:"authentication",level:3},{value:"Contributing",id:"contributing",level:2},{value:"Reporting an issue",id:"reporting-an-issue",level:2}];function u(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.a,{href:"/cli",children:"BuildBuddy CLI"})," brings the power of BuildBuddy to the command line. It's a ",(0,t.jsx)(i.a,{href:"https://bazel.build/",children:"Bazel"})," wrapper that's built on top of ",(0,t.jsx)(i.a,{href:"https://github.com/bazelbuild/bazelisk",children:"Bazelisk"})," and brings support for ",(0,t.jsx)(i.a,{href:"#plugins",children:"plugins"}),", ",(0,t.jsx)(i.a,{href:"#authentication",children:"authentication"}),", ",(0,t.jsx)(i.a,{href:"#networking",children:"flaky network conditions"}),", and more."]}),"\n",(0,t.jsxs)(i.p,{children:["Because it's built on top of ",(0,t.jsx)(i.a,{href:"https://github.com/bazelbuild/bazelisk",children:"Bazelisk"}),", it's command line compatible with Bazel - which means you can simply ",(0,t.jsx)(i.code,{children:"alias bazel=bb"})," and keep using Bazel the way you normally would."]}),"\n",(0,t.jsxs)(i.p,{children:["It's written in ",(0,t.jsx)(i.a,{href:"https://go.dev/",children:"go"}),", ",(0,t.jsx)(i.a,{href:"https://github.com/buildbuddy-io/buildbuddy/tree/master/cli",children:"fully open source"}),", and ",(0,t.jsx)(i.a,{href:"https://opensource.org/licenses/MIT",children:"MIT licensed"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(i.p,{children:"The easiest way to install the BuildBuddy CLI is by running this simple bash script, which works on both MacOS and Linux:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"curl -fsSL install.buildbuddy.io | bash\n"})}),"\n",(0,t.jsxs)(i.p,{children:["If you're not comfortable executing random bash scripts from the internet (we totally get it!), you can take a look at what this script is doing under the hood, by visiting ",(0,t.jsx)(i.a,{href:"https://install.buildbuddy.io",children:"install.buildbuddy.io"})," in your browser."]}),"\n",(0,t.jsxs)(i.p,{children:["It's downloading the latest BuildBuddy CLI binary for your OS and architecture from our Github repo ",(0,t.jsx)(i.a,{href:"https://github.com/buildbuddy-io/bazel/releases",children:"here"})," and moving it to ",(0,t.jsx)(i.code,{children:"/usr/local/bin/bb"}),"."]}),"\n",(0,t.jsx)(i.p,{children:"You can perform those steps manually yourself if you'd like!"}),"\n",(0,t.jsx)(i.h2,{id:"updating",children:"Updating"}),"\n",(0,t.jsx)(i.p,{children:"You can update the cli by re-running the installation script:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"curl -fsSL install.buildbuddy.io | bash\n"})}),"\n",(0,t.jsx)(i.p,{children:"If you installed BuildBuddy manually instead, you can repeat those installation steps to update your CLI."}),"\n",(0,t.jsx)(i.p,{children:"You can check your BuildBuddy CLI version at any time by running:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"bb version\n"})}),"\n",(0,t.jsx)(i.h2,{id:"installing-for-a-project",children:"Installing for a project"}),"\n",(0,t.jsx)(i.p,{children:"If you're already using Bazelisk, you can easily install the BuildBuddy CLI for your entire project by running:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:'echo "$(echo "buildbuddy-io/5.0.25"; cat .bazelversion)" > .bazelversion\n'})}),"\n",(0,t.jsxs)(i.p,{children:["This will simply prepend ",(0,t.jsx)(i.code,{children:"buildbuddy-io/5.0.25"})," on a new line above your ",(0,t.jsx)(i.code,{children:".bazelversion"})," file like so:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:'language-title=".bazelversion"',children:"buildbuddy-io/5.0.25\n5.3.2\n"})}),"\n",(0,t.jsxs)(i.p,{children:["The version ",(0,t.jsx)("span",{class:"cli-version",children:"5.0.25"})," of the BuildBuddy CLI will now automatically be used when you type ",(0,t.jsx)(i.code,{children:"bazel"})," or ",(0,t.jsx)(i.code,{children:"bazelisk"})," and continue to use the Bazel version specified on the second line of your ",(0,t.jsx)(i.code,{children:".bazelrc"})," file."]}),"\n",(0,t.jsxs)(i.p,{children:["To find the latest version of the BuildBuddy CLI, you can view our releases page ",(0,t.jsx)(i.a,{href:"https://github.com/buildbuddy-io/bazel/releases",children:"here"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"features",children:"Features"}),"\n",(0,t.jsx)(i.h3,{id:"networking",children:"Networking"}),"\n",(0,t.jsx)(i.p,{children:"The BuildBuddy CLI was built to handle flaky network conditions without affecting your build. It does this by forwarding all remote cache & build event stream requests through a local proxy. This means that you'll never have to sit around waiting for outputs or build events to upload, and your build won't fail if you're not connected to the internet."}),"\n",(0,t.jsx)(i.h3,{id:"plugins",children:"Plugins"}),"\n",(0,t.jsx)(i.p,{children:"The BuildBuddy CLI comes with a robust plugin system. Plugins are super simple to write, share, and install."}),"\n",(0,t.jsxs)(i.p,{children:["You can find a list of plugins that you can install in our ",(0,t.jsx)(i.a,{href:"/plugins",children:"plugin library"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["For more information on how to write your own plugins, check out the ",(0,t.jsx)(i.a,{href:"/docs/cli-plugins",children:"plugin documentation"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"authentication",children:"Authentication"}),"\n",(0,t.jsxs)(i.p,{children:["The BuildBuddy CLI makes authentication to BuildBuddy a breeze. You can simply type ",(0,t.jsx)(i.code,{children:"bb login"})," and follow the instructions. Once you're logged in, all of your requests to BuildBuddy will be authenticated to your organization."]}),"\n",(0,t.jsx)(i.h2,{id:"contributing",children:"Contributing"}),"\n",(0,t.jsxs)(i.p,{children:["We welcome pull requests! You can find the code for the BuildBuddy CLI on Github ",(0,t.jsx)(i.a,{href:"https://github.com/buildbuddy-io/buildbuddy/tree/master/cli",children:"here"}),". See our ",(0,t.jsx)(i.a,{href:"https://www.buildbuddy.io/docs/contributing",children:"contributing docs"})," for more info."]}),"\n",(0,t.jsx)(i.h2,{id:"reporting-an-issue",children:"Reporting an issue"}),"\n",(0,t.jsxs)(i.p,{children:["If you run into an issue with the BuildBuddy CLI, please let us know by ",(0,t.jsx)(i.a,{href:"https://github.com/buildbuddy-io/buildbuddy/issues/new",children:"filing an issue"})," and including ",(0,t.jsx)(i.strong,{children:"[CLI]"})," in the title."]})]})}function c(e={}){const{wrapper:i}={...(0,l.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>d,a:()=>o});var t=n(67294);const l={},s=t.createContext(l);function o(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);