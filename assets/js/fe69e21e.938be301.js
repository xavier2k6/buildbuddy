"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[9368],{46875:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"troubleshooting-rbe","title":"Troubleshooting RBE Failures","description":"Remote connection/protocol failed with: execution failed","source":"@site/../docs/troubleshooting-rbe.md","sourceDirName":".","slug":"/troubleshooting-rbe","permalink":"/docs/troubleshooting-rbe","draft":false,"unlisted":false,"editUrl":"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/troubleshooting-rbe.md","tags":[],"version":"current","lastUpdatedBy":"Lulu Zhang","lastUpdatedAt":1737488412000,"frontMatter":{"id":"troubleshooting-rbe","title":"Troubleshooting RBE Failures","sidebar_label":"RBE Failures"},"sidebar":"someSidebar","previous":{"title":"Troubleshooting","permalink":"/docs/troubleshooting"},"next":{"title":"Slow Uploads","permalink":"/docs/troubleshooting-slow-upload"}}');var i=o(74848),s=o(28453);const l={id:"troubleshooting-rbe",title:"Troubleshooting RBE Failures",sidebar_label:"RBE Failures"},r=void 0,a={},c=[{value:"Remote connection/protocol failed with: execution failed",id:"remote-connectionprotocol-failed-with-execution-failed",level:2},{value:"Remote connection/protocol failed with: execution failed DEADLINE_EXCEEDED: deadline exceeded after 59999899500ns",id:"remote-connectionprotocol-failed-with-execution-failed-deadline_exceeded-deadline-exceeded-after-59999899500ns",level:2},{value:"exec user process caused &quot;exec format error&quot;",id:"exec-user-process-caused-exec-format-error",level:2},{value:"rpc error: code = Unavailable desc = No registered executors.",id:"rpc-error-code--unavailable-desc--no-registered-executors",level:2},{value:"WARNING: Remote Cache: UNAVAILABLE: io exception",id:"warning-remote-cache-unavailable-io-exception",level:2},{value:"CacheNotFoundException: Missing digest",id:"cachenotfoundexception-missing-digest",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"remote-connectionprotocol-failed-with-execution-failed",children:"Remote connection/protocol failed with: execution failed"}),"\n",(0,i.jsxs)(t.p,{children:["This error is often a sign that a cache write is timing out. By default, bazel's ",(0,i.jsx)(t.code,{children:"remote_timeout"})," ",(0,i.jsx)(t.a,{href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--remote_timeout",children:"flag"})," limits all remote execution calls to 60 seconds."]}),"\n",(0,i.jsx)(t.p,{children:"We recommend using the following flag to increase this remote timeout:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"--remote_timeout=600\n"})}),"\n",(0,i.jsx)(t.p,{children:"These expensive writes should only happen once when artifacts are initially written to the cache, and shouldn't happen on subsequent builds."}),"\n",(0,i.jsx)(t.h2,{id:"remote-connectionprotocol-failed-with-execution-failed-deadline_exceeded-deadline-exceeded-after-59999899500ns",children:"Remote connection/protocol failed with: execution failed DEADLINE_EXCEEDED: deadline exceeded after 59999899500ns"}),"\n",(0,i.jsxs)(t.p,{children:["This error is a sign that a cache write is timing out. By default, bazel's ",(0,i.jsx)(t.code,{children:"remote_timeout"})," ",(0,i.jsx)(t.a,{href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--remote_timeout",children:"flag"})," limits all remote execution calls to 60 seconds."]}),"\n",(0,i.jsx)(t.p,{children:"We recommend using the following flag to increase this remote timeout:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"--remote_timeout=600\n"})}),"\n",(0,i.jsx)(t.h2,{id:"exec-user-process-caused-exec-format-error",children:'exec user process caused "exec format error"'}),"\n",(0,i.jsx)(t.p,{children:"This error occurs when your build is configured for darwin (Mac OSX) CPUs, but attempting to run on Linux executors. Mac executors are not included in BuildBuddy Cloud's free-tier offering."}),"\n",(0,i.jsxs)(t.p,{children:["If you'd like to add Mac executors to your BuildBuddy Cloud account, please ",(0,i.jsx)(t.a,{href:"/request-demo/",children:"contact our sales team"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"rpc-error-code--unavailable-desc--no-registered-executors",children:"rpc error: code = Unavailable desc = No registered executors."}),"\n",(0,i.jsx)(t.p,{children:"This error occurs when your build is configured for darwin (Mac OSX) CPUs, but attempting to run on Linux executors. Mac executors are not included in BuildBuddy Cloud's free-tier offering."}),"\n",(0,i.jsxs)(t.p,{children:["If you'd like to add Mac executors to your BuildBuddy Cloud account, please ",(0,i.jsx)(t.a,{href:"/request-demo/",children:"contact our sales team"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"warning-remote-cache-unavailable-io-exception",children:"WARNING: Remote Cache: UNAVAILABLE: io exception"}),"\n",(0,i.jsx)(t.p,{children:"This error may occur when Bazel fails to properly maintain a long-running TCP connection to BuildBuddy."}),"\n",(0,i.jsxs)(t.p,{children:["To check whether this is the case, try running Bazel with ",(0,i.jsx)(t.code,{children:"--remote_grpc_log=grpc.log"})," to capture the gRPC traffic\nbetween Bazel and BuildBuddy. The log file will be in protobuf format. To convert it to JSON format, download the ",(0,i.jsx)(t.a,{href:"/docs/cli",children:"BuildBuddy CLI"})," and run ",(0,i.jsx)(t.code,{children:"bb print --grpc_log=<path-to-file>/grpc.log"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"In the log, you may see network errors such as the following:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'  "status":  {\n    "code":  14,\n    "message":  "io.netty.channel.unix.Errors$NativeIoException: readAddress(..) failed: Connection reset by peer"\n  },\n'})}),"\n",(0,i.jsx)(t.p,{children:"This typically happens when there is a proxy or gateway (e.g. AWS NAT Gateway) in between Bazel and BuildBuddy that is terminating idle connections too quickly."}),"\n",(0,i.jsx)(t.p,{children:"When this happens, try the following Linux network settings:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"# Lowered from default value: 7200\nsudo sysctl -w net.ipv4.tcp_keepalive_time=180\n# Lowered from default value: 75\nsudo sysctl -w net.ipv4.tcp_keepalive_intvl=60\n# Lowered from default value: 9\nsudo sysctl -w net.ipv4.tcp_keepalive_probes=5\n"})}),"\n",(0,i.jsx)(t.p,{children:"This will cause the Linux kernel to send keepalive probes earlier and more frequently, before the proxy/gateway in the middle detects and drops the idle connection."}),"\n",(0,i.jsxs)(t.p,{children:["The optimal values may depend on specific network conditions, but try these values as a starting point. Please ",(0,i.jsx)(t.a,{href:"/contact/",children:"contact us"})," if you have any questions / concerns."]}),"\n",(0,i.jsx)(t.h2,{id:"cachenotfoundexception-missing-digest",children:"CacheNotFoundException: Missing digest"}),"\n",(0,i.jsxs)(t.p,{children:["During remote build execution, Bazel may encounter a ",(0,i.jsx)(t.code,{children:"CacheNotFoundException"})," error with the message ",(0,i.jsx)(t.code,{children:"Missing digest"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"com.google.devtools.build.lib.remote.common.BulkTransferException: 3 errors during bulk transfer:\n    com.google.devtools.build.lib.remote.common.CacheNotFoundException: Missing digest: d0387e622e30ab61e39b1b91e54ea50f9915789dde7b950fafb0863db4a32ef8/17096\n    com.google.devtools.build.lib.remote.common.CacheNotFoundException: Missing digest: 9718647251c8d479142d459416079ff5cd9f45031a47aa346d8a6e719e374ffa/28630\n    com.google.devtools.build.lib.remote.common.CacheNotFoundException: Missing digest: 785e0ead607a37bd9a12179051e6efe53d7fb3eb05cc291e49ad6965ee2b613d/11504\n"})}),"\n",(0,i.jsx)(t.p,{children:"This error occurs when Bazel is unable to find file(s) in the BuildBuddy Remote Cache that it expects to exist."}),"\n",(0,i.jsx)(t.p,{children:'The first step to verify this issue would be to copy the hash of the missing blob.\nThen navigate to the Invocation URL -> Cache -> "Cache requests" and paste the hash into the Filter input.\nThis will let you know if Bazel has tried to upload the blob to BuildBuddy Remote Cache or not.'}),"\n",(0,i.jsxs)(t.p,{children:["If Bazel attempted to upload the blob and failed, there should be multiple retries attempted for the same blob.\nThe retry attempts can be configured with the ",(0,i.jsx)(t.code,{children:"--remote_retries"})," (default 5) and ",(0,i.jsx)(t.code,{children:"--remote_retry_max_delay"})," (default 5s) flags.\nAdditionally, ",(0,i.jsx)(t.code,{children:"--experimental_collect_system_network_usage"}),' (default true since Bazel 8) can be used to collect network usage data on Bazel\'s host machine.\nThis network data will be displayed as a graph in the "Timing" tab of the Invocation page.']}),"\n",(0,i.jsx)(t.p,{children:"If there was no attempt from Bazel to upload the missing blob, this is caused by a mismatch of expectation between Bazel's local state and the BuildBuddy Remote Cache.\nIn a previous invocation (usually with Build without the Bytes turned on), Bazel local state was taught to assume that the blob is already in the Remote Cache.\nHowever, as time passed, the blob was evicted from BuildBuddy Remote Cache without Bazel's knowledge."}),"\n",(0,i.jsx)(t.p,{children:'The best solution in this scenario is for Bazel to either re-upload the missing blob, or to re-execute the action that created the missing blob.\nThis is also known as "Action Rewinding" in Bazel terminology.\nHowever due to the complexity of Bazel\'s code base, this feature is not yet fully implemented.'}),"\n",(0,i.jsx)(t.p,{children:"The existing solution includes 2 halves:"}),"\n",(0,i.jsxs)(t.p,{children:["a. With ",(0,i.jsx)(t.code,{children:"--experimental_remote_cache_lease_extension"})," and ",(0,i.jsx)(t.code,{children:"--experimental_remote_cache_ttl"}),' flags, Bazel will keep track of all the blobs involved in the latest invocation in a side-car thread.\nThis side-car will routinely "ping" BuildBuddy Remote Cache to let the server know that these blobs are still being used by Bazel.\nOur remote cache server will update the last used timestamps of these blobs accordingly.']}),"\n",(0,i.jsxs)(t.p,{children:["b. With ",(0,i.jsx)(t.code,{children:"--experimental_remote_cache_eviction_retries"})," (default 5) flag, Bazel will detect this specific error code and attempt to reset the local states and re-try the build.\nThis will clear the local state kept by Bazel and re-analyze the repository to determine which blobs are missing and which actions need to be re-executed."]}),"\n",(0,i.jsxs)(t.p,{children:["If neither of these flags work, try running ",(0,i.jsx)(t.code,{children:"bazel clean --noasync"})," to clear the local state manually.\nBazel JVM should be shut down by the time the clean finished. You can check your process monitor to verify this.\nThen re-run the build with the same flags as before."]}),"\n",(0,i.jsxs)(t.p,{children:["We also recommend disabling the local Disk Cache with ",(0,i.jsx)(t.code,{children:"--disk_cache=''"})," while troubleshooting this type of issue as well as avoid using any remote cache proxy solutions.\nIt will help narrowing down the root cause by not having to deal with multiple sources of remote cache."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>l,x:()=>r});var n=o(96540);const i={},s=n.createContext(i);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);