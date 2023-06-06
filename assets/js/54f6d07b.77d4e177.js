"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[2002],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var i=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,i,l=function(e,n){if(null==e)return{};var t,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=s(t),h=l,m=d["".concat(p,".").concat(h)]||d[h]||c[h]||a;return t?i.createElement(m,o(o({ref:n},u),{},{components:t})):i.createElement(m,o({ref:n},u))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=h;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r[d]="string"==typeof e?e:l,o[1]=r;for(var s=2;s<a;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},27886:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return d}});var i=t(83117),l=t(80102),a=(t(67294),t(3905)),o=["components"],r={id:"cli-plugins",title:"CLI Plugins",sidebar_label:"CLI Plugins"},p=void 0,s={unversionedId:"cli-plugins",id:"cli-plugins",title:"CLI Plugins",description:"The BuildBuddy CLI comes with a robust plugin system. Plugins are super simple to write, share, and install.",source:"@site/../docs/cli-plugins.md",sourceDirName:".",slug:"/cli-plugins",permalink:"/docs/cli-plugins",draft:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/cli-plugins.md",tags:[],version:"current",lastUpdatedBy:"Brandon Duffany",lastUpdatedAt:1686057304,formattedLastUpdatedAt:"Jun 6, 2023",frontMatter:{id:"cli-plugins",title:"CLI Plugins",sidebar_label:"CLI Plugins"},sidebar:"someSidebar",previous:{title:"CLI Overview",permalink:"/docs/cli"},next:{title:"Troubleshooting",permalink:"/docs/troubleshooting"}},u={},d=[{value:"Installing a plugin",id:"installing-a-plugin",level:2},{value:"Example",id:"example",level:3},{value:"Syntax",id:"syntax",level:3},{value:"REPO",id:"repo",level:4},{value:"VERSION",id:"version",level:4},{value:"PATH",id:"path",level:4},{value:"User specific plugins",id:"user-specific-plugins",level:3},{value:"Manual install",id:"manual-install",level:3},{value:"Creating a plugin",id:"creating-a-plugin",level:2},{value:"<code>pre_bazel.sh</code>",id:"pre_bazelsh",level:3},{value:"<code>post_bazel.sh</code>",id:"post_bazelsh",level:3},{value:"<code>handle_bazel_output.sh</code>",id:"handle_bazel_outputsh",level:3},{value:"Environment variables",id:"environment-variables",level:3},{value:"$BUILD_WORKSPACE_DIRECTORY",id:"build_workspace_directory",level:4},{value:"$PLUGIN_TEMPDIR",id:"plugin_tempdir",level:4},{value:"$USER_CONFIG_DIR",id:"user_config_dir",level:4},{value:"$EXEC_ARGS_FILE",id:"exec_args_file",level:4},{value:"Examples",id:"examples",level:3},{value:"Sharing a plugin",id:"sharing-a-plugin",level:2},{value:"Uninstalling a plugin",id:"uninstalling-a-plugin",level:2}],c={toc:d},h="wrapper";function m(e){var n=e.components,t=(0,l.Z)(e,o);return(0,a.kt)(h,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The BuildBuddy CLI comes with a robust plugin system. Plugins are super simple to write, share, and install."),(0,a.kt)("p",null,"You can find a list of plugins that you can install in our ",(0,a.kt)("a",{parentName:"p",href:"/plugins"},"plugin library"),"."),(0,a.kt)("h2",{id:"installing-a-plugin"},"Installing a plugin"),(0,a.kt)("p",null,"Plugins can be installed using the ",(0,a.kt)("inlineCode",{parentName:"p"},"bb install")," command."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"Here's an example of a command that installs the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/plugins/tree/main/open-invocation#readme"},"open-invocation plugin"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"bb install buildbuddy-io/plugins:open-invocation\n")),(0,a.kt)("p",null,"This is shorthand for:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"bb install https://github.com/buildbuddy-io/plugins@main:open-invocation\n")),(0,a.kt)("h3",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,"The syntax for the install command is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"bb install [REPO][@VERSION][:PATH]\n")),(0,a.kt)("p",null,"Notice the 3 components that define the plugin being installed: ",(0,a.kt)("strong",{parentName:"p"},"REPO"),", ",(0,a.kt)("strong",{parentName:"p"},"VERSION"),", and ",(0,a.kt)("strong",{parentName:"p"},"PATH")," which are all optional."),(0,a.kt)("p",null,"Either a ",(0,a.kt)("strong",{parentName:"p"},"REPO")," or a ",(0,a.kt)("strong",{parentName:"p"},"PATH")," must be specified (otherwise, the CLI wouldn't know what plugin to install)."),(0,a.kt)("p",null,"Below is a detailed description of each of these components."),(0,a.kt)("h4",{id:"repo"},"REPO"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"REPO")," component defines a git repository from which to install the plugin. If ",(0,a.kt)("strong",{parentName:"p"},"REPO")," is omitted, the CLI will look for a plugin in the current repository based on the ",(0,a.kt)("strong",{parentName:"p"},"PATH")," component."),(0,a.kt)("p",null,"This makes it easy to write new plugins directly within your existing repo, without having to create a new repo per plugin."),(0,a.kt)("p",null,"You can specify the ",(0,a.kt)("strong",{parentName:"p"},"REPO")," component as a fully qualified git url, like ",(0,a.kt)("inlineCode",{parentName:"p"},"github.com/buildbuddy-io/plugins")," or using a shorthand owner/repo notation like ",(0,a.kt)("inlineCode",{parentName:"p"},"buildbuddy-io/plugins"),", in which case ",(0,a.kt)("inlineCode",{parentName:"p"},"github.com/")," will automatically be prepended."),(0,a.kt)("h4",{id:"version"},"VERSION"),(0,a.kt)("p",null,"This allows you to lock a plugin to a specific git tag, branch, or commit SHA. If ",(0,a.kt)("strong",{parentName:"p"},"VERSION")," is omitted, the CLI will pull the plugin from head."),(0,a.kt)("h4",{id:"path"},"PATH"),(0,a.kt)("p",null,"A BuildBuddy CLI plugin is simply a directory. The ",(0,a.kt)("strong",{parentName:"p"},"PATH")," component defines the directory in which the plugin is contained. If no path is specified, the BuildBuddy CLI look for a plugin in the repository's root directory."),(0,a.kt)("h3",{id:"user-specific-plugins"},"User specific plugins"),(0,a.kt)("p",null,"By default plugins are installed at the repository level. They are saved in the ",(0,a.kt)("inlineCode",{parentName:"p"},"buildbuddy.yaml")," file in the root of your repository."),(0,a.kt)("p",null,"Sometimes you may want to install a plugin for yourself (like a theme plugin for example), but don't want to force it on everyone on your project. In that case, you can install a plugin as a user-specific plugin."),(0,a.kt)("p",null,"Installing a plugin as user-specific is as simple as just tacking the ",(0,a.kt)("inlineCode",{parentName:"p"},"--user")," argument onto your ",(0,a.kt)("inlineCode",{parentName:"p"},"bb install")," command."),(0,a.kt)("p",null,"When the ",(0,a.kt)("inlineCode",{parentName:"p"},"--user")," argument is present, the plugin will be added to a ",(0,a.kt)("inlineCode",{parentName:"p"},"~/buildbuddy.yaml")," file located in your user directory. That means those plugins will only be applied to you."),(0,a.kt)("p",null,"If a plugin is present in both your user-specific and workspace at differnet versions, the one in your workspace will take precedence."),(0,a.kt)("h3",{id:"manual-install"},"Manual install"),(0,a.kt)("p",null,"You can manually install plugins by editing your ",(0,a.kt)("inlineCode",{parentName:"p"},"buildbuddy.yaml")," file with a text editor."),(0,a.kt)("p",null,"They live under a ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins:")," section, like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"plugins:\n  # Local plugins\n  - path: cli/example_plugins/go-highlight\n  - path: cli/example_plugins/ping-remote\n  # Plugins in external repos\n  - path: cli/plugins/go-deps\n    repo: buildbuddy-io/plugins\n  - path: cli/plugins/open-invocation\n    repo: buildbuddy-io/plugins\n  - path: cli/plugins/notify\n    repo: buildbuddy-io/plugins\n  - path: cli/plugins/theme-modern\n    repo: buildbuddy-io/plugins\n  # Single-plugin repo\n  - repo: bduffany/go-highlight\n")),(0,a.kt)("p",null,"You can check out our ",(0,a.kt)("inlineCode",{parentName:"p"},"buildbuddy.yaml")," file ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/buildbuddy.yaml#L55"},"here"),"."),(0,a.kt)("h2",{id:"creating-a-plugin"},"Creating a plugin"),(0,a.kt)("p",null,"Creating a plugin is simple, it's just a directory. The directory can live within your repo, or in a separate repository."),(0,a.kt)("p",null,"There are 3 files you can place in your plugin directory, each corresponding to different a hook."),(0,a.kt)("p",null,"The files are simply bash scripts, which gives you the flexibility to write them in any language you want."),(0,a.kt)("p",null,"A single plugin can contain multiple hook scripts."),(0,a.kt)("p",null,"The directory layout for a plugin looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"path/to/plugin/\n\u251c\u2500\u2500 pre_bazel.sh            # optional\n\u251c\u2500\u2500 post_bazel.sh           # optional\n\u2514\u2500\u2500 handle_bazel_output.sh  # optional\n")),(0,a.kt)("h3",{id:"pre_bazelsh"},(0,a.kt)("inlineCode",{parentName:"h3"},"pre_bazel.sh")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"pre_bazel.sh")," script will be called before Bazel is run."),(0,a.kt)("p",null,"It is called with a single argument, which is the path to a file\ncontaining all arguments that will be passed to Bazel (including the\narguments specified in your ",(0,a.kt)("inlineCode",{parentName:"p"},".bazelrc")," and expanded via any ",(0,a.kt)("inlineCode",{parentName:"p"},"--config="),"\nflags). ",(0,a.kt)("strong",{parentName:"p"},"Each line in this file contains a single argument.")),(0,a.kt)("p",null,"The script will be called like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/bin/env bash /path/to/plugin/pre_bazel.sh /path/to/bazel-args\n")),(0,a.kt)("p",null,"Here's an example of what the Bazel args file might look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--ignore_all_rc_files\nrun\n//server\n--bes_results_url=https://app.buildbuddy.io/invocation/\n--bes_backend=grpcs://remote.buildbuddy.io\n--noremote_upload_local_results\n--workspace_status_command=$(pwd)/workspace_status.sh\n--incompatible_remote_build_event_upload_respect_no_cache\n--experimental_remote_cache_async\n--incompatible_strict_action_env\n--enable_runfiles=1\n--build_tag_filters=-docker\n--bes_results_url=https://app.buildbuddy.io/invocation/\n--bes_backend=grpcs://remote.buildbuddy.io\n--remote_cache=grpcs://remote.buildbuddy.io\n--remote_upload_local_results\n--experimental_remote_cache_compression\n--noremote_upload_local_results\n--noincompatible_remote_build_event_upload_respect_no_cache\n")),(0,a.kt)("p",null,"Your plugin can modify this file to add, remove, or change that flags that will ultimately be passed to Bazel."),(0,a.kt)("p",null,"Your ",(0,a.kt)("inlineCode",{parentName:"p"},"pre_bazel.sh")," script can also accept user input, spawn other processes, or anything else you'd like."),(0,a.kt)("p",null,"Here's an example of a simple ",(0,a.kt)("inlineCode",{parentName:"p"},"pre_bazel.sh")," plugin that disables remote execution if it's unable to ping ",(0,a.kt)("inlineCode",{parentName:"p"},"remote.buildbuddy.io")," within 500ms."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'if ! grep -E \'^--remote_executor=.*\\.buildbuddy\\.io$\' "$1" &>/dev/null; then\n  # BB remote execution is not enabled; do nothing.\n  exit 0\nfi\n\n# Make sure we can ping the remote execution service in 500ms.\nif ! timeout 0.5 ping -c 1 remote.buildbuddy.io &>/dev/null; then\n  # Network is spotty; disable remote execution.\n  echo "--remote_executor=" >>"$1"\nfi\n')),(0,a.kt)("p",null,"Because this is just a bash script, you can write your pre Bazel logic in python, js, or any other language you'd like."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"pre_bazel.sh")," script is also a great place for more complex plugins to make sure all of their dependencies are available / installed."),(0,a.kt)("p",null,"Here's example of a ",(0,a.kt)("inlineCode",{parentName:"p"},"pre_bazel.sh")," script that makes sure both ",(0,a.kt)("inlineCode",{parentName:"p"},"python3")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"open")," are installed, and then calls into a python script called ",(0,a.kt)("inlineCode",{parentName:"p"},"pre_bazel.py"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'if ! which python3 &>/dev/null; then\n  echo -e "\\x1b[33mWarning: open-invocation plugin is disabled: missing \'python3\' in \\$PATH\\x1b[m" >&2\n  exit 0\nfi\nopen_command=$( (which xdg-open open | head -n1) || true)\nif [[ ! "$open_command" ]]; then\n  echo -e "\\x1b[33mWarning: open-invocation plugin is disabled: missing \'open\' or \'xdg-open\' in \\$PATH\\x1b[m" >&2\n  exit\nfi\n\nexec python3 ./pre_bazel.py "$@"\n')),(0,a.kt)("h3",{id:"post_bazelsh"},(0,a.kt)("inlineCode",{parentName:"h3"},"post_bazel.sh")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"post_bazel.sh")," script is called after Bazel completes. It is called with a single argument, which contains the console output that was generated by Bazel. This allows you to analyze Bazel's output and perform actions based on these outputs."),(0,a.kt)("p",null,"The script will be called like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/bin/env bash /path/to/plugin/post_bazel.sh /path/to/bazel-outputs\n")),(0,a.kt)("p",null,"Here's an example of what the Bazel outputs file might look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"INFO: Invocation ID: cd254c65-c657-4524-b084-15a20d4485d1\nINFO: Streaming build results to: https://app.buildbuddy.io/invocation/cd254c65-c657-4524-b084-15a20d4485d1\nDEBUG: /root/workspace/output-base/external/io_bazel_rules_k8s/toolchains/kubectl/kubectl_toolchain.bzl:28:14: No kubectl tool was found or built, executing run for rules_k8s targets might not work.\nINFO: Analyzed 1212 targets (345 packages loaded, 28870 targets configured).\nINFO: Found 1042 targets and 170 test targets...\nINFO: Elapsed time: 67.685s, Critical Path: 10.30s\nINFO: 5868 processes: 5866 remote cache hit, 1 internal, 1 remote.\n//app:app_typecheck_test                                        (cached) PASSED in 0.4s\n//server/util/terminal:terminal_test                            (cached) PASSED in 0.7s\n//server/util/url:url_test                                      (cached) PASSED in 0.4s\n//enterprise/server/remote_execution/containers/sandbox:sandbox_test    SKIPPED\n\nExecuted 0 out of 170 tests: 169 tests pass and 1 was skipped.\nThere were tests whose specified size is too big. Use the --test_verbose_timeout_warnings command line option to see which ones these are.\n")),(0,a.kt)("p",null,"Your ",(0,a.kt)("inlineCode",{parentName:"p"},"post_bazel.sh")," script can also accept user input, spawn other processes, or anything else you'd like."),(0,a.kt)("p",null,"Here's an example of a simple plugin that sends a desktop notification once the build completes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'set -eu\n\nSTATUS_LINE=$(grep "Build" "$1" | grep "complete" | tail -n1 | perl -p -e \'s@.*?(Build)@\\1@\')\nELAPSED_TIME_LINE=$(grep "Elapsed time" "$1" | tail -n1 | perl -p -e \'s@.*?(Elapsed)@\\1@\')\n\nTITLE="Bazel build finished"\nMESSAGE="${ELAPSED_TIME_LINE}\\n${STATUS_LINE}"\n\nif [[ "$OSTYPE" == darwin* ]]; then\n  SCRIPT="display notification \\"$MESSAGE\\" with title \\"$TITLE\\""\n\n  osascript -e "$SCRIPT"\n  exit 0\nfi\n\nnotify-send --expire-time 3000 "$TITLE" "$MESSAGE"\n')),(0,a.kt)("p",null,"Here's another example of a more complex plugin, that simply calls a python script name ",(0,a.kt)("inlineCode",{parentName:"p"},"post_bazel.py")," after checking that ",(0,a.kt)("inlineCode",{parentName:"p"},"python3")," is installed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'if ! which python3 &>/dev/null; then\n  echo -e "\\x1b[33mWarning: go-deps plugin is disabled: missing \'python3\' in \\$PATH\\x1b[m" >&2\n  exit 0\nfi\nexec python3 ./post_bazel.py "$@"\n')),(0,a.kt)("h3",{id:"handle_bazel_outputsh"},(0,a.kt)("inlineCode",{parentName:"h3"},"handle_bazel_output.sh")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"handle_bazel_output.sh")," script receives on its stdin all of Bazel's\nstderr output (not stdout). This is useful because Bazel outputs warnings,\nerrors, and progress output on stderr, allowing you to transform and\nmodify the output that Bazel displays to users."),(0,a.kt)("p",null,"As an example, we can write a ",(0,a.kt)("inlineCode",{parentName:"p"},"handle_bazel_output.sh")," plugin to take the\nplain output from a build, and add\n",(0,a.kt)("a",{parentName:"p",href:"https://wikipedia.org/wiki/ANSI_escape_code"},"ANSI colors")," to Go file\nnames to make them easier to spot."),(0,a.kt)("p",null,"Our ",(0,a.kt)("inlineCode",{parentName:"p"},"handle_bazel_output.sh")," script delegates to a python script\n",(0,a.kt)("inlineCode",{parentName:"p"},"handle_bazel_output.py"),", gracefully falling back to running ",(0,a.kt)("inlineCode",{parentName:"p"},"cat")," if\nPython is missing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'if ! which python3 &>/dev/null; then\n  echo -e "\\x1b[33mWarning: go-highlight plugin is disabled: missing \'python3\' in \\$PATH\\x1b[m" >&2\n  exec cat\nfi\nexec python3 ./handle_bazel_output.py "$@"\n')),(0,a.kt)("p",null,"Here is the Python script ",(0,a.kt)("inlineCode",{parentName:"p"},"handle_bazel_output.py")," from the\n",(0,a.kt)("inlineCode",{parentName:"p"},"go-highlight")," plugin:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'import re\nimport sys\n\nif __name__ == "__main__":\n    for line in sys.stdin:\n        m = re.search(r"^(.*?\\.go:\\d+:\\d+:)(.*)", line)\n        if m:\n            print("\\x1b[33m" + m.group(1) + "\\x1b[0m" + m.group(2))\n        else:\n            print(line, end="")\n\n')),(0,a.kt)("p",null,"As another example, here is a ",(0,a.kt)("inlineCode",{parentName:"p"},"handle_bazel_output.py")," script that changes\nthe colors of various Bazel outputs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'import re\nimport sys\n\ndefault_green = "\\x1b[32m"\nbright_green_bold = "\\x1b[92;1m"\nbright_cyan_bold = "\\x1b[96;1m"\nbright_white_bold_underline = "\\x1b[37;1;4m"\nreset = "\\x1b[0m"\n\nif __name__ == "__main__":\n    for line in sys.stdin:\n        line = line.replace(default_green+"INFO", bright_green_bold+"INFO")\n        line = line.replace(default_green+"Loading", bright_cyan_bold+"Loading")\n        line = line.replace(default_green+"Analyzing", bright_cyan_bold+"Analyzing")\n        line = line.replace(default_green+"[", bright_cyan_bold+"[")\n        m = re.search(r"^(.*)(Streaming build results to: )(.*)$", line)\n        if m:\n            print(m.group(1) + m.group(2) + bright_white_bold_underline + m.group(3) + reset)\n        else:\n            print(line, end="")\n')),(0,a.kt)("h3",{id:"environment-variables"},"Environment variables"),(0,a.kt)("p",null,"The CLI exposes certain environment variables to your plugins."),(0,a.kt)("h4",{id:"build_workspace_directory"},"$BUILD_WORKSPACE_DIRECTORY"),(0,a.kt)("p",null,"This is the path to the Bazel workspace in which the CLI is run. It is the\nroot path, containing the bazel ",(0,a.kt)("inlineCode",{parentName:"p"},"WORKSPACE")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"WORKSPACE.bazel")," file."),(0,a.kt)("h4",{id:"plugin_tempdir"},"$PLUGIN_TEMPDIR"),(0,a.kt)("p",null,"This is a temporary directory that can be used by your plugin to store temporary files. These files will be cleaned up after the invocation is complete."),(0,a.kt)("h4",{id:"user_config_dir"},"$USER_CONFIG_DIR"),(0,a.kt)("p",null,"This is a long-lived directory you can use to store user preferences, like whether or not a user always wants to automatically apply a particular fix."),(0,a.kt)("p",null,"Your plugin is responsible for provisioning its own directory under this\nconfig dir, if needed, using something like\n",(0,a.kt)("inlineCode",{parentName:"p"},"mkdir -p $USER_CONFIG_DIR/my-plugin"),". If you store user preferences here,\nyou'll need to decide how to handle differences in preferences across\ndifferent versions of your plugin."),(0,a.kt)("h4",{id:"exec_args_file"},"$EXEC_ARGS_FILE"),(0,a.kt)("p",null,"This is the path of a file that contains the args that would be passed to an\nexecutable built by bazel as a result of a ",(0,a.kt)("inlineCode",{parentName:"p"},"bazel run"),' command. Specifically,\nthese are any positional arguments remaining after canonicalization of any\noptions that take arguments into "--option=value" options, excepting the ',(0,a.kt)("inlineCode",{parentName:"p"},"run"),"\nsubcommand itself and the build target. These are generally the arguments\nfollowing a ",(0,a.kt)("inlineCode",{parentName:"p"},"--")," in the argument list passed to bazel, if any."),(0,a.kt)("p",null,"This environment variable will only be set for the ",(0,a.kt)("inlineCode",{parentName:"p"},"pre_bazel.sh")," script in the\nplugin. Plugins can change this file to change the arguments\npassed to Bazel."),(0,a.kt)("p",null,"The file in question is formatted very similarly to the bazel args file, except\nthat the arguments will be split across lines based solely as a result of shell\nlexing, as it is not possible to parse or canonicalize options without knowing\nthe internals of the executable to be run. The following is an example exec args\nfile:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--bool_var\ntrue\npositional_arg\n--option=value\n--option2\npositional_arg3\n--option4\n")),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Here are some examples of plugins that can help you get started quickly:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pre_bazel.sh")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ping-remote: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/buildbuddy-io/buildbuddy/tree/master/cli/example_plugins/ping-remote"},"https://github.com/buildbuddy-io/buildbuddy/tree/master/cli/example_plugins/ping-remote"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"post_bazel.sh")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"open-invocation: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/buildbuddy-io/buildbuddy/tree/master/cli/plugins/open-invocation"},"https://github.com/buildbuddy-io/buildbuddy/tree/master/cli/plugins/open-invocation")),(0,a.kt)("li",{parentName:"ul"},"notify: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/buildbuddy-io/buildbuddy/tree/master/cli/plugins/notify"},"https://github.com/buildbuddy-io/buildbuddy/tree/master/cli/plugins/notify")),(0,a.kt)("li",{parentName:"ul"},"go-deps: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/buildbuddy-io/buildbuddy/tree/master/cli/plugins/go-deps"},"https://github.com/buildbuddy-io/buildbuddy/tree/master/cli/plugins/go-deps"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"handle_bazel_output.sh")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"go-highlight: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/bduffany/go-highlight"},"https://github.com/bduffany/go-highlight")),(0,a.kt)("li",{parentName:"ul"},"theme-modern: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/siggisim/theme-modern"},"https://github.com/siggisim/theme-modern"))),(0,a.kt)("h2",{id:"sharing-a-plugin"},"Sharing a plugin"),(0,a.kt)("p",null,"Because a plugin is just a directory in a repo, sharing plugins is super easy."),(0,a.kt)("p",null,"You can either a single plugin in a repo, like ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bduffany/go-highlight"},"this")," or host multiple plugins in a repo like ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/plugins"},"this"),"."),(0,a.kt)("p",null,"For single plugin repos, others can install your plugin with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"bb install your-username/your-repo\n")),(0,a.kt)("p",null,"For multi plugin repos, others can install your plugin with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"bb install your-username/your-repo:path-to-repo\n")),(0,a.kt)("p",null,"If you want to share your plugin with the wider BuildBuddy community, you can submit it to our plugin library ",(0,a.kt)("a",{parentName:"p",href:"/plugins#share"},"here"),"."),(0,a.kt)("h2",{id:"uninstalling-a-plugin"},"Uninstalling a plugin"),(0,a.kt)("p",null,"You can uninstall a plugin at any time by removing it from the ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins:")," block of your ",(0,a.kt)("inlineCode",{parentName:"p"},"buildbuddy.yaml")," file."))}m.isMDXComponent=!0}}]);