"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[5845],{11829:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"cache-encryption-keys","title":"Customer-managed Encryption Keys","description":"BuildBuddy allows you to provide a managed key to be used to encrypt cache artifacts at rest.","source":"@site/../docs/cache-encryption-keys.md","sourceDirName":".","slug":"/cache-encryption-keys","permalink":"/docs/cache-encryption-keys","draft":false,"unlisted":false,"editUrl":"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/cache-encryption-keys.md","tags":[],"version":"current","lastUpdatedBy":"Brandon Duffany","lastUpdatedAt":1738767035000,"frontMatter":{"id":"cache-encryption-keys","title":"Customer-managed Encryption Keys","sidebar_label":"Customer-managed Encryption Keys"},"sidebar":"someSidebar","previous":{"title":"Build Metadata Guide","permalink":"/docs/guide-metadata"},"next":{"title":"Remote Build Execution","permalink":"/docs/remote-build-execution"}}');var r=t(74848),s=t(28453);const o={id:"cache-encryption-keys",title:"Customer-managed Encryption Keys",sidebar_label:"Customer-managed Encryption Keys"},d=void 0,a={},c=[{value:"Key permissions",id:"key-permissions",level:2},{value:"Google Cloud Platform (GCP)",id:"google-cloud-platform-gcp",level:3},{value:"Amazon Web Services (AWS)",id:"amazon-web-services-aws",level:3},{value:"Considerations",id:"considerations",level:2},{value:"Implementation details",id:"implementation-details",level:2},{value:"Key management",id:"key-management",level:3},{value:"Content encryption and decryption",id:"content-encryption-and-decryption",level:3}];function l(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"BuildBuddy allows you to provide a managed key to be used to encrypt cache artifacts at rest."}),"\n",(0,r.jsx)(n.p,{children:"BuildBuddy currently supports encryption keys stored in Google Cloud Platform (GCP) KMS or Amazon Web Services (AWS) KMS."}),"\n",(0,r.jsx)(n.p,{children:'To get started, open the organization settings page and navigate to the "Encryption keys" tab.'}),"\n",(0,r.jsx)(n.p,{children:"Only organization administrators may change the encryption settings."}),"\n",(0,r.jsx)(n.h2,{id:"key-permissions",children:"Key permissions"}),"\n",(0,r.jsx)(n.h3,{id:"google-cloud-platform-gcp",children:"Google Cloud Platform (GCP)"}),"\n",(0,r.jsxs)(n.p,{children:["BuildBuddy infrastructure will access the supplied key using the ",(0,r.jsx)(n.code,{children:"kms-prod@flame-build.iam.gserviceaccount.com"}),"\nservice account. You must grant this service account permissions to use the supplied key. At a minimum, the service\naccount must be granted both of the following IAM permissions:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cloudkms.cryptoKeyVersions.useToEncrypt\ncloudkms.cryptoKeyVersions.useToDecrypt\n"})}),"\n",(0,r.jsxs)(n.p,{children:["These permissions are available as part of the ",(0,r.jsx)(n.code,{children:"Cloud KMS CryptoKey Encrypter/Decrypter"})," predefined IAM role."]}),"\n",(0,r.jsx)(n.h3,{id:"amazon-web-services-aws",children:"Amazon Web Services (AWS)"}),"\n",(0,r.jsxs)(n.p,{children:["BuildBuddy infrastructure will access the supplied key using a BuildBuddy owned user in account ",(0,r.jsx)(n.code,{children:"561871016185"}),". You must\ngrant this AWS account access to the supplied key."]}),"\n",(0,r.jsx)(n.h2,{id:"considerations",children:"Considerations"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'When enabling or disabling customer-managed encryption keys, it may take up to 10 minutes for the change to propagate\nthrough the system. If there are active builds during this window, they may experience "not found" errors while the\nchange propagates.'}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Artifacts written prior to enabling this feature will not be retroactively encrypted using the new key, but will\nbecome effectively inaccessible and will be evicted from the cache as part of the regular cache lifecycle."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The key used for encryption and decryption may be cached in memory by the BuildBuddy infrastructure for up to 10\nminutes for performance reasons."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The customer-managed key may be rotated. During rotation, the old key material must remain accessible for at least 24\nhours."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,r.jsx)(n.h3,{id:"key-management",children:"Key management"}),"\n",(0,r.jsx)(n.p,{children:'When the feature is enabled, two internal 256-bit keys are generated by BuildBuddy. The first being the "Customer Key"\nand the second being the "BuildBuddy Key". Before being stored within BuildBuddy systems, the Customer Key is encrypted\nusing the customer supplied key and the BuildBuddy Key is encrypted using a BuildBuddy managed key.'}),"\n",(0,r.jsx)(n.p,{children:'To perform encryption or decryption, a third 256-bit key ("Derived Key") is obtained by decrypting the Customer Key and\nthe BuildBuddy key and feeding their concatenation into HKDF-Expand using a SHA256 hash.'}),"\n",(0,r.jsx)(n.p,{children:"During operation, the Derived Key may be cached in memory by BuildBuddy systems for up to 10 minutes for performance\nreasons."}),"\n",(0,r.jsx)(n.p,{children:"If the feature is disabled, the Customer Key and BuildBuddy Key material are immediately deleted. Previously encrypted\ndata will no longer be decryptable after 10 minutes at most, due to temporary in-memory key caching."}),"\n",(0,r.jsx)(n.h3,{id:"content-encryption-and-decryption",children:"Content encryption and decryption"}),"\n",(0,r.jsx)(n.p,{children:"The Derived Key is used to encrypt and decrypt content using the XChaCha20-Poly1305 algorithm."})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var i=t(96540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);