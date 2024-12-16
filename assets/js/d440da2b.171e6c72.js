"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[2706],{10321:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"rbe-platforms","title":"RBE Platforms","description":"BuildBuddy default","source":"@site/../docs/rbe-platforms.md","sourceDirName":".","slug":"/rbe-platforms","permalink":"/docs/rbe-platforms","draft":false,"unlisted":false,"editUrl":"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/rbe-platforms.md","tags":[],"version":"current","lastUpdatedBy":"Zoey Greer","lastUpdatedAt":1734370546000,"frontMatter":{"id":"rbe-platforms","title":"RBE Platforms","sidebar_label":"RBE Platforms"},"sidebar":"someSidebar","previous":{"title":"Remote Build Execution Setup","permalink":"/docs/rbe-setup"},"next":{"title":"RBE Secrets","permalink":"/docs/secrets"}}');var i=r(74848),s=r(28453);const t={id:"rbe-platforms",title:"RBE Platforms",sidebar_label:"RBE Platforms"},c=void 0,l={},d=[{value:"BuildBuddy default",id:"buildbuddy-default",level:2},{value:"Using a custom Docker image",id:"using-a-custom-docker-image",level:2},{value:"ENTRYPOINT and CMD",id:"entrypoint-and-cmd",level:3},{value:"Passing credentials for Docker images",id:"passing-credentials-for-docker-images",level:3},{value:"Specifying a custom executor pool",id:"specifying-a-custom-executor-pool",level:2},{value:"Target level execution properties",id:"target-level-execution-properties",level:2},{value:"Execution properties",id:"execution-properties",level:2},{value:"Setting properties via remote headers",id:"setting-properties-via-remote-headers",level:3},{value:"Action scheduling properties",id:"action-scheduling-properties",level:3},{value:"Action isolation and hermeticity properties",id:"action-isolation-and-hermeticity-properties",level:3},{value:"Runner resource allocation",id:"runner-resource-allocation",level:3},{value:"Execution timeout properties",id:"execution-timeout-properties",level:3},{value:"Remote persistent worker properties",id:"remote-persistent-worker-properties",level:3},{value:"Runner container support",id:"runner-container-support",level:3},{value:"Runner secrets",id:"runner-secrets",level:3},{value:"Docker daemon support",id:"docker-daemon-support",level:3}];function a(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"buildbuddy-default",children:"BuildBuddy default"}),"\n",(0,i.jsxs)(n.p,{children:["BuildBuddy's default platform is Ubuntu 16.04 with Java 8 installed. Building on our basic command can specify this platform with the ",(0,i.jsx)(n.code,{children:"--host_platform"})," flag:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"--host_platform=@buildbuddy_toolchain//:platform\n"})}),"\n",(0,i.jsx)(n.h2,{id:"using-a-custom-docker-image",children:"Using a custom Docker image"}),"\n",(0,i.jsx)(n.p,{children:"You can configure BuildBuddy RBE to use a custom docker image, by adding the following rule to a BUILD file:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="BUILD"',children:'platform(\n    name = "docker_image_platform",\n    constraint_values = [\n        "@platforms//cpu:x86_64",\n        "@platforms//os:linux",\n        "@bazel_tools//tools/cpp:clang",\n    ],\n    exec_properties = {\n        "OSFamily": "Linux",\n        "dockerNetwork": "off",\n        "container-image": "docker://gcr.io/YOUR:IMAGE",\n    },\n)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Make sure to replace ",(0,i.jsx)(n.code,{children:"gcr.io/YOUR:IMAGE"})," with your docker image url."]}),"\n",(0,i.jsx)(n.p,{children:"You can then pass this configuration to BuildBuddy RBE with the following flag:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"--host_platform=//:docker_image_platform\n"})}),"\n",(0,i.jsx)(n.p,{children:"This assumes you've placed this rule in your root BUILD file. If you place it elsewhere, make sure to update the path accordingly."}),"\n",(0,i.jsx)(n.h3,{id:"entrypoint-and-cmd",children:"ENTRYPOINT and CMD"}),"\n",(0,i.jsxs)(n.p,{children:["Remote build actions will be run in your container via ",(0,i.jsx)(n.code,{children:"CMD"}),", so note that any ",(0,i.jsx)(n.code,{children:"CMD"})," instructions in your Dockerfile will be ignored.\n",(0,i.jsx)(n.code,{children:"ENTRYPOINT"}),", on the other hand, is not ignored, so make sure that the container image's ",(0,i.jsx)(n.code,{children:"ENTRYPOINT"})," is either unset,\nor is a wrapper that is compatible with your build actions' commands."]}),"\n",(0,i.jsxs)(n.p,{children:["For more information, see ",(0,i.jsx)(n.a,{href:"https://docs.docker.com/engine/reference/builder/#understand-how-cmd-and-entrypoint-interact",children:"Understand how CMD and ENTRYPOINT interact"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"passing-credentials-for-docker-images",children:"Passing credentials for Docker images"}),"\n",(0,i.jsxs)(n.p,{children:["You can use images from private container registries by adding the following\nflags to your ",(0,i.jsx)(n.code,{children:"bazel"})," command (replace ",(0,i.jsx)(n.code,{children:"USERNAME"})," and ",(0,i.jsx)(n.code,{children:"ACCESS_TOKEN"})," with\nthe appropriate credentials for the container registry):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"--remote_exec_header=x-buildbuddy-platform.container-registry-username=USERNAME\n--remote_exec_header=x-buildbuddy-platform.container-registry-password=ACCESS_TOKEN\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For the value of ",(0,i.jsx)(n.code,{children:"ACCESS_TOKEN"}),", we recommend generating a short-lived\ntoken using the command-line tool for your cloud provider."]}),"\n",(0,i.jsxs)(n.p,{children:["To generate a short-lived token for GCR (Google Container Registry),\nthe username must be ",(0,i.jsx)(n.code,{children:"_dcgcloud_token"})," and the token can be generated with\n",(0,i.jsx)(n.code,{children:"gcloud auth print-access-token"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'--remote_exec_header=x-buildbuddy-platform.container-registry-username=_dcgcloud_token\n--remote_exec_header=x-buildbuddy-platform.container-registry-password="$(gcloud auth print-access-token)"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["For Amazon ECR (Elastic Container Registry), the username must be ",(0,i.jsx)(n.code,{children:"AWS"}),"\nand a short-lived token can be generated with ",(0,i.jsx)(n.code,{children:"aws ecr get-login-password --region REGION"}),"\n(replace ",(0,i.jsx)(n.code,{children:"REGION"})," with the region matching the ECR image URL):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'--remote_exec_header=x-buildbuddy-platform.container-registry-username=AWS\n--remote_exec_header=x-buildbuddy-platform.container-registry-password="$(aws ecr get-login-password --region REGION)"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Some cloud providers may also allow the use of long-lived tokens, which\ncan also be used in remote headers. For example, GCR allows setting a\nusername of ",(0,i.jsx)(n.code,{children:"_json_key"})," and then using a service account's\n",(0,i.jsx)(n.a,{href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys",children:"JSON-format private key"}),"\nas the password. Note that remote headers cannot have newlines;\nthe command ",(0,i.jsx)(n.code,{children:"tr '\\n' ' '"})," is used in this example to remove them:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"--remote_exec_header=x-buildbuddy-platform.container-registry-username=_json_key\n--remote_exec_header=x-buildbuddy-platform.container-registry-password=\"$(cat service-account-keyfile.json | tr '\\n' ' ')\"\n"})}),"\n",(0,i.jsx)(n.h2,{id:"specifying-a-custom-executor-pool",children:"Specifying a custom executor pool"}),"\n",(0,i.jsxs)(n.p,{children:["You can configure BuildBuddy RBE to use a custom executor pool, by adding the following rule to a ",(0,i.jsx)(n.code,{children:"BUILD"})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="BUILD"',children:'platform(\n    name = "gpu_platform",\n    constraint_values = [\n        "@platforms//cpu:x86_64",\n        "@platforms//os:linux",\n        "@bazel_tools//tools/cpp:clang",\n    ],\n    exec_properties = {\n        "OSFamily": "Linux",\n        "dockerNetwork": "off",\n        "Pool": "my-gpu-pool",\n    },\n)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Make sure to replace ",(0,i.jsx)(n.code,{children:"my-gpu-pool"})," with your pool name."]}),"\n",(0,i.jsx)(n.p,{children:"You can then pass this configuration to BuildBuddy RBE with the following flag:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"--host_platform=//:gpu_platform\n"})}),"\n",(0,i.jsx)(n.p,{children:"This assumes you've placed this rule in your root BUILD file. If you place it elsewhere, make sure to update the path accordingly."}),"\n",(0,i.jsxs)(n.p,{children:["For instructions on how to deploy custom executor pools, see the ",(0,i.jsx)(n.a,{href:"/docs/rbe-pools",children:"RBE Executor Pools docs"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"target-level-execution-properties",children:"Target level execution properties"}),"\n",(0,i.jsxs)(n.p,{children:["If you want different targets to run in different RBE environments, you can specify ",(0,i.jsx)(n.code,{children:"exec_properties"})," at the target level. For example if you want to run one set of tests in a high-memory pool, or another set of targets on executors with GPUs."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="BUILD"',children:'go_test(\n    name = "memory_hogging_test",\n    srcs = ["memory_hogging_test.go"],\n    embed = [":go_default_library"],\n    exec_properties = {\n        "Pool": "high-memory-pool",\n    },\n)\n'})}),"\n",(0,i.jsx)(n.h2,{id:"execution-properties",children:"Execution properties"}),"\n",(0,i.jsxs)(n.p,{children:["BuildBuddy RBE supports various ",(0,i.jsx)(n.code,{children:"exec_properties"})," that modify remote action execution."]}),"\n",(0,i.jsx)(n.p,{children:"These properties can be used in different ways:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Set ",(0,i.jsx)(n.code,{children:"exec_properties"})," in the execution platform definition."]}),"\n",(0,i.jsxs)(n.li,{children:["Set ",(0,i.jsx)(n.code,{children:"exec_properties"})," in each BUILD target."]}),"\n",(0,i.jsxs)(n.li,{children:["Set ",(0,i.jsx)(n.code,{children:"--remote_default_exec_properties=KEY=VALUE"})," in ",(0,i.jsx)(n.code,{children:".bazelrc"})," or at the Bazel command line.\nNote that these properties are not applied if a target or a target's platform has any execution properties."]}),"\n",(0,i.jsxs)(n.li,{children:["Set ",(0,i.jsx)(n.code,{children:"--remote_header=x-buildbuddy-platform.KEY=VALUE"}),". This is\na BuildBuddy-specific feature and is not generally recommended except\nfor certain properties, described in\n",(0,i.jsx)(n.a,{href:"#setting-properties-via-remote-headers",children:"Setting properties via remote headers"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://bazel.build/extending/exec-groups",children:"Execution groups"})," allow more control over which execution properties can be used for each group of actions in each BUILD target.\nExecution groups are typically implemented by individual rules,\nbut notably, Bazel includes a built-in execution group called ",(0,i.jsx)(n.code,{children:'"test"'}),"\nthat allows applying execution properties only to tests."]}),"\n",(0,i.jsx)(n.h3,{id:"setting-properties-via-remote-headers",children:"Setting properties via remote headers"}),"\n",(0,i.jsxs)(n.p,{children:["BuildBuddy supports setting execution properties via remote headers.\nThis can be done by setting ",(0,i.jsx)(n.code,{children:"--remote_header=x-buildbuddy-platform.KEY=VALUE"}),"\nat the Bazel command line."]}),"\n",(0,i.jsxs)(n.p,{children:["This feature is useful as a more secure option for passing secret property\nvalues, such as ",(0,i.jsx)(n.code,{children:"container-registry-password"})," or\n",(0,i.jsx)(n.code,{children:"container-registry-username"}),", since other methods of setting exec\nproperties result in the properties being stored in the remote cache,\nwhile header values are not stored."]}),"\n",(0,i.jsx)(n.p,{children:"Properties which are set via remote headers take precedence over any\nexec properties set via any other method."}),"\n",(0,i.jsxs)(n.p,{children:["The following is the complete list of properties which are officially\nsupported for use in ",(0,i.jsx)(n.code,{children:"remote_header"}),". Other properties ",(0,i.jsx)(n.em,{children:"may"})," work but\nare not officially supported and can break at any time."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"container-registry-username"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"container-registry-password"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"action-scheduling-properties",children:"Action scheduling properties"}),"\n",(0,i.jsx)(n.p,{children:"These execution properties affect how BuildBuddy's scheduler selects an executor for action execution:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Pool"}),": selects which ",(0,i.jsx)(n.a,{href:"rbe-pools",children:"executor pool"})," to use."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"OSFamily"}),": selects which operating system the executor must be running. Available options are ",(0,i.jsx)(n.code,{children:"linux"})," (default), ",(0,i.jsx)(n.code,{children:"darwin"}),", and ",(0,i.jsx)(n.code,{children:"windows"})," (",(0,i.jsx)(n.code,{children:"darwin"})," and ",(0,i.jsx)(n.code,{children:"windows"})," are currently only available for self-hosted executors)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Arch"}),": selects which CPU architecture the executor must be running on. Available options are ",(0,i.jsx)(n.code,{children:"amd64"})," (default) and ",(0,i.jsx)(n.code,{children:"arm64"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"use-self-hosted-executors"}),": use ",(0,i.jsx)(n.a,{href:"enterprise-rbe",children:"self-hosted executors"})," instead of BuildBuddy's managed executor pool. Available options are ",(0,i.jsx)(n.code,{children:"true"})," and ",(0,i.jsx)(n.code,{children:"false"}),". The default value is configurable from ",(0,i.jsx)(n.a,{href:"https://app.buildbuddy.io/settings/",children:"organization settings"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"action-isolation-and-hermeticity-properties",children:"Action isolation and hermeticity properties"}),"\n",(0,i.jsxs)(n.p,{children:["When executing actions, each BuildBuddy executor can spin up multiple\naction ",(0,i.jsx)(n.strong,{children:"runners"}),". Each runner executes one action at a time. Each runner\nhas a ",(0,i.jsx)(n.strong,{children:"workspace"})," which represents the working directory of the action\nand contains the action's input tree. Each runner also has an\n",(0,i.jsx)(n.strong,{children:"isolation"})," strategy which decides which technology is used to isolate\nthe action from others running on the same machine. Isolation strategies\nmay also be loosely referred to as ",(0,i.jsx)(n.strong,{children:"containers"})," or ",(0,i.jsx)(n.strong,{children:"sandboxes"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The following properties allow customizing the behavior of the runner:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"workload-isolation-type"}),": selects which isolation technology is the runner should use.\nWhen using BuildBuddy Cloud executors, ",(0,i.jsx)(n.code,{children:"podman"})," (the default) and ",(0,i.jsx)(n.code,{children:"firecracker"})," are supported.\nFor self-hosted executors, the available options are ",(0,i.jsx)(n.code,{children:"docker"}),", ",(0,i.jsx)(n.code,{children:"podman"}),", ",(0,i.jsx)(n.code,{children:"firecracker"}),", ",(0,i.jsx)(n.code,{children:"sandbox"}),", and ",(0,i.jsx)(n.code,{children:"none"}),". The executor must have relevant flags enabled."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"recycle-runner"}),": whether to retain the runner after action execution\nand reuse it to execute subsequent actions. The runner's container is\npaused between actions, and the workspace is cleaned between actions by\ndefault. This option may be useful to improve performance in some\nsituations, but is not generally recommended for most actions as it\nreduces action hermeticity. Available options are ",(0,i.jsx)(n.code,{children:"true"})," and ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"preserve-workspace"}),": only applicable when ",(0,i.jsx)(n.code,{children:'"recycle-runner": "true"'})," is set. Whether to re-use the Workspace directory from the previous action. Available options are ",(0,i.jsx)(n.code,{children:"true"})," and ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"clean-workspace-inputs"}),": a comma-separated list of glob values that\ndecides which files in the action's input tree to clean up before the\naction starts. Has no effect unless ",(0,i.jsx)(n.code,{children:"preserve-workspace"})," is ",(0,i.jsx)(n.code,{children:"true"}),". Glob\npatterns should follow the specification in\n",(0,i.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gobwas/glob#Compile",children:"gobwas/glob"}),"\nlibrary."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"nonroot-workspace"}),": If set to ",(0,i.jsx)(n.code,{children:"true"}),", the workspace directory will be\nwritable by non-root users (permission ",(0,i.jsx)(n.code,{children:"0o777"}),"). Otherwise, it will be\nread-only to non-root users (permission ",(0,i.jsx)(n.code,{children:"0o755"}),")."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"runner-resource-allocation",children:"Runner resource allocation"}),"\n",(0,i.jsxs)(n.p,{children:["BuildBuddy's scheduler intelligently allocates resources to actions,\nso it's generally not needed to manually configure resources for actions.\nHowever, some ",(0,i.jsx)(n.code,{children:"exec_properties"})," are provided as manual overrides:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"EstimatedCPU"}),": the CPU time allocated for the action. Example values:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"2"}),": 2 CPU cores"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"0.5"}),": 500 MilliCPU"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"4000m"}),": 4000 MilliCPU"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"EstimatedMemory"}),": the memory allocated to the action. Example values:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"1M"}),": 1 MB"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"2GB"}),": 2 GB"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"4.5GB"}),": 4.5 GB"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"EstimatedComputeUnits"}),": a convenience unit that specifies both CPU\nand memory. One compute unit is defined as 1 CPU and 2.5GB of\nmemory. Accepts numerical values, e.g. ",(0,i.jsx)(n.code,{children:"1"})," or ",(0,i.jsx)(n.code,{children:"9"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"EstimatedFreeDiskBytes"}),": the amount of disk space allocated to the action.\nExample values:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"1M"}),": 1 MB"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"2GB"}),": 2 GB"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"4.5GB"}),": 4.5 GB"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"execution-timeout-properties",children:"Execution timeout properties"}),"\n",(0,i.jsxs)(n.p,{children:["BuildBuddy supports some execution properties that affect action execution\ntimeouts. Timeouts are specified as durations like ",(0,i.jsx)(n.code,{children:"1s"}),", ",(0,i.jsx)(n.code,{children:"15m"}),", or ",(0,i.jsx)(n.code,{children:"1h"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"default-timeout"}),": The execution timeout used if a timeout\nis not otherwise specified. This is useful for specifying timeouts on\nremotely executed build actions, while Bazel's ",(0,i.jsx)(n.code,{children:"--test_timeout"})," flag\ncan be used to specify timeouts for test actions (both locally and\nremotely). Note: Bazel's ",(0,i.jsx)(n.code,{children:"--remote_timeout"})," flag does ",(0,i.jsx)(n.em,{children:"not"})," affect\nremote action timeouts."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"termination-grace-period"}),": The time to wait between sending a graceful\ntermination signal to the action and forcefully shutting down the\naction. This is similar to Bazel's ",(0,i.jsx)(n.code,{children:"--local_termination_grace_seconds"}),",\nwhich does not apply to remotely executed actions."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"remote-persistent-worker-properties",children:"Remote persistent worker properties"}),"\n",(0,i.jsxs)(n.p,{children:["Similar to the local execution environment, the remote execution environment may also retain a long-running process acting as a ",(0,i.jsx)(n.a,{href:"https://bazel.build/remote/persistent",children:"persistent worker"})," to help reduce the total cost of cold-starts for build actions with high startup cost."]}),"\n",(0,i.jsxs)(n.p,{children:["To use remote persistent workers, the action must have ",(0,i.jsx)(n.code,{children:'"recycle-runner": "true"'}),"\nin ",(0,i.jsx)(n.code,{children:"exec_properties"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The Bazel's flag ",(0,i.jsx)(n.a,{href:"https://bazel.build/reference/command-line-reference#flag--experimental_remote_mark_tool_inputs",children:'"--experimental_remote_mark_tool_inputs"'})," should help set these automatically so you don't have to set them manually. However, we provide these ",(0,i.jsx)(n.code,{children:"exec_properties"})," for rules authors to experiment with."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"persistentWorkerKey"}),": unique key for the persistent worker. This should be automatically set by Bazel."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"persistentWorkerProtocol"}),": the serialization protocol used by the persistent worker. Available options are ",(0,i.jsx)(n.code,{children:"proto"})," (default) and ",(0,i.jsx)(n.code,{children:"json"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"runner-container-support",children:"Runner container support"}),"\n",(0,i.jsxs)(n.p,{children:["For ",(0,i.jsx)(n.code,{children:"docker"}),", ",(0,i.jsx)(n.code,{children:"podman"}),", and ",(0,i.jsx)(n.code,{children:"firecracker"})," isolation, the executor supports\nrunning actions in user-provided container images."]}),"\n",(0,i.jsxs)(n.p,{children:["Some of these have a ",(0,i.jsx)(n.code,{children:"docker"})," prefix. This is just a historical artifact;\nall properties with this prefix also apply to ",(0,i.jsx)(n.code,{children:"podman"}),". Our goal is to\nsupport all of these for ",(0,i.jsx)(n.code,{children:"firecracker"})," as well, but we are not there yet."]}),"\n",(0,i.jsx)(n.p,{children:"The following execution properties provide more customization."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"container-image"}),": the container image to use, in the format ",(0,i.jsx)(n.code,{children:"docker://<container-image>:<tag>"}),". The default value is ",(0,i.jsx)(n.code,{children:"docker://gcr.io/flame-public/executor-docker-default:enterprise-v1.6.0"}),".\nFor Firecracker, the image will be converted to a VM root image automatically."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"container-registry-username"})," and ",(0,i.jsx)(n.code,{children:"container-registry-password"}),":\ncredentials to be used to pull private container images.\nThese are not needed if the image is public. We recommend setting these\nvia remote headers, to avoid storing them in the cache."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"dockerUser"}),": determines which user the action should be run with inside\nthe container. The default is the user set on the image.\nIf setting to a non-root user, you may also need to set\n",(0,i.jsx)(n.code,{children:"nonroot-workspace"})," to ",(0,i.jsx)(n.code,{children:"true"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The following properties apply to ",(0,i.jsx)(n.code,{children:"podman"})," and ",(0,i.jsx)(n.code,{children:"docker"})," isolation,\nand are currently unsupported by ",(0,i.jsx)(n.code,{children:"firecracker"}),". (The ",(0,i.jsx)(n.code,{children:"docker"})," prefix is\njust a historical artifact.)"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"dockerInit"}),": determines whether ",(0,i.jsx)(n.code,{children:"--init"})," should be used when starting a\ncontainer. Available options are ",(0,i.jsx)(n.code,{children:"true"})," and ",(0,i.jsx)(n.code,{children:"false"}),". Defaults to ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"dockerRunAsRoot"}),": when set to ",(0,i.jsx)(n.code,{children:"true"}),", forces the container to run as\nroot, even the image specification specifies a non-root ",(0,i.jsx)(n.code,{children:"USER"}),".\nAvailable options are ",(0,i.jsx)(n.code,{children:"true"})," and ",(0,i.jsx)(n.code,{children:"false"}),". Defaults to ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"dockerNetwork"}),": determines which network mode should be used. For\n",(0,i.jsx)(n.code,{children:"sandbox"})," isolation, this determines whether the network is enabled or\nnot. Available options are ",(0,i.jsx)(n.code,{children:"off"})," and ",(0,i.jsx)(n.code,{children:"bridge"}),". The default is ",(0,i.jsx)(n.code,{children:"bridge"}),",\nbut we strongly recommend setting this to ",(0,i.jsx)(n.code,{children:"off"})," for faster runner\nstartup time. The latest version of the BuildBuddy toolchain does this\nfor you automatically."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"runner-secrets",children:"Runner secrets"}),"\n",(0,i.jsxs)(n.p,{children:["Please consult ",(0,i.jsx)(n.a,{href:"secrets",children:"RBE secrets"})," for more information on the related properties."]}),"\n",(0,i.jsx)(n.h3,{id:"docker-daemon-support",children:"Docker daemon support"}),"\n",(0,i.jsxs)(n.p,{children:["For ",(0,i.jsx)(n.code,{children:"firecracker"})," isolation, we support starting a ",(0,i.jsx)(n.a,{href:"https://docs.docker.com/config/daemon/",children:"Docker daemon"}),"\n(",(0,i.jsx)(n.code,{children:"dockerd"}),") which allows actions to run Docker containers.\nCheck out our ",(0,i.jsx)(n.a,{href:"rbe-microvms",children:"RBE with Firecracker MicroVMs"})," doc for examples."]}),"\n",(0,i.jsxs)(n.p,{children:["The following ",(0,i.jsx)(n.code,{children:"exec_properties"})," are supported:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"init-dockerd"}),": whether to start the ",(0,i.jsx)(n.code,{children:"dockerd"})," process inside the VM\nbefore execution. Available options are ",(0,i.jsx)(n.code,{children:"true"})," and ",(0,i.jsx)(n.code,{children:"false"}),". Defaults to\n",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"enable-dockerd-tcp"}),": whether ",(0,i.jsx)(n.code,{children:"dockerd"})," should listen on TCP port 2375\nin addition to the default Unix domain socket. Available options are\n",(0,i.jsx)(n.code,{children:"true"})," and ",(0,i.jsx)(n.code,{children:"false"}),". Defaults to ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>c});var o=r(96540);const i={},s=o.createContext(i);function t(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);