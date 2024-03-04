"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[2527],{97177:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>r});var n=a(85893),s=a(11151);const o={id:"config-olap-database",title:"OLAP Database Configuration",sidebar_label:"OLAP Database"},d=void 0,i={id:"config-olap-database",title:"OLAP Database Configuration",description:"Section",source:"@site/../docs/config-olap-databases.md",sourceDirName:".",slug:"/config-olap-database",permalink:"/docs/config-olap-database",draft:!1,unlisted:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/config-olap-databases.md",tags:[],version:"current",lastUpdatedBy:"Lulu Zhang",lastUpdatedAt:1709572165,formattedLastUpdatedAt:"Mar 4, 2024",frontMatter:{id:"config-olap-database",title:"OLAP Database Configuration",sidebar_label:"OLAP Database"}},l={},r=[{value:"Section",id:"section",level:2},{value:"Options",id:"options",level:2},{value:"Example sections",id:"example-sections",level:2}];function c(e){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"section",children:"Section"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"olap_database:"})," The OLAP (online analytical processing) database section configures the OLAP database that BuildBuddy uses to enable the Trends page. ",(0,n.jsx)(t.strong,{children:"Optional"})]}),"\n",(0,n.jsxs)(t.p,{children:["Note: in order to use OLAP database for the Trends page, ",(0,n.jsx)(t.code,{children:"app.enable_read_from_olap_db"})," and\n",(0,n.jsx)(t.code,{children:"app.enable_write_to_olap_db"})," needs to be set to ",(0,n.jsx)(t.code,{children:"true"})]}),"\n",(0,n.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Optional"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"data_source"})," This is a connection string used by the database driver to connect to the database. ClickHouse database is supported."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"enable_data_replication"})," If true, data replication is enabled."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"example-sections",children:"Example sections"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'app:\n  enable_read_from_olap_db: true\n  enable_write_to_olap_db: true\nolap_database:\n  data_source: "clickhouse://buildbuddy_user:pAsSwOrD@12.34.56.78:9000/buildbuddy_db"\n  enable_data_replication: true\n'})})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>i,a:()=>d});var n=a(67294);const s={},o=n.createContext(s);function d(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);