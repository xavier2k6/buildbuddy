"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[305],{99966:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>r});const a=JSON.parse('{"id":"config-olap-database","title":"OLAP Database Configuration","description":"Introduction","source":"@site/../docs/config-olap-databases.md","sourceDirName":".","slug":"/config-olap-database","permalink":"/docs/config-olap-database","draft":false,"unlisted":false,"editUrl":"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/config-olap-databases.md","tags":[],"version":"current","lastUpdatedBy":"Vadim Berezniker","lastUpdatedAt":1738631082000,"frontMatter":{"id":"config-olap-database","title":"OLAP Database Configuration","sidebar_label":"OLAP Database"},"sidebar":"someSidebar","previous":{"title":"Database","permalink":"/docs/config-database"},"next":{"title":"Storage","permalink":"/docs/config-storage"}}');var s=n(74848),i=n(28453);const o={id:"config-olap-database",title:"OLAP Database Configuration",sidebar_label:"OLAP Database"},d=void 0,l={},r=[{value:"Introduction",id:"introduction",level:2},{value:"Options",id:"options",level:2},{value:"Example sections",id:"example-sections",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(t.p,{children:"To speed up the analysis of historical build event data, BuildBuddy can be configured to use ClickHouse as an OLAP database, in addition to the primary SQL database required for core functionality."}),"\n",(0,s.jsx)(t.p,{children:"Setting up ClickHouse is completely optional when using BuildBuddy.\nBuildBuddy does not require ClickHouse for its core features, including the build results UI, remote cache, and remote execution system."}),"\n",(0,s.jsx)(t.p,{children:"However, some UI features, such as Trends, Drilldown, Test Grid, Tags filtering, and Audit Logging, may require ClickHouse.\nWithout a configured ClickHouse instance, these features will either be missing from the UI, or will be missing some features and may not scale to larger amounts of data."}),"\n",(0,s.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Optional"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"olap_database:"})," The OLAP (online analytical processing) database section configures the OLAP database that BuildBuddy uses to enable the Trends page. ",(0,s.jsx)(t.strong,{children:"Optional"})]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"data_source"})," This is a connection string used by the database driver to connect to the database. ClickHouse database is supported."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"enable_data_replication"})," If ClickHouse is using a ",(0,s.jsx)(t.a,{href:"https://clickhouse.com/docs/en/architecture/cluster-deployment",children:"cluster deployment"}),", this will enable data replication within the cluster."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"example-sections",children:"Example sections"}),"\n",(0,s.jsx)(t.p,{children:"Example single-instance ClickHouse configuration:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:'olap_database:\n  data_source: "clickhouse://buildbuddy_user:pAsSwOrD@12.34.56.78:9000/buildbuddy_db"\n'})}),"\n",(0,s.jsx)(t.p,{children:"Example ClickHouse cluster configuration:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:'olap_database:\n  data_source: "clickhouse://buildbuddy_user:pAsSwOrD@12.34.56.78:9000/buildbuddy_db"\n  enable_data_replication: true\n'})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>d});var a=n(96540);const s={},i=a.createContext(s);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);