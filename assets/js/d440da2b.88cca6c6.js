"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[6609],{4137:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9793:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(4137)),l=["components"],i={id:"rbe-platforms",title:"RBE Platforms",sidebar_label:"RBE Platforms"},s=void 0,u={unversionedId:"rbe-platforms",id:"rbe-platforms",title:"RBE Platforms",description:"BuildBuddy default",source:"@site/../docs/rbe-platforms.md",sourceDirName:".",slug:"/rbe-platforms",permalink:"/docs/rbe-platforms",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/rbe-platforms.md",tags:[],version:"current",lastUpdatedBy:"Vadim Berezniker",lastUpdatedAt:1671585117,formattedLastUpdatedAt:"12/21/2022",frontMatter:{id:"rbe-platforms",title:"RBE Platforms",sidebar_label:"RBE Platforms"},sidebar:"someSidebar",previous:{title:"Remote Build Execution Setup",permalink:"/docs/rbe-setup"},next:{title:"RBE Secrets",permalink:"/docs/secrets"}},p=[{value:"BuildBuddy default",id:"buildbuddy-default",children:[],level:2},{value:"Using a custom Docker image",id:"using-a-custom-docker-image",children:[{value:"Passing credentials for Docker images",id:"passing-credentials-for-docker-images",children:[],level:3}],level:2},{value:"Specifying a custom executor pool",id:"specifying-a-custom-executor-pool",children:[],level:2},{value:"Target level execution properties",id:"target-level-execution-properties",children:[],level:2}],c={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"buildbuddy-default"},"BuildBuddy default"),(0,a.kt)("p",null,"BuildBuddy's default platform is Ubuntu 16.04 with Java 8 installed. Building on our basic command can specify this platform with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--host_platform")," flag:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--host_platform=@buildbuddy_toolchain//:platform\n")),(0,a.kt)("h2",{id:"using-a-custom-docker-image"},"Using a custom Docker image"),(0,a.kt)("p",null,"You can configure BuildBuddy RBE to use a custom docker image, by adding the following rule to a BUILD file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'platform(\n    name = "docker_image_platform",\n    constraint_values = [\n        "@bazel_tools//platforms:x86_64",\n        "@bazel_tools//platforms:linux",\n        "@bazel_tools//tools/cpp:clang",\n    ],\n    exec_properties = {\n        "OSFamily": "Linux",\n        "container-image": "docker://gcr.io/YOUR:IMAGE",\n    },\n)\n')),(0,a.kt)("p",null,"Make sure to replace ",(0,a.kt)("inlineCode",{parentName:"p"},"gcr.io/YOUR:IMAGE")," with your docker image url."),(0,a.kt)("p",null,"You can then pass this configuration to BuildBuddy RBE with the following flag:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--host_platform=//:docker_image_platform\n")),(0,a.kt)("p",null,"This assumes you've placed this rule in your root BUILD file. If you place it elsewhere, make sure to update the path accordingly."),(0,a.kt)("h3",{id:"passing-credentials-for-docker-images"},"Passing credentials for Docker images"),(0,a.kt)("p",null,"You can use images from private container registries by adding the following\nflags to your ",(0,a.kt)("inlineCode",{parentName:"p"},"bazel")," command (replace ",(0,a.kt)("inlineCode",{parentName:"p"},"USERNAME")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ACCESS_TOKEN")," with\nthe appropriate credentials for the container registry):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--remote_header=x-buildbuddy-platform.container-registry-username=USERNAME\n--remote_header=x-buildbuddy-platform.container-registry-password=ACCESS_TOKEN\n")),(0,a.kt)("p",null,"For the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"ACCESS_TOKEN"),", we recommend generating a short-lived\ntoken using the command-line tool for your cloud provider."),(0,a.kt)("p",null,"To generate a short-lived token for GCR (Google Container Registry),\nthe username must be ",(0,a.kt)("inlineCode",{parentName:"p"},"_dcgcloud_token")," and the token can be generated with\n",(0,a.kt)("inlineCode",{parentName:"p"},"gcloud auth print-access-token"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'--remote_header=x-buildbuddy-platform.container-registry-username=_dcgcloud_token\n--remote_header=x-buildbuddy-platform.container-registry-password="$(gcloud auth print-access-token)"\n')),(0,a.kt)("p",null,"For Amazon ECR (Elastic Container Registry), the username must be ",(0,a.kt)("inlineCode",{parentName:"p"},"AWS"),"\nand a short-lived token can be generated with ",(0,a.kt)("inlineCode",{parentName:"p"},"aws ecr get-login-password --region REGION"),"\n(replace ",(0,a.kt)("inlineCode",{parentName:"p"},"REGION")," with the region matching the ECR image URL):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'--remote_header=x-buildbuddy-platform.container-registry-username=AWS\n--remote_header=x-buildbuddy-platform.container-registry-password="$(aws ecr get-login-password --region REGION)"\n')),(0,a.kt)("p",null,"Some cloud providers may also allow the use of long-lived tokens, which\ncan also be used in remote headers. For example, GCR allows setting a\nusername of ",(0,a.kt)("inlineCode",{parentName:"p"},"_json_key")," and then using a service account's\n",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys"},"JSON-format private key"),"\nas the password. Note that remote headers cannot have newlines;\nthe command ",(0,a.kt)("inlineCode",{parentName:"p"},"tr '\\n' ' '")," is used in this example to remove them:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--remote_header=x-buildbuddy-platform.container-registry-username=_json_key\n--remote_header=x-buildbuddy-platform.container-registry-password=\"$(cat service-account-keyfile.json | tr '\\n' ' ')\"\n")),(0,a.kt)("h2",{id:"specifying-a-custom-executor-pool"},"Specifying a custom executor pool"),(0,a.kt)("p",null,"You can configure BuildBuddy RBE to use a custom executor pool, by adding the following rule to a BUILD file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'platform(\n    name = "gpu_platform",\n    constraint_values = [\n        "@bazel_tools//platforms:x86_64",\n        "@bazel_tools//platforms:linux",\n        "@bazel_tools//tools/cpp:clang",\n    ],\n    exec_properties = {\n        "OSFamily": "Linux",\n        "Pool": "my-gpu-pool",\n    },\n)\n')),(0,a.kt)("p",null,"Make sure to replace ",(0,a.kt)("inlineCode",{parentName:"p"},"my-gpu-pool")," with your pool name."),(0,a.kt)("p",null,"You can then pass this configuration to BuildBuddy RBE with the following flag:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--host_platform=//:gpu_platform\n")),(0,a.kt)("p",null,"This assumes you've placed this rule in your root BUILD file. If you place it elsewhere, make sure to update the path accordingly."),(0,a.kt)("p",null,"For instructions on how to deploy custom executor pools, we the ",(0,a.kt)("a",{parentName:"p",href:"/docs/rbe-pools"},"RBE Executor Pools docs"),"."),(0,a.kt)("h2",{id:"target-level-execution-properties"},"Target level execution properties"),(0,a.kt)("p",null,"If you want different targets to run in different RBE environments, you can specify ",(0,a.kt)("inlineCode",{parentName:"p"},"exec_properties")," at the target level. For example if you want to run one set of tests in a high-memory pool, or another set of targets on executors with GPUs."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'go_test(\n    name = "memory_hogging_test",\n    srcs = ["memory_hogging_test.go"],\n    embed = [":go_default_library"],\n    exec_properties = {\n        "Pool": "high-memory-pool",\n    },\n)\n')))}d.isMDXComponent=!0}}]);