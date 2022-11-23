"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[8719],{4137:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),c=d(r),f=i,m=c["".concat(l,".").concat(f)]||c[f]||p[f]||o;return r?n.createElement(m,u(u({ref:t},s),{},{components:r})):n.createElement(m,u({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,u=new Array(o);u[0]=c;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,u[1]=a;for(var d=2;d<o;d++)u[d]=r[d];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8448:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return s},default:function(){return c}});var n=r(7462),i=r(3366),o=(r(7294),r(4137)),u=["components"],a={id:"enterprise",title:"Enterprise Overview",sidebar_label:"BuildBuddy Enterprise"},l=void 0,d={unversionedId:"enterprise",id:"enterprise",title:"Enterprise Overview",description:"We offer an enterprise version of BuildBuddy targeted at companies who need advanced features and enterprise level support.",source:"@site/../docs/enterprise.md",sourceDirName:".",slug:"/enterprise",permalink:"/docs/enterprise",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/enterprise.md",tags:[],version:"current",lastUpdatedBy:"Siggi Simonarson",lastUpdatedAt:1669226060,formattedLastUpdatedAt:"11/23/2022",frontMatter:{id:"enterprise",title:"Enterprise Overview",sidebar_label:"BuildBuddy Enterprise"},sidebar:"someSidebar",previous:{title:"Slow Uploads",permalink:"/docs/troubleshooting-slow-upload"},next:{title:"Enterprise On-prem Setup",permalink:"/docs/enterprise-setup"}},s=[{value:"Features",id:"features",children:[],level:2},{value:"Getting started",id:"getting-started",children:[],level:2},{value:"Cloud setup",id:"cloud-setup",children:[],level:2},{value:"On-prem setup",id:"on-prem-setup",children:[],level:2}],p={toc:s};function c(e){var t=e.components,r=(0,i.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We offer an enterprise version of BuildBuddy targeted at companies who need advanced features and enterprise level support."),(0,o.kt)("p",null,"Enterprise BuildBuddy is available both as a fully-managed cloud hosted solution, or as an on-prem deployment."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"OpenID Connect auth support that integrates with Okta, GSuite, Auth0, and more"),(0,o.kt)("li",{parentName:"ul"},"BuildBuddy API for programatic access to your build results"),(0,o.kt)("li",{parentName:"ul"},"Remote Build Execution with support for custom Docker images"),(0,o.kt)("li",{parentName:"ul"},"Configurable TTL for build results and cache with support for persistent build artifact storage"),(0,o.kt)("li",{parentName:"ul"},"High availability (HA) configurations"),(0,o.kt)("li",{parentName:"ul"},"Horizontal scaling with Kubernetes HPA"),(0,o.kt)("li",{parentName:"ul"},"Enterprise grade support and uptime")),(0,o.kt)("p",null,"For a full feature breakdown, check out our ",(0,o.kt)("a",{parentName:"p",href:"https://buildbuddy.io/pricing"},"pricing page"),"."),(0,o.kt)("h2",{id:"getting-started"},"Getting started"),(0,o.kt)("p",null,"To get started with BuildBuddy Enterprise, ",(0,o.kt)("a",{parentName:"p",href:"https://www.buildbuddy.io/request-quote"},"request a quote"),"."),(0,o.kt)("h2",{id:"cloud-setup"},"Cloud setup"),(0,o.kt)("p",null,"Getting started with BuildBuddy Enterprise Cloud is as easy as logging into your ",(0,o.kt)("a",{parentName:"p",href:"https://app.buildbuddy.io/"},"BuildBuddy account"),", and following the Quickstart instructions once BuildBuddy Enterprise has been enabled for your account."),(0,o.kt)("h2",{id:"on-prem-setup"},"On-prem setup"),(0,o.kt)("p",null,"Once you've received your BuildBuddy Enterprise license, you can configure your BuildBuddy Enterprise on-prem installation by following our ",(0,o.kt)("a",{parentName:"p",href:"/docs/enterprise-setup"},"Enterprise Getting Started docs "),"."))}c.isMDXComponent=!0}}]);