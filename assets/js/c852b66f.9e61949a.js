"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[4741],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4111:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={id:"config-api",title:"API Configuration",sidebar_label:"API"},c=void 0,p={unversionedId:"config-api",id:"config-api",title:"API Configuration",description:"The API is only configurable in the Enterprise version of BuildBuddy. For more information, view the API Documentation.",source:"@site/../docs/config-api.md",sourceDirName:".",slug:"/config-api",permalink:"/docs/config-api",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/config-api.md",tags:[],version:"current",frontMatter:{id:"config-api",title:"API Configuration",sidebar_label:"API"},sidebar:"someSidebar",previous:{title:"Misc",permalink:"/docs/config-misc"},next:{title:"Telemetry",permalink:"/docs/config-telemetry"}},u=[{value:"Section",id:"section",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Example section",id:"example-section",children:[],level:2}],s={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The API is only configurable in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/enterprise"},"Enterprise version")," of BuildBuddy. For more information, view the ",(0,o.kt)("a",{parentName:"p",href:"/docs/enterprise-api"},"API Documentation"),"."),(0,o.kt)("h2",{id:"section"},"Section"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"api:")," The API section enables the BuildBuddy API over both gRPC(s) and REST HTTP(s). ",(0,o.kt)("strong",{parentName:"p"},"Optional")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Optional")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"enable_api:")," Whether or not to enable the BuildBuddy API.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"api_key:")," The default API key to use for on-prem enterprise deploys with a single organization/group."))),(0,o.kt)("h2",{id:"example-section"},"Example section"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"api:\n  enable_api: true\n")))}d.isMDXComponent=!0}}]);