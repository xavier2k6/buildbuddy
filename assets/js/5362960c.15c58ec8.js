"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[2527],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),b=r,f=d["".concat(p,".").concat(b)]||d[b]||u[b]||o;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},39556:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],l={id:"config-olap-database",title:"OLAP Database Configuration",sidebar_label:"OLAP Database"},p=void 0,c={unversionedId:"config-olap-database",id:"config-olap-database",title:"OLAP Database Configuration",description:"Section",source:"@site/../docs/config-olap-databases.md",sourceDirName:".",slug:"/config-olap-database",permalink:"/docs/config-olap-database",draft:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/config-olap-databases.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1697482705,formattedLastUpdatedAt:"Oct 16, 2023",frontMatter:{id:"config-olap-database",title:"OLAP Database Configuration",sidebar_label:"OLAP Database"}},s={},d=[{value:"Section",id:"section",level:2},{value:"Options",id:"options",level:2},{value:"Example sections",id:"example-sections",level:2}],u={toc:d},b="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)(b,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"section"},"Section"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"olap_database:")," The OLAP (online analytical processing) database section configures the OLAP database that BuildBuddy uses to enable the Trends page. ",(0,o.kt)("strong",{parentName:"p"},"Optional")),(0,o.kt)("p",null,"Note: in order to use OLAP database for the Trends page, ",(0,o.kt)("inlineCode",{parentName:"p"},"app.enable_read_from_olap_db")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"app.enable_write_to_olap_db")," needs to be set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Optional")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"data_source")," This is a connection string used by the database driver to connect to the database. ClickHouse database is supported."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"enable_data_replication")," If true, data replication is enabled.")),(0,o.kt)("h2",{id:"example-sections"},"Example sections"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'app:\n  enable_read_from_olap_db: true\n  enable_write_to_olap_db: true\nolap_database:\n  data_source: "clickhouse://buildbuddy_user:pAsSwOrD@12.34.56.78:9000/buildbuddy_db"\n  enable_data_replication: true\n')))}f.isMDXComponent=!0}}]);