"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[299],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),d=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(r),y=o,m=c["".concat(u,".").concat(y)]||c[y]||p[y]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},63633:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=["components"],l={id:"config-telemetry",title:"Telemetry",sidebar_label:"Telemetry"},u=void 0,d={unversionedId:"config-telemetry",id:"config-telemetry",title:"Telemetry",description:"At BuildBuddy, we collect telemetry for the purpose of helping us build a better BuildBuddy. Data about how BuildBuddy is used is collected to better understand what parts of BuildBuddy needs improvement and what features to build next. Telemetry also helps our team better understand the reasons why people use BuildBuddy and with this knowledge we are able to make better product decisions.",source:"@site/../docs/config-telemetry.md",sourceDirName:".",slug:"/config-telemetry",permalink:"/docs/config-telemetry",draft:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/config-telemetry.md",tags:[],version:"current",lastUpdatedBy:"Siggi Simonarson",lastUpdatedAt:1684779481,formattedLastUpdatedAt:"May 22, 2023",frontMatter:{id:"config-telemetry",title:"Telemetry",sidebar_label:"Telemetry"},sidebar:"someSidebar",previous:{title:"API",permalink:"/docs/config-api"},next:{title:"Flags",permalink:"/docs/config-flags"}},s={},c=[],p={toc:c},y="wrapper";function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)(y,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"At BuildBuddy, we collect telemetry for the purpose of helping us build a better BuildBuddy. Data about how BuildBuddy is used is collected to better understand what parts of BuildBuddy needs improvement and what features to build next. Telemetry also helps our team better understand the reasons why people use BuildBuddy and with this knowledge we are able to make better product decisions."),(0,a.kt)("p",null,"The telemetry data we collect is reported once per day and contains only aggregate stats like invocation counts and feature usage information. Our telemetry infrastructure is also used to report when important security updates are available. For a complete picture of the telemetry data we collect, you can see our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/proto/telemetry.proto"},"telemetry proto"),"."),(0,a.kt)("p",null,"We also use Google Analytics to collect pseudonymized usage data about how users are using the BuildBuddy product and how well it is performing. This data is analyzed and used to improve the BuildBuddy product."),(0,a.kt)("p",null,"While we encourage users to enable telemetry collection and strive to be fully transparent about the data we collect to improve BuildBuddy, telemetry can be disabled at any time using the flag ",(0,a.kt)("inlineCode",{parentName:"p"},"--disable_telemetry=true"),". Google Analytics can also optionally be disabled using the flag ",(0,a.kt)("inlineCode",{parentName:"p"},"--disable_ga=true"),"."))}m.isMDXComponent=!0}}]);