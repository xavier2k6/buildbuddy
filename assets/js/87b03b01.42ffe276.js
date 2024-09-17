"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[2552],{31098:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var t=i(74848),o=i(28453);const r={id:"config-rbe",title:"RBE Configuration",sidebar_label:"RBE"},s=void 0,c={id:"config-rbe",title:"RBE Configuration",description:"Remote Build Execution is only configurable in the Enterprise version of BuildBuddy.",source:"@site/../docs/config-rbe.md",sourceDirName:".",slug:"/config-rbe",permalink:"/docs/config-rbe",draft:!1,unlisted:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/config-rbe.md",tags:[],version:"current",lastUpdatedBy:"Lulu Zhang",lastUpdatedAt:1726613643e3,frontMatter:{id:"config-rbe",title:"RBE Configuration",sidebar_label:"RBE"},sidebar:"someSidebar",previous:{title:"Org",permalink:"/docs/config-org"},next:{title:"Misc",permalink:"/docs/config-misc"}},l={},a=[{value:"Section",id:"section",level:2},{value:"Options",id:"options",level:2},{value:"Example section",id:"example-section",level:2},{value:"Executor config",id:"executor-config",level:2},{value:"Container registry authentication",id:"container-registry-authentication",level:3},{value:"Executor environment variables",id:"executor-environment-variables",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Remote Build Execution is only configurable in the ",(0,t.jsx)(n.a,{href:"/docs/enterprise",children:"Enterprise version"})," of BuildBuddy."]}),"\n",(0,t.jsxs)(n.p,{children:["RBE configuration must be enabled in your ",(0,t.jsx)(n.code,{children:"config.yaml"})," file, but most configuration is done via ",(0,t.jsx)(n.a,{href:"/docs/rbe-setup",children:"toolchains"}),", ",(0,t.jsx)(n.a,{href:"/docs/rbe-platforms",children:"platforms"}),", or the ",(0,t.jsx)(n.a,{href:"enterprise-helm",children:"enterprise Helm chart"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"section",children:"Section"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"remote_execution:"})," The remote_execution section allows you to configure BuildBuddy's remote build execution. ",(0,t.jsx)(n.strong,{children:"Optional"})]}),"\n",(0,t.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Optional"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"enable_remote_exec:"})," True if remote execution should be enabled."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"default_pool_name:"})," The default executor pool to use if one is not specified."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example-section",children:"Example section"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="config.yaml"',children:"remote_execution:\n  enable_remote_exec: true\n"})}),"\n",(0,t.jsx)(n.h2,{id:"executor-config",children:"Executor config"}),"\n",(0,t.jsxs)(n.p,{children:["BuildBuddy RBE executors take their own configuration file that is pulled from ",(0,t.jsx)(n.code,{children:"/config.yaml"})," on the executor docker image. Using BuildBuddy's ",(0,t.jsx)(n.a,{href:"/docs/enterprise-helm",children:"Enterprise Helm chart"})," will take care of most of this configuration for you."]}),"\n",(0,t.jsx)(n.p,{children:"Here is an example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="config.yaml"',children:'executor:\n  app_target: "grpcs://your.buildbuddy.install:443"\n  root_directory: "/buildbuddy/remotebuilds/"\n  local_cache_directory: "/buildbuddy/filecache/"\n  local_cache_size_bytes: 5000000000 # 5GB\n  docker_socket: /var/run/docker.sock\n'})}),"\n",(0,t.jsx)(n.h3,{id:"container-registry-authentication",children:"Container registry authentication"}),"\n",(0,t.jsxs)(n.p,{children:["By default, executors will respect the container registry configuration in\n",(0,t.jsx)(n.code,{children:"~/.docker/config.json"}),". The format of this file is described ",(0,t.jsx)(n.a,{href:"https://docs.docker.com/engine/reference/commandline/login/",children:"here"}),".\nAny credential helpers configured there will be respected."]}),"\n",(0,t.jsxs)(n.p,{children:["For convenience, per-registry credentials can also be statically configured\nin the executor config YAML. These credentials will take priority over the\nconfiguration in ",(0,t.jsx)(n.code,{children:"~/.docker/config.json"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Here is an example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="config.yaml"',children:'executor:\n  container_registries:\n    - hostnames:\n        - "my-private-registry.io"\n        - "subdomain.my-private-registry.io"\n      username: "registry-username"\n      password: "registry-password-or-long-lived-token"\n'})}),"\n",(0,t.jsx)(n.p,{children:"This is especially useful for registries that allow using static tokens\nfor authentication, which avoids the need to set up credential helpers."}),"\n",(0,t.jsx)(n.p,{children:'For example, Google Container Registry allows setting a username of\n"_json_key" and then passing the service account key directly:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="config.yaml"',children:'executor:\n  container_registries:\n    - hostnames:\n        - "gcr.io"\n        - "marketplace.gcr.io"\n      username: "_json_key"\n      # Note: the YAML multiline string syntax ">" is used to embed the\n      # key JSON as a raw string. Be sure to indent as shown below:\n      password: >\n        {\n          "type": "service_account",\n          "project_id": my-project-id",\n          "private_key_id": "...",\n          "private_key": "...",\n          // More fields omitted\n          ...\n        }\n'})}),"\n",(0,t.jsx)(n.h2,{id:"executor-environment-variables",children:"Executor environment variables"}),"\n",(0,t.jsx)(n.p,{children:"In addition to the config.yaml, there are also environment variables that executors consume. To get more information about their environment. All of these are optional, but can be useful for more complex configurations."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"SYS_MEMORY_BYTES"}),": The amount of memory (in bytes) that this executor is allowed to consume. Defaults to free system memory."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"SYS_MILLICPU"}),": The amount of CPU (in millicpus) that this executor is allowed to consume. Defaults to system CPU."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"MY_NODENAME"}),": The name of the machine/node that the executor is running on. Defaults to empty string."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"MY_HOSTNAME"}),": The hostname by which the app can communicate to this executor. Defaults to machine hostname."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"MY_PORT"}),": The port over which the app can communicate with this executor. Defaults to the executor's gRPC port."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"MY_POOL"}),": The executor pool that this executor should be placed in. Defaults to empty string."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Many of these environment variables are typically set based on Kubernetes FieldRefs like so:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="config.yaml"',children:"env:\n  - name: SYS_MEMORY_BYTES\n    valueFrom:\n      resourceFieldRef:\n        resource: limits.memory\n  - name: SYS_MILLICPU\n    valueFrom:\n      resourceFieldRef:\n        resource: limits.cpu\n  - name: MY_HOSTNAME\n    valueFrom:\n      fieldRef:\n        fieldPath: status.podIP\n  - name: MY_NODENAME\n    valueFrom:\n      fieldRef:\n        fieldPath: spec.nodeName\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>c});var t=i(96540);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);