"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[6436],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return b}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),b=i,g=u["".concat(s,".").concat(b)]||u[b]||p[b]||o;return n?a.createElement(g,r(r({ref:t},d),{},{components:n})):a.createElement(g,r({ref:t},d))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7528:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var a=n(7462),i=n(3366),o=(n(7294),n(4137)),r=["components"],l={id:"enterprise-api",title:"API Documentation",sidebar_label:"Enterprise API"},s=void 0,c={unversionedId:"enterprise-api",id:"enterprise-api",title:"API Documentation",description:"The BuildBuddy API let's you programmatically obtain information about your Bazel builds. API access available to Enterprise BuildBuddy Customers.",source:"@site/../docs/enterprise-api.md",sourceDirName:".",slug:"/enterprise-api",permalink:"/docs/enterprise-api",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/enterprise-api.md",tags:[],version:"current",lastUpdatedBy:"Maggie Lou",lastUpdatedAt:1671209547,formattedLastUpdatedAt:"12/16/2022",frontMatter:{id:"enterprise-api",title:"API Documentation",sidebar_label:"Enterprise API"},sidebar:"someSidebar",previous:{title:"Enterprise Mac RBE Setup",permalink:"/docs/enterprise-mac-rbe"},next:{title:"Prometheus Metrics",permalink:"/docs/prometheus-metrics"}},d=[{value:"GetInvocation",id:"getinvocation",children:[{value:"Endpoint",id:"endpoint",children:[],level:3},{value:"Service",id:"service",children:[],level:3},{value:"Example cURL request",id:"example-curl-request",children:[],level:3},{value:"Example cURL response",id:"example-curl-response",children:[],level:3},{value:"GetInvocationRequest",id:"getinvocationrequest",children:[],level:3},{value:"GetInvocationResponse",id:"getinvocationresponse",children:[],level:3},{value:"InvocationSelector",id:"invocationselector",children:[],level:3},{value:"Invocation",id:"invocation",children:[],level:3}],level:2},{value:"GetLog",id:"getlog",children:[{value:"Endpoint",id:"endpoint-1",children:[],level:3},{value:"Service",id:"service-1",children:[],level:3},{value:"Example cURL request",id:"example-curl-request-1",children:[],level:3},{value:"Example cURL response",id:"example-curl-response-1",children:[],level:3},{value:"GetLogRequest",id:"getlogrequest",children:[],level:3},{value:"GetLogResponse",id:"getlogresponse",children:[],level:3},{value:"LogSelector",id:"logselector",children:[],level:3},{value:"Log",id:"log",children:[],level:3}],level:2},{value:"GetTarget",id:"gettarget",children:[{value:"Endpoint",id:"endpoint-2",children:[],level:3},{value:"Service",id:"service-2",children:[],level:3},{value:"Example cURL request",id:"example-curl-request-2",children:[],level:3},{value:"Example cURL response",id:"example-curl-response-2",children:[],level:3},{value:"GetTargetRequest",id:"gettargetrequest",children:[],level:3},{value:"GetTargetResponse",id:"gettargetresponse",children:[],level:3},{value:"TargetSelector",id:"targetselector",children:[],level:3},{value:"Target",id:"target",children:[],level:3}],level:2},{value:"GetAction",id:"getaction",children:[{value:"Endpoint",id:"endpoint-3",children:[],level:3},{value:"Service",id:"service-3",children:[],level:3},{value:"Example cURL request",id:"example-curl-request-3",children:[],level:3},{value:"Example cURL response",id:"example-curl-response-3",children:[],level:3},{value:"GetActionRequest",id:"getactionrequest",children:[],level:3},{value:"GetActionResponse",id:"getactionresponse",children:[],level:3},{value:"ActionSelector",id:"actionselector",children:[],level:3},{value:"Action",id:"action",children:[],level:3}],level:2},{value:"GetFile",id:"getfile",children:[{value:"Endpoint",id:"endpoint-4",children:[],level:3},{value:"Service",id:"service-4",children:[],level:3},{value:"Example cURL request",id:"example-curl-request-4",children:[],level:3},{value:"Example cURL response",id:"example-curl-response-4",children:[],level:3},{value:"GetFileRequest",id:"getfilerequest",children:[],level:3},{value:"GetFileResponse",id:"getfileresponse",children:[],level:3},{value:"File",id:"file",children:[],level:3}],level:2},{value:"DeleteFile",id:"deletefile",children:[{value:"Endpoint",id:"endpoint-5",children:[],level:3},{value:"Service",id:"service-5",children:[],level:3},{value:"Example cURL request",id:"example-curl-request-5",children:[],level:3},{value:"DeleteFileRequest",id:"deletefilerequest",children:[],level:3},{value:"DeleteFileResponse",id:"deletefileresponse",children:[],level:3}],level:2}],p={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The BuildBuddy API let's you programmatically obtain information about your Bazel builds. API access available to Enterprise BuildBuddy Customers."),(0,o.kt)("p",null,"Requests can be made via JSON or using Protobuf. The examples below are using the JSON API. For a full overview of the service, you can view the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/proto/api/v1/service.proto"},"service definition")," or the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy/tree/master/proto/api/v1"},"individual protos"),"."),(0,o.kt)("h2",{id:"getinvocation"},"GetInvocation"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"GetInvocation")," endpoint allows you to fetch invocations associated with a commit SHA or invocation ID. View full ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/proto/api/v1/invocation.proto"},"Invocation proto"),"."),(0,o.kt)("h3",{id:"endpoint"},"Endpoint"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://app.buildbuddy.io/api/v1/GetInvocation\n")),(0,o.kt)("h3",{id:"service"},"Service"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"// Retrieves a list of invocations or a specific invocation matching the given\n// request selector.\nrpc GetInvocation(GetInvocationRequest) returns (GetInvocationResponse);\n")),(0,o.kt)("h3",{id:"example-curl-request"},"Example cURL request"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -d '{\"selector\": {\"invocation_id\":\"c6b2b6de-c7bb-4dd9-b7fd-a530362f0845\"}}' \\\n  -H 'x-buildbuddy-api-key: YOUR_BUILDBUDDY_API_KEY' \\\n  -H 'Content-Type: application/json' \\\n  https://app.buildbuddy.io/api/v1/GetInvocation\n")),(0,o.kt)("p",null,"Make sure to replace ",(0,o.kt)("inlineCode",{parentName:"p"},"YOUR_BUILDBUDDY_API_KEY")," and the invocation ID ",(0,o.kt)("inlineCode",{parentName:"p"},"c6b2b6de-c7bb-4dd9-b7fd-a530362f0845")," with your own values."),(0,o.kt)("h3",{id:"example-curl-response"},"Example cURL response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "invocation": [\n    {\n      "id": {\n        "invocationId": "c7fbfe97-8298-451f-b91d-722ad91632ea"\n      },\n      "success": true,\n      "user": "runner",\n      "durationUsec": "221970000",\n      "host": "fv-az278-49",\n      "command": "build",\n      "pattern": "//...",\n      "actionCount": "1402",\n      "createdAtUsec": "1623193638545989",\n      "updatedAtUsec": "1623193638545989",\n      "repoUrl": "https://github.com/buildbuddy-io/buildbuddy",\n      "commitSha": "800f549937a4c0a1614e65501caf7577d2a00624",\n      "role": "CI"\n    }\n  ]\n}\n')),(0,o.kt)("h3",{id:"getinvocationrequest"},"GetInvocationRequest"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"// Request passed into GetInvocation\nmessage GetInvocationRequest {\n  // The selector defining which invocations(s) to retrieve.\n  InvocationSelector selector = 1;\n\n  // The next_page_token value returned from a previous request, if any.\n  string page_token = 3;\n}\n")),(0,o.kt)("h3",{id:"getinvocationresponse"},"GetInvocationResponse"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"// Response from calling GetInvocation\nmessage GetInvocationResponse {\n  // Invocations matching the request invocation, possibly capped by a\n  // server limit.\n  repeated Invocation invocation = 1;\n\n  // Token to retrieve the next page of results, or empty if there are no\n  // more results in the list.\n  string next_page_token = 2;\n}\n")),(0,o.kt)("h3",{id:"invocationselector"},"InvocationSelector"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"// The selector used to specify which invocations to return.\nmessage InvocationSelector {\n  // One invocation_id or commit_sha is required.\n\n  // Optional: The Invocation ID.\n  // Return only the invocation with this invocation ID.\n  string invocation_id = 1;\n\n  // Optional: The commmit SHA.\n  // If set, only the invocations with this commit SHA will be returned.\n  string commit_sha = 2;\n}\n")),(0,o.kt)("h3",{id:"invocation"},"Invocation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},'// Response from calling GetInvocation\nmessage GetInvocationResponse {\n  // Invocations matching the request invocation, possibly capped by a\n  // server limit.\n  repeated Invocation invocation = 1;\n\n  // Token to retrieve the next page of results, or empty if there are no\n  // more results in the list.\n  string next_page_token = 2;\n}\n\n// Each Invocation represents metadata associated with a given invocation.\nmessage Invocation {\n  // The resource ID components that identify the Invocation.\n  message Id {\n    // The Invocation ID.\n    string invocation_id = 1;\n  }\n\n  // The resource ID components that identify the Invocation.\n  Id id = 1;\n\n  // Whether or not the build was successful.\n  bool success = 3;\n\n  // The user who performed this build.\n  string user = 4;\n\n  // The duration of this build, from start to finish.\n  int64 duration_usec = 5;\n\n  // The host this build was executed on.\n  string host = 6;\n\n  // The command performed (usually "build" or "test").\n  string command = 7;\n\n  // The build patterns specified for this build.\n  string pattern = 8;\n\n  // The number of actions performed.\n  int64 action_count = 9;\n\n  // The time this invocation was created and updated, respectively. Invocations\n  // are created as soon as the first event is received from the client and\n  // updated with subsequent events until they are finalized.\n  int64 created_at_usec = 13;\n  int64 updated_at_usec = 14;\n\n  // A URL to the git repo this invocation was for.\n  string repo_url = 15;\n\n  // The commit SHA that this invocation was for.\n  string commit_sha = 16;\n\n  // The role played by this invocation. Ex: "CI"\n  string role = 19;\n}\n')),(0,o.kt)("h2",{id:"getlog"},"GetLog"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"GetLog")," endpoint allows you to fetch build logs associated with an invocation ID. View full ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/proto/api/v1/log.proto"},"Log proto"),"."),(0,o.kt)("h3",{id:"endpoint-1"},"Endpoint"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://app.buildbuddy.io/api/v1/GetLog\n")),(0,o.kt)("h3",{id:"service-1"},"Service"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"// Retrieves the logs for a specific invocation.\nrpc GetLog(GetLogRequest) returns (GetLogResponse);\n")),(0,o.kt)("h3",{id:"example-curl-request-1"},"Example cURL request"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -d '{\"selector\": {\"invocation_id\":\"c6b2b6de-c7bb-4dd9-b7fd-a530362f0845\"}}' \\\n  -H 'x-buildbuddy-api-key: YOUR_BUILDBUDDY_API_KEY' \\\n  -H 'Content-Type: application/json' \\\n  https://app.buildbuddy.io/api/v1/GetLog\n")),(0,o.kt)("p",null,"Make sure to replace ",(0,o.kt)("inlineCode",{parentName:"p"},"YOUR_BUILDBUDDY_API_KEY")," and the invocation ID ",(0,o.kt)("inlineCode",{parentName:"p"},"c6b2b6de-c7bb-4dd9-b7fd-a530362f0845")," with your own values."),(0,o.kt)("h3",{id:"example-curl-response-1"},"Example cURL response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "log": {\n    "contents": "\\u001b[32mINFO: \\u001b[0mStreaming build results to: https://app.buildbuddy.io/invocation/c6b2b6de-c7bb-4dd9-b7fd-a530362f0845\\n\\u001b[33mDEBUG: \\u001b[0m/private/var/tmp/_bazel_siggi/d74b389565ce91f59e5b1330988b81f0/external/io_grpc_grpc_java/java_grpc_library.bzl:195:14: Multiple values in \'deps\' is deprecated in google_devtools_remoteexecution_v1test_remote_execution_java_grpc\\n\\u001b[33mDEBUG: \\u001b[0m/private/var/tmp/_bazel_siggi/d74b3895654ce91f9e5b1300988b81f0/external/io_grpc_grpc_java/java_grpc_library.bzl:195:14: Multiple values in \'deps\' is deprecated in remote_execution_java_grpc\\n\\u001b[33mDEBUG: \\u001b[0m/private/var/tmp/_bazel_siggi/d74b3895654ce91f9e5b1300988b81f0/external/io_grpc_grpc_java/java_grpc_library.bzl:82:14: in srcs attribute of @remoteapis//:remote_execution_java_grpc: Proto source with label @remoteapis//build/bazel/remote/execution/v2:remote_execution_proto should be in same package as consuming rule\\n\\u001b[32mINFO: \\u001b[0mAnalyzed 9 targets (52 packages loaded, 1700 targets configured).\\n\\u001b[32mINFO: \\u001b[0mFound 9 targets...\\n\\u001b[32mINFO: \\u001b[0mFrom Generating Descriptor Set proto_library @googleapis//:google_watch_v1_proto:\\ngoogle/watcher/v1/watch.proto:21:1: warning: Import google/protobuf/empty.proto but not used.\\n\\u001b[32mINFO: \\u001b[0mElapsed time: 2.615s, Critical Path: 1.21s\\n\\u001b[32mINFO: \\u001b[0m32 processes: 16 internal, 11 darwin-sandbox, 5 worker.\\n\\u001b[32mINFO:\\u001b[0m Build completed successfully, 32 total actions\\n"\n  }\n}\n')),(0,o.kt)("h3",{id:"getlogrequest"},"GetLogRequest"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"// Request passed into GetLog\nmessage GetLogRequest {\n  // The selector defining which logs(s) to retrieve.\n  LogSelector selector = 1;\n\n  // The next_page_token value returned from a previous request, if any.\n  string page_token = 3;\n}\n")),(0,o.kt)("h3",{id:"getlogresponse"},"GetLogResponse"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"// Response from calling GetLog\nmessage GetLogResponse {\n  // Log matching the request, possibly capped by a server limit.\n  Log log = 1;\n\n  // Token to retrieve the next page of the log, or empty if there are no\n  // more logs.\n  string next_page_token = 2;\n}\n")),(0,o.kt)("h3",{id:"logselector"},"LogSelector"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"// The selector used to specify which logs to return.\nmessage LogSelector {\n  // Required: The Invocation ID.\n  // Return only the logs associated with this invocation ID.\n  string invocation_id = 1;\n}\n")),(0,o.kt)("h3",{id:"log"},"Log"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"// Each Log represents a chunk of build logs.\nmessage Log {\n  // The resource ID components that identify the Log.\n  message Id {\n    // The Invocation ID.\n    string invocation_id = 1;\n  }\n\n  // The resource ID components that identify the Log.\n  Id id = 1;\n\n  // The contents of the log.\n  string contents = 3;\n}\n")),(0,o.kt)("h2",{id:"gettarget"},"GetTarget"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"GetTarget")," endpoint allows you to fetch targets associated with a given invocation ID. View full ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/proto/api/v1/target.proto"},"Target proto"),"."),(0,o.kt)("h3",{id:"endpoint-2"},"Endpoint"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://app.buildbuddy.io/api/v1/GetTarget\n")),(0,o.kt)("h3",{id:"service-2"},"Service"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"// Retrieves a list of targets or a specific target matching the given\n// request selector.\nrpc GetTarget(GetTargetRequest) returns (GetTargetResponse);\n")),(0,o.kt)("h3",{id:"example-curl-request-2"},"Example cURL request"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -d '{\"selector\": {\"invocation_id\":\"c6b2b6de-c7bb-4dd9-b7fd-a530362f0845\"}}' \\\n  -H 'x-buildbuddy-api-key: YOUR_BUILDBUDDY_API_KEY' \\\n  -H 'Content-Type: application/json' \\\n  https://app.buildbuddy.io/api/v1/GetTarget\n")),(0,o.kt)("p",null,"Make sure to replace ",(0,o.kt)("inlineCode",{parentName:"p"},"YOUR_BUILDBUDDY_API_KEY")," and the invocation ID ",(0,o.kt)("inlineCode",{parentName:"p"},"c6b2b6de-c7bb-4dd9-b7fd-a530362f0845")," with your own values."),(0,o.kt)("h3",{id:"example-curl-response-2"},"Example cURL response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "target": [\n    {\n      "id": {\n        "invocationId": "c7fbfe97-8298-451f-b91d-722ad91632ea",\n        "targetId": "aWQ6OnYxOjovL3Rvb2xzL3JlcGxheV9hY3Rpb246cmVwbGF5X2FjdGlvbl9saWI"\n      },\n      "label": "//tools/replay_action:replay_action_lib",\n      "status": "BUILT",\n      "ruleType": "go_library",\n      "language": "go"\n    },\n    ...{\n      "id": {\n        "invocationId": "c7fbfe97-8298-451f-b91d-722ad91632ea",\n        "targetId": "aWQ6OnYxOjovL2VudGVycHJpc2UvYXBwOmNvcHlfYXBwX2J1bmRsZV9zb3VyY2VtYXA"\n      },\n      "label": "//enterprise/app:copy_app_bundle_sourcemap",\n      "status": "BUILT",\n      "ruleType": "genrule"\n    },\n    {\n      "id": {\n        "invocationId": "c7fbfe97-8298-451f-b91d-722ad91632ea",\n        "targetId": "aWQ6OnYxOjovL2VudGVycHJpc2U6YnVpbGRidWRkeQ"\n      },\n      "label": "//enterprise:buildbuddy",\n      "status": "BUILT",\n      "ruleType": "go_binary",\n      "language": "go"\n    }\n  ]\n}\n')),(0,o.kt)("h3",{id:"gettargetrequest"},"GetTargetRequest"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"// Request passed into GetTarget\nmessage GetTargetRequest {\n  // The selector defining which target(s) to retrieve.\n  TargetSelector selector = 1;\n\n  // The next_page_token value returned from a previous request, if any.\n  string page_token = 3;\n}\n")),(0,o.kt)("h3",{id:"gettargetresponse"},"GetTargetResponse"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"// Response from calling GetTarget\nmessage GetTargetResponse {\n  // Targets matching the request invocation, possibly capped by a\n  // server limit.\n  repeated Target target = 1;\n\n  // Token to retrieve the next page of results, or empty if there are no\n  // more results in the list.\n  string next_page_token = 2;\n}\n")),(0,o.kt)("h3",{id:"targetselector"},"TargetSelector"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"// The selector used to specify which targets to return.\nmessage TargetSelector {\n  // Required: The Invocation ID.\n  // All actions returned will be scoped to this invocation.\n  string invocation_id = 1;\n\n  // Optional: The Target ID.\n  // If set, only the target with this target id will be returned.\n  string target_id = 2;\n\n  // Optional: Tag\n  // If set, only targets with this tag will be returned.\n  string tag = 3;\n\n  // Optional: The Target label.\n  // If set, only the target with this target label will be returned.\n  string label = 4;\n}\n")),(0,o.kt)("h3",{id:"target"},"Target"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"// Each Target represents data for a given target in a given Invocation.\nmessage Target {\n  // The resource ID components that identify the Target.\n  message Id {\n    // The Invocation ID.\n    string invocation_id = 1;\n\n    // The Target ID.\n    string target_id = 2;\n  }\n\n  // The resource ID components that identify the Target.\n  Id id = 1;\n\n  // The label of the target Ex: //server/test:foo\n  string label = 2;\n\n  // The aggregate status of the target.\n  Status status = 3;\n\n  // When this target started and its duration.\n  Timing timing = 4;\n\n  // The type of the target rule. Ex: java_binary\n  string rule_type = 5;\n\n  // Tags applied to this target (if any).\n  repeated string tag = 6;\n\n  // The language of the target rule. Ex: java, go, sh\n  string language = 7;\n}\n")),(0,o.kt)("h2",{id:"getaction"},"GetAction"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"GetAction")," endpoint allows you to fetch actions associated with a given target or invocation. View full ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/proto/api/v1/action.proto"},"Action proto"),"."),(0,o.kt)("h3",{id:"endpoint-3"},"Endpoint"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://app.buildbuddy.io/api/v1/GetAction\n")),(0,o.kt)("h3",{id:"service-3"},"Service"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"// Retrieves a list of targets or a specific target matching the given\n// request selector.\nrpc GetAction(GetActionRequest) returns (GetActionResponse);\n")),(0,o.kt)("h3",{id:"example-curl-request-3"},"Example cURL request"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -d '{\"selector\": {\"invocation_id\":\"c6b2b6de-c7bb-4dd9-b7fd-a530362f0845\"}}' \\\n  -H 'x-buildbuddy-api-key: YOUR_BUILDBUDDY_API_KEY' \\\n  -H 'Content-Type: application/json' \\\n  https://app.buildbuddy.io/api/v1/GetAction\n")),(0,o.kt)("p",null,"Make sure to replace ",(0,o.kt)("inlineCode",{parentName:"p"},"YOUR_BUILDBUDDY_API_KEY")," and the invocation ID ",(0,o.kt)("inlineCode",{parentName:"p"},"c6b2b6de-c7bb-4dd9-b7fd-a530362f0845")," with your own values."),(0,o.kt)("h3",{id:"example-curl-response-3"},"Example cURL response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "action":[\n      {\n         "id":{\n            "invocationId":"c6b2b6de-c7bb-4dd9-b7fd-a530362f0845",\n            "targetId":"aWQ6OnYxOjovLzpzdGF0aWM",\n            "configurationId":"00e90e1ab7325d5e63d03bfe5f808477b2bb66ca6ae9af26c036cae67ee81cf9",\n            "actionId":"aWQ6OnYxOjpidWlsZA"\n         }\n      },\n      [...]\n      {\n         "id":{\n            "invocationId":"c6b2b6de-c7bb-4dd9-b7fd-a530362f0845",\n            "targetId":"aWQ6OnYxOjovL2VudGVycHJpc2UvYXBwOnN0eWxl",\n            "configurationId":"00e90e1ab7325d5e63d03bfe5f808477b2bb66ca6ae9af26c036cae67ee81cf9",\n            "actionId":"aWQ6OnYxOjpidWlsZA"\n         },\n         "file":[\n            {\n               "name":"enterprise/app/style.css",\n               "uri":"bytestream://remote.buildbuddy.io/buildbuddy-io/buildbuddy-internal/ci/blobs/e21b1e3411792e17e698be879a3548527d620c65953986c96d5a81f933e776aa/68837",\n               "hash":"e21b1e3411792e17e698be879a3548527d620c65953986c96d5a81f933e776aa",\n               "sizeBytes":68837\n            }\n         ]\n      },\n      {\n         "id":{\n            "invocationId":"c6b2b6de-c7bb-4dd9-b7fd-a530362f0845",\n            "targetId":"aWQ6OnYxOjovLzp2ZXQ",\n            "configurationId":"9a01374ae0e8164eec90f708e7a997520994e71b433a5265c89582c4490d75e9",\n            "actionId":"aWQ6OnYxOjpidWlsZA"\n         },\n         "file":[\n            {\n               "name":"vet_/vet",\n               "uri":"bytestream://remote.buildbuddy.io/buildbuddy-io/buildbuddy-internal/ci/blobs/915edf6aca4bd4eac3e4602641b0633a7aaf038d62d5ae087884a2d8acf0926a/7029420",\n               "hash":"915edf6aca4bd4eac3e4602641b0633a7aaf038d62d5ae087884a2d8acf0926a",\n               "sizeBytes":7029420,\n            }\n         ]\n      },\n      {\n         "id":{\n            "invocationId":"c6b2b6de-c7bb-4dd9-b7fd-a530362f0845",\n            "targetId":"aWQ6OnYxOjovL2VudGVycHJpc2Uvc2VydmVyL3Rlc3QvaW50ZWdyYXRpb24vcmVtb3RlX2NhY2hlOnJlbW90ZV9jYWNoZV90ZXN0",\n            "configurationId":"00e90e1ab7325d5e63d03bfe5f808477b2bb66ca6ae9af26c036cae67ee81cf9",\n            "actionId":"aWQ6OnYxOjp0ZXN0LVNfMy1SXzEtQV8x"\n         },\n         "file":[\n            {\n               "name":"test.log",\n               "uri":"bytestream://remote.buildbuddy.io/buildbuddy-io/buildbuddy-internal/ci/blobs/09e6fe6e1fd8c8734339a0a84c3c7a0eb121b57a45d21cfeb1f265bffe4c4888/216",\n               "hash":"09e6fe6e1fd8c8734339a0a84c3c7a0eb121b57a45d21cfeb1f265bffe4c4888",\n               "sizeBytes":216\n            }\n         ]\n      }\n   ]\n}\n')),(0,o.kt)("h3",{id:"getactionrequest"},"GetActionRequest"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"// Request passed into GetAction\nmessage GetActionRequest {\n  // The selector defining which action(s) to retrieve.\n  ActionSelector selector = 1;\n\n  // The next_page_token value returned from a previous request, if any.\n  string page_token = 2;\n}\n")),(0,o.kt)("h3",{id:"getactionresponse"},"GetActionResponse"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"// Response from calling GetAction\nmessage GetActionResponse {\n  // Actions matching the request, possibly capped a server limit.\n  repeated Action action = 1;\n\n  // Token to retrieve the next page of results, or empty if there are no\n  // more results in the list.\n  string next_page_token = 2;\n}\n")),(0,o.kt)("h3",{id:"actionselector"},"ActionSelector"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"// The selector used to specify which actions to return.\nmessage ActionSelector {\n  // Required: The Invocation ID.\n  // All actions returned will be scoped to this invocation.\n  string invocation_id = 1;\n\n  // Optional: The Target ID.\n  // If set, all actions returned will be scoped to this target.\n  string target_id = 2;\n\n  // Optional: The Configuration ID.\n  // If set, all actions returned will be scoped to this configuration.\n  string configuration_id = 3;\n\n  // Optional: The Action ID.\n  // If set, only the action with this action id will be returned.\n  string action_id = 4;\n}\n")),(0,o.kt)("h3",{id:"action"},"Action"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"// An action that happened as part of a configured target. This action could be\n// a build, a test, or another type of action.\nmessage Action {\n  // The resource ID components that identify the Action.\n  message Id {\n    // The Invocation ID.\n    string invocation_id = 1;\n\n    // The Target ID.\n    string target_id = 2;\n\n    // The Configuration ID.\n    string configuration_id = 3;\n\n    // The Action ID.\n    string action_id = 4;\n  }\n\n  // The resource ID components that identify the Action.\n  Id id = 1;\n\n  // A list of file references for action level files.\n  repeated File file = 2;\n}\n")),(0,o.kt)("h2",{id:"getfile"},"GetFile"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"GetFile")," endpoint allows you to fetch files associated with a given url. View full ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/proto/api/v1/file.proto"},"File proto"),"."),(0,o.kt)("h3",{id:"endpoint-4"},"Endpoint"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://app.buildbuddy.io/api/v1/GetFile\n")),(0,o.kt)("h3",{id:"service-4"},"Service"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"// Streams the File with the given uri.\n// - Over gRPC returns a stream of bytes to be stitched together in order.\n// - Over HTTP this simply returns the requested file.\nrpc GetFile(GetFileRequest) returns (stream GetFileResponse);\n")),(0,o.kt)("h3",{id:"example-curl-request-4"},"Example cURL request"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -d '{\"uri\":\"bytestream://remote.buildbuddy.io/buildbuddy-io/buildbuddy-internal/ci/blobs/09e6fe6e1fd8c8734339a0a84c3c7a0eb121b57a45d21cfeb1f265bffe4c4888/216\"}' \\\n  -H 'x-buildbuddy-api-key: YOUR_BUILDBUDDY_API_KEY' \\\n  -H 'Content-Type: application/json' \\\n  https://app.buildbuddy.io/api/v1/GetFile\n")),(0,o.kt)("p",null,"Make sure to replace ",(0,o.kt)("inlineCode",{parentName:"p"},"YOUR_BUILDBUDDY_API_KEY")," and the file uri ",(0,o.kt)("inlineCode",{parentName:"p"},"bytestream://remote.buildbuddy.io/buildbuddy-io/buildbuddy-internal/ci/blobs/09e6fe6e1fd8c8734339a0a84c3c7a0eb121b57a45d21cfeb1f265bffe4c4888/216")," with your own values."),(0,o.kt)("h3",{id:"example-curl-response-4"},"Example cURL response"),(0,o.kt)("p",null,"The file contents."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'exec ${PAGER:-/usr/bin/less} "$0" || exit 1\nExecuting tests from //enterprise/server/test/integration/remote_cache:remote_cache_test\n-----------------------------------------------------------------------------\nPASS\n')),(0,o.kt)("h3",{id:"getfilerequest"},"GetFileRequest"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},'// Request object for GetFile\nmessage GetFileRequest {\n  // File URI corresponding to the `uri` field in the File message.\n  //\n  // If the BuildBuddy instance supports ZSTD transcoding, the literal string\n  // "/blobs/" in the URI (third-to-last path segment) may be replaced with\n  // "/compressed-blobs/zstd/", and the server will return a compressed payload.\n  //\n  // Examples:\n  // * Uncompressed blob with remote instance name of "ci":\n  //   bytestream://remote.buildbuddy.io/ci/blobs/09e6fe6e1fd8c8734339a0a84c3c7a0eb121b57a45d21cfeb1f265bffe4c4888/216\n  //\n  // * zstd-compressed blob with no remote instance name:\n  //   bytestream://remote.buildbuddy.io/compressed-blobs/zstd/09e6fe6e1fd8c8734339a0a84c3c7a0eb121b57a45d21cfeb1f265bffe4c4888/216\n  string uri = 1;\n}\n')),(0,o.kt)("h3",{id:"getfileresponse"},"GetFileResponse"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"// Response object for GetFile\nmessage GetFileResponse {\n  // The file data.\n  bytes data = 1;\n}\n")),(0,o.kt)("h3",{id:"file"},"File"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"// A file associated with a BuildBuddy build.\nmessage File {\n  string name = 1;\n  string uri = 2;\n  string hash = 3;\n  int64 size_bytes = 4;\n}\n")),(0,o.kt)("h2",{id:"deletefile"},"DeleteFile"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"DeleteFile")," endpoint allows you to delete a specific cache entry, which is associated with a uri.\nThis can be used to address cache poisoning."),(0,o.kt)("h3",{id:"endpoint-5"},"Endpoint"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://app.buildbuddy.io/api/v1/DeleteFile\n")),(0,o.kt)("h3",{id:"service-5"},"Service"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"// Delete the File with the given uri.\nrpc DeleteFile(DeleteFileRequest) returns (DeleteFileResponse);\n")),(0,o.kt)("h3",{id:"example-curl-request-5"},"Example cURL request"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -d '{\"uri\":\"bytestream://remote.buildbuddy.io/buildbuddy-io/buildbuddy-internal/ci/blobs/09e6fe6e1fd8c8734339a0a84c3c7a0eb121b57a45d21cfeb1f265bffe4c4888/216\"}' \\\n  -H 'x-buildbuddy-api-key: YOUR_BUILDBUDDY_API_KEY' \\\n  -H 'Content-Type: application/json' \\\n  https://app.buildbuddy.io/api/v1/DeleteFile\n")),(0,o.kt)("p",null,"Make sure to replace ",(0,o.kt)("inlineCode",{parentName:"p"},"YOUR_BUILDBUDDY_API_KEY")," and the file uri ",(0,o.kt)("inlineCode",{parentName:"p"},"bytestream://remote.buildbuddy.io/buildbuddy-io/buildbuddy-internal/ci/blobs/09e6fe6e1fd8c8734339a0a84c3c7a0eb121b57a45d21cfeb1f265bffe4c4888/216")," with your own values."),(0,o.kt)("h3",{id:"deletefilerequest"},"DeleteFileRequest"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"// Request object for DeleteFile\nmessage DeleteFileRequest {\n  // URI of file to delete.\n  //\n  // CAS URI format:\n  // <instance_name>/<blobs|compressed-blobs/zstd>/<digest_hash>/<digest_size>\n  // Action cache URI format:\n  // <instance_name>/<blobs|compressed-blobs/zstd>/ac/<digest_hash>/<digest_size>\n  //\n  // Examples:\n  // * CAS artifact:\n  //   compressed-blobs/zstd/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/2084\n  //\n  // * CAS artifact with remote_instance_name\n  //   my_remote_instance_name/blobs/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/2084\n  //\n  // * Action cache artifact:\n  //   blobs/ac/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/2084\n  //\n  // * Action cache artifact with remote_instance_name\n  //   my_remote_instance_name/blobs/ac/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/2084\n  string uri = 1;\n}\n")),(0,o.kt)("h3",{id:"deletefileresponse"},"DeleteFileResponse"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"// Response object for DeleteFile\nmessage DeleteFileResponse {}\n")))}u.isMDXComponent=!0}}]);