"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[2031],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return y}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),d=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=d(r),g=n,y=l["".concat(s,".").concat(g)]||l[g]||c[g]||a;return r?o.createElement(y,u(u({ref:t},p),{},{components:r})):o.createElement(y,u({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,u=new Array(a);u[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[l]="string"==typeof e?e:n,u[1]=i;for(var d=2;d<a;d++)u[d]=r[d];return o.createElement.apply(null,u)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},67454:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return l}});var o=r(83117),n=r(80102),a=(r(67294),r(3905)),u=["components"],i={slug:"postgres-support",title:"PostgreSQL Support for BuildBuddy",description:"We're happy to announce PostgreSQL support for BuildBuddy.",author:"Zoey Greer",author_title:"Engineer @ BuildBuddy",date:"2023-06-21:12:00:00",author_url:"https://www.github.com/tempoz",author_image_url:"https://avatars.githubusercontent.com/u/735684?v=4",image:"/img/blog/postgres-support.png",tags:["product"]},s=void 0,d={permalink:"/blog/postgres-support",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/website/blog/postgres-support.md",source:"@site/blog/postgres-support.md",title:"PostgreSQL Support for BuildBuddy",description:"We're happy to announce PostgreSQL support for BuildBuddy.",date:"2023-06-21T12:00:00.000Z",formattedDate:"June 21, 2023",tags:[{label:"product",permalink:"/blog/tags/product"}],readingTime:1.025,hasTruncateMarker:!1,authors:[{name:"Zoey Greer",title:"Engineer @ BuildBuddy",url:"https://www.github.com/tempoz",imageURL:"https://avatars.githubusercontent.com/u/735684?v=4"}],frontMatter:{slug:"postgres-support",title:"PostgreSQL Support for BuildBuddy",description:"We're happy to announce PostgreSQL support for BuildBuddy.",author:"Zoey Greer",author_title:"Engineer @ BuildBuddy",date:"2023-06-21:12:00:00",author_url:"https://www.github.com/tempoz",author_image_url:"https://avatars.githubusercontent.com/u/735684?v=4",image:"/img/blog/postgres-support.png",tags:["product"]},nextItem:{title:"Providing Control Over Cache Encryption",permalink:"/blog/customer-managed-encryption-keys"}},p={authorsImageUrls:[void 0]},l=[{value:"Try it out!",id:"try-it-out",level:2}],c={toc:l},g="wrapper";function y(e){var t=e.components,i=(0,n.Z)(e,u);return(0,a.kt)(g,(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"By popular demand, we are introducing support for a PostgreSQL database backend for BuildBuddy! You can now use PostgreSQL as a drop-in replacement for MySQL or SQLite just by specifying a PostgreSQL endpoint to your BuildBuddy instance."),(0,a.kt)("h2",{id:"try-it-out"},"Try it out!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'\n# After following steps appropriate to your OS/distribution to install PostgreSQL:\n\n# Create a PostgreSQL user corresponding to the current user if one does not already exist\nsudo su postgres -c "createuser $USER --createdb --pwprompt"\n\n# Create a PostgreSQL database called "buildbuddy_test"\ncreatedb buildbuddy_test\n\n# Replace "$PGPASSWORD" with the PostgreSQL password you created for your user\nbb run //enterprise/server -- --database.data_source="postgresql://$USER:$PGPASSWORD@localhost/buildbuddy_test?sslmode=disable"\n')),(0,a.kt)("p",null,"The PostgreSQL connection may also be specified via ",(0,a.kt)("inlineCode",{parentName:"p"},"database.advanced_data_source"),", just like our other database backends, and as always these flags can instead be specified in your BuildBuddy YAML config as opposed to on the command line. Remember that when you switch out database backends, you're starting with a fresh BuildBuddy instance, so you'll need to create users and change your API keys before you can build anything against it if you're using auth."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(88210).Z,width:"1200",height:"628"})),(0,a.kt)("p",null,"Questions? Comments? Other things you'd like to see in BuildBuddy? You can find us on ",(0,a.kt)("a",{parentName:"p",href:"https://slack.buildbuddy.io/"},"Slack")," or contact us at ",(0,a.kt)("a",{parentName:"p",href:"mailto:hello@buildbuddy.io"},"hello@buildbuddy.io"),"; we'd love to hear from you!"))}y.isMDXComponent=!0},88210:function(e,t,r){t.Z=r.p+"assets/images/postgres-support-a11ab6b6f3b6165053be3df0afcffe9a.png"}}]);