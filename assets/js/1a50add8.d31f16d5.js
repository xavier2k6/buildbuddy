"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[8185],{2223:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"rbe-microvms","title":"RBE with Firecracker MicroVMs","description":"BuildBuddy Cloud has experimental support for running remote build actions","source":"@site/../docs/rbe-microvms.md","sourceDirName":".","slug":"/rbe-microvms","permalink":"/docs/rbe-microvms","draft":false,"unlisted":false,"editUrl":"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/rbe-microvms.md","tags":[],"version":"current","lastUpdatedBy":"Brandon Duffany","lastUpdatedAt":1740605667000,"frontMatter":{"id":"rbe-microvms","title":"RBE with Firecracker MicroVMs","sidebar_label":"RBE with MicroVMs"},"sidebar":"someSidebar","previous":{"title":"RBE Secrets","permalink":"/docs/secrets"},"next":{"title":"RBE with GitHub Actions","permalink":"/docs/rbe-github-actions"}}');var r=t(74848),i=t(28453);const o={id:"rbe-microvms",title:"RBE with Firecracker MicroVMs",sidebar_label:"RBE with MicroVMs"},c=void 0,a={},d=[{value:"BUILD configuration",id:"build-configuration",level:2},{value:"Preserving microVM state across actions",id:"preserving-microvm-state-across-actions",level:2},{value:"Using custom images",id:"using-custom-images",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["BuildBuddy Cloud has experimental support for running remote build actions\nwithin ",(0,r.jsx)(n.a,{href:"https://github.com/firecracker-microvm/firecracker",children:"Firecracker microVMs"}),",\nwhich are lightweight VMs that are optimized for fast startup time."]}),"\n",(0,r.jsx)(n.p,{children:"MicroVMs remove some of the restrictions imposed by the default Docker\ncontainer-based Linux execution environment. In particular, microVMs can\nbe used to run Docker, which means that actions run on BuildBuddy can\nspawn Docker containers in order to easily run apps that require lots of\nsystem dependencies, such as MySQL server."}),"\n",(0,r.jsx)(n.h2,{id:"build-configuration",children:"BUILD configuration"}),"\n",(0,r.jsx)(n.p,{children:"Let's say we have a BUILD file like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:'title="BUILD"',children:'sh_test(\n    name = "docker_test",\n    srcs = ["docker_test.sh"],\n)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["And an executable shell script ",(0,r.jsx)(n.code,{children:"docker_test.sh"})," that looks like this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"docker run --rm ubuntu:20.04 echo 'PASS' || exit 1\n"})}),"\n",(0,r.jsx)(n.p,{children:"This test would normally fail when run using BuildBuddy's shared Linux\nexecutors, since running Docker inside RBE actions is only supported when\nusing self-hosted executors."}),"\n",(0,r.jsxs)(n.p,{children:["But we can instead run this test using ",(0,r.jsx)(n.strong,{children:"Docker-in-Firecracker"})," by\nadding a few ",(0,r.jsx)(n.code,{children:"exec_properties"})," to the test runner action:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:'title="BUILD"',children:'sh_test(\n    name = "docker_test",\n    srcs = ["docker_test.sh"],\n    exec_properties = {\n        # Tell BuildBuddy to run this test using a Firecracker microVM.\n        "test.workload-isolation-type": "firecracker",\n        # Tell BuildBuddy to ensure that the Docker daemon is started\n        # inside the microVM before the test starts, so that we don\'t\n        # have to worry about starting it ourselves.\n        "test.init-dockerd": "true",\n    },\n)\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"test."})," prefix on the ",(0,r.jsx)(n.code,{children:"exec_properties"})," keys ensures that the\nproperties are only applied to the action that actually runs the test,\nand not the actions which are building the test code. See\n",(0,r.jsx)(n.a,{href:"https://bazel.build/extending/exec-groups",children:"execution groups"})," for more\ninfo."]})}),"\n",(0,r.jsx)(n.p,{children:"And that's it! This test now works on BuildBuddy's shared Linux executors."}),"\n",(0,r.jsx)(n.p,{children:"However, it's a bit slow. On each action, a fresh microVM is created. This\nis normally fine, because microVMs start up quickly. But the Docker daemon\nalso has to be re-initialized, which takes a few seconds. Worse yet, it\nwill be started from an empty Docker image cache, meaning that any images\nused in the action will need to be downloaded and unpacked from scratch\neach time this action is executed."}),"\n",(0,r.jsx)(n.p,{children:"Fortunately, we can mitigate both of these issues using runner recyling."}),"\n",(0,r.jsx)(n.h2,{id:"preserving-microvm-state-across-actions",children:"Preserving microVM state across actions"}),"\n",(0,r.jsxs)(n.p,{children:["MicroVM state can be preserved across action runs by enabling the\n",(0,r.jsx)(n.code,{children:"recycle-runner"})," exec property:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:'title="BUILD"',children:'sh_test(\n    name = "docker_test",\n    srcs = ["docker_test.sh"],\n    exec_properties = {\n        "test.workload-isolation-type": "firecracker",\n        "test.init-dockerd": "true",\n        # Tell BuildBuddy to preserve the microVM state across test runs.\n        "test.recycle-runner": "true",\n    },\n)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Then, subsequent runs of this test should be able to take advantage of a\nwarm microVM, with Docker already up and running, and the ",(0,r.jsx)(n.code,{children:"ubuntu:20.04"}),"\nimage already cached from when we ran the previous action."]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsx)(n.p,{children:'When using runner recycling, the entire microVM state is preserved\u2014not\njust the disk contents. You can think of it as being put into "sleep mode"\nbetween actions.'}),(0,r.jsx)(n.p,{children:"This means that you can leave Docker containers and other processes\nrunning to be reused by subsequent actions, which is helpful for\neliminating startup costs associated with heavyweight processes."}),(0,r.jsxs)(n.p,{children:["For example, instead of starting MySQL server with ",(0,r.jsx)(n.code,{children:"docker run mysql"})," on\neach test action (which is quite slow), you can leave MySQL server running\nat the end of each test, and instead re-connect to that server during test\nsetup of the next test. You can use ",(0,r.jsx)(n.code,{children:"docker container inspect"})," to see if\nit the server is already running, and SQL queries like ",(0,r.jsx)(n.code,{children:"DROP DATABASE IF EXISTS"}),"\nfollowed by ",(0,r.jsx)(n.code,{children:"CREATE DATABASE"})," to get a clean DB instance."]}),(0,r.jsxs)(n.p,{children:["See\n",(0,r.jsx)(n.a,{href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/server/testutil/testmysql/testmysql.go",children:"BuildBuddy's test MySQL implementation"}),"\nfor an example in Golang."]})]}),"\n",(0,r.jsx)(n.h2,{id:"using-custom-images",children:"Using custom images"}),"\n",(0,r.jsxs)(n.p,{children:["If you are using a custom RBE image, you do not need to do anything\nspecial to make it work with Firecracker. BuildBuddy will automatically\nconvert your Docker image to a disk image compatible with Firecracker. The\n",(0,r.jsx)(n.code,{children:"container-image"})," execution property is specified using the same ",(0,r.jsx)(n.code,{children:"docker://"}),"\nprefix, like: ",(0,r.jsx)(n.code,{children:"docker://some-registry.io/foo/bar"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"To run Docker containers in your microVM (Docker-in-Firecracker), you will\nneed to make sure your container image has Docker installed. BuildBuddy's\ndefault RBE image already has Docker installed, but when using a custom\nimage, you may need to install Docker yourself."}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/engine/install/",children:"Install Docker Engine"})," for\nthe commands that you'll need to add to your Dockerfile in order to\ninstall Docker."]}),"\n",(0,r.jsx)(n.p,{children:"Once you've built your custom image, test that Docker is properly\ninstalled by running:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"docker run --rm -it --privileged --name=docker-test your-image.io/foo dockerd --storage-driver=vfs\n"})}),"\n",(0,r.jsx)(n.p,{children:'Then, once Docker is finished booting up, run the following command\nfrom another terminal. You should see "Hello world!" printed if Docker\nis properly installed:'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'docker exec -it docker-test docker run busybox echo "Hello world!"\n'})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(96540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);