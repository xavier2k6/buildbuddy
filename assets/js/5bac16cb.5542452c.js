"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[739],{59701:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=a(85893),s=a(11151);const i={id:"config-database",title:"Database Configuration",sidebar_label:"Database"},d=void 0,o={id:"config-database",title:"Database Configuration",description:"Section",source:"@site/../docs/config-database.md",sourceDirName:".",slug:"/config-database",permalink:"/docs/config-database",draft:!1,unlisted:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/config-database.md",tags:[],version:"current",lastUpdatedBy:"Brandon Duffany",lastUpdatedAt:1723484613,formattedLastUpdatedAt:"Aug 12, 2024",frontMatter:{id:"config-database",title:"Database Configuration",sidebar_label:"Database"},sidebar:"someSidebar",previous:{title:"App",permalink:"/docs/config-app"},next:{title:"OLAP Database",permalink:"/docs/config-olap-database"}},c={},l=[{value:"Section",id:"section",level:2},{value:"Options",id:"options",level:2},{value:"Example sections",id:"example-sections",level:2},{value:"SQLite",id:"sqlite",level:3},{value:"MySQL",id:"mysql",level:3}];function r(e){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"section",children:"Section"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"database:"})," The database section configures the database that BuildBuddy stores metadata in. ",(0,n.jsx)(t.strong,{children:"Required"})]}),"\n",(0,n.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Required"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"data_source"})," This is a connection string used by the database driver to connect to the database. MySQL and SQLite databases are supported."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"example-sections",children:"Example sections"}),"\n",(0,n.jsx)(t.h3,{id:"sqlite",children:"SQLite"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",metastring:'title="config.yaml"',children:'database:\n  data_source: "sqlite3:///tmp/buildbuddy.db"\n'})}),"\n",(0,n.jsx)(t.h3,{id:"mysql",children:"MySQL"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",metastring:'title="config.yaml"',children:'database:\n  data_source: "mysql://buildbuddy_user:pAsSwOrD@tcp(12.34.56.78)/buildbuddy_db"\n'})})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>d});var n=a(67294);const s={},i=n.createContext(s);function d(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);