"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[2865],{20534:(e,n,t)=>{t.d(n,{A:()=>c});var i=t(96540),r=t(88368),o=t(57794),l=t(42658),s=t(74848);let a={firstName:i.createRef(),lastName:i.createRef(),email:i.createRef(),phone:i.createRef(),linkedin:i.createRef(),github:i.createRef(),blurb:i.createRef(),button:i.createRef()};const c=function(){return(0,s.jsxs)("div",{className:o.A.form,children:[(0,s.jsx)("input",{ref:a.firstName,placeholder:"First name"}),(0,s.jsx)("input",{ref:a.lastName,placeholder:"Last name"}),(0,s.jsx)("input",{ref:a.email,placeholder:"Email address"}),(0,s.jsx)("input",{ref:a.phone,placeholder:"Phone number"}),(0,s.jsx)("input",{ref:a.linkedin,placeholder:"LinkedIn Profile"}),(0,s.jsx)("input",{ref:a.github,placeholder:"Github Profile"}),(0,s.jsx)("textarea",{ref:a.blurb,className:o.A.span2,placeholder:"[Optional] Anything else?"}),(0,s.jsx)("button",{ref:a.button,onClick:()=>function(){if(""==a.firstName.current.value.trim()&&""==a.lastName.current.value.trim()&&""==a.email.current.value.trim()&&""==a.phone.current.value.trim())return;(0,l.A)(`New Job Application!\nURL: ${window.location.href}\nName: ${a.firstName.current.value} ${a.lastName.current.value}\nEmail: ${a.email.current.value}\nPhone: ${a.phone.current.value}\nLinkedIn: ${a.linkedin.current.value}\nGithub: ${a.github.current.value}\nBlurb: ${a.blurb.current.value}`),a.firstName.current.disabled=!0,a.lastName.current.disabled=!0,a.email.current.disabled=!0,a.phone.current.disabled=!0,a.linkedin.current.disabled=!0,a.github.current.disabled=!0,a.blurb.current.disabled=!0,a.button.current.innerText="Application Submitted!",a.button.current.disabled=!0}(),className:`${r.A.button} ${r.A.buttonPrimary} ${o.A.span2}`,children:"Submit Application"})]})}},42658:(e,n,t)=>{function i(e){return fetch(atob("aHR0cHM6Ly9ob29rcy5zbGFjay5jb20vc2VydmljZXMvVE4zMk1ENlRVL0IwMlQ2QUo0M1JEL3dPckNRQUJTQ1BLNTlyem8xUEF5RWV1Yw"),{method:"POST",body:`{"text":"${e.replace(/"/g,'\\"')}"}`})}t.d(n,{A:()=>i})},19420:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"type":"mdx","permalink":"/jobs/solutions-engineer","source":"@site/src/pages/jobs/solutions-engineer.md","title":"Solutions Engineer","description":"Full-Time, San Francisco Bay Area & Remote","frontMatter":{"title":"Solutions Engineer"},"unlisted":false}');var r=t(74848),o=t(28453),l=t(20534);const s={title:"Solutions Engineer"},a="Solutions Engineer",c={},d=[{value:"You will",id:"you-will",level:2},{value:"We&#39;re looking for someone who",id:"were-looking-for-someone-who",level:2},{value:"Who you&#39;ll work with",id:"who-youll-work-with",level:2},{value:"What&#39;s it like to work at BuildBuddy?",id:"whats-it-like-to-work-at-buildbuddy",level:2},{value:"Apply now",id:"apply-now",level:2}];function u(e){const n={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"solutions-engineer",children:"Solutions Engineer"})}),"\n",(0,r.jsx)("div",{className:"pill",children:" Full-Time, San Francisco Bay Area & Remote"}),"\n",(0,r.jsx)(n.p,{children:"BuildBuddy was founded to make developers more productive. Today we're solving a small piece of this problem with an open-core remote build execution platform for Bazel - but our ambitions are much larger. Our mission is to take the world class engineering tools that are only available to employees of large companies and make them available to everyone."}),"\n",(0,r.jsx)(n.p,{children:"This is a unique opportunity to shape the future of how engineers build and test software. You\u2019ll be working directly with engineering organizations developing the most cutting-edge tech."}),"\n",(0,r.jsx)(n.h2,{id:"you-will",children:"You will"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Build a great customer experience for our users (other engineers!)"}),"\n",(0,r.jsx)(n.li,{children:"Define and prioritize product features, goals, roadmap, and strategy based on your frontline knowledge of customer needs"}),"\n",(0,r.jsx)(n.li,{children:"Design, build, test, deploy, and maintain reliable software"}),"\n",(0,r.jsx)(n.li,{children:"Debug complex production issues across the stack"}),"\n",(0,r.jsx)(n.li,{children:"Resolve customer issues via email, Slack, and video conferencing"}),"\n",(0,r.jsx)(n.li,{children:"Become a trusted technical advisor to our customers"}),"\n",(0,r.jsx)(n.li,{children:"Create or update documentation based on customer interactions"}),"\n",(0,r.jsx)(n.li,{children:"Continually research and learn the current and future best practices of using Bazel"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"were-looking-for-someone-who",children:"We're looking for someone who"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Cares deeply about creating the best possible experience for our customers"}),"\n",(0,r.jsx)(n.li,{children:"Can lead technical discussions and help drive technical decisions"}),"\n",(0,r.jsx)(n.li,{children:"Is comfortable with ambiguity and working outside of their comfort zone"}),"\n",(0,r.jsx)(n.li,{children:"Can manage priorities well when there's a lot to be done"}),"\n",(0,r.jsx)(n.li,{children:"Holds yourself and others to a high bar when working with production"}),"\n",(0,r.jsx)(n.li,{children:"Is able to write high quality code in a programming language (e.g. Golang, Typescript)"}),"\n",(0,r.jsx)(n.li,{children:"Has knowledge of DevOps methodologies and appreciates the value technologies like Serverless and Kubernetes bring to the software deployment and development process"}),"\n",(0,r.jsx)(n.li,{children:"Is experienced with build tools and CI/CD."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"who-youll-work-with",children:"Who you'll work with"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Tyler Williams - GitHub: @tylerwilliams, Twitter: @tylerbw"}),"\n",(0,r.jsx)(n.li,{children:"Siggi Simonarson - GitHub: @siggisim, Twitter: @siggi"}),"\n",(0,r.jsx)(n.li,{children:"Brandon Duffany - GitHub: @bduffany, Twitter: @brandon_duffany"}),"\n",(0,r.jsx)(n.li,{children:"Vadim Berezniker - GitHub: @vadimberezniker"}),"\n",(0,r.jsxs)(n.li,{children:["And the rest of the ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"/team",children:"team here"})})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"whats-it-like-to-work-at-buildbuddy",children:"What's it like to work at BuildBuddy?"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"We're a small team of builders that value getting things done over busywork"}),"\n",(0,r.jsx)(n.li,{children:"We value curiosity and encourage employees to contribute to open source projects"}),"\n",(0,r.jsx)(n.li,{children:"We aim to create a warm & welcoming work environment"}),"\n",(0,r.jsx)(n.li,{children:"We treat our coworkers well, and offer platinum health benefits at no cost to employees"}),"\n",(0,r.jsx)(n.li,{children:"We offer generous equity & comp packages, and reward those that help the company grow"}),"\n",(0,r.jsx)(n.li,{children:"We work remotely, but are loosely based out of the San Francisco Bay Area"}),"\n",(0,r.jsx)(n.li,{children:"We get together in-person about twice a year for a company-wide offsite"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"apply-now",children:"Apply now"}),"\n",(0,r.jsx)(l.A,{})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},88368:(e,n,t)=>{t.d(n,{A:()=>i});const i={page:"page_piww",section:"section__3bA",sectionDark:"sectionDark_KAsb",sectionGray:"sectionGray_SixO",sectionRounded:"sectionRounded_VQHU",sectionLessBottom:"sectionLessBottom_QqRu",container:"container_tgP7",splitContainer:"splitContainer_VmcT",title:"title_frhT",subtitle:"subtitle_DVvy",pillTitle:"pillTitle_HzMn",text:"text_UbJI",centeredText:"centeredText_vse1",button:"button_YvcK",buttonPrimary:"buttonPrimary_kGIc",buttonGradient:"buttonGradient_AiLM",spacer:"spacer_SqUp"}},57794:(e,n,t)=>{t.d(n,{A:()=>i});const i={form:"form_AMSB",contactMethods:"contactMethods_hl2S",span2:"span2_l9k5"}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>s});var i=t(96540);const r={},o=i.createContext(r);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);