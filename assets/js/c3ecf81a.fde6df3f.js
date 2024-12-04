"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[7189],{91289:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=i(74848),o=i(28453);const s={id:"config-misc",title:"Miscellaneous Configuration",sidebar_label:"Misc"},l=void 0,c={id:"config-misc",title:"Miscellaneous Configuration",description:"BuildEventProxy Section",source:"@site/../docs/config-misc.md",sourceDirName:".",slug:"/config-misc",permalink:"/docs/config-misc",draft:!1,unlisted:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/config-misc.md",tags:[],version:"current",lastUpdatedBy:"Son Luong Ngoc",lastUpdatedAt:1733306405e3,frontMatter:{id:"config-misc",title:"Miscellaneous Configuration",sidebar_label:"Misc"},sidebar:"someSidebar",previous:{title:"RBE",permalink:"/docs/config-rbe"},next:{title:"API",permalink:"/docs/config-api"}},r={},d=[{value:"BuildEventProxy Section",id:"buildeventproxy-section",level:2},{value:"Options",id:"options",level:2},{value:"Example section",id:"example-section",level:2}];function u(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"buildeventproxy-section",children:"BuildEventProxy Section"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"build_event_proxy:"})," The BuildEventProxy section configures proxy behavior, allowing BuildBuddy to forward build events to other build-event-protocol compatible servers. ",(0,t.jsx)(n.strong,{children:"Optional"})]}),"\n",(0,t.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Optional"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"hosts"})," A list of host strings that BuildBudy should connect and forward events to."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"buffer_size"})," The number of build events to buffer locally when proxying build events."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example-section",children:"Example section"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="config.yaml"',children:'build_event_proxy:\n  hosts:\n    - "grpc://localhost:1985"\n    - "grpc://events.buildbuddy.io:1985"\n  buffer_size: 1000\n'})})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>c});var t=i(96540);const o={},s=t.createContext(o);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);