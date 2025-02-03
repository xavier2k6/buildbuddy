"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[7781],{18959:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"config-flags","title":"BuildBuddy Flags","description":"There are several configuration options that are not in the BuildBuddy configuration file. These are:","source":"@site/../docs/config-flags.md","sourceDirName":".","slug":"/config-flags","permalink":"/docs/config-flags","draft":false,"unlisted":false,"editUrl":"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/config-flags.md","tags":[],"version":"current","lastUpdatedBy":"Maggie Lou","lastUpdatedAt":1738601950000,"frontMatter":{"id":"config-flags","title":"BuildBuddy Flags","sidebar_label":"Flags"},"sidebar":"someSidebar","previous":{"title":"Telemetry","permalink":"/docs/config-telemetry"},"next":{"title":"All Options","permalink":"/docs/config-all-options"}}');var o=t(74848),s=t(28453);const l={id:"config-flags",title:"BuildBuddy Flags",sidebar_label:"Flags"},a=void 0,r={},d=[{value:"Configuration options as flags",id:"configuration-options-as-flags",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"There are several configuration options that are not in the BuildBuddy configuration file. These are:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"--config_file"})," The path to a config.yaml file from which to read configuration options."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"--listen"})," The interface that BuildBuddy will listen on. Defaults to 0.0.0.0 (all interfaces)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"--port"})," The port to listen for HTTP traffic on. Defaults to 8080."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"--grpc_port"})," The port to listen for gRPC traffic on. Defaults to 1985."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"--monitoring_port"})," The port to listen for Prometheus metrics requests on. Defaults to 9090."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"configuration-options-as-flags",children:"Configuration options as flags"}),"\n",(0,o.jsxs)(n.p,{children:["Additionally any ",(0,o.jsx)(n.a,{href:"/docs/config",children:"configuration option"})," can also be specified as a flag instead using dot notation."]}),"\n",(0,o.jsx)(n.p,{children:"For example the following configuration option:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'title="config.yaml"',children:'database:\n  data_source: "mysql://user:password@tcp(12.34.56.78)/buildbuddy_db"\n'})}),"\n",(0,o.jsx)(n.p,{children:"Would be specified as a flag like so:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'--database.data_source="mysql://user:password@tcp(12.34.56.78)/buildbuddy_db"\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var i=t(96540);const o={},s=i.createContext(o);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);