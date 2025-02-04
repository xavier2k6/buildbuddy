"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[5119],{99796:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"enterprise-mac-rbe","title":"Enterprise Mac RBE Setup","description":"Deploying Mac executors requires a little extra love since the deployment process can\'t easily be automated via Kubernetes.","source":"@site/../docs/enterprise-mac-rbe.md","sourceDirName":".","slug":"/enterprise-mac-rbe","permalink":"/docs/enterprise-mac-rbe","draft":false,"unlisted":false,"editUrl":"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/enterprise-mac-rbe.md","tags":[],"version":"current","lastUpdatedBy":"Son Luong Ngoc","lastUpdatedAt":1738669309000,"frontMatter":{"id":"enterprise-mac-rbe","title":"Enterprise Mac RBE Setup","sidebar_label":"Enterprise Mac RBE Setup"},"sidebar":"someSidebar","previous":{"title":"Enterprise RBE Setup","permalink":"/docs/enterprise-rbe"},"next":{"title":"Enterprise API","permalink":"/docs/enterprise-api"}}');var l=t(74848),r=t(28453);const s={id:"enterprise-mac-rbe",title:"Enterprise Mac RBE Setup",sidebar_label:"Enterprise Mac RBE Setup"},a=void 0,d={},o=[{value:"Deploying a BuildBuddy cluster",id:"deploying-a-buildbuddy-cluster",level:2},{value:"Mac environment setup",id:"mac-environment-setup",level:2},{value:"Downloading Xcode",id:"downloading-xcode",level:3},{value:"Installing Xcode",id:"installing-xcode",level:3},{value:"Installing Homebrew",id:"installing-homebrew",level:3},{value:"Installing the BuildBuddy Mac executor",id:"installing-the-buildbuddy-mac-executor",level:2},{value:"Download the BuildBuddy executor",id:"download-the-buildbuddy-executor",level:3},{value:"Make the executor executable",id:"make-the-executor-executable",level:3},{value:"Create directories",id:"create-directories",level:3},{value:"Create config file",id:"create-config-file",level:3},{value:"Create a Launch Agent .plist file",id:"create-a-launch-agent-plist-file",level:3},{value:"Update Launch Agent plist permissions",id:"update-launch-agent-plist-permissions",level:3},{value:"Start the Launch Agent",id:"start-the-launch-agent",level:3},{value:"Verify installation",id:"verify-installation",level:3},{value:"Updating",id:"updating",level:2},{value:"Optional setup",id:"optional-setup",level:2},{value:"Optional: Enable Autologin",id:"optional-enable-autologin",level:3},{value:"Optional: Install Java",id:"optional-install-java",level:3},{value:"Optional: Increase the maximum number of open files",id:"optional-increase-the-maximum-number-of-open-files",level:3},{value:"Optional: Log rotation",id:"optional-log-rotation",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"Deploying Mac executors requires a little extra love since the deployment process can't easily be automated via Kubernetes."}),"\n",(0,l.jsx)(n.h2,{id:"deploying-a-buildbuddy-cluster",children:"Deploying a BuildBuddy cluster"}),"\n",(0,l.jsx)(n.p,{children:"First you'll need to deploy the BuildBuddy app which serves the BuildBuddy UI, acts as a scheduler, and handles caching - which we still recommend deploying to a Linux Kubernetes cluster."}),"\n",(0,l.jsxs)(n.p,{children:["You can follow the standard ",(0,l.jsx)(n.a,{href:"/docs/enterprise-rbe",children:"Enterprise RBE Setup"})," instructions to get your cluster up and running."]}),"\n",(0,l.jsx)(n.h2,{id:"mac-environment-setup",children:"Mac environment setup"}),"\n",(0,l.jsx)(n.p,{children:"Once you have a BuildBuddy cluster deployed with RBE enabled, you can start setting up your Mac executors."}),"\n",(0,l.jsx)(n.h3,{id:"downloading-xcode",children:"Downloading Xcode"}),"\n",(0,l.jsxs)(n.p,{children:["When starting with a clean Mac, you'll first need to make sure Xcode is installed. You can download Xcode from ",(0,l.jsx)(n.a,{href:"https://developer.apple.com/download/more/",children:"Apple's Developer Website"})," (you'll need an Apple Developer account)."]}),"\n",(0,l.jsxs)(n.p,{children:["We recommend installing at least Xcode 12.2 (which is the default Xcode version used if no ",(0,l.jsx)(n.code,{children:"--xcode_version"})," Bazel flag is specified)."]}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsx)(n.p,{children:"If installing on many machines, we recommend downloading the Xcode .xip file to a location you control (like a cloud storage bucket) and downloading from there using a simple curl command. This reduces the number of times you have to login to your Apple Developer account."})}),"\n",(0,l.jsx)(n.h3,{id:"installing-xcode",children:"Installing Xcode"}),"\n",(0,l.jsx)(n.p,{children:"Once your .xip file is downloaded, you can expand it with the following command."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"xip --expand Xcode_12.2.xip\n"})}),"\n",(0,l.jsxs)(n.p,{children:["You can then move it to your ",(0,l.jsx)(n.code,{children:"Applications"})," directory with the version number as a suffix (so multiple Xcode versions can be installed together and selected between using the ",(0,l.jsx)(n.code,{children:"--xcode_version"})," Bazel flag)."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"mv Xcode.app /Applications/Xcode_12.2.app\n"})}),"\n",(0,l.jsx)(n.p,{children:"If this is the first Xcode version you're installing, you'll want to select it as your default Xcode version with:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"sudo xcode-select -s /Applications/Xcode_12.2.app\n"})}),"\n",(0,l.jsx)(n.p,{children:"You can then accept the license with:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"sudo xcodebuild -license accept\n"})}),"\n",(0,l.jsx)(n.p,{children:'And run the "first launch" with'}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"sudo xcodebuild -runFirstLaunch\n"})}),"\n",(0,l.jsx)(n.h3,{id:"installing-homebrew",children:"Installing Homebrew"}),"\n",(0,l.jsxs)(n.p,{children:["You'll likely want to install ",(0,l.jsx)(n.a,{href:"https://brew.sh/",children:"Homebrew"})," on your fresh executor to make installing other software easier. You can install it with the following line:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n'})}),"\n",(0,l.jsx)(n.h2,{id:"installing-the-buildbuddy-mac-executor",children:"Installing the BuildBuddy Mac executor"}),"\n",(0,l.jsx)(n.p,{children:"Now that the environment is configured, we can download and install the BuildBuddy Mac executor."}),"\n",(0,l.jsx)(n.h3,{id:"download-the-buildbuddy-executor",children:"Download the BuildBuddy executor"}),"\n",(0,l.jsxs)(n.p,{children:["The BuildBuddy executor binary can be downloaded with (make sure to update the version number to the ",(0,l.jsx)(n.a,{href:"https://github.com/buildbuddy-io/buildbuddy/releases",children:"lastest release"}),"):"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"curl -fSL https://github.com/buildbuddy-io/buildbuddy/releases/download/v2.3.0/executor-enterprise-darwin-amd64 -o buildbuddy-executor\n"})}),"\n",(0,l.jsx)(n.h3,{id:"make-the-executor-executable",children:"Make the executor executable"}),"\n",(0,l.jsx)(n.p,{children:"In order to run the executor binary, we must first make it executable with:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"chmod +x buildbuddy-executor\n"})}),"\n",(0,l.jsx)(n.h3,{id:"create-directories",children:"Create directories"}),"\n",(0,l.jsxs)(n.p,{children:["If you don't already have any launch agents installed, you'll need to make sure the ",(0,l.jsx)(n.code,{children:"~/Library/LaunchAgents/"})," directory exits with:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"mkdir -p ~/Library/LaunchAgents/\n"})}),"\n",(0,l.jsxs)(n.p,{children:["You'll also need a directory to store the executor's disk cache and execution roots. We recommend ",(0,l.jsx)(n.em,{children:"avoiding"})," using the ",(0,l.jsx)(n.code,{children:"/tmp"})," directory since this is periodically cleaned up."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"mkdir -p buildbuddy\n"})}),"\n",(0,l.jsx)(n.h3,{id:"create-config-file",children:"Create config file"}),"\n",(0,l.jsxs)(n.p,{children:["You'll need to create a ",(0,l.jsx)(n.code,{children:"config.yaml"})," with the following contents:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",metastring:'title="config.yaml"',children:'executor:\n  root_directory: "/Users/YOUR_USERNAME/buildbuddy/remote_build"\n  app_target: "grpcs://YOUR_BUILDBUDDY_CLUSTER_URL:443"\n  local_cache_directory: "/Users/YOUR_USERNAME/buildbuddy/filecache"\n  local_cache_size_bytes: 100000000000 # 100GB\n'})}),"\n",(0,l.jsxs)(n.p,{children:["Make sure to replace ",(0,l.jsx)(n.em,{children:"YOUR_USERNAME"})," with your Mac username and ",(0,l.jsx)(n.em,{children:"YOUR_BUILDBUDDY_CLUSTER_URL"})," with the grpc url the BuildBuddy cluster you deployed. If you deployed the cluster without an NGINX Ingress, you'll need to update the protocol to grpc:// and the port to 1985."]}),"\n",(0,l.jsx)(n.h3,{id:"create-a-launch-agent-plist-file",children:"Create a Launch Agent .plist file"}),"\n",(0,l.jsx)(n.p,{children:"Now that everything is in place, we can create a LaunchAgent .plist file that tells Mac OS to keep the executor binary running on launch, and restart it if ever stops."}),"\n",(0,l.jsxs)(n.p,{children:["Make sure to replace ",(0,l.jsx)(n.em,{children:"YOUR_USERNAME"})," with your Mac username and ",(0,l.jsx)(n.em,{children:"YOUR_MACS_NETWORK_ADDRESS"})," with the IP address or DNS name of the Mac."]}),"\n",(0,l.jsxs)(n.p,{children:["You can place this file in ",(0,l.jsx)(n.code,{children:"~/Library/LaunchAgents/buildbuddy-executor.plist"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-xml",metastring:'title="~/Library/LaunchAgents/buildbuddy-executor.plist"',children:'<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>\n<!DOCTYPE plist PUBLIC \\"-//Apple//DTD PLIST 1.0//EN\\" \\"http://www.apple.com/DTDs/PropertyList-1.0.dtd\\">\n<plist version=\\"1.0\\">\n    <dict>\n        <key>Label</key>\n        <string>buildbuddy-executor</string>\n        <key>EnvironmentVariables</key>\n        <dict>\n            <key>MY_HOSTNAME</key>\n            <string>YOUR_MACS_NETWORK_ADDRESS</string>\n            <key>MY_POOL</key>\n            <string></string>\n            <key>PATH</key>\n            <string>/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin</string>\n        </dict>\n        <key>WorkingDirectory</key>\n        <string>/Users/YOUR_USERNAME</string>\n        <key>ProgramArguments</key>\n        <array>\n            <string>./buildbuddy-executor</string>\n            <string>--config_file</string>\n            <string>config.yaml</string>\n        </array>\n        <key>KeepAlive</key>\n        <true/>\n        <key>RunAtLoad</key>\n        <true/>\n        <key>StandardErrorPath</key>\n        <string>/Users/YOUR_USERNAME/buildbuddy_stderr.log</string>\n        <key>StandardOutPath</key>\n        <string>/Users/YOUR_USERNAME/buildbuddy_stdout.log</string>\n    </dict>\n</plist>\n'})}),"\n",(0,l.jsx)(n.h3,{id:"update-launch-agent-plist-permissions",children:"Update Launch Agent plist permissions"}),"\n",(0,l.jsx)(n.p,{children:"You may need to update the file's permissions with:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"chmod 600 ~/Library/LaunchAgents/buildbuddy-executor.plist\n"})}),"\n",(0,l.jsx)(n.h3,{id:"start-the-launch-agent",children:"Start the Launch Agent"}),"\n",(0,l.jsx)(n.p,{children:"You can load the Launch Agent with:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"launchctl load ~/Library/LaunchAgents/buildbuddy-executor.plist\n"})}),"\n",(0,l.jsx)(n.p,{children:"And start it with:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"launchctl start buildbuddy-executor\n"})}),"\n",(0,l.jsx)(n.h3,{id:"verify-installation",children:"Verify installation"}),"\n",(0,l.jsx)(n.p,{children:"You can verify that your BuildBuddy Executor successfully connected to the cluster by live tailing the stdout file:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"tail -f buildbuddy_stdout.log\n"})}),"\n",(0,l.jsx)(n.h2,{id:"updating",children:"Updating"}),"\n",(0,l.jsx)(n.p,{children:"When updating your BuildBuddy Executors, you should restart one executor at a time, waiting for the previous executor to successfully start up before restarting the next. This will ensure that work in flight is successfully rescheduled to another executor."}),"\n",(0,l.jsxs)(n.p,{children:["You can check that an executor has successfully started by checking that its ",(0,l.jsx)(n.code,{children:"readyz"})," endpoint returns the string ",(0,l.jsx)(n.code,{children:"OK"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'if [ "$(curl -s -X GET http://localhost:8080/readyz?server-type=prod-buildbuddy-executor || true)" == "OK" ]; then\n    echo "Executor is ready"\nfi\n'})}),"\n",(0,l.jsx)(n.h2,{id:"optional-setup",children:"Optional setup"}),"\n",(0,l.jsx)(n.h3,{id:"optional-enable-autologin",children:"Optional: Enable Autologin"}),"\n",(0,l.jsx)(n.p,{children:"If your Mac executor restarts for whatever reason, you'll likely want to enable auto login so the executor will reconnect after rebooting instead of getting stuck on a login screen."}),"\n",(0,l.jsxs)(n.p,{children:["There's a convenient ",(0,l.jsx)(n.code,{children:"brew"})," package called ",(0,l.jsx)(n.code,{children:"kcpassword"})," that makes this easy."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'brew tap xfreebird/utils\nbrew install kcpassword\n\nsudo enable_autologin "MY_USER" "MY_PASSWORD"\n'})}),"\n",(0,l.jsx)(n.h3,{id:"optional-install-java",children:"Optional: Install Java"}),"\n",(0,l.jsx)(n.p,{children:"If you're doing a lot of Java builds on your Mac executors that are not fully hermetic (i.e. rely on the system installed Java rather than the remote Java SDK shipped by Bazel), you can install the JDK with:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"brew install --cask adoptopenjdk\n"})}),"\n",(0,l.jsx)(n.h3,{id:"optional-increase-the-maximum-number-of-open-files",children:"Optional: Increase the maximum number of open files"}),"\n",(0,l.jsxs)(n.p,{children:["Some builds will exceed the default maximum number of open files on the Mac executor (which is relatively low). You'll know if you're hitting this limit if you see an error message that looks like ",(0,l.jsx)(n.code,{children:"too many open files in system"}),"."]}),"\n",(0,l.jsx)(n.p,{children:"You can increase this limit by running the following command:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo launchctl limit maxfiles 5000000 5000000\n"})}),"\n",(0,l.jsx)(n.h3,{id:"optional-log-rotation",children:"Optional: Log rotation"}),"\n",(0,l.jsxs)(n.p,{children:["If you find your logs are taking up too much space on disk, you may wish to implement log rotation. For this, we recommend ",(0,l.jsx)(n.code,{children:"multilog"})," from ",(0,l.jsx)(n.code,{children:"daemontools"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"brew install daemontools\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Now that ",(0,l.jsx)(n.code,{children:"multilog"})," is installed, in ",(0,l.jsx)(n.code,{children:"~/Library/LaunchAgents/buildbuddy-executor.plist"})," change:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-xml",metastring:'title="~/Library/LaunchAgents/buildbuddy-executor.plist"',children:"        <key>ProgramArguments</key>\n        <array>\n            <string>./buildbuddy-executor</string>\n            <string>--config_file</string>\n            <string>config.yaml</string>\n        </array>\n"})}),"\n",(0,l.jsx)(n.p,{children:"to:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-xml",metastring:'title="~/Library/LaunchAgents/buildbuddy-executor.plist"',children:"        <key>ProgramArguments</key>\n        <array>\n            <string>bash</string>\n            <string>-c</string>\n            <string><![CDATA[./buildbuddy-executor --config_file config.yaml 2>&1 | /usr/local/bin/multilog t s2147483648 n25 /Users/YOUR_USERNAME/buildbuddy.log]]></string>\n        </array>\n"})}),"\n",(0,l.jsx)(n.p,{children:"and remove:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-xml",metastring:'title="~/Library/LaunchAgents/buildbuddy-executor.plist"',children:"        <key>StandardErrorPath</key>\n        <string>/Users/YOUR_USERNAME/buildbuddy_stderr.log</string>\n        <key>StandardOutPath</key>\n        <string>/Users/YOUR_USERNAME/buildbuddy_stdout.log</string>\n"})}),"\n",(0,l.jsx)(n.p,{children:"This will produce automatically rotated log files with stdout and stderr interleaved. If you wish to preserve the separation of the out and error streams, you may instead use:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-xml",metastring:'title="~/Library/LaunchAgents/buildbuddy-executor.plist"',children:"        <key>ProgramArguments</key>\n        <array>\n            <string>bash</string>\n            <string>-c</string>\n            <string><![CDATA[{ ./buildbuddy-executor --config_file config.yaml 2>&1 1>&3 3>&- | /usr/local/bin/multilog t s2147483648 n25 /Users/YOUR_USERNAME/buildbuddy_stderr.log; } 3>&1 1>&2 | /usr/local/bin/multilog t s2147483648 n25 /Users/YOUR_USERNAME/buildbuddy_stdout.log]]></string>\n        </array>\n"})}),"\n",(0,l.jsxs)(n.p,{children:["for the ",(0,l.jsx)(n.code,{children:"ProgramArguments"}),", though generally this is not recommended, as the streams are more clear when left chronologically interleaved."]}),"\n",(0,l.jsxs)(n.p,{children:["Read more about ",(0,l.jsx)(n.code,{children:"multilog"})," ",(0,l.jsx)(n.a,{href:"https://cr.yp.to/daemontools/multilog.html",children:"here"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(96540);const l={},r=i.createContext(l);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);