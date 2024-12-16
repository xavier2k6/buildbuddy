"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[2660],{24081:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var r=n(99023),i=n(74848),o=n(28453);const a={slug:"customer-managed-encryption-keys",title:"Providing Control Over Cache Encryption",description:"We are announcing a feature that allows customers to control how their data is encrypted in in our cache.",authors:"vadim",date:"2023-06-05:11:00:00",image:"/img/blog/cmek.png",tags:["product","security","encryption","enterprise"]},s=void 0,d={authorsImageUrls:[void 0]},c=[{value:"Encryption model",id:"encryption-model",level:2},{value:"Technical Details",id:"technical-details",level:2}];function l(e){const t={a:"a",h2:"h2",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"BuildBuddy enables fast builds by providing a high-performance cache that stores and serves artifacts, such as the\ninputs and outputs to your build actions."}),"\n",(0,i.jsxs)(t.p,{children:["Starting today, BuildBuddy customers can provide their own encryption keys that will be used to encrypt and decrypt data\nstored in the cache. At launch, we are supporting keys managed by ",(0,i.jsx)(t.a,{href:"https://cloud.google.com/security-key-management",children:"Google Cloud Platform KMS"})," and ",(0,i.jsx)(t.a,{href:"https://aws.amazon.com/kms/",children:"Amazon Web Services KMS"}),"."]}),"\n",(0,i.jsx)(t.p,{children:'To get started, head over to your organization Settings page and look for the "Encryption Keys" tab. Note that these\nsettings are only visible to Organization Administrators.'}),"\n",(0,i.jsxs)(t.p,{children:["For more details, see the ",(0,i.jsx)(t.a,{href:"https://www.buildbuddy.io/docs/cache-encryption-keys",children:"Customer Managed Encryption Keys documentation"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"encryption-model",children:"Encryption model"}),"\n",(0,i.jsxs)(t.p,{children:["We\u2019ve modeled our Customer Managed Encryption Key implementation on Snowflake\u2019s ",(0,i.jsx)(t.a,{href:"https://docs.snowflake.com/en/user-guide/security-encryption-manage#tri-secret-secure",children:"Tri-Secret Secure"})," design."]}),"\n",(0,i.jsx)(t.p,{children:"In this model, the customer-supplied key is combined with a BuildBuddy-maintained key to create a composite master key\nthat is used to protect your BuildBuddy data."}),"\n",(0,i.jsx)(t.p,{children:"If the customer-managed key in the composite master key is revoked, your data can no longer be decrypted by BuildBuddy -\nproviding a level of security and control above BuildBuddy\u2019s standard level of encryption that is controlled by GCP."}),"\n",(0,i.jsx)(t.p,{children:"This dual-key encryption model, together with BuildBuddy\u2019s built-in user authentication enables three levels of data\nprotection."}),"\n",(0,i.jsx)(t.h2,{id:"technical-details",children:"Technical Details"}),"\n",(0,i.jsx)(t.p,{children:"In order to generate the master key, two internal 256-bit symmetric keys are first created. These keys are then\nencrypted by both the customer-supplied key and the BuildBuddy-managed key."}),"\n",(0,i.jsxs)(t.p,{children:["To perform cryptographic operations on data, these two keys are decrypted and passed through the\n",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/HKDF",children:"HKDF-Expand"})," key derivation function to generate a single master key. When cache\nreads and writes are performed, the ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/ChaCha20-Poly1305",children:"XChaCha20-Poly1305"})," algorithm is\nused to encrypt, decrypt and authenticate the data using this master key."]}),"\n",(0,i.jsx)(t.p,{children:"Revocation of either the customer-supplied key or the BuildBuddy-managed key renders previously written artifacts undecryptable."}),"\n",(0,i.jsx)(t.p,{children:"Both the encryption design and source code have been audited by a third party."}),"\n",(0,i.jsxs)(t.p,{children:["If you have any questions or feedback about this feature, please reach out to us on ",(0,i.jsx)(t.a,{href:"https://community.buildbuddy.io/",children:"Slack"}),"\nor at ",(0,i.jsx)(t.a,{href:"mailto:security@buildbuddy.io",children:"security@buildbuddy.io"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var r=n(96540);const i={},o=r.createContext(i);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:t},e.children)}},99023:e=>{e.exports=JSON.parse('{"permalink":"/blog/customer-managed-encryption-keys","editUrl":"https://github.com/buildbuddy-io/buildbuddy/edit/master/website/blog/customer-managed-encryption-keys.md","source":"@site/blog/customer-managed-encryption-keys.md","title":"Providing Control Over Cache Encryption","description":"We are announcing a feature that allows customers to control how their data is encrypted in in our cache.","date":"2023-06-05T11:00:00.000Z","tags":[{"inline":true,"label":"product","permalink":"/blog/tags/product"},{"inline":true,"label":"security","permalink":"/blog/tags/security"},{"inline":true,"label":"encryption","permalink":"/blog/tags/encryption"},{"inline":true,"label":"enterprise","permalink":"/blog/tags/enterprise"}],"readingTime":1.65,"hasTruncateMarker":true,"authors":[{"name":"Vadim Berezniker","title":"Engineer @ BuildBuddy","url":"https://www.linkedin.com/in/vadimberezniker/","imageURL":"https://avatars.githubusercontent.com/u/1335358?v=4","key":"vadim","page":null}],"frontMatter":{"slug":"customer-managed-encryption-keys","title":"Providing Control Over Cache Encryption","description":"We are announcing a feature that allows customers to control how their data is encrypted in in our cache.","authors":"vadim","date":"2023-06-05:11:00:00","image":"/img/blog/cmek.png","tags":["product","security","encryption","enterprise"]},"unlisted":false,"prevItem":{"title":"PostgreSQL Support for BuildBuddy","permalink":"/blog/postgres-support"},"nextItem":{"title":"Buck2 Unboxing","permalink":"/blog/buck2-review"}}')}}]);