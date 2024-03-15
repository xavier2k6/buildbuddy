"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[8371],{22297:(e,t,a)=>{a.d(t,{Z:()=>m});a(67294);var s=a(76062),i=a(56702),n=a(39415),r=a(86010);const o={iconEdit:"iconEdit_Z9Sw"};var l=a(85893);function d(e){let{className:t,...a}=e;return(0,l.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(o.iconEdit,t),"aria-hidden":"true",...a,children:(0,l.jsx)("g",{children:(0,l.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function m(e){let{editUrl:t}=e;return(0,l.jsxs)(n.Z,{to:t,className:i.k.common.editThisPage,children:[(0,l.jsx)(d,{}),(0,l.jsx)(s.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}},13373:(e,t,a)=>{a.d(t,{Z:()=>r});a(67294);var s=a(86010),i=a(39415),n=a(85893);function r(e){const{permalink:t,title:a,subLabel:r,isNext:o}=e;return(0,n.jsxs)(i.Z,{className:(0,s.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[r&&(0,n.jsx)("div",{className:"pagination-nav__sublabel",children:r}),(0,n.jsx)("div",{className:"pagination-nav__label",children:a})]})}},30057:(e,t,a)=>{a.d(t,{Z:()=>h});a(67294);var s=a(86010),i=a(11151),n=a(76062),r=a(39415),o=a(82472),l=a(168);const d={blogPostTitle:"blogPostTitle_TjLu",blogPostTitleGrid:"blogPostTitleGrid_ezT1",blogPostDate:"blogPostDate_NeIP",blogAuthorTitle:"blogAuthorTitle_Wu85",subtitle:"subtitle_Vf3H",heading:"heading_cWLF",headingPhoto:"headingPhoto_YUAj",avatar:"avatar_ObjT",authorName:"authorName_Xags",tags:"tags_OHNp",tag:"tag_p3At",readMore:"readMore_R7jR",articleGrid:"articleGrid_RoYx"};var m=a(85893);const c=[(0,n.I)({id:"theme.common.month.january",description:"January month translation",message:"January"}),(0,n.I)({id:"theme.common.month.february",description:"February month translation",message:"February"}),(0,n.I)({id:"theme.common.month.march",description:"March month translation",message:"March"}),(0,n.I)({id:"theme.common.month.april",description:"April month translation",message:"April"}),(0,n.I)({id:"theme.common.month.may",description:"May month translation",message:"May"}),(0,n.I)({id:"theme.common.month.june",description:"June month translation",message:"June"}),(0,n.I)({id:"theme.common.month.july",description:"July month translation",message:"July"}),(0,n.I)({id:"theme.common.month.august",description:"August month translation",message:"August"}),(0,n.I)({id:"theme.common.month.september",description:"September month translation",message:"September"}),(0,n.I)({id:"theme.common.month.october",description:"October month translation",message:"October"}),(0,n.I)({id:"theme.common.month.november",description:"November month translation",message:"November"}),(0,n.I)({id:"theme.common.month.december",description:"December month translation",message:"December"})];const h=function(e){const{children:t,frontMatter:a,metadata:h,truncated:g,isBlogPostPage:b=!1}=e,{date:p,permalink:u,tags:x,readingTime:j}=h,{author:v,title:N,subtitle:_,image:I,keywords:T}=a,Z=a.author_url||a.authorURL,k=a.author_title||a.authorTitle,y=a.author_image_url||a.authorImageURL;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l.d,{keywords:T,image:I}),(0,m.jsxs)("article",{className:b?void 0:""+d.articleGrid,children:[(()=>{const e=b?"h1":"h2",t=b?"h2":"h3",a=p.substring(0,10).split("-"),i=a[0],o=c[parseInt(a[1],10)-1],l=parseInt(a[2],10);return(0,m.jsxs)("header",{children:[(0,m.jsx)(e,{className:(0,s.Z)("margin-bottom--sm",b?d.blogPostTitle:d.blogPostTitleGrid),children:b?N:(0,m.jsx)(r.Z,{to:u,children:N})}),_&&(0,m.jsx)(t,{className:d.subtitle,children:_}),(0,m.jsx)("div",{className:"margin-vert--md",children:(0,m.jsxs)("div",{className:d.heading,children:[(0,m.jsx)("div",{className:d.headingPhoto,children:y&&(0,m.jsx)(r.Z,{className:"avatar__photo-link avatar__photo "+d.avatarImage,href:Z,children:(0,m.jsx)("img",{src:y,alt:v})})}),(0,m.jsxs)("div",{className:d.headingDetails,children:[(0,m.jsxs)("span",{children:[(0,m.jsx)(r.Z,{className:d.authorName,href:Z,children:v}),", ",(0,m.jsx)("span",{className:d.authorTitle,children:k})]}),(0,m.jsxs)("time",{dateTime:p,className:d.blogPostDate,children:[(0,m.jsx)("br",{}),(0,m.jsx)(n.Z,{id:"theme.blog.post.date",description:"The label to display the blog post date",values:{day:l,month:o,year:i},children:"{month} {day}, {year}"})," ",j&&(0,m.jsxs)(m.Fragment,{children:[" \xb7 ",(0,m.jsx)(n.Z,{id:"theme.blog.post.readingTime",description:"The label to display reading time of the blog post",values:{readingTime:Math.ceil(j)},children:"{readingTime} min read"})]})]})]})]})})]})})(),(0,m.jsx)("div",{className:"markdown",children:(0,m.jsx)(i.Z,{components:o.Z,children:t})}),(x.length>0||g)&&b&&(0,m.jsx)("footer",{className:"row margin-vert--lg",children:x.length>0&&!g&&(0,m.jsxs)("div",{className:d.tags,children:[(0,m.jsx)("strong",{children:(0,m.jsx)(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),x.map((e=>{let{label:t,permalink:a}=e;return(0,m.jsx)(r.Z,{className:d.tag,to:a,children:t},a)}))]})})]})]})}},70596:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});a(67294);var s=a(76050),i=a(30057),n=a(76062),r=a(13373),o=a(85893);function l(e){const{nextItem:t,prevItem:a}=e;return(0,o.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,n.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[a&&(0,o.jsx)(r.Z,{...a,subLabel:(0,o.jsx)(n.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),t&&(0,o.jsx)(r.Z,{...t,subLabel:(0,o.jsx)(n.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}var d=a(88910),m=a(22297);const c=function(e){const{content:t,sidebar:a}=e,{frontMatter:n,metadata:r}=t,{title:c,description:h,nextItem:g,prevItem:b,editUrl:p}=r;return(0,o.jsx)(s.Z,{title:c,description:h,wrapperClassName:"blog-wrapper",children:t&&(0,o.jsx)("div",{className:"blog-container margin-vert--lg",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("main",{className:"col col--8",children:[(0,o.jsx)(i.Z,{frontMatter:n,metadata:r,isBlogPostPage:!0,children:(0,o.jsx)(t,{})}),(0,o.jsx)("div",{children:p&&(0,o.jsx)(m.Z,{editUrl:p})}),(g||b)&&(0,o.jsx)("div",{className:"margin-vert--xl",children:(0,o.jsx)(l,{nextItem:g,prevItem:b})})]}),(0,o.jsx)("div",{className:"col col--1"}),(0,o.jsx)("div",{className:"col col--3",children:(0,o.jsx)(d.Z,{sidebar:a})})]})})})}},88910:(e,t,a)=>{a.d(t,{Z:()=>o});a(67294);var s=a(86010),i=a(39415);const n={sidebar:"sidebar_ycyQ",sidebarItemTitle:"sidebarItemTitle_uR5j",sidebarItemList:"sidebarItemList_TpH3",sidebarItem:"sidebarItem_WWBq",sidebarItemLink:"sidebarItemLink_Hhz8",sidebarItemLinkActive:"sidebarItemLinkActive_OkT7"};var r=a(85893);function o(e){let{sidebar:t}=e;return 0===t.items.length?null:(0,r.jsx)("div",{className:"blog-sidebar",children:(0,r.jsxs)("div",{className:(0,s.Z)(n.sidebar,"thin-scrollbar"),children:[(0,r.jsx)("h3",{className:n.sidebarItemTitle,children:t.title}),(0,r.jsx)("ul",{className:n.sidebarItemList,children:t.items.map((e=>(0,r.jsx)("li",{className:n.sidebarItem,children:(0,r.jsx)(i.Z,{isNavLink:!0,to:e.permalink,className:n.sidebarItemLink,activeClassName:n.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}}}]);