"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[9368],{46875:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"troubleshooting-rbe","title":"Troubleshooting RBE Failures","description":"Remote connection/protocol failed with: execution failed","source":"@site/../docs/troubleshooting-rbe.md","sourceDirName":".","slug":"/troubleshooting-rbe","permalink":"/docs/troubleshooting-rbe","draft":false,"unlisted":false,"editUrl":"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/troubleshooting-rbe.md","tags":[],"version":"current","lastUpdatedBy":"Lulu Zhang","lastUpdatedAt":1740079917000,"frontMatter":{"id":"troubleshooting-rbe","title":"Troubleshooting RBE Failures","sidebar_label":"RBE Failures"},"sidebar":"someSidebar","previous":{"title":"Troubleshooting","permalink":"/docs/troubleshooting"},"next":{"title":"Slow Uploads","permalink":"/docs/troubleshooting-slow-upload"}}');var i=o(74848),s=o(28453);const r={id:"troubleshooting-rbe",title:"Troubleshooting RBE Failures",sidebar_label:"RBE Failures"},a=void 0,l={},c=[{value:"Remote connection/protocol failed with: execution failed",id:"remote-connectionprotocol-failed-with-execution-failed",level:2},{value:"Remote connection/protocol failed with: execution failed DEADLINE_EXCEEDED: deadline exceeded after 59999899500ns",id:"remote-connectionprotocol-failed-with-execution-failed-deadline_exceeded-deadline-exceeded-after-59999899500ns",level:2},{value:"exec user process caused &quot;exec format error&quot;",id:"exec-user-process-caused-exec-format-error",level:2},{value:"rpc error: code = Unavailable desc = No registered executors.",id:"rpc-error-code--unavailable-desc--no-registered-executors",level:2},{value:"WARNING: Remote Cache: UNAVAILABLE: io exception",id:"warning-remote-cache-unavailable-io-exception",level:2},{value:"CacheNotFoundException: Missing digest",id:"cachenotfoundexception-missing-digest",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"remote-connectionprotocol-failed-with-execution-failed",children:"Remote connection/protocol failed with: execution failed"}),"\n",(0,i.jsxs)(t.p,{children:["This error is often a sign that a cache write is timing out. By default, bazel's ",(0,i.jsx)(t.code,{children:"remote_timeout"})," ",(0,i.jsx)(t.a,{href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--remote_timeout",children:"flag"})," limits all remote execution calls to 60 seconds."]}),"\n",(0,i.jsx)(t.p,{children:"We recommend using the following flag to increase this remote timeout:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"--remote_timeout=600\n"})}),"\n",(0,i.jsx)(t.p,{children:"These expensive writes should only happen once when artifacts are initially written to the cache, and shouldn't happen on subsequent builds."}),"\n",(0,i.jsx)(t.h2,{id:"remote-connectionprotocol-failed-with-execution-failed-deadline_exceeded-deadline-exceeded-after-59999899500ns",children:"Remote connection/protocol failed with: execution failed DEADLINE_EXCEEDED: deadline exceeded after 59999899500ns"}),"\n",(0,i.jsxs)(t.p,{children:["This error is a sign that a cache write is timing out. By default, bazel's ",(0,i.jsx)(t.code,{children:"remote_timeout"})," ",(0,i.jsx)(t.a,{href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--remote_timeout",children:"flag"})," limits all remote execution calls to 60 seconds."]}),"\n",(0,i.jsx)(t.p,{children:"We recommend using the following flag to increase this remote timeout:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"--remote_timeout=600\n"})}),"\n",(0,i.jsx)(t.h2,{id:"exec-user-process-caused-exec-format-error",children:'exec user process caused "exec format error"'}),"\n",(0,i.jsx)(t.p,{children:"This error occurs when your build is configured for darwin (Mac OSX) CPUs, but attempting to run on Linux executors. Mac executors are not included in BuildBuddy Cloud's free-tier offering."}),"\n",(0,i.jsxs)(t.p,{children:["If you'd like to add Mac executors to your BuildBuddy Cloud account, please ",(0,i.jsx)(t.a,{href:"/request-demo/",children:"contact our sales team"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"rpc-error-code--unavailable-desc--no-registered-executors",children:"rpc error: code = Unavailable desc = No registered executors."}),"\n",(0,i.jsx)(t.p,{children:"This error occurs when your build is configured for darwin (Mac OSX) CPUs, but attempting to run on Linux executors. Mac executors are not included in BuildBuddy Cloud's free-tier offering."}),"\n",(0,i.jsxs)(t.p,{children:["If you'd like to add Mac executors to your BuildBuddy Cloud account, please ",(0,i.jsx)(t.a,{href:"/request-demo/",children:"contact our sales team"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"warning-remote-cache-unavailable-io-exception",children:"WARNING: Remote Cache: UNAVAILABLE: io exception"}),"\n",(0,i.jsx)(t.p,{children:"This error may occur when Bazel fails to properly maintain a long-running TCP connection to BuildBuddy."}),"\n",(0,i.jsxs)(t.p,{children:["To check whether this is the case, try running Bazel with ",(0,i.jsx)(t.code,{children:"--remote_grpc_log=grpc.log"})," to capture the gRPC traffic\nbetween Bazel and BuildBuddy. The log file will be in protobuf format. To convert it to JSON format, download the ",(0,i.jsx)(t.a,{href:"/docs/cli",children:"BuildBuddy CLI"})," and run ",(0,i.jsx)(t.code,{children:"bb print --grpc_log=<path-to-file>/grpc.log"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"In the log, you may see network errors such as the following:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'  "status":  {\n    "code":  14,\n    "message":  "io.netty.channel.unix.Errors$NativeIoException: readAddress(..) failed: Connection reset by peer"\n  },\n'})}),"\n",(0,i.jsx)(t.p,{children:"This typically happens when there is a proxy or gateway (e.g. AWS NAT Gateway) in between Bazel and BuildBuddy that is terminating idle connections too quickly."}),"\n",(0,i.jsx)(t.p,{children:"When this happens, try the following Linux network settings:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"# Lowered from default value: 7200\nsudo sysctl -w net.ipv4.tcp_keepalive_time=180\n# Lowered from default value: 75\nsudo sysctl -w net.ipv4.tcp_keepalive_intvl=60\n# Lowered from default value: 9\nsudo sysctl -w net.ipv4.tcp_keepalive_probes=5\n"})}),"\n",(0,i.jsx)(t.p,{children:"This will cause the Linux kernel to send keepalive probes earlier and more frequently, before the proxy/gateway in the middle detects and drops the idle connection."}),"\n",(0,i.jsxs)(t.p,{children:["The optimal values may depend on specific network conditions, but try these values as a starting point. Please ",(0,i.jsx)(t.a,{href:"/contact/",children:"contact us"})," if you have any questions / concerns."]}),"\n",(0,i.jsx)(t.h2,{id:"cachenotfoundexception-missing-digest",children:"CacheNotFoundException: Missing digest"}),"\n",(0,i.jsxs)(t.p,{children:["During remote build execution, Bazel may encounter a ",(0,i.jsx)(t.code,{children:"CacheNotFoundException"})," error with the message ",(0,i.jsx)(t.code,{children:"Missing digest"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"com.google.devtools.build.lib.remote.common.BulkTransferException: 3 errors during bulk transfer:\n    com.google.devtools.build.lib.remote.common.CacheNotFoundException: Missing digest: d0387e622e30ab61e39b1b91e54ea50f9915789dde7b950fafb0863db4a32ef8/17096\n    com.google.devtools.build.lib.remote.common.CacheNotFoundException: Missing digest: 9718647251c8d479142d459416079ff5cd9f45031a47aa346d8a6e719e374ffa/28630\n    com.google.devtools.build.lib.remote.common.CacheNotFoundException: Missing digest: 785e0ead607a37bd9a12179051e6efe53d7fb3eb05cc291e49ad6965ee2b613d/11504\n"})}),"\n",(0,i.jsx)(t.p,{children:"This error indicates that Bazel cannot find file(s) in the BuildBuddy Remote Cache that it expects to be present."}),"\n",(0,i.jsx)(t.p,{children:'The first step in verifying this issue is to copy the hash of the missing blob.\nThen, navigate to the Invocation URL -> Cache -> "Cache requests" and paste the hash into the Filter input.\nThis will show whether Bazel has attempted to upload the blob to the BuildBuddy Remote Cache.'}),"\n",(0,i.jsxs)(t.p,{children:["If Bazel attempted to upload the blob but failed, you should see multiple retry attempts for the same blob.\nThe number of retry attempts and the delay between retries can be configured using the ",(0,i.jsx)(t.code,{children:"--remote_retries"})," (default 5) and ",(0,i.jsx)(t.code,{children:"--remote_retry_max_delay"})," (default 5s) flags.\nAdditionally, ",(0,i.jsx)(t.code,{children:"--experimental_collect_system_network_usage"}),' (default true since Bazel 8) can be used to collect network usage data on the Bazel host machine.\nThis network data will be displayed as a graph in the "Timing" tab of the Invocation page.']}),"\n",(0,i.jsx)(t.p,{children:"If there was no attempt by Bazel to upload the missing blob, this signifies a mismatch between Bazel's local state and the BuildBuddy Remote Cache.\nIn a previous invocation (often with Build without the Bytes enabled), Bazel's local state might have been updated to assume that the blob already exists in the Remote Cache.\nHowever, over time, the blob may have been evicted from the BuildBuddy Remote Cache without Bazel's knowledge."}),"\n",(0,i.jsx)(t.p,{children:'The ideal solution is for Bazel to either re-upload the missing blob or re-execute the action that created it.\nThis process is also known as "Action Rewinding" in Bazel.\nHowever, this feature is not yet available as of Bazel 8.0'}),"\n",(0,i.jsx)(t.p,{children:"The current workaround involves two parts:"}),"\n",(0,i.jsxs)(t.p,{children:["a. Using the ",(0,i.jsx)(t.code,{children:"--experimental_remote_cache_lease_extension"})," and ",(0,i.jsx)(t.code,{children:"--experimental_remote_cache_ttl"}),' flags, Bazel will maintain a record of all blobs involved in the latest invocation in a separate thread.\nThis thread will periodically "ping" the BuildBuddy Remote Cache, informing the server that these blobs are still in use by Bazel.\nThe remote cache server will then update the last-used timestamps of these blobs accordingly.']}),"\n",(0,i.jsxs)(t.p,{children:["b. With the ",(0,i.jsx)(t.code,{children:"--experimental_remote_cache_eviction_retries"})," (default 5) flag, Bazel will detect this specific error code and attempt to reset the local state and retry the build.\nThis will clear Bazel's local state and re-analyze the repository to determine which blobs are missing and which actions need to be re-executed."]}),"\n",(0,i.jsxs)(t.p,{children:["If neither of these flags work, try running ",(0,i.jsx)(t.code,{children:"bazel clean --noasync"})," to manually clear the local state.\nEnsure that the Bazel JVM is shut down after the clean process completes (you can verify this through your process monitor).\nAfterward, rerun the build with the same flags as before."]}),"\n",(0,i.jsxs)(t.p,{children:["We also recommend disabling the local Disk Cache with ",(0,i.jsx)(t.code,{children:"--disk_cache=''"})," when troubleshooting this issue, as well as avoiding any remote cache proxy solutions.\nThis will help isolate the root cause by eliminating potential interference from multiple cache sources."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>a});var n=o(96540);const i={},s=n.createContext(i);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);