(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[1120],{45294:(e,t,i)=>{e.exports={src:{srcSet:i.p+"assets/ideal-img/soc2.475edac.224.jpg 224w",images:[{path:i.p+"assets/ideal-img/soc2.475edac.224.jpg",width:224,height:223}],src:i.p+"assets/ideal-img/soc2.475edac.224.jpg",toString:function(){return i.p+"assets/ideal-img/soc2.475edac.224.jpg"},placeholder:void 0,width:224,height:223},preSrc:"data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQYH/8QAJhAAAQMBCAEFAAAAAAAAAAAAAQIDBAUABhESEyEjMVEHFBciJf/EABQBAQAAAAAAAAAAAAAAAAAAAAX/xAAfEQACAQIHAAAAAAAAAAAAAAABAwIAIQQFESJhcaH/2gAMAwEAAhEDEQA/AFKvWKjVLzTZE+TMadYfWhCG3i3pAHbKB1a2p9+L0+wjfniTxJ5i0eTYfbbz3Y/1Qix/kOGnQayvFnUGQYLxVgcfONtmSA2kIbAQhIypSnYADoAWcxjYRWsmAOvlAZcqZazebW75r//Z"}},29195:(e,t,i)=>{"use strict";i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>u});const a=JSON.parse('{"type":"mdx","permalink":"/security","source":"@site/src/pages/security.mdx","title":"Security & Data Privacy","description":"Updated January 13, 2022","frontMatter":{"title":"Security & Data Privacy"},"unlisted":false}');var n=i(74848),s=i(28453),o=i(37416);const r={title:"Security & Data Privacy"},d="Security & Data Privacy",c={},u=[{value:"Compliance",id:"compliance",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Data encryption",id:"data-encryption",level:2},{value:"Web application security",id:"web-application-security",level:2},{value:"Usage data",id:"usage-data",level:2},{value:"Data deletion",id:"data-deletion",level:2},{value:"Security updates",id:"security-updates",level:2},{value:"Questions",id:"questions",level:2}];function l(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"security--data-privacy",children:"Security & Data Privacy"})}),"\n",(0,n.jsx)("div",{className:"pill",children:"Updated January 13, 2022"}),"\n",(0,n.jsx)(t.p,{children:"Security and data privacy are top priorities of ours. We go through great lengths to make sure build events sent to BuildBuddy Cloud are secured and that users have full control over their data."}),"\n",(0,n.jsx)(t.p,{children:"For companies & users that want full control over their BuildBuddy instance - we offer a self hosted on-prem version of BuildBuddy."}),"\n",(0,n.jsx)(t.h2,{id:"compliance",children:"Compliance"}),"\n",(0,n.jsx)(t.p,{children:"BuildBuddy continues to invest in security best practices and pursue security certifications that matter to our customers. We are proud to announce that we've achieved SOC 2 for our BuildBuddy Cloud service and undergo annual penetration tests by independent third-party security researchers."}),"\n",(0,n.jsx)("center",{children:(0,n.jsx)(o.A,{img:i(45294),style:{maxWidth:"224px"}})}),"\n",(0,n.jsx)(t.h2,{id:"authentication",children:"Authentication"}),"\n",(0,n.jsx)(t.p,{children:"BuildBuddy supports the OpenID Connect and SAML authentication standards which integrates with most major authentication providers including Google Auth, Okta, Auth0, and others. Authenticated build logs are be viewable to you and to members of your organization by default."}),"\n",(0,n.jsx)(t.p,{children:'If you choose to use BuildBuddy without authentication ("anonymous mode") - invocations will be hosted on Google photos-style publicly accessible URLs.'}),"\n",(0,n.jsx)(t.h2,{id:"data-encryption",children:"Data encryption"}),"\n",(0,n.jsx)(t.p,{children:"We store build logs in Google Cloud Storage, and metadata in Google Cloud SQL which are both encrypted at rest."}),"\n",(0,n.jsx)(t.p,{children:"We implement gRPCS (gRPC with SSL/TLS) which encrypts build events as they travel between Bazel and Google Cloud Platform GFEs. Once build events hit a GFE - communication between services is encrypted through ATLS."}),"\n",(0,n.jsx)(t.p,{children:"Together, this means that your build events & artifacts are encrypted both in transit and at rest."}),"\n",(0,n.jsx)(t.h2,{id:"web-application-security",children:"Web application security"}),"\n",(0,n.jsx)(t.p,{children:"We follow best security practices to prevent XSS attacks - we don't generate HTML by hand and use React/JSX which escapes values before rendering them to prevent these types of attacks."}),"\n",(0,n.jsx)(t.p,{children:"We forbid the use of features that could expose us to XSS vulnerabilities like dangerouslySetInnerHTML and eval. We also use HttpOnly cookies as an extra layer of protection against XSS."}),"\n",(0,n.jsx)(t.p,{children:"When it comes to XSRF/CSRF attacks - we use SameSite cookies to mitigate this attack vector."}),"\n",(0,n.jsx)(t.h2,{id:"usage-data",children:"Usage data"}),"\n",(0,n.jsx)(t.p,{children:"Pseudonymized usage data is gathered by a BuildBuddy service and a third-party service (Google Analytics) about how users are using the BuildBuddy product and how well it is performing."}),"\n",(0,n.jsxs)(t.p,{children:["This data is analyzed and used to improve the BuildBuddy product. Administrators can disable these services for their instance by contacting ",(0,n.jsx)(t.a,{href:"mailto:support@buildbuddy.io",children:"support@buildbuddy.io"}),". It may include pseudonymized data regarding any interaction you have with the site or platform, such as which functionalities are used and the frequency of use."]}),"\n",(0,n.jsx)(t.h2,{id:"data-deletion",children:"Data deletion"}),"\n",(0,n.jsx)(t.p,{children:"Build logs are retained for a minimum period of time based on your plan. Beyond that minimum retention period, we periodically delete build logs to protect your privacy and to maintain reasonable resource requirements."}),"\n",(0,n.jsxs)(t.p,{children:["If you'd like your BuildBuddy data to be deleted for any reason - don't hesitate to contact us at ",(0,n.jsx)(t.a,{href:"mailto:data-defenders@buildbuddy.io",children:"data-defenders@buildbuddy.io"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"security-updates",children:"Security updates"}),"\n",(0,n.jsx)(t.p,{children:"Security updates address newly discovered attacks reported to Iteration, Inc. by the security research community. Disclosures are made confidentially, under the BuildBuddy responsible disclosure policy, allowing for Iteration, Inc. to provide security updates to the community prior to public disclosure."}),"\n",(0,n.jsx)(t.p,{children:"For more information, please see:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"/security-updates",children:"BuildBuddy Security Updates"})}),(0,n.jsx)("br",{}),"\nA summary of security updates made based on past and on-going security analysis and penetration testing."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"/security-vulnerability-report",children:"BuildBuddy Responsible Disclosure Policy"})}),(0,n.jsx)("br",{}),"\nAn overview of how security issues are confidentially reported to and addressed by Iteration, Inc."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"questions",children:"Questions"}),"\n",(0,n.jsxs)(t.p,{children:["Have a question about how BuildBuddy handles security or data privacy?\nEmail us at ",(0,n.jsx)(t.a,{href:"mailto:data-defenders@buildbuddy.io",children:"data-defenders@buildbuddy.io"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,i)=>{"use strict";i.d(t,{R:()=>o,x:()=>r});var a=i(96540);const n={},s=a.createContext(n);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);