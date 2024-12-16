"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[5513],{30463:(e,t,a)=>{a.d(t,{A:()=>h});a(96540);var s=a(34164),l=a(47457),r=a(49170),n=a(97450),i=a(80843),o=a(74848);function d(e){let{lastUpdatedAt:t}=e;const a=new Date(t),s=(0,i.i)({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(a);return(0,o.jsx)(r.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,o.jsx)("b",{children:(0,o.jsx)("time",{dateTime:a.toISOString(),itemProp:"dateModified",children:s})})},children:" on {date}"})}function c(e){let{lastUpdatedBy:t}=e;return(0,o.jsx)(r.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,o.jsx)("b",{children:t})},children:" by {user}"})}function m(e){let{lastUpdatedAt:t,lastUpdatedBy:a}=e;return(0,o.jsxs)("span",{className:n.G.common.lastUpdated,children:[(0,o.jsx)(r.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,o.jsx)(d,{lastUpdatedAt:t}):"",byUser:a?(0,o.jsx)(c,{lastUpdatedBy:a}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const u={lastUpdated:"lastUpdated_JAkA"};function h(e){let{className:t,editUrl:a,lastUpdatedAt:r,lastUpdatedBy:n}=e;return(0,o.jsxs)("div",{className:(0,s.A)("row",t),children:[(0,o.jsx)("div",{className:"col",children:a&&(0,o.jsx)(l.A,{editUrl:a})}),(0,o.jsx)("div",{className:(0,s.A)("col",u.lastUpdated),children:(r||n)&&(0,o.jsx)(m,{lastUpdatedAt:r,lastUpdatedBy:n})})]})}},47457:(e,t,a)=>{a.d(t,{A:()=>c});a(96540);var s=a(49170),l=a(97450),r=a(491),n=a(34164);const i={iconEdit:"iconEdit_Z9Sw"};var o=a(74848);function d(e){let{className:t,...a}=e;return(0,o.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,n.A)(i.iconEdit,t),"aria-hidden":"true",...a,children:(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function c(e){let{editUrl:t}=e;return(0,o.jsxs)(r.A,{to:t,className:l.G.common.editThisPage,children:[(0,o.jsx)(d,{}),(0,o.jsx)(s.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}},63127:(e,t,a)=>{a.d(t,{A:()=>n});a(96540);var s=a(28453),l=a(90979),r=a(74848);function n(e){let{children:t}=e;return(0,r.jsx)(s.x,{components:l.A,children:t})}},48552:(e,t,a)=>{a.d(t,{A:()=>c});a(96540);var s=a(34164),l=a(49170),r=a(491);const n={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var i=a(74848);function o(e){let{permalink:t,label:a,count:l,description:o}=e;return(0,i.jsxs)(r.A,{href:t,title:o,className:(0,s.A)(n.tag,l?n.tagWithCount:n.tagRegular),children:[a,l&&(0,i.jsx)("span",{children:l})]})}const d={tags:"tags_jXut",tag:"tag_QGVx"};function c(e){let{tags:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(l.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,s.A)(d.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,i.jsx)("li",{className:d.tag,children:(0,i.jsx)(o,{...e})},e.permalink)))})]})}},80843:(e,t,a)=>{a.d(t,{i:()=>l});var s=a(66707);function l(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,s.A)(),a=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,s.A)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:a,...e})}},82238:(e,t,a)=>{a.d(t,{A:()=>i});a(96540);var s=a(34164),l=a(491);const r={sidebar:"sidebar_ycyQ",sidebarItemTitle:"sidebarItemTitle_uR5j",sidebarItemList:"sidebarItemList_TpH3",sidebarItem:"sidebarItem_WWBq",sidebarItemLink:"sidebarItemLink_Hhz8",sidebarItemLinkActive:"sidebarItemLinkActive_OkT7"};var n=a(74848);function i(e){let{sidebar:t}=e;return 0===t.items.length?null:(0,n.jsx)("div",{className:"blog-sidebar",children:(0,n.jsxs)("div",{className:(0,s.A)(r.sidebar,"thin-scrollbar"),children:[(0,n.jsx)("h3",{className:r.sidebarItemTitle,children:t.title}),(0,n.jsx)("ul",{className:r.sidebarItemList,children:t.items.map((e=>(0,n.jsx)("li",{className:r.sidebarItem,children:(0,n.jsx)(l.A,{isNavLink:!0,to:e.permalink,className:r.sidebarItemLink,activeClassName:r.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}},66947:(e,t,a)=>{a.r(t),a.d(t,{default:()=>G});var s=a(96540),l=a(6018),r=a(78561),n=a(34164),i=a(74848);function o(e){let{children:t,className:a}=e;return(0,i.jsx)("article",{className:a,children:t})}var d=a(491);const c={title:"title_f1Hy"};function m(e){let{className:t}=e;const{metadata:a,isBlogPostPage:s}=(0,r.e7)(),{permalink:l,title:o}=a,m=s?"h1":"h2";return(0,i.jsx)(m,{className:(0,n.A)(c.title,t),children:s?o:(0,i.jsx)(d.A,{to:l,children:o})})}var u=a(49170),h=a(66707);const g=["zero","one","two","few","many","other"];function p(e){return g.filter((t=>e.includes(t)))}const x={locale:"en",pluralForms:p(["one","other"]),select:e=>1===e?"one":"other"};function j(){const{i18n:{currentLocale:e}}=(0,h.A)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:p(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),x}}),[e])}function b(){const e=j();return{selectMessage:(t,a)=>function(e,t,a){const s=e.split("|");if(1===s.length)return s[0];s.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const l=a.select(t),r=a.pluralForms.indexOf(l);return s[Math.min(r,s.length-1)]}(a,t,e)}}var f=a(80843);const A={container:"container_mt6G"};function v(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=b();return t=>{const a=Math.ceil(t);return e(a,(0,u.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,i.jsx)(i.Fragment,{children:a(t)})}function N(e){let{date:t,formattedDate:a}=e;return(0,i.jsx)("time",{dateTime:t,children:a})}function T(){return(0,i.jsx)(i.Fragment,{children:" \xb7 "})}function w(e){let{className:t}=e;const{metadata:a}=(0,r.e7)(),{date:s,readingTime:l}=a,o=(0,f.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,i.jsxs)("div",{className:(0,n.A)(A.container,"margin-vert--md",t),children:[(0,i.jsx)(N,{date:s,formattedDate:(d=s,o.format(new Date(d)))}),void 0!==l&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(T,{}),(0,i.jsx)(v,{readingTime:l})]})]});var d}var U=a(51259);const y={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function k(e){let{className:t}=e;const{metadata:{authors:a},assets:s}=(0,r.e7)();if(0===a.length)return null;const l=a.every((e=>{let{name:t}=e;return!t})),o=1===a.length;return(0,i.jsx)("div",{className:(0,n.A)("margin-top--md margin-bottom--sm",l?y.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,i.jsx)("div",{className:(0,n.A)(!l&&(o?"col col--12":"col col--6"),l?y.imageOnlyAuthorCol:y.authorCol),children:(0,i.jsx)(U.A,{author:{...e,imageURL:s.authorsImageUrls[t]??e.imageURL}})},t)))})}function _(){return(0,i.jsxs)("header",{children:[(0,i.jsx)(m,{}),(0,i.jsx)(w,{}),(0,i.jsx)(k,{})]})}var L=a(30309),P=a(63127);function I(e){let{children:t,className:a}=e;const{isBlogPostPage:s}=(0,r.e7)();return(0,i.jsx)("div",{id:s?L.LU:void 0,className:(0,n.A)("markdown",a),children:(0,i.jsx)(P.A,{children:t})})}var C=a(97450),F=a(30463),R=a(48552);function B(){return(0,i.jsx)("b",{children:(0,i.jsx)(u.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function M(e){const{blogPostTitle:t,...a}=e;return(0,i.jsx)(d.A,{"aria-label":(0,u.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,i.jsx)(B,{})})}function O(){const{metadata:e,isBlogPostPage:t}=(0,r.e7)(),{tags:a,title:s,editUrl:l,hasTruncateMarker:o,lastUpdatedBy:d,lastUpdatedAt:c}=e,m=!t&&o,u=a.length>0;if(!(u||m||l))return null;if(t){const e=!!(l||c||d);return(0,i.jsxs)("footer",{className:"docusaurus-mt-lg",children:[u&&(0,i.jsx)("div",{className:(0,n.A)("row","margin-top--sm",C.G.blog.blogFooterEditMetaRow),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(R.A,{tags:a})})}),e&&(0,i.jsx)(F.A,{className:(0,n.A)("margin-top--sm",C.G.blog.blogFooterEditMetaRow),editUrl:l,lastUpdatedAt:c,lastUpdatedBy:d})]})}return(0,i.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[u&&(0,i.jsx)("div",{className:(0,n.A)("col",{"col--9":m}),children:(0,i.jsx)(R.A,{tags:a})}),m&&(0,i.jsx)("div",{className:(0,n.A)("col text--right",{"col--3":u}),children:(0,i.jsx)(M,{blogPostTitle:s,to:e.permalink})})]})}function D(e){let{children:t,className:a}=e;const s=function(){const{isBlogPostPage:e}=(0,r.e7)();return e?void 0:"margin-bottom--xl"}();return(0,i.jsxs)(o,{className:(0,n.A)(s,a),children:[(0,i.jsx)(_,{}),(0,i.jsx)(I,{children:t}),(0,i.jsx)(O,{})]})}var $=a(82238);function E(e){return 1===e?(0,u.T)({id:"theme.blog.post.onePost",description:"Label to describe one blog post",message:"One post"},{count:e}):(0,u.T)({id:"theme.blog.post.nPosts",description:"Label to describe multiple blog posts",message:"{count} posts"},{count:e})}const G=function(e){const{listMetadata:t,items:a,sidebar:s,tag:n}=e,{allTagsPath:o,label:c,count:m}=n;return(0,i.jsx)(l.A,{title:`Posts tagged "${c}"`,description:`Blog | Tagged "${c}"`,wrapperClassName:"blog-wrapper",children:(0,i.jsx)("div",{className:"blog-container margin-vert--lg",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("main",{className:"col col--8",children:[(0,i.jsx)("h1",{children:(0,i.jsx)(u.A,{id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",values:{nPosts:E(m),label:c},children:'{nPosts} tagged with "{label}"'})}),(0,i.jsx)(d.A,{href:o,children:(0,i.jsx)(u.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})}),(0,i.jsx)("div",{className:"margin-vert--xl",children:a.map((e=>{let{content:t}=e;return(0,i.jsx)(r.in,{frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,content:t,truncated:!0,children:(0,i.jsx)(D,{truncated:!0,children:(0,i.jsx)(t,{})})},t.metadata.permalink)}))})]}),(0,i.jsx)("div",{className:"col col--1"}),(0,i.jsx)("div",{className:"col col--3",children:(0,i.jsx)($.A,{sidebar:s})})]})})})}}}]);