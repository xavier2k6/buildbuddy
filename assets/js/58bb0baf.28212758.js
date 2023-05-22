"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[5259],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,h=c["".concat(u,".").concat(m)]||c[m]||p[m]||l;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93641:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var r=n(83117),a=n(80102),l=(n(67294),n(3905)),i=["components"],o={id:"enterprise-mac-rbe",title:"Enterprise Mac RBE Setup",sidebar_label:"Enterprise Mac RBE Setup"},u=void 0,s={unversionedId:"enterprise-mac-rbe",id:"enterprise-mac-rbe",title:"Enterprise Mac RBE Setup",description:"Deploying Mac executors requires a little extra love since the deployment process can't easily be automated via Kubernetes.",source:"@site/../docs/enterprise-mac-rbe.md",sourceDirName:".",slug:"/enterprise-mac-rbe",permalink:"/docs/enterprise-mac-rbe",draft:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/enterprise-mac-rbe.md",tags:[],version:"current",lastUpdatedBy:"Siggi Simonarson",lastUpdatedAt:1684779481,formattedLastUpdatedAt:"May 22, 2023",frontMatter:{id:"enterprise-mac-rbe",title:"Enterprise Mac RBE Setup",sidebar_label:"Enterprise Mac RBE Setup"},sidebar:"someSidebar",previous:{title:"Enterprise RBE Setup",permalink:"/docs/enterprise-rbe"},next:{title:"Enterprise API",permalink:"/docs/enterprise-api"}},d={},c=[{value:"Deploying a BuildBuddy cluster",id:"deploying-a-buildbuddy-cluster",level:2},{value:"Mac environment setup",id:"mac-environment-setup",level:2},{value:"Downloading Xcode",id:"downloading-xcode",level:3},{value:"Installing Xcode",id:"installing-xcode",level:3},{value:"Installing Homebrew",id:"installing-homebrew",level:3},{value:"Installing the BuildBuddy Mac executor",id:"installing-the-buildbuddy-mac-executor",level:2},{value:"Download the BuildBuddy executor",id:"download-the-buildbuddy-executor",level:3},{value:"Make the executor executable",id:"make-the-executor-executable",level:3},{value:"Create directories",id:"create-directories",level:3},{value:"Create config file",id:"create-config-file",level:3},{value:"Create a Launch Agent .plist file",id:"create-a-launch-agent-plist-file",level:3},{value:"Update Launch Agent plist permissions",id:"update-launch-agent-plist-permissions",level:3},{value:"Start the Launch Agent",id:"start-the-launch-agent",level:3},{value:"Verify installation",id:"verify-installation",level:3},{value:"Updating",id:"updating",level:2},{value:"Optional setup",id:"optional-setup",level:2},{value:"Optional: Enable Autologin",id:"optional-enable-autologin",level:3},{value:"Optional: Install Java",id:"optional-install-java",level:3},{value:"Optional: Increase the maximum number of open files",id:"optional-increase-the-maximum-number-of-open-files",level:3},{value:"Optional: Log rotation",id:"optional-log-rotation",level:3}],p={toc:c},m="wrapper";function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Deploying Mac executors requires a little extra love since the deployment process can't easily be automated via Kubernetes."),(0,l.kt)("h2",{id:"deploying-a-buildbuddy-cluster"},"Deploying a BuildBuddy cluster"),(0,l.kt)("p",null,"First you'll need to deploy the BuildBuddy app which serves the BuildBuddy UI, acts as a scheduler, and handles caching - which we still recommend deploying to a Linux Kubernetes cluster."),(0,l.kt)("p",null,"You can follow the standard ",(0,l.kt)("a",{parentName:"p",href:"/docs/enterprise-rbe"},"Enterprise RBE Setup")," instructions to get your cluster up and running."),(0,l.kt)("h2",{id:"mac-environment-setup"},"Mac environment setup"),(0,l.kt)("p",null,"Once you have a BuildBuddy cluster deployed with RBE enabled, you can start setting up your Mac executors."),(0,l.kt)("h3",{id:"downloading-xcode"},"Downloading Xcode"),(0,l.kt)("p",null,"When starting with a clean Mac, you'll first need to make sure Xcode is installed. You can download Xcode from ",(0,l.kt)("a",{parentName:"p",href:"https://developer.apple.com/download/more/"},"Apple's Developer Website")," (you'll need an Apple Developer account)."),(0,l.kt)("p",null,"We recommend installing at least Xcode 12.2 (which is the default Xcode version used if no ",(0,l.kt)("inlineCode",{parentName:"p"},"--xcode_version")," Bazel flag is specified)."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"If installing on many machines, we recommend downloading the Xcode .xip file to a location you control (like a cloud storage bucket) and downloading from there using a simple curl command. This reduces the number of times you have to login to your Apple Developer account.")),(0,l.kt)("h3",{id:"installing-xcode"},"Installing Xcode"),(0,l.kt)("p",null,"Once your .xip file is downloaded, you can expand it with the following command."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"xip --expand Xcode_12.2.xip\n")),(0,l.kt)("p",null,"You can then move it to your ",(0,l.kt)("inlineCode",{parentName:"p"},"Applications")," directory with the version number as a suffix (so multiple Xcode versions can be installed together and selected between using the ",(0,l.kt)("inlineCode",{parentName:"p"},"--xcode_version")," Bazel flag)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"mv Xcode.app /Applications/Xcode_12.2.app\n")),(0,l.kt)("p",null,"If this is the first Xcode version you're installing, you'll want to select it as your default Xcode version with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"sudo xcode-select -s /Applications/Xcode_12.2.app\n")),(0,l.kt)("p",null,"You can then accept the license with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"sudo xcodebuild -license accept\n")),(0,l.kt)("p",null,'And run the "first launch" with'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"sudo xcodebuild -runFirstLaunch\n")),(0,l.kt)("h3",{id:"installing-homebrew"},"Installing Homebrew"),(0,l.kt)("p",null,"You'll likely want to install ",(0,l.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew")," on your fresh executor to make installing other software easier. You can install it with the following line:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,l.kt)("h2",{id:"installing-the-buildbuddy-mac-executor"},"Installing the BuildBuddy Mac executor"),(0,l.kt)("p",null,"Now that the environment is configured, we can download and install the BuildBuddy Mac executor."),(0,l.kt)("h3",{id:"download-the-buildbuddy-executor"},"Download the BuildBuddy executor"),(0,l.kt)("p",null,"The BuildBuddy executor binary can be downloaded with (make sure to update the version number to the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy/releases"},"lastest release"),"):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"curl -fSL https://github.com/buildbuddy-io/buildbuddy/releases/download/v2.3.0/executor-enterprise-darwin-amd64 -o buildbuddy-executor\n")),(0,l.kt)("h3",{id:"make-the-executor-executable"},"Make the executor executable"),(0,l.kt)("p",null,"In order to run the executor binary, we must first make it executable with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"chmod +x buildbuddy-executor\n")),(0,l.kt)("h3",{id:"create-directories"},"Create directories"),(0,l.kt)("p",null,"If you don't already have any launch agents installed, you'll need to make sure the ",(0,l.kt)("inlineCode",{parentName:"p"},"~/Library/LaunchAgents/")," directory exits with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mkdir -p ~/Library/LaunchAgents/\n")),(0,l.kt)("p",null,"You'll also need a directory to store the executor's disk cache and execution roots. We recommend ",(0,l.kt)("em",{parentName:"p"},"avoiding")," using the ",(0,l.kt)("inlineCode",{parentName:"p"},"/tmp")," directory since this is periodically cleaned up."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mkdir -p buildbuddy\n")),(0,l.kt)("h3",{id:"create-config-file"},"Create config file"),(0,l.kt)("p",null,"You'll need to create a ",(0,l.kt)("inlineCode",{parentName:"p"},"config.yaml")," with the following contents:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'executor:\n  root_directory: "/Users/YOUR_USERNAME/buildbuddy/remote_build"\n  app_target: "grpcs://YOUR_BUILDBUDDY_CLUSTER_URL:443"\n  local_cache_directory: "/Users/YOUR_USERNAME/buildbuddy/filecache"\n  local_cache_size_bytes: 100000000000  # 100GB\n')),(0,l.kt)("p",null,"Make sure to replace ",(0,l.kt)("em",{parentName:"p"},"YOUR_USERNAME")," with your Mac username and ",(0,l.kt)("em",{parentName:"p"},"YOUR_BUILDBUDDY_CLUSTER_URL")," with the grpc url the BuildBuddy cluster you deployed. If you deployed the cluster without an NGINX Ingress, you'll need to update the protocol to grpc:// and the port to 1985."),(0,l.kt)("h3",{id:"create-a-launch-agent-plist-file"},"Create a Launch Agent .plist file"),(0,l.kt)("p",null,"Now that everything is in place, we can create a LaunchAgent .plist file that tells Mac OS to keep the executor binary running on launch, and restart it if ever stops."),(0,l.kt)("p",null,"Make sure to replace ",(0,l.kt)("em",{parentName:"p"},"YOUR_USERNAME")," with your Mac username and ",(0,l.kt)("em",{parentName:"p"},"YOUR_MACS_NETWORK_ADDRESS")," with the IP address or DNS name of the Mac."),(0,l.kt)("p",null,"You can place this file in ",(0,l.kt)("inlineCode",{parentName:"p"},"~/Library/LaunchAgents/buildbuddy-executor.plist"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>\n<!DOCTYPE plist PUBLIC \\"-//Apple//DTD PLIST 1.0//EN\\" \\"http://www.apple.com/DTDs/PropertyList-1.0.dtd\\">\n<plist version=\\"1.0\\">\n    <dict>\n        <key>Label</key>\n        <string>buildbuddy-executor</string>\n        <key>EnvironmentVariables</key>\n        <dict>\n            <key>MY_HOSTNAME</key>\n            <string>YOUR_MACS_NETWORK_ADDRESS</string>\n            <key>MY_POOL</key>\n            <string></string>\n            <key>PATH</key>\n            <string>/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin</string>\n        </dict>\n        <key>WorkingDirectory</key>\n        <string>/Users/YOUR_USERNAME</string>\n        <key>ProgramArguments</key>\n        <array>\n            <string>./buildbuddy-executor</string>\n            <string>--config_file</string>\n            <string>config.yaml</string>\n        </array>\n        <key>KeepAlive</key>\n        <true/>\n        <key>RunAtLoad</key>\n        <true/>\n        <key>StandardErrorPath</key>\n        <string>/Users/YOUR_USERNAME/buildbuddy_stderr.log</string>\n        <key>StandardOutPath</key>\n        <string>/Users/YOUR_USERNAME/buildbuddy_stdout.log</string>\n    </dict>\n</plist>\n')),(0,l.kt)("h3",{id:"update-launch-agent-plist-permissions"},"Update Launch Agent plist permissions"),(0,l.kt)("p",null,"You may need to update the file's permissions with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"chmod 600 ~/Library/LaunchAgents/buildbuddy-executor.plist\n")),(0,l.kt)("h3",{id:"start-the-launch-agent"},"Start the Launch Agent"),(0,l.kt)("p",null,"You can load the Launch Agent with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"launchctl load ~/Library/LaunchAgents/buildbuddy-executor.plist\n")),(0,l.kt)("p",null,"And start it with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"launchctl start buildbuddy-executor\n")),(0,l.kt)("h3",{id:"verify-installation"},"Verify installation"),(0,l.kt)("p",null,"You can verify that your BuildBuddy Executor successfully connected to the cluster by live tailing the stdout file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"tail -f buildbuddy_stdout.log\n")),(0,l.kt)("h2",{id:"updating"},"Updating"),(0,l.kt)("p",null,"When updating your BuildBuddy Executors, you should restart one executor at a time, waiting for the previous executor to successfully start up before restarting the next. This will ensure that work in flight is successfully rescheduled to another executor."),(0,l.kt)("p",null,"You can check that an executor has successfully started by checking that its ",(0,l.kt)("inlineCode",{parentName:"p"},"readyz")," endpoint returns the string ",(0,l.kt)("inlineCode",{parentName:"p"},"OK"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'if [ "$(curl -s -X GET http://localhost:8080/readyz?server-type=prod-buildbuddy-executor || true)" == "OK" ]; then\n    echo "Executor is ready"\nfi\n')),(0,l.kt)("h2",{id:"optional-setup"},"Optional setup"),(0,l.kt)("h3",{id:"optional-enable-autologin"},"Optional: Enable Autologin"),(0,l.kt)("p",null,"If your Mac executor restarts for whatever reason, you'll likely want to enable auto login so the executor will reconnect after rebooting instead of getting stuck on a login screen."),(0,l.kt)("p",null,"There's a convenient ",(0,l.kt)("inlineCode",{parentName:"p"},"brew")," package called ",(0,l.kt)("inlineCode",{parentName:"p"},"kcpassword")," that makes this easy."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'brew tap xfreebird/utils\nbrew install kcpassword\n\nsudo enable_autologin "MY_USER" "MY_PASSWORD"\n')),(0,l.kt)("h3",{id:"optional-install-java"},"Optional: Install Java"),(0,l.kt)("p",null,"If you're doing a lot of Java builds on your Mac executors that are not fully hermetic (i.e. rely on the system installed Java rather than the remote Java SDK shipped by Bazel), you can install the JDK with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"brew install --cask adoptopenjdk\n")),(0,l.kt)("h3",{id:"optional-increase-the-maximum-number-of-open-files"},"Optional: Increase the maximum number of open files"),(0,l.kt)("p",null,"Some builds will exceed the default maximum number of open files on the Mac executor (which is relatively low). You'll know if you're hitting this limit if you see an error message that looks like ",(0,l.kt)("inlineCode",{parentName:"p"},"too many open files in system"),"."),(0,l.kt)("p",null,"You can increase this limit by running the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo launchctl limit maxfiles 5000000 5000000\n")),(0,l.kt)("h3",{id:"optional-log-rotation"},"Optional: Log rotation"),(0,l.kt)("p",null,"If you find your logs are taking up too much space on disk, you may wish to implement log rotation. For this, we recommend ",(0,l.kt)("inlineCode",{parentName:"p"},"multilog")," from ",(0,l.kt)("inlineCode",{parentName:"p"},"daemontools"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"brew install daemontools\n")),(0,l.kt)("p",null,"Now that ",(0,l.kt)("inlineCode",{parentName:"p"},"multilog")," is installed, in ",(0,l.kt)("inlineCode",{parentName:"p"},"~/Library/LaunchAgents/buildbuddy-executor.plist")," change:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"        <key>ProgramArguments</key>\n        <array>\n            <string>./buildbuddy-executor</string>\n            <string>--config_file</string>\n            <string>config.yaml</string>\n        </array>\n")),(0,l.kt)("p",null,"to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"        <key>ProgramArguments</key>\n        <array>\n            <string>bash</string>\n            <string>-c</string>\n            <string><![CDATA[./buildbuddy-executor --config_file config.yaml 2>&1 | /usr/local/bin/multilog t s2147483648 n25 /Users/YOUR_USERNAME/buildbuddy.log]]></string>\n        </array>\n")),(0,l.kt)("p",null,"and remove:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"        <key>StandardErrorPath</key>\n        <string>/Users/YOUR_USERNAME/buildbuddy_stderr.log</string>\n        <key>StandardOutPath</key>\n        <string>/Users/YOUR_USERNAME/buildbuddy_stdout.log</string>\n")),(0,l.kt)("p",null,"This will produce automatically rotated log files with stdout and stderr interleaved. If you wish to preserve the separation of the out and error streams, you may instead use:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"        <key>ProgramArguments</key>\n        <array>\n            <string>bash</string>\n            <string>-c</string>\n            <string><![CDATA[{ ./buildbuddy-executor --config_file config.yaml 2>&1 1>&3 3>&- | /usr/local/bin/multilog t s2147483648 n25 /Users/YOUR_USERNAME/buildbuddy_stderr.log; } 3>&1 1>&2 | /usr/local/bin/multilog t s2147483648 n25 /Users/YOUR_USERNAME/buildbuddy_stdout.log]]></string>\n        </array>\n")),(0,l.kt)("p",null,"for the ",(0,l.kt)("inlineCode",{parentName:"p"},"ProgramArguments"),", though generally this is not recommended, as the streams are more clear when left chronologically interleaved."),(0,l.kt)("p",null,"Read more about ",(0,l.kt)("inlineCode",{parentName:"p"},"multilog")," ",(0,l.kt)("a",{parentName:"p",href:"https://cr.yp.to/daemontools/multilog.html"},"here"),"."))}h.isMDXComponent=!0}}]);