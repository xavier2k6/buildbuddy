"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[5917],{90145:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=t(85893),i=t(11151);const r={slug:"how-bazel-7-0-makes-your-builds-faster",title:"How Bazel 7.0 Makes Your Builds Faster",description:"Highlighting changes in Bazel 7.0 that help BuildBuddy users build even faster!",author:"Brentley Jones",author_title:"Developer Evangelist @ BuildBuddy",date:"2024-01-08:10:00:00",author_url:"https://brentleyjones.com",author_image_url:"https://avatars.githubusercontent.com/u/158658?v=4",image:"/img/bazel_7_0_faster.png",tags:["bazel"]},s=void 0,l={permalink:"/blog/how-bazel-7-0-makes-your-builds-faster",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/website/blog/how-bazel-7-0-makes-your-builds-faster.md",source:"@site/blog/how-bazel-7-0-makes-your-builds-faster.md",title:"How Bazel 7.0 Makes Your Builds Faster",description:"Highlighting changes in Bazel 7.0 that help BuildBuddy users build even faster!",date:"2024-01-08T10:00:00.000Z",formattedDate:"January 8, 2024",tags:[{label:"bazel",permalink:"/blog/tags/bazel"}],readingTime:4.195,hasTruncateMarker:!0,authors:[{name:"Brentley Jones",title:"Developer Evangelist @ BuildBuddy",url:"https://brentleyjones.com",imageURL:"https://avatars.githubusercontent.com/u/158658?v=4"}],frontMatter:{slug:"how-bazel-7-0-makes-your-builds-faster",title:"How Bazel 7.0 Makes Your Builds Faster",description:"Highlighting changes in Bazel 7.0 that help BuildBuddy users build even faster!",author:"Brentley Jones",author_title:"Developer Evangelist @ BuildBuddy",date:"2024-01-08:10:00:00",author_url:"https://brentleyjones.com",author_image_url:"https://avatars.githubusercontent.com/u/158658?v=4",image:"/img/bazel_7_0_faster.png",tags:["bazel"]},unlisted:!1,nextItem:{title:"What's New in Bazel 7.0",permalink:"/blog/whats-new-in-bazel-7-0"}},o={authorsImageUrls:[void 0]},d=[{value:"Analysis phase",id:"analysis-phase",level:2},{value:"Execution phase",id:"execution-phase",level:2},{value:"Skymeld",id:"skymeld",level:2},{value:"BLAKE3",id:"blake3",level:2},{value:"Remote caching and remote execution",id:"remote-caching-and-remote-execution",level:2},{value:"Build without the Bytes",id:"build-without-the-bytes",level:2},{value:"Bzlmod",id:"bzlmod",level:2},{value:"And more...",id:"and-more",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",p:"p",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["In our ",(0,a.jsx)(n.a,{href:"/blog/whats-new-in-bazel-7-0",children:"last post"}),",\nwe summarized the changes that were in the Bazel 7.0 release.\nThere were a lot of changes though,\nso it can be hard to determine which ones are impactful to you and why."]}),"\n",(0,a.jsx)(n.p,{children:"Don't worry, we've got your back.\nIn this post we highlight the changes that help BuildBuddy users build even faster!"}),"\n",(0,a.jsx)(n.h2,{id:"analysis-phase",children:"Analysis phase"}),"\n",(0,a.jsx)(n.p,{children:"Bazel 7.0 includes numerous optimizations to the Starlark interpreter.\nThese optimizations result in faster loading and analysis phases,\nallowing execution to start sooner.\nThey also result in lower peak and retained Bazel server memory usage,\nwhich can indirectly speed up your build\n(e.g. because of fewer JVM garbage collections)."}),"\n",(0,a.jsx)(n.h2,{id:"execution-phase",children:"Execution phase"}),"\n",(0,a.jsx)(n.p,{children:"In Bazel 6.x and 7.0 file checksumming was optimized.\nThis means that actions that output symlinks of large objects or large tree artifacts run much faster."}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"https://bazel.build/versions/7.0.0/reference/command-line-reference#flag--experimental_circuit_breaker_strategy",children:(0,a.jsx)(n.code,{children:"--reuse_sandbox_directories"})})," feature received some bug fixes.\nUsing this flag on macOS can be a sizable speedup if you use sandboxing,\nwhich is the the default for most actions."]}),"\n",(0,a.jsx)(n.p,{children:"Bazel's local CPU resource counting on Linux is now container aware.\nThis should result in better default utilization of CPUs in containers."}),"\n",(0,a.jsxs)(n.p,{children:["The Android rules added persistent worker support to more actions.\nThe persistent workers can be enabled with the\n",(0,a.jsx)(n.a,{href:"https://bazel.build/versions/7.0.0/reference/command-line-reference#flag--experimental_persistent_aar_extractor",children:(0,a.jsx)(n.code,{children:"--experimental_persistent_aar_extractor"})}),",\n",(0,a.jsx)(n.a,{href:"https://bazel.build/versions/7.0.0/reference/command-line-reference#flag--persistent_android_resource_processor",children:(0,a.jsx)(n.code,{children:"--persistent_android_resource_processor"})}),",\nand ",(0,a.jsx)(n.a,{href:"https://bazel.build/versions/7.0.0/reference/command-line-reference#flag--persistent_android_dex_desugar",children:(0,a.jsx)(n.code,{children:"--persistent_android_dex_desugar"})})," flags."]}),"\n",(0,a.jsx)(n.h2,{id:"skymeld",children:"Skymeld"}),"\n",(0,a.jsxs)(n.p,{children:["In Bazel 7.0 the analysis and execution phases are now merged\n(i.e. ",(0,a.jsx)(n.a,{href:"https://github.com/bazelbuild/bazel/issues/14057",children:"project Skymeld"}),").\nDepending on the shape of your build,\nand the number of top-level targets you are building,\nthis can result in a decent speedup."]}),"\n",(0,a.jsxs)(n.p,{children:["You can disable this feature\n(e.g. to work around bugs or to benchmark)\nwith ",(0,a.jsx)(n.a,{href:"https://github.com/bazelbuild/bazel/blob/7.0.0/src/main/java/com/google/devtools/build/lib/buildtool/BuildRequestOptions.java#L376-L383",children:(0,a.jsx)(n.code,{children:"--noexperimental_merged_skyframe_analysis_execution"})}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"blake3",children:"BLAKE3"}),"\n",(0,a.jsxs)(n.p,{children:["In Bazel 6.4 the ",(0,a.jsx)(n.code,{children:"blake3"})," option was added to the ",(0,a.jsx)(n.a,{href:"https://github.com/bazelbuild/bazel/blob/7.0.0/src/main/java/com/google/devtools/build/lib/runtime/BlazeServerStartupOptions.java#L407-L418",children:(0,a.jsx)(n.code,{children:"--digest_function"})})," startup flag.\nWhen using this option the ",(0,a.jsx)(n.a,{href:"https://github.com/BLAKE3-team/BLAKE3",children:"BLAKE3"})," hash function is used to compute file digests.\nFor large files this can be significantly faster than the default SHA-256 hash function."]}),"\n",(0,a.jsxs)(n.p,{children:["There is a small caveat to using this new option.\nIf you use a remote cache,\nit needs to also support BLAKE3 digests.\nIf you are not using a cache,\nor only using ",(0,a.jsx)(n.code,{children:"--disk_cache"}),",\nyou can safely use this option.\nIn case you were wondering,\nall of BuildBuddy's products\n(i.e. Build and Test UI, Remote Build Cache, and Remote Build Execution)\nsupport BLAKE3 digests \ud83d\ude0a."]}),"\n",(0,a.jsx)(n.h2,{id:"remote-caching-and-remote-execution",children:"Remote caching and remote execution"}),"\n",(0,a.jsx)(n.p,{children:"Remote server capabilities are now fetched asynchronously,\nallowing analysis and non-remote actions to start sooner."}),"\n",(0,a.jsx)(n.p,{children:"Merkle trees,\nwhich are created by Bazel for use with remote execution,\nare now built faster while using less memory."}),"\n",(0,a.jsxs)(n.p,{children:["When the remote cache or executors are unreachable,\nBazel now automatically falls back to local execution,\ninstead of erroring.\nSimilarly, in Bazel 6.3 the\n",(0,a.jsx)(n.a,{href:"https://bazel.build/versions/7.0.0/reference/command-line-reference#flag--experimental_circuit_breaker_strategy",children:(0,a.jsx)(n.code,{children:"--experimental_circuit_breaker_strategy"})}),",\n",(0,a.jsx)(n.a,{href:"https://bazel.build/versions/7.0.0/reference/command-line-reference#flag--experimental_remote_failure_window_interval",children:(0,a.jsx)(n.code,{children:"--experimental_remote_failure_window_interval"})}),",\nand ",(0,a.jsx)(n.a,{href:"https://bazel.build/versions/7.0.0/reference/command-line-reference#flag--experimental_remote_failure_rate_threshold",children:(0,a.jsx)(n.code,{children:"--experimental_remote_failure_rate_threshold"})}),"\nflags were added,\nwhich allows configuring Bazel to switch to local execution if a certain rate of remote errors are encountered during a build."]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"https://bazel.build/versions/7.0.0/reference/command-line-reference#flag--experimental_remote_scrubbing_config",children:(0,a.jsx)(n.code,{children:"--experimental_remote_scrubbing_config"})})," flag was added,\nwhich allows you to increase cache hits for platform independent targets when building from multiple host platforms."]}),"\n",(0,a.jsx)(n.p,{children:"All of these changes result in faster and more reliable builds when you use remote strategies."}),"\n",(0,a.jsx)(n.h2,{id:"build-without-the-bytes",children:"Build without the Bytes"}),"\n",(0,a.jsxs)(n.p,{children:["There were quite a few changes to the ",(0,a.jsx)(n.a,{href:"https://blog.bazel.build/2023/10/06/bwob-in-bazel-7.html",children:"Build without the Bytes feature"}),",\nin the form of both performance enhancements and bug fixes.\nBecause of those changes,\nthe Bazel team is finally confident enough in this feature that ",(0,a.jsx)(n.code,{children:"toplevel"})," is now the the default value for the ",(0,a.jsx)(n.a,{href:"https://bazel.build/versions/7.0.0/reference/command-line-reference#flag--remote_download_outputs",children:(0,a.jsx)(n.code,{children:"--remote_download_outputs"})})," flag."]}),"\n",(0,a.jsx)(n.p,{children:"Using Build without the Bytes can speed up your build by allowing Bazel to not fetch unneeded intermediate build artifacts from your cache.\nThe benefit of this is even more pronounced if you are using Remote Build Execution,\nsince any actions that need to be rerun are run remotely,\nsaving you from having to download action inputs."}),"\n",(0,a.jsxs)(n.p,{children:["If you don't need the outputs\n(e.g. on CI or when running tests with Remote Build Execution),\nyou can use the ",(0,a.jsx)(n.code,{children:"minimal"})," option with the ",(0,a.jsx)(n.code,{children:"--remote_download_outputs"})," flag,\nwhich can speed up your builds even more.\nAnd as of Bazel 7.0,\nchanging the value of the ",(0,a.jsx)(n.code,{children:"--remote_download_outputs"})," flag won't invalidate the analysis cache."]}),"\n",(0,a.jsx)(n.h2,{id:"bzlmod",children:"Bzlmod"}),"\n",(0,a.jsx)(n.p,{children:"The Bzlmod lockfile,\nwhich received bug fixes and breaking changes through the Bazel 6.x and 7.0 releases,\nis now stable as of Bazel 7.0.\nUsing the lockfile can speed up fresh Bazel server launches,\nby preventing unnecessary rerunning of dependency resolution.\nThis has an added benefit of allowing your workspace to build offline,\neven if the Bazel server is restarted."}),"\n",(0,a.jsx)(n.p,{children:"Additionally,\nBazel 6.4 and 7.0 includes dependency resolution performance optimizations,\nresulting in reduced CPU and memory usage."}),"\n",(0,a.jsxs)(n.p,{children:["Both Bzlmod and the Bzlmod lockfile are enabled by default in Bazel 7.0,\nand can be adjusted with the ",(0,a.jsx)(n.a,{href:"https://bazel.build/versions/7.0.0/reference/command-line-reference#flag--enable_bzlmod",children:(0,a.jsx)(n.code,{children:"--enable_bzlmod"})})," and ",(0,a.jsx)(n.a,{href:"https://bazel.build/versions/7.0.0/reference/command-line-reference#flag--lockfile_mode",children:(0,a.jsx)(n.code,{children:"--lockfile_mode"})})," flags."]}),"\n",(0,a.jsx)(n.h2,{id:"and-more",children:"And more..."}),"\n",(0,a.jsxs)(n.p,{children:["Bazel 7.0 includes many additional changes that improve its reliability and performance.\nTo dig a little deeper,\nbe sure to check out our ",(0,a.jsx)(n.a,{href:"/blog/whats-new-in-bazel-7-0",children:"What's New in Bazel 7.0"})," post."]})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>s});var a=t(67294);const i={},r=a.createContext(i);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);