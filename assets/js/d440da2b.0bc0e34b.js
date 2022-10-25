/*! For license information please see d440da2b.0bc0e34b.js.LICENSE.txt */
"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[6609],{2525:function(e){var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var l,i,u=o(e),c=1;c<arguments.length;c++){for(var s in l=Object(arguments[c]))r.call(l,s)&&(u[s]=l[s]);if(t){i=t(l);for(var p=0;p<i.length;p++)n.call(l,i[p])&&(u[i[p]]=l[i[p]])}}return u}},1535:function(e,t,r){var n=r(2525),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,l=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,c=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,d=o?Symbol.for("react.forward_ref"):60112,f=o?Symbol.for("react.suspense"):60113,m=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116,g="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k={};function v(e,t,r){this.props=e,this.context=t,this.refs=k,this.updater=r||b}function w(){}function _(e,t,r){this.props=e,this.context=t,this.refs=k,this.updater=r||b}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=v.prototype;var O=_.prototype=new w;O.constructor=_,n(O,v.prototype),O.isPureReactComponent=!0;var x={current:null},S=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var n,o={},l=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(l=""+t.key),t)S.call(t,n)&&!j.hasOwnProperty(n)&&(o[n]=t[n]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var c=Array(u),s=0;s<u;s++)c[s]=arguments[s+2];o.children=c}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===o[n]&&(o[n]=u[n]);return{$$typeof:a,type:e,key:l,ref:i,props:o,_owner:x.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var C=/\/+/g,P=[];function B(e,t,r,n){if(P.length){var o=P.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>P.length&&P.push(e)}function U(e,t,r,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var i=!1;if(null===e)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case a:case l:i=!0}}if(i)return r(n,e,""===t?"."+T(e,0):t),1;if(i=0,t=""===t?".":t+":",Array.isArray(e))for(var u=0;u<e.length;u++){var c=t+T(o=e[u],u);i+=U(o,c,r,n)}else if(null===e||"object"!=typeof e?c=null:c="function"==typeof(c=g&&e[g]||e["@@iterator"])?c:null,"function"==typeof c)for(e=c.call(e),u=0;!(o=e.next()).done;)i+=U(o=o.value,c=t+T(o,u++),r,n);else if("object"===o)throw r=""+e,Error(h(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return i}function A(e,t,r){return null==e?0:U(e,"",t,r)}function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function D(e,t){e.func.call(e.context,t,e.count++)}function I(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?M(e,n,r,(function(e){return e})):null!=e&&(N(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(C,"$&/")+"/")+r)),n.push(e))}function M(e,t,r,n,o){var a="";null!=r&&(a=(""+r).replace(C,"$&/")+"/"),A(e,I,t=B(t,a,n,o)),R(t)}var $={current:null};function F(){var e=$.current;if(null===e)throw Error(h(321));return e}},7378:function(e,t,r){r(1535)},4137:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9793:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7378),r(4137)),l=["components"],i={id:"rbe-platforms",title:"RBE Platforms",sidebar_label:"RBE Platforms"},u=void 0,c={unversionedId:"rbe-platforms",id:"rbe-platforms",title:"RBE Platforms",description:"BuildBuddy default",source:"@site/../docs/rbe-platforms.md",sourceDirName:".",slug:"/rbe-platforms",permalink:"/docs/rbe-platforms",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/rbe-platforms.md",tags:[],version:"current",lastUpdatedBy:"Siggi Simonarson",lastUpdatedAt:1666732712,formattedLastUpdatedAt:"10/25/2022",frontMatter:{id:"rbe-platforms",title:"RBE Platforms",sidebar_label:"RBE Platforms"},sidebar:"someSidebar",previous:{title:"Remote Build Execution Setup",permalink:"/docs/rbe-setup"},next:{title:"RBE with MicroVMs",permalink:"/docs/rbe-microvms"}},s=[{value:"BuildBuddy default",id:"buildbuddy-default",children:[],level:2},{value:"Using a custom Docker image",id:"using-a-custom-docker-image",children:[{value:"Passing credentials for Docker images",id:"passing-credentials-for-docker-images",children:[],level:3}],level:2},{value:"Specifying a custom executor pool",id:"specifying-a-custom-executor-pool",children:[],level:2},{value:"Target level execution properties",id:"target-level-execution-properties",children:[],level:2}],p={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"buildbuddy-default"},"BuildBuddy default"),(0,a.kt)("p",null,"BuildBuddy's default platform is Ubuntu 16.04 with Java 8 installed. Building on our basic command can specify this platform with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--host_platform")," flag:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--host_platform=@buildbuddy_toolchain//:platform\n")),(0,a.kt)("h2",{id:"using-a-custom-docker-image"},"Using a custom Docker image"),(0,a.kt)("p",null,"You can configure BuildBuddy RBE to use a custom docker image, by adding the following rule to a BUILD file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'platform(\n    name = "docker_image_platform",\n    constraint_values = [\n        "@bazel_tools//platforms:x86_64",\n        "@bazel_tools//platforms:linux",\n        "@bazel_tools//tools/cpp:clang",\n    ],\n    exec_properties = {\n        "OSFamily": "Linux",\n        "container-image": "docker://gcr.io/YOUR:IMAGE",\n    },\n)\n')),(0,a.kt)("p",null,"Make sure to replace ",(0,a.kt)("inlineCode",{parentName:"p"},"gcr.io/YOUR:IMAGE")," with your docker image url."),(0,a.kt)("p",null,"You can then pass this configuration to BuildBuddy RBE with the following flag:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--host_platform=//:docker_image_platform\n")),(0,a.kt)("p",null,"This assumes you've placed this rule in your root BUILD file. If you place it elsewhere, make sure to update the path accordingly."),(0,a.kt)("h3",{id:"passing-credentials-for-docker-images"},"Passing credentials for Docker images"),(0,a.kt)("p",null,"You can use images from private container registries by adding the following\nflags to your ",(0,a.kt)("inlineCode",{parentName:"p"},"bazel")," command (replace ",(0,a.kt)("inlineCode",{parentName:"p"},"USERNAME")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ACCESS_TOKEN")," with\nthe appropriate credentials for the container registry):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--remote_header=x-buildbuddy-platform.container-registry-username=USERNAME\n--remote_header=x-buildbuddy-platform.container-registry-password=ACCESS_TOKEN\n")),(0,a.kt)("p",null,"For the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"ACCESS_TOKEN"),", we recommend generating a short-lived\ntoken using the command-line tool for your cloud provider."),(0,a.kt)("p",null,"To generate a short-lived token for GCR (Google Container Registry),\nthe username must be ",(0,a.kt)("inlineCode",{parentName:"p"},"_dcgcloud_token")," and the token can be generated with\n",(0,a.kt)("inlineCode",{parentName:"p"},"gcloud auth print-access-token"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'--remote_header=x-buildbuddy-platform.container-registry-username=_dcgcloud_token\n--remote_header=x-buildbuddy-platform.container-registry-password="$(gcloud auth print-access-token)"\n')),(0,a.kt)("p",null,"For Amazon ECR (Elastic Container Registry), the username must be ",(0,a.kt)("inlineCode",{parentName:"p"},"AWS"),"\nand a short-lived token can be generated with ",(0,a.kt)("inlineCode",{parentName:"p"},"aws ecr get-login-password --region REGION"),"\n(replace ",(0,a.kt)("inlineCode",{parentName:"p"},"REGION")," with the region matching the ECR image URL):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'--remote_header=x-buildbuddy-platform.container-registry-username=AWS\n--remote_header=x-buildbuddy-platform.container-registry-password="$(aws ecr get-login-password --region REGION)"\n')),(0,a.kt)("p",null,"Some cloud providers may also allow the use of long-lived tokens, which\ncan also be used in remote headers. For example, GCR allows setting a\nusername of ",(0,a.kt)("inlineCode",{parentName:"p"},"_json_key")," and then using a service account's\n",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys"},"JSON-format private key"),"\nas the password. Note that remote headers cannot have newlines;\nthe command ",(0,a.kt)("inlineCode",{parentName:"p"},"tr '\\n' ' '")," is used in this example to remove them:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--remote_header=x-buildbuddy-platform.container-registry-username=_json_key\n--remote_header=x-buildbuddy-platform.container-registry-password=\"$(cat service-account-keyfile.json | tr '\\n' ' ')\"\n")),(0,a.kt)("h2",{id:"specifying-a-custom-executor-pool"},"Specifying a custom executor pool"),(0,a.kt)("p",null,"You can configure BuildBuddy RBE to use a custom executor pool, by adding the following rule to a BUILD file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'platform(\n    name = "gpu_platform",\n    constraint_values = [\n        "@bazel_tools//platforms:x86_64",\n        "@bazel_tools//platforms:linux",\n        "@bazel_tools//tools/cpp:clang",\n    ],\n    exec_properties = {\n        "OSFamily": "Linux",\n        "Pool": "my-gpu-pool",\n    },\n)\n')),(0,a.kt)("p",null,"Make sure to replace ",(0,a.kt)("inlineCode",{parentName:"p"},"my-gpu-pool")," with your pool name."),(0,a.kt)("p",null,"You can then pass this configuration to BuildBuddy RBE with the following flag:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--host_platform=//:gpu_platform\n")),(0,a.kt)("p",null,"This assumes you've placed this rule in your root BUILD file. If you place it elsewhere, make sure to update the path accordingly."),(0,a.kt)("p",null,"For instructions on how to deploy custom executor pools, we the ",(0,a.kt)("a",{parentName:"p",href:"/docs/rbe-pools"},"RBE Executor Pools docs"),"."),(0,a.kt)("h2",{id:"target-level-execution-properties"},"Target level execution properties"),(0,a.kt)("p",null,"If you want different targets to run in different RBE environments, you can specify ",(0,a.kt)("inlineCode",{parentName:"p"},"exec_properties")," at the target level. For example if you want to run one set of tests in a high-memory pool, or another set of targets on executors with GPUs."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'go_test(\n    name = "memory_hogging_test",\n    srcs = ["memory_hogging_test.go"],\n    embed = [":go_default_library"],\n    exec_properties = {\n        "Pool": "high-memory-pool",\n    },\n)\n')))}d.isMDXComponent=!0}}]);