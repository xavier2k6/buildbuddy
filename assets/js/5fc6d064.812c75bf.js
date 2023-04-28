"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[9645],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(n),h=i,f=s["".concat(u,".").concat(h)]||s[h]||d[h]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2269:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(7462),i=n(3366),o=(n(7294),n(4137)),a=["components"],l={id:"config-auth",title:"Auth Configuration",sidebar_label:"Auth"},u=void 0,p={unversionedId:"config-auth",id:"config-auth",title:"Auth Configuration",description:"Auth is only configurable in the Enterprise version of BuildBuddy.",source:"@site/../docs/config-auth.md",sourceDirName:".",slug:"/config-auth",permalink:"/docs/config-auth",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/config-auth.md",tags:[],version:"current",lastUpdatedBy:"Brandon Duffany",lastUpdatedAt:1682690374,formattedLastUpdatedAt:"4/28/2023",frontMatter:{id:"config-auth",title:"Auth Configuration",sidebar_label:"Auth"},sidebar:"someSidebar",previous:{title:"SSL",permalink:"/docs/config-ssl"},next:{title:"Integrations",permalink:"/docs/config-integrations"}},c=[{value:"Section",id:"section",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Redirect URL",id:"redirect-url",children:[],level:2},{value:"Google auth provider",id:"google-auth-provider",children:[],level:2},{value:"Gitlab auth provider",id:"gitlab-auth-provider",children:[],level:2}],d={toc:c};function s(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Auth is only configurable in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/enterprise"},"Enterprise version")," of BuildBuddy."),(0,o.kt)("h2",{id:"section"},"Section"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"auth:")," The Auth section enables BuildBuddy authentication using an OpenID Connect provider that you specify. ",(0,o.kt)("strong",{parentName:"p"},"Optional")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"oauth_providers:")," A list of configured OAuth Providers.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"issuer_url: ")," The issuer URL of this OIDC Provider."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"client_id: ")," The oauth client ID."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"client_secret: ")," The oauth client secret."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"enable_anonymous_usage:")," If true, unauthenticated build uploads will still be allowed but won't be associated with your organization.")),(0,o.kt)("h2",{id:"redirect-url"},"Redirect URL"),(0,o.kt)("p",null,"If during your OpenID provider configuration you're asked to enter a ",(0,o.kt)("strong",{parentName:"p"},"Redirect URL"),", you should enter ",(0,o.kt)("inlineCode",{parentName:"p"},"https://YOUR_BUILDBUDDY_URL/auth/"),". For example if your BuildBuddy instance was hosted on ",(0,o.kt)("inlineCode",{parentName:"p"},"https://buildbuddy.acme.com"),", you'd enter ",(0,o.kt)("inlineCode",{parentName:"p"},"https://buildbuddy.acme.com/auth/")," as your redirect url."),(0,o.kt)("h2",{id:"google-auth-provider"},"Google auth provider"),(0,o.kt)("p",null,"If you'd like to use Google as an auth provider, you can easily obtain your client id and client secret ",(0,o.kt)("a",{parentName:"p",href:"https://console.developers.google.com/apis/credentials"},"here"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'auth:\n  oauth_providers:\n    - issuer_url: "https://accounts.google.com"\n      client_id: "12345678911-f1r0phjnhbabcdefm32etnia21keeg31.apps.googleusercontent.com"\n      client_secret: "sEcRetKeYgOeShErE"\n')),(0,o.kt)("h2",{id:"gitlab-auth-provider"},"Gitlab auth provider"),(0,o.kt)("p",null,"You can use Gitlab as an OIDC identity provider for BuildBuddy.\nThis feature is available for both Gitlab On-Prem Deployment and Gitlab SaaS offering."),(0,o.kt)("p",null,"For more details, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/integration/openid_connect_provider.html"},"Gitlab's latest Official Documentation")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": Because ",(0,o.kt)("a",{parentName:"p",href:"https://gitlab.com/gitlab-org/gitlab/-/issues/16620"},"Gitlab has yet to support refresh tokens"),", you need to configure BuildBuddy to not request the ",(0,o.kt)("inlineCode",{parentName:"p"},"offline_access")," scope from Gitlab:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"auth:\n  disable_refresh_token: true\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Configuration"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"First, register an Application on Gitlab side:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For Gitlab SaaS, follow ",(0,o.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/integration/oauth_provider.html#create-a-group-owned-application"},"Group-Owned Application Documentation")," instructions."),(0,o.kt)("li",{parentName:"ul"},"For Gitlab On-Prem, follow ",(0,o.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/integration/oauth_provider.html#create-a-group-owned-application"},"Instance-Wide Application Documentation")," instructions."))),(0,o.kt)("li",{parentName:"ul"},"The Redirect URL should be ",(0,o.kt)("inlineCode",{parentName:"li"},"https://YOUR_BUILDBUDDY_URL/auth/"),", pointing to your existing BuildBuddydeployment."),(0,o.kt)("li",{parentName:"ul"},"The scopes needed are ",(0,o.kt)("inlineCode",{parentName:"li"},"openid"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"profile")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"email"),".")),(0,o.kt)("p",null,"Once the Gitlab application is created, you can configure it as a BuildBuddy auth provider like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'auth:\n  oauth_providers:\n    - issuer_url: "https://gitlab.com"\n      client_id: "<GITLAB APPLICATION ID>"\n      client_secret: "<GITLAB APPLICATION SECRET>"\n')))}s.isMDXComponent=!0}}]);