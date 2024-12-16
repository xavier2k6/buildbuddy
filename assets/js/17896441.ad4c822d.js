"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[8401],{7601:(e,t,s)=>{s.r(t),s.d(t,{default:()=>ae});var n=s(96540),a=s(41408),i=s(41155),o=s(74848);const l=n.createContext(null);function r(e){let{children:t,content:s}=e;const a=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(s);return(0,o.jsx)(l.Provider,{value:a,children:t})}function c(){const e=(0,n.useContext)(l);if(null===e)throw new i.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:s}=c();return(0,o.jsx)(a.be,{title:e.title,description:e.description,keywords:t.keywords,image:s.image??t.image})}var u=s(34164),m=s(87348),h=s(49170),b=s(24495);function x(e){const{previous:t,next:s}=e;return(0,o.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,o.jsx)(b.A,{...t,subLabel:(0,o.jsx)(h.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),s&&(0,o.jsx)(b.A,{...s,subLabel:(0,o.jsx)(h.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function p(){const{metadata:e}=c();return(0,o.jsx)(x,{previous:e.previous,next:e.next})}var v=s(66707),g=s(491),j=s(22237),f=s(97450),_=s(55317),A=s(79188);const N={unreleased:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,o.jsx)(h.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,o.jsx)("b",{children:s.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,o.jsx)(h.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,o.jsx)("b",{children:s.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function C(e){const t=N[e.versionMetadata.banner];return(0,o.jsx)(t,{...e})}function L(e){let{versionLabel:t,to:s,onClick:n}=e;return(0,o.jsx)(h.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,o.jsx)("b",{children:(0,o.jsx)(g.A,{to:s,onClick:n,children:(0,o.jsx)(h.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function T(e){let{className:t,versionMetadata:s}=e;const{siteConfig:{title:n}}=(0,v.A)(),{pluginId:a}=(0,j.vT)({failfast:!0}),{savePreferredVersionName:i}=(0,_.g1)(a),{latestDocSuggestion:l,latestVersionSuggestion:r}=(0,j.HW)(a),c=l??(d=r).docs.find((e=>e.id===d.mainDocId));var d;return(0,o.jsxs)("div",{className:(0,u.A)(t,f.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,o.jsx)("div",{children:(0,o.jsx)(C,{siteTitle:n,versionMetadata:s})}),(0,o.jsx)("div",{className:"margin-top--md",children:(0,o.jsx)(L,{versionLabel:r.label,to:c.path,onClick:()=>i(r.name)})})]})}function k(e){let{className:t}=e;const s=(0,A.r)();return s.banner?(0,o.jsx)(T,{className:t,versionMetadata:s}):null}function M(e){let{className:t}=e;const s=(0,A.r)();return s.badge?(0,o.jsx)("span",{className:(0,u.A)(t,f.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,o.jsx)(h.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:s.label},children:"Version: {versionLabel}"})}):null}var w=s(48552),y=s(30463);function B(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:s,lastUpdatedBy:n,tags:a}=e,i=a.length>0,l=!!(t||s||n);return i||l?(0,o.jsxs)("footer",{className:(0,u.A)(f.G.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,o.jsx)("div",{className:(0,u.A)("row margin-top--sm",f.G.docs.docFooterTagsRow),children:(0,o.jsx)("div",{className:"col",children:(0,o.jsx)(w.A,{tags:a})})}),l&&(0,o.jsx)(y.A,{className:(0,u.A)("margin-top--sm",f.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:s,lastUpdatedBy:n})]}):null}var I=s(11801),V=s(10825);const H={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function E(e){let{collapsed:t,...s}=e;return(0,o.jsx)("button",{type:"button",...s,className:(0,u.A)("clean-btn",H.tocCollapsibleButton,!t&&H.tocCollapsibleButtonExpanded,s.className),children:(0,o.jsx)(h.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const G={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function P(e){let{toc:t,className:s,minHeadingLevel:n,maxHeadingLevel:a}=e;const{collapsed:i,toggleCollapsed:l}=(0,I.u)({initialState:!0});return(0,o.jsxs)("div",{className:(0,u.A)(G.tocCollapsible,!i&&G.tocCollapsibleExpanded,s),children:[(0,o.jsx)(E,{collapsed:i,onClick:l}),(0,o.jsx)(I.N,{lazy:!0,className:G.tocCollapsibleContent,collapsed:i,children:(0,o.jsx)(V.A,{toc:t,minHeadingLevel:n,maxHeadingLevel:a})})]})}const F={tocMobile:"tocMobile_ITEo"};function R(){const{toc:e,frontMatter:t}=c();return(0,o.jsx)(P,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.A)(f.G.docs.docTocMobile,F.tocMobile)})}var D=s(12554);function S(){const{toc:e,frontMatter:t}=c();return(0,o.jsx)(D.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:f.G.docs.docTocDesktop})}var U=s(76538),O=s(63127);function W(e){let{children:t}=e;const s=function(){const{metadata:e,frontMatter:t,contentTitle:s}=c();return t.hide_title||void 0!==s?null:e.title}();return(0,o.jsxs)("div",{className:(0,u.A)(f.G.docs.docMarkdown,"markdown"),children:[s&&(0,o.jsx)("header",{children:(0,o.jsx)(U.A,{as:"h1",children:s})}),(0,o.jsx)(O.A,{children:t})]})}var z=s(10929),Q=s(36896),X=s(70760);function Y(e){return(0,o.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,o.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const Z={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function $(){const e=(0,X.Ay)("/");return(0,o.jsx)("li",{className:"breadcrumbs__item",children:(0,o.jsx)(g.A,{"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,o.jsx)(Y,{className:Z.breadcrumbHomeIcon})})})}const q={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function J(e){let{children:t,href:s,isLast:n}=e;const a="breadcrumbs__link";return n?(0,o.jsx)("span",{className:a,itemProp:"name",children:t}):s?(0,o.jsx)(g.A,{className:a,href:s,itemProp:"item",children:(0,o.jsx)("span",{itemProp:"name",children:t})}):(0,o.jsx)("span",{className:a,children:t})}function K(e){let{children:t,active:s,index:n,addMicrodata:a}=e;return(0,o.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.A)("breadcrumbs__item",{"breadcrumbs__item--active":s}),children:[t,(0,o.jsx)("meta",{itemProp:"position",content:String(n+1)})]})}function ee(){const e=(0,z.OF)(),t=(0,Q.Dt)();return e?(0,o.jsx)("nav",{className:(0,u.A)(f.G.docs.docBreadcrumbs,q.breadcrumbsContainer),"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,o.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,o.jsx)($,{}),e.map(((t,s)=>{const n=s===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,o.jsx)(K,{active:n,index:s,addMicrodata:!!a,children:(0,o.jsx)(J,{href:a,isLast:n,children:t.label})},s)}))]})}):null}var te=s(70045);const se={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function ne(e){let{children:t}=e;const s=function(){const{frontMatter:e,toc:t}=c(),s=(0,m.l)(),n=e.hide_table_of_contents,a=!n&&t.length>0;return{hidden:n,mobile:a?(0,o.jsx)(R,{}):void 0,desktop:!a||"desktop"!==s&&"ssr"!==s?void 0:(0,o.jsx)(S,{})}}(),{metadata:n}=c();return(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:(0,u.A)("col",!s.hidden&&se.docItemCol),children:[(0,o.jsx)(te.A,{metadata:n}),(0,o.jsx)(k,{}),(0,o.jsxs)("div",{className:se.docItemContainer,children:[(0,o.jsxs)("article",{children:[(0,o.jsx)(ee,{}),(0,o.jsx)(M,{}),s.mobile,(0,o.jsx)(W,{children:t}),(0,o.jsx)(B,{})]}),(0,o.jsx)(p,{})]})]}),s.desktop&&(0,o.jsx)("div",{className:"col col--3",children:s.desktop})]})}function ae(e){const t=`docs-doc-id-${e.content.metadata.id}`,s=e.content;return(0,o.jsx)(r,{content:e.content,children:(0,o.jsxs)(a.e3,{className:t,children:[(0,o.jsx)(d,{}),(0,o.jsx)(ne,{children:(0,o.jsx)(s,{})})]})})}},24495:(e,t,s)=>{s.d(t,{A:()=>o});s(96540);var n=s(34164),a=s(491),i=s(74848);function o(e){const{permalink:t,title:s,subLabel:o,isNext:l}=e;return(0,i.jsxs)(a.A,{className:(0,n.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[o&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:o}),(0,i.jsx)("div",{className:"pagination-nav__label",children:s})]})}},48552:(e,t,s)=>{s.d(t,{A:()=>d});s(96540);var n=s(34164),a=s(49170),i=s(491);const o={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var l=s(74848);function r(e){let{permalink:t,label:s,count:a,description:r}=e;return(0,l.jsxs)(i.A,{href:t,title:r,className:(0,n.A)(o.tag,a?o.tagWithCount:o.tagRegular),children:[s,a&&(0,l.jsx)("span",{children:a})]})}const c={tags:"tags_jXut",tag:"tag_QGVx"};function d(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(a.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,n.A)(c.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,l.jsx)("li",{className:c.tag,children:(0,l.jsx)(r,{...e})},e.permalink)))})]})}}}]);