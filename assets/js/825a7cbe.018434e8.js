"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[58],{34453:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=n(74848),r=n(28453);const i={id:"secrets",title:"Secrets",sidebar_label:"RBE Secrets"},o=void 0,a={id:"secrets",title:"Secrets",description:"Secrets are encrypted environment variables associated with your",source:"@site/../docs/secrets.md",sourceDirName:".",slug:"/secrets",permalink:"/docs/secrets",draft:!1,unlisted:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/secrets.md",tags:[],version:"current",lastUpdatedBy:"Zoey Greer",lastUpdatedAt:1731688924e3,frontMatter:{id:"secrets",title:"Secrets",sidebar_label:"RBE Secrets"},sidebar:"someSidebar",previous:{title:"RBE Platforms",permalink:"/docs/rbe-platforms"},next:{title:"RBE with MicroVMs",permalink:"/docs/rbe-microvms"}},c={},d=[{value:"Why use secrets?",id:"why-use-secrets",level:2},{value:"Defining secrets",id:"defining-secrets",level:2},{value:"Getting secret values",id:"getting-secret-values",level:2},{value:"Bazel actions",id:"bazel-actions",level:3},{value:"Workflows",id:"workflows",level:3},{value:"Short-lived secrets",id:"short-lived-secrets",level:2},{value:"Security notes",id:"security-notes",level:2}];function l(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["Secrets are encrypted environment variables associated with your\nBuildBuddy organization. Secrets can be used in actions executed with\n",(0,t.jsx)(s.a,{href:"remote-build-execution",children:"remote execution"})," as well as ",(0,t.jsx)(s.a,{href:"workflows-introduction",children:"BuildBuddy\nWorkflows"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["BuildBuddy encrypts secrets with a\n",(0,t.jsx)(s.a,{href:"https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes",children:"libsodium sealed box"}),".\nSecrets are encrypted before they are sent to BuildBuddy's\nservers, and stay encrypted until they are used."]}),"\n",(0,t.jsx)(s.h2,{id:"why-use-secrets",children:"Why use secrets?"}),"\n",(0,t.jsxs)(s.p,{children:["Builds that are executed remotely on BuildBuddy's servers may occasionally\nneed access to an API key or other credentials. For example, you may want\nto ",(0,t.jsx)(s.a,{href:"rbe-platforms#passing-credentials-for-docker-images",children:"pass credentials for a Docker image"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"Storing these sensitive parameters as plain environment variables is\nundesirable because those keys would be stored unencrypted in BuildBuddy's\nAction Cache. While BuildBuddy's cache requires authorization and is secured\nusing TLS, storing so many copies of the secret in cache increases attack\nsurface and increases the chance of accidentally exposing your own\ncredentials."}),"\n",(0,t.jsx)(s.p,{children:"Secrets solve this problem by allowing sensitive keys to be stored in\nencrypted format separately from the actions themselves."}),"\n",(0,t.jsx)(s.h2,{id:"defining-secrets",children:"Defining secrets"}),"\n",(0,t.jsxs)(s.p,{children:["Secrets can be added to your organization using the Secrets page in\n",(0,t.jsx)(s.a,{href:"https://app.buildbuddy.io/settings/org/secrets",children:"settings"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"Secrets can be edited or deleted using the Secrets page. Once a secret\nis saved, its currently stored value cannot be viewed using the Secrets\npage."}),"\n",(0,t.jsx)(s.h2,{id:"getting-secret-values",children:"Getting secret values"}),"\n",(0,t.jsx)(s.h3,{id:"bazel-actions",children:"Bazel actions"}),"\n",(0,t.jsxs)(s.p,{children:["To opt a specific action into secrets, you can define the remote exec\nproperty ",(0,t.jsx)(s.code,{children:"include-secrets=true"}),". We recommend doing this per-action to\navoid exposing secrets to actions that do not need them."]}),"\n",(0,t.jsx)(s.p,{children:"Example:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",metastring:'title="BUILD"',children:'foo_library(\n    # ...\n    exec_properties = {\n        "include-secrets": "true",\n    }\n)\n'})}),"\n",(0,t.jsx)(s.h3,{id:"workflows",children:"Workflows"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"workflows-introduction",children:"BuildBuddy workflows"})," do not need additional\nconfiguration to use secrets; they receive secrets by default as long as\nthe workflow is being triggered on behalf of a trusted collaborator in the\nrepository."]}),"\n",(0,t.jsx)(s.p,{children:"Workflow secrets are accessed via environment variables, in the same way\nas normal Bazel actions shown above."}),"\n",(0,t.jsx)(s.h2,{id:"short-lived-secrets",children:"Short-lived secrets"}),"\n",(0,t.jsx)(s.p,{children:"For secrets that have a short Time To Live (TTL), BuildBuddy supports setting\nenvironment variables via special headers passed at the Bazel command line.\nHeaders are more secure than setting environment variables with Bazel,\nas they are not stored in the remote cache."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",metastring:'title="Simple Secrets"',children:"--remote_exec_header=x-buildbuddy-platform.env-overrides=VAR_A=value_a,VAR_B=val_b\n\n## At execution time:\n> echo $VAR_A\nvalue_a\n> echo $VAR_B\nval_b\n\n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",metastring:'title="Complex Secrets"',children:'## First encode the secrets using base64,\n## making sure to include the entire \'KEY=VALUE\' pair\n> echo -n \'VAR_C={"a": 1, "b", 2}\' | base64\n> echo -n \'VAR_D=asdfa!@@C,+{}\' | base64\n\n## then use the base64-encoded strings in the `env-overrides-base64` header, comma separated.\n--remote_exec_header=x-buildbuddy-platform.env-overrides-base64=VkFSX0M9eyJhIjogMSwgImIiLCAyfQ==,VkFSX0Q9YXNkZmEhQCNDLCt7fQ==\n\n## At execution time:\n> echo $VAR_C\n{"a": 1, "b", 2}\n> echo $VAR_D\nasdfa!@@C,+{}\n'})}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["If multiple values are given with the same variable name, the last value will be used.\nIf a variable is specified in both ",(0,t.jsx)(s.code,{children:"env-overrides"})," and ",(0,t.jsx)(s.code,{children:"env-overrides-base64"}),",\n",(0,t.jsx)(s.code,{children:"env-overrides-base64"})," will take priority."]})}),"\n",(0,t.jsx)(s.p,{children:"These secrets will be set as environment variables at action execution time,\noverriding the default environment variables on your container image as well as\nthe environment variables set by Bazel as part of the action configuration."}),"\n",(0,t.jsx)(s.admonition,{type:"warning",children:(0,t.jsx)(s.p,{children:"Secrets may be cached as part of action results if not properly handled.\nAvoid printing secret values to the console or storing them in action outputs."})}),"\n",(0,t.jsxs)(s.p,{children:["Secrets that are passed through ",(0,t.jsx)(s.code,{children:"env-overrides"})," or ",(0,t.jsx)(s.code,{children:"env-overrides-base64"})," headers\nare not subjected to ",(0,t.jsx)(s.code,{children:"include-secrets"})," control documented above."]}),"\n",(0,t.jsx)(s.h2,{id:"security-notes",children:"Security notes"}),"\n",(0,t.jsxs)(s.p,{children:["Secrets are encrypted on the client-side using\n",(0,t.jsx)(s.a,{href:"https://doc.libsodium.org/",children:"libsodium"}),", which is based on\n",(0,t.jsx)(s.a,{href:"http://nacl.cr.yp.to/",children:"NaCl"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"The public key used to encrypt secrets is unique to each organization. The\nprivate key used to decrypt secrets is stored encrypted and only decrypted\nwhen used to unseal secrets."}),"\n",(0,t.jsx)(s.p,{children:"Secrets are only stored in their encrypted form and are decrypted\non-demand for actions that opt in to receiving secrets."}),"\n",(0,t.jsx)(s.admonition,{type:"caution",children:(0,t.jsx)(s.p,{children:"Avoid printing secret values to your build logs or action outputs."})})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>a});var t=n(96540);const r={},i=t.createContext(r);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);