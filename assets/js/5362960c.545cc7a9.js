"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[305],{68020:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var a=t(74848),s=t(28453);const i={id:"config-olap-database",title:"OLAP Database Configuration",sidebar_label:"OLAP Database"},o=void 0,d={id:"config-olap-database",title:"OLAP Database Configuration",description:"Introduction",source:"@site/../docs/config-olap-databases.md",sourceDirName:".",slug:"/config-olap-database",permalink:"/docs/config-olap-database",draft:!1,unlisted:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/config-olap-databases.md",tags:[],version:"current",lastUpdatedBy:"Son Luong Ngoc",lastUpdatedAt:1733306405e3,frontMatter:{id:"config-olap-database",title:"OLAP Database Configuration",sidebar_label:"OLAP Database"},sidebar:"someSidebar",previous:{title:"Database",permalink:"/docs/config-database"},next:{title:"Storage",permalink:"/docs/config-storage"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Options",id:"options",level:2},{value:"Example sections",id:"example-sections",level:2}];function r(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsx)(n.p,{children:"To speed up the analysis of historical build event data, BuildBuddy can be configured to use ClickHouse as an OLAP database, in addition to the primary SQL database required for core functionality."}),"\n",(0,a.jsx)(n.p,{children:"Setting up ClickHouse is completely optional when using BuildBuddy.\nBuildBuddy does not require ClickHouse for its core features, including the build results UI, remote cache, and remote execution system."}),"\n",(0,a.jsx)(n.p,{children:"However, some UI features, such as Trends, Drilldown, Test Grid, Tags filtering, and Audit Logging, may require ClickHouse.\nWithout a configured ClickHouse instance, these features will either be missing from the UI, or will be missing some features and may not scale to larger amounts of data."}),"\n",(0,a.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Optional"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"olap_database:"})," The OLAP (online analytical processing) database section configures the OLAP database that BuildBuddy uses to enable the Trends page. ",(0,a.jsx)(n.strong,{children:"Optional"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"data_source"})," This is a connection string used by the database driver to connect to the database. ClickHouse database is supported."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"enable_data_replication"})," If ClickHouse is using a ",(0,a.jsx)(n.a,{href:"https://clickhouse.com/docs/en/architecture/cluster-deployment",children:"cluster deployment"}),", this will enable data replication within the cluster."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"example-sections",children:"Example sections"}),"\n",(0,a.jsx)(n.p,{children:"Example single-instance ClickHouse configuration:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'olap_database:\n  data_source: "clickhouse://buildbuddy_user:pAsSwOrD@12.34.56.78:9000/buildbuddy_db"\n'})}),"\n",(0,a.jsx)(n.p,{children:"Example ClickHouse cluster configuration:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'olap_database:\n  data_source: "clickhouse://buildbuddy_user:pAsSwOrD@12.34.56.78:9000/buildbuddy_db"\n  enable_data_replication: true\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var a=t(96540);const s={},i=a.createContext(s);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);