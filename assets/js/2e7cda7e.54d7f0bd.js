"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[5799],{66863:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>t,toc:()=>r});const t=JSON.parse('{"id":"config-ssl","title":"SSL Configuration","description":"Section","source":"@site/../docs/config-ssl.md","sourceDirName":".","slug":"/config-ssl","permalink":"/docs/config-ssl","draft":false,"unlisted":false,"editUrl":"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/config-ssl.md","tags":[],"version":"current","lastUpdatedBy":"Brandon Duffany","lastUpdatedAt":1738698381000,"frontMatter":{"id":"config-ssl","title":"SSL Configuration","sidebar_label":"SSL"},"sidebar":"someSidebar","previous":{"title":"GitHub","permalink":"/docs/config-github"},"next":{"title":"Auth","permalink":"/docs/config-auth"}}');var i=s(74848),c=s(28453);const o={id:"config-ssl",title:"SSL Configuration",sidebar_label:"SSL"},l=void 0,a={},r=[{value:"Section",id:"section",level:2},{value:"Options",id:"options",level:2},{value:"Generating client CA files",id:"generating-client-ca-files",level:2},{value:"Example section",id:"example-section",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"section",children:"Section"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ssl:"})," The SSL section enables SSL/TLS on build event protocol and remote cache gRPC connections (gRPCS). ",(0,i.jsx)(n.strong,{children:"Optional"})]}),"\n",(0,i.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Optional"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"enable_ssl:"})," Whether or not to enable SSL/TLS on gRPC connections (gRPCS)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"use_acme:"})," Whether or not to automatically configure SSL certs using ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Automated_Certificate_Management_Environment",children:"ACME"}),". If ACME is enabled, cert_file and key_file should not be set."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"cert_file:"})," Path to a PEM encoded certificate file to use for TLS if not using ACME."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"key_file:"})," Path to a PEM encoded key file to use for TLS if not using ACME."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"client_ca_cert_file:"})," Path to a PEM encoded certificate authority file used to issue client certificates for mTLS auth."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"client_ca_key_file:"})," Path to a PEM encoded certificate authority key file used to issue client certificates for mTLS auth."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"generating-client-ca-files",children:"Generating client CA files"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'# Change these CN\'s to match your BuildBuddy host name\nSERVER_SUBJECT=buildbuddy.io\nPASS=$(openssl rand -base64 32) # <- Save this :)\n\n# Generates ca.key\nopenssl genrsa -passout pass:${PASS} -des3 -out ca.key 4096\n\n# Generates ca.crt\nopenssl req -passin pass:${PASS} -new -x509 -days 365000 -key ca.key -out ca.crt -subj "/CN=${SERVER_SUBJECT}"\n\n# Generates ca.pem\nopenssl pkcs8 -passin pass:${PASS} -topk8 -nocrypt -in ca.key -out ca.pem\n\n'})}),"\n",(0,i.jsx)(n.h2,{id:"example-section",children:"Example section"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="config.yaml"',children:"ssl:\n  enable_ssl: true\n  use_acme: true\n  client_ca_cert_file: your_ca.crt\n  client_ca_key_file: your_ca.pem\n"})})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var t=s(96540);const i={},c=t.createContext(i);function o(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);