"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[2449],{4137:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||i;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},670:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=t(7462),o=t(3366),i=(t(7294),t(4137)),a=["components"],l={id:"config-org",title:"Organization Configuration",sidebar_label:"Org"},c=void 0,u={unversionedId:"config-org",id:"config-org",title:"Organization Configuration",description:"Your organization is only configurable in the Enterprise version of BuildBuddy.",source:"@site/../docs/config-org.md",sourceDirName:".",slug:"/config-org",permalink:"/docs/config-org",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/config-org.md",tags:[],version:"current",lastUpdatedBy:"Brandon Duffany",lastUpdatedAt:1682690374,formattedLastUpdatedAt:"4/28/2023",frontMatter:{id:"config-org",title:"Organization Configuration",sidebar_label:"Org"},sidebar:"someSidebar",previous:{title:"Integrations",permalink:"/docs/config-integrations"},next:{title:"RBE",permalink:"/docs/config-rbe"}},p=[{value:"Section",id:"section",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Example section",id:"example-section",children:[],level:2}],s={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Your organization is only configurable in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/enterprise"},"Enterprise version")," of BuildBuddy."),(0,i.kt)("h2",{id:"section"},"Section"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"org:")," The org section allows you to configure your BuildBuddy organization. ",(0,i.kt)("strong",{parentName:"p"},"Optional")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Optional")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"name:")," The name of your organization, which is displayed on your organization's build history.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"domain:")," Your organization's email domain. If this is set, only users with email addresses in this domain will be able to register for a BuildBuddy account."))),(0,i.kt)("h2",{id:"example-section"},"Example section"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"org:\n  name: Acme Corp\n  domain: acme.com\n")))}d.isMDXComponent=!0}}]);