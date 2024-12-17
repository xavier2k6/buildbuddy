"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[3663],{24843:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>d,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"config-github","title":"GitHub Configuration","description":"In order to configure BuildBuddy\'s GitHub integration, you\'ll either need to:","source":"@site/../docs/config-github.md","sourceDirName":".","slug":"/config-github","permalink":"/docs/config-github","draft":false,"unlisted":false,"editUrl":"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/config-github.md","tags":[],"version":"current","lastUpdatedBy":"Siggi Simonarson","lastUpdatedAt":1734466115000,"frontMatter":{"id":"config-github","title":"GitHub Configuration","sidebar_label":"GitHub"},"sidebar":"someSidebar","previous":{"title":"Cache","permalink":"/docs/config-cache"},"next":{"title":"SSL","permalink":"/docs/config-ssl"}}');var s=n(74848),o=n(28453);const c={id:"config-github",title:"GitHub Configuration",sidebar_label:"GitHub"},d=void 0,r={},l=[{value:"Section",id:"section",level:2},{value:"Options",id:"options",level:2},{value:"Example section",id:"example-section",level:2}];function a(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"In order to configure BuildBuddy's GitHub integration, you'll either need to:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token",children:"create an access token"})," with the ",(0,s.jsx)(t.code,{children:"repo:status"})," scope. This is the supported method for BuildBuddy open source."]}),"\n",(0,s.jsxs)(t.li,{children:["or ",(0,s.jsx)(t.a,{href:"https://docs.github.com/en/developers/apps/creating-an-oauth-app",children:"create a GitHub Oauth app"}),". In the ",(0,s.jsx)(t.code,{children:"Authorization callback URL"})," field - you'll need to enter your BuildBuddy application url, followed by the path ",(0,s.jsx)(t.code,{children:"/auth/"}),". For example: ",(0,s.jsx)(t.code,{children:"https://https://app.buildbuddy.io/auth/"}),". This is the recommended method for BuildBuddy Enterprise."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"section",children:"Section"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"github:"})," The GitHub section enables the posting of BuildBuddy GitHub commit statuses for CI runs. ",(0,s.jsx)(t.strong,{children:"Optional"})]}),"\n",(0,s.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Optional"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"access_token:"})," The GitHub access token used to post GitHub commit statuses."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"client_id:"})," The client ID of your GitHub Oauth App. [ENTERPRISE ONLY]"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"client_secret:"})," The client secret of your GitHub Oauth App. [ENTERPRISE ONLY]"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"example-section",children:"Example section"}),"\n",(0,s.jsx)(t.p,{children:"Open source with access token:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",metastring:'title="config.yaml"',children:"github:\n  access_token: abc123\n"})}),"\n",(0,s.jsx)(t.p,{children:"Enterprise with Oauth app:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",metastring:'title="config.yaml"',children:"github:\n  client_id: abc123\n  client_secret: def456\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>d});var i=n(96540);const s={},o=i.createContext(s);function c(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);