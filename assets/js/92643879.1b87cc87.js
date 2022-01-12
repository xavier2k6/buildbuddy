"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[5156],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,g=d["".concat(u,".").concat(p)]||d[p]||f[p]||i;return n?r.createElement(g,a(a({ref:t},s),{},{components:n})):r.createElement(g,a({ref:t},s))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4826:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={id:"config-flags",title:"BuildBuddy Flags",sidebar_label:"Flags"},u=void 0,c={unversionedId:"config-flags",id:"config-flags",title:"BuildBuddy Flags",description:"There are several configuration options that are not in the BuildBuddy configuration file. These are:",source:"@site/../docs/config-flags.md",sourceDirName:".",slug:"/config-flags",permalink:"/docs/config-flags",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/config-flags.md",tags:[],version:"current",frontMatter:{id:"config-flags",title:"BuildBuddy Flags",sidebar_label:"Flags"},sidebar:"someSidebar",previous:{title:"Telemetry",permalink:"/docs/config-telemetry"}},s=[{value:"Configuration options as flags",id:"configuration-options-as-flags",children:[],level:2}],f={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"There are several configuration options that are not in the BuildBuddy configuration file. These are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--config_file")," The path to a config.yaml file from which to read configuration options."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--listen")," The interface that BuildBuddy will listen on. Defaults to 0.0.0.0 (all interfaces)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--port")," The port to listen for HTTP traffic on. Defaults to 8080."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--grpc_port")," The port to listen for gRPC traffic on. Defaults to 1985.")),(0,i.kt)("h2",{id:"configuration-options-as-flags"},"Configuration options as flags"),(0,i.kt)("p",null,"Additionally any ",(0,i.kt)("a",{parentName:"p",href:"/docs/config"},"configuration option")," can also be specified as a flag instead using dot notation."),(0,i.kt)("p",null,"For example the following configuration option:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'database:\n  data_source: "mysql://user:password@tcp(12.34.56.78)/buildbuddy_db"\n')),(0,i.kt)("p",null,"Would be specified as a flag like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'--database.data_source="mysql://user:password@tcp(12.34.56.78)/buildbuddy_db"\n')))}d.isMDXComponent=!0}}]);