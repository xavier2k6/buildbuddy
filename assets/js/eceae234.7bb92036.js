"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[8484],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,h=p["".concat(u,".").concat(m)]||p[m]||c[m]||a;return n?r.createElement(h,l(l({ref:t},s),{},{components:n})):r.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var d=2;d<a;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1526:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return p}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),l=["components"],i={id:"on-prem",title:"On-prem Quickstart",sidebar_label:"On-prem Quickstart"},u=void 0,d={unversionedId:"on-prem",id:"on-prem",title:"On-prem Quickstart",description:"BuildBuddy is designed to be easy to run on-premise for those use cases where data absolutely must not leave a company's servers. It can be run your own servers, or in your own cloud environment. It supports major cloud providers like GCP, AWS, and Azure.",source:"@site/../docs/on-prem.md",sourceDirName:".",slug:"/on-prem",permalink:"/docs/on-prem",draft:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/on-prem.md",tags:[],version:"current",lastUpdatedBy:"Zoey Greer",lastUpdatedAt:1699293671,formattedLastUpdatedAt:"Nov 6, 2023",frontMatter:{id:"on-prem",title:"On-prem Quickstart",sidebar_label:"On-prem Quickstart"},sidebar:"someSidebar",previous:{title:"Cloud Quickstart",permalink:"/docs/cloud"},next:{title:"Contributing",permalink:"/docs/contributing"}},s={},p=[{value:"Getting started",id:"getting-started",level:2},{value:"Bazel Run",id:"bazel-run",level:2},{value:"Docker Image",id:"docker-image",level:2},{value:"Kubernetes",id:"kubernetes",level:2},{value:"Custom configuration",id:"custom-configuration",level:3},{value:"Output to yaml file",id:"output-to-yaml-file",level:3},{value:"Number of replicas",id:"number-of-replicas",level:3},{value:"Restart behavior",id:"restart-behavior",level:3},{value:"Enterprise deployment",id:"enterprise-deployment",level:3},{value:"Helm",id:"helm",level:2},{value:"Configuring BuildBuddy",id:"configuring-buildbuddy",level:2}],c={toc:p},m="wrapper";function h(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"BuildBuddy is designed to be easy to run on-premise for those use cases where data absolutely must not leave a company's servers. It can be run your own servers, or in your own cloud environment. It supports major cloud providers like GCP, AWS, and Azure."),(0,a.kt)("p",null,"The software itself is open-source and easy to audit."),(0,a.kt)("p",null,"For companies, we offer an ",(0,a.kt)("a",{parentName:"p",href:"/docs/enterprise"},"Enterprise")," version of BuildBuddy that contains advanced features like OIDC Auth, API access, and more."),(0,a.kt)("h2",{id:"getting-started"},"Getting started"),(0,a.kt)("p",null,"There are four ways to run BuildBuddy on-prem:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#bazel-run"},"Bazel Run"),": get the source and run a simple ",(0,a.kt)("inlineCode",{parentName:"li"},"bazel run")," command."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#docker-image"},"Docker Image"),": pre-built Docker images running the latest version of BuildBuddy."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#kubernetes"},"Kubernetes"),": deploy BuildBuddy to your Kubernetes cluster with a one-line deploy script."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#helm"},"Helm"),": deploy BuildBuddy to your Kubernetes cluster with the official BuildBuddy helm charts.")),(0,a.kt)("h2",{id:"bazel-run"},"Bazel Run"),(0,a.kt)("p",null,'The simplest method of running BuildBuddy on your own computer is to download and run it with "bazel run". Doing that is simple:'),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Get the source")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'git clone "https://github.com/buildbuddy-io/buildbuddy"\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Navigate into the BuildBuddy directory")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd buildbuddy\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Build and run using bazel")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"bazel run -c opt server:buildbuddy\n")),(0,a.kt)("p",null,"We recommend using a tool like ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bazelbuild/bazelisk"},"Bazelisk")," that respects the repo's ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/.bazelversion"},".bazelversion")," file."),(0,a.kt)("h2",{id:"docker-image"},"Docker Image"),(0,a.kt)("p",null,"We publish a ",(0,a.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," image with every release that contains a pre-configured BuildBuddy."),(0,a.kt)("p",null,"To run it, use the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull gcr.io/flame-public/buildbuddy-app-onprem:latest && docker run -p 1985:1985 -p 8080:8080 gcr.io/flame-public/buildbuddy-app-onprem:latest\n")),(0,a.kt)("p",null,"If you'd like to pass a custom configuration file to BuildBuddy running in a Docker image - see the ",(0,a.kt)("a",{parentName:"p",href:"/docs/config"},"configuration docs")," on using Docker's ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/storage/volumes/"},"-v flag"),"."),(0,a.kt)("p",null,"Note: If you're using BuildBuddy's Docker image locally and a third party gRPC cache, you'll likely need to add the ",(0,a.kt)("inlineCode",{parentName:"p"},"--network=host")," ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/network/host/"},"flag")," to your ",(0,a.kt)("inlineCode",{parentName:"p"},"docker run")," command in order for BuildBuddy to be able to pull test logs and timing information from the external cache."),(0,a.kt)("h2",{id:"kubernetes"},"Kubernetes"),(0,a.kt)("p",null,'If you run or have access to a Kubernetes cluster, and you have the "kubectl" command configured, we provide a shell script that will deploy BuildBuddy to your cluster, namespaced under the "buildbuddy" namespace.'),(0,a.kt)("p",null,"This script uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/deployment/buildbuddy-app.onprem.yaml"},"this deployment file"),", if you want to see the details of what is being configured."),(0,a.kt)("p",null,"To kick of the Kubernetes deploy, use the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"bash k8s_on_prem.sh\n")),(0,a.kt)("h3",{id:"custom-configuration"},"Custom configuration"),(0,a.kt)("p",null,"Note: the ",(0,a.kt)("inlineCode",{parentName:"p"},"k8s_on_prem.sh")," script requires ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"kubectl")," version 1.15")," or higher to be installed."),(0,a.kt)("p",null,"To pass in a custom ",(0,a.kt)("a",{parentName:"p",href:"/docs/config"},"config file"),", you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"-config")," flag:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"bash k8s_on_prem.sh -config my-config.yaml\n")),(0,a.kt)("h3",{id:"output-to-yaml-file"},"Output to yaml file"),(0,a.kt)("p",null,"By default the ",(0,a.kt)("inlineCode",{parentName:"p"},"k8s_on_prem.sh")," script will use ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl apply")," to deploy BuildBuddy to your current Kubernetes cluster. If you'd like to output the Kubernetes deployment to a yaml file instead that can be checked in, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"-out")," flag:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"bash k8s_on_prem.sh -out my-buildbuddy-deployment.yaml\n")),(0,a.kt)("h3",{id:"number-of-replicas"},"Number of replicas"),(0,a.kt)("p",null,"By default the ",(0,a.kt)("inlineCode",{parentName:"p"},"k8s_on_prem.sh")," script will deploy a single replica of BuildBuddy. If you've configured a MySQL database, storage, and other options necessary to support multiple replicas, you can increase the number of BuildBuddy replicas to deploy with the ",(0,a.kt)("inlineCode",{parentName:"p"},"-replicas")," flag."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"bash k8s_on_prem.sh -replicas 3\n")),(0,a.kt)("h3",{id:"restart-behavior"},"Restart behavior"),(0,a.kt)("p",null,"By default the ",(0,a.kt)("inlineCode",{parentName:"p"},"k8s_on_prem.sh")," will restart your BuildBuddy deployment to pick up any changes in your configuration file. This can lead to brief downtime if only one replica is deployed. You can disable this behavior with the ",(0,a.kt)("inlineCode",{parentName:"p"},"-norestart")," flag."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"bash k8s_on_prem.sh -norestart\n")),(0,a.kt)("h3",{id:"enterprise-deployment"},"Enterprise deployment"),(0,a.kt)("p",null,"If you've obtained a BuildBuddy enterprise license, you deploy enterprise BuildBuddy by specifying the ",(0,a.kt)("inlineCode",{parentName:"p"},"-enterprise")," flag."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"bash k8s_on_prem.sh -enterprise\n")),(0,a.kt)("h2",{id:"helm"},"Helm"),(0,a.kt)("p",null,"If you run or have access to a Kubernetes cluster and are comfortable with ",(0,a.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm"),", we maintain official BuildBuddy Helm charts that are easy to configure and deploy."),(0,a.kt)("p",null,"They have options to deploy everything necessary to use all of BuildBuddy's bells and whistles - including MySQL, nginx, and more."),(0,a.kt)("p",null,"The official BuildBuddy charts live in our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy-helm"},"buildbuddy-helm repo")," and can be added to helm with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"helm repo add buildbuddy https://helm.buildbuddy.io\n")),(0,a.kt)("p",null,"You can the deploy BuildBuddy Open Source with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"helm install buildbuddy buildbuddy/buildbuddy \\\n  --set mysql.mysqlUser=sampleUser \\\n  --set mysql.mysqlPassword=samplePassword\n")),(0,a.kt)("p",null,"For more information on configuring your BuildBuddy Helm deploy, check out the charts themselves:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/buildbuddy-io/buildbuddy-helm/tree/master/charts/buildbuddy"},"BuildBuddy Open Source")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/buildbuddy-io/buildbuddy-helm/tree/master/charts/buildbuddy-enterprise"},"BuildBuddy Enterprise"))),(0,a.kt)("h2",{id:"configuring-buildbuddy"},"Configuring BuildBuddy"),(0,a.kt)("p",null,"For documentation on all BuildBuddy configuration options, check out our ",(0,a.kt)("a",{parentName:"p",href:"/docs/config"},"configuration documentation"),"."))}h.isMDXComponent=!0}}]);