"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[739],{59701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=n(85893),a=n(11151);const i={id:"config-database",title:"Database Configuration",sidebar_label:"Database"},d=void 0,o={id:"config-database",title:"Database Configuration",description:"Section",source:"@site/../docs/config-database.md",sourceDirName:".",slug:"/config-database",permalink:"/docs/config-database",draft:!1,unlisted:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/config-database.md",tags:[],version:"current",lastUpdatedBy:"Siggi Simonarson",lastUpdatedAt:1707767612,formattedLastUpdatedAt:"Feb 12, 2024",frontMatter:{id:"config-database",title:"Database Configuration",sidebar_label:"Database"},sidebar:"someSidebar",previous:{title:"App",permalink:"/docs/config-app"},next:{title:"Storage",permalink:"/docs/config-storage"}},r={},c=[{value:"Section",id:"section",level:2},{value:"Options",id:"options",level:2},{value:"Example sections",id:"example-sections",level:2},{value:"SQLite",id:"sqlite",level:3},{value:"MySQL",id:"mysql",level:3}];function l(e){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"section",children:"Section"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"database:"})," The database section configures the database that BuildBuddy stores metadata in. ",(0,s.jsx)(t.strong,{children:"Required"})]}),"\n",(0,s.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Required"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"data_source"})," This is a connection string used by the database driver to connect to the database. MySQL and SQLite databases are supported."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"example-sections",children:"Example sections"}),"\n",(0,s.jsx)(t.h3,{id:"sqlite",children:"SQLite"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'database:\n  data_source: "sqlite3:///tmp/buildbuddy.db"\n'})}),"\n",(0,s.jsx)(t.h3,{id:"mysql",children:"MySQL"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'database:\n  data_source: "mysql://buildbuddy_user:pAsSwOrD@tcp(12.34.56.78)/buildbuddy_db"\n'})})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>d});var s=n(67294);const a={},i=s.createContext(a);function d(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);