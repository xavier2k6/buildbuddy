"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[4155],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(a,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9042:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return a},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),l=["components"],c={id:"config-misc",title:"Miscellaneous Configuration",sidebar_label:"Misc"},a=void 0,u={unversionedId:"config-misc",id:"config-misc",title:"Miscellaneous Configuration",description:"BuildEventProxy Section",source:"@site/../docs/config-misc.md",sourceDirName:".",slug:"/config-misc",permalink:"/docs/config-misc",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/config-misc.md",tags:[],version:"current",frontMatter:{id:"config-misc",title:"Miscellaneous Configuration",sidebar_label:"Misc"},sidebar:"someSidebar",previous:{title:"RBE",permalink:"/docs/config-rbe"},next:{title:"API",permalink:"/docs/config-api"}},s=[{value:"BuildEventProxy Section",id:"buildeventproxy-section",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Example section",id:"example-section",children:[],level:2}],p={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"buildeventproxy-section"},"BuildEventProxy Section"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"build_event_proxy:")," The BuildEventProxy section configures proxy behavior, allowing BuildBuddy to forward build events to other build-event-protocol compatible servers. ",(0,i.kt)("strong",{parentName:"p"},"Optional")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Optional")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hosts")," A list of host strings that BuildBudy should connect and forward events to."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"buffer_size")," The number of build events to buffer locally when proxying build events.")),(0,i.kt)("h2",{id:"example-section"},"Example section"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'build_event_proxy:\n  hosts:\n    - "grpc://localhost:1985"\n    - "grpc://events.buildbuddy.io:1985"\n  buffer_size: 1000\n')))}d.isMDXComponent=!0}}]);