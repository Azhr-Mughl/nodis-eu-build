"use strict";(self.webpackChunknodis_eu=self.webpackChunknodis_eu||[]).push([[134],{2585:function(e,a,s){s.d(a,{r:function(){return o}});var l,n,c=s(2791),t=["title","titleId"];function r(){return r=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l])}return e},r.apply(this,arguments)}function i(e,a){if(null==e)return{};var s,l,n=function(e,a){if(null==e)return{};var s,l,n={},c=Object.keys(e);for(l=0;l<c.length;l++)s=c[l],a.indexOf(s)>=0||(n[s]=e[s]);return n}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(l=0;l<c.length;l++)s=c[l],a.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}function d(e,a){var s=e.title,d=e.titleId,o=i(e,t);return c.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-arrow-left",ref:a,"aria-labelledby":d},o),s?c.createElement("title",{id:d},s):null,l||(l=c.createElement("line",{x1:19,y1:12,x2:5,y2:12})),n||(n=c.createElement("polyline",{points:"12 19 5 12 12 5"})))}var o=c.forwardRef(d);s.p},703:function(e,a,s){s(2791);var l=s(9230),n=s(184);a.Z=function(e){var a=e.text,s=(0,l.$G)().t;return(0,n.jsx)("div",{className:"d-flex align-items-center h-100 mh-inherit min-h-250",children:(0,n.jsx)("p",{className:"dim-text w-100 text-center",children:a||s("data_not_found")})})}},8134:function(e,a,s){s.r(a),s.d(a,{default:function(){return N}});var l=s(2791),n=s(7689),c=s(9439),t=s(9230),r=s(3164),i=s(9603),d=s(8171),o=s(703),m=s(5438),h=s(184),x=function(){var e=(0,t.$G)().t,a=(0,l.useContext)(r.C),s=(0,l.useState)(!0),n=(0,c.Z)(s,2),x=n[0],u=n[1],p=(0,l.useState)([]),j=(0,c.Z)(p,2),f=j[0],N=j[1],v=i.Z.baseUrl+"/";(0,l.useEffect)((function(){g()}),[]);var g=function(){d.Z.blog().then((function(e){var a,s;N(null===(a=e.data)||void 0===a||null===(s=a.result)||void 0===s?void 0:s.posts),u(!1)})).catch((function(e){console.log(e),u(!1)}))};return(0,h.jsxs)("div",{className:"container-xxl py-5",children:[(0,h.jsx)("div",{className:"d-block d-md-flex align-items-end justify-content-between",children:(0,h.jsxs)("div",{className:"section-header",children:[(0,h.jsx)("h2",{className:"title fw-medium mb-0",children:e("blog_articles_title")}),(0,h.jsx)("div",{children:e("blog_articles_desc")})]})}),(0,h.jsx)("section",{children:(0,h.jsx)("div",{className:"section-content mt-5",children:(0,h.jsxs)("div",{className:"row",children:[x?Array.from({length:2},(function(e,a){return(0,h.jsx)("div",{className:"col-md-6 mb-4 mt-2",children:(0,h.jsxs)("div",{className:"home-blog p-2 d-flex flex-column flex-md-row w-100",children:[(0,h.jsx)("div",{className:"content-placeholder w-100 p-3",children:(0,h.jsxs)("p",{className:"card-text placeholder-glow",children:[(0,h.jsx)("span",{className:"placeholder col-3"}),(0,h.jsx)("span",{className:"placeholder col-12 mt-2"}),(0,h.jsx)("span",{className:"placeholder col-9 mt-3"}),(0,h.jsx)("span",{className:"placeholder col-7"}),(0,h.jsx)("span",{className:"placeholder col-6"})]})}),(0,h.jsx)("h5",{className:"w-225 min-h-250 placeholder-glow ms-3 mb-0",children:(0,h.jsx)("span",{className:"placeholder col-12 min-h-250"})})]})},a)})):(0,h.jsx)(h.Fragment,{children:f&&f.length?(0,h.jsx)(h.Fragment,{children:f.map((function(e,s){return(0,h.jsx)("div",{className:"col-md-6 mb-3",children:(0,h.jsx)(m.Z,{data:e,appLang:a.appLang,baseURL:v})},s)}))}):null}),!x&&!f.length&&(0,h.jsx)(o.Z,{})]})})})]})},u=s(1087),p=s(2426),j=s(2585),f=function(){var e=(0,t.$G)().t,a=(0,l.useContext)(r.C),s=(0,n.UO)(),o=(0,l.useState)(!0),m=(0,c.Z)(o,2),x=m[0],f=m[1],N=(0,l.useState)({}),v=(0,c.Z)(N,2),g=v[0],b=v[1],w=i.Z.baseUrl+"/";(0,l.useEffect)((function(){s.articleId&&y(s.articleId)}),[]);var y=function(e){var a={post_id:e};d.Z.blogPost(a).then((function(e){b(e.data.result),f(!1)})).catch((function(e){console.log(e),f(!1)}))};return(0,h.jsxs)("div",{className:"",children:[(0,h.jsx)("section",{className:"blog-meta py-5",children:(0,h.jsx)("div",{className:"container-xxl",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)("div",{className:"col-md-8","data-aos":"fade-up","data-aos-duration":500,"data-aos-easing":"linear","data-aos-delay":500,children:x?(0,h.jsxs)("div",{className:"content-placeholder",children:[(0,h.jsxs)("h1",{className:"placeholder-glow mb-4",children:[(0,h.jsx)("span",{className:"placeholder col-11 h-25"}),(0,h.jsx)("span",{className:"placeholder col-5 mt-3"})]}),(0,h.jsxs)("p",{className:"card-text placeholder-glow",children:[(0,h.jsx)("span",{className:"placeholder col-12 mt-3"}),(0,h.jsx)("span",{className:"placeholder col-6"}),(0,h.jsx)("br",{}),(0,h.jsx)("span",{className:"placeholder col-5 my-3"}),(0,h.jsx)("br",{}),(0,h.jsx)("span",{className:"placeholder col-4"})]})]}):(0,h.jsxs)(l.Fragment,{children:[(0,h.jsxs)(u.rU,{className:"return-back-textual mb-2",to:"/blog-n-news",children:[(0,h.jsx)(j.r,{className:"me-1"}),(0,h.jsx)("span",{children:e("menu_blogs_n_news")})]}),(0,h.jsx)("h1",{className:"title fw-medium mb-0",children:g["title_"+a.appLang]}),(0,h.jsx)("div",{className:"my-3",children:g["short_desc_"+a.appLang]}),(0,h.jsxs)("div",{className:"my-3",children:[(0,h.jsxs)("span",{className:"max-text",children:[e("posted"),":"]})," ",g.created_at?p(g.created_at).format("MMMM DD, YYYY"):""]}),g.sub_type&&(0,h.jsxs)("div",{className:"my-3",children:[(0,h.jsxs)("span",{className:"max-text",children:[e("category"),":"]})," ",e(g.sub_type)]}),(0,h.jsxs)("div",{className:"my-3",children:[(0,h.jsxs)("span",{className:"max-text",children:[e("author"),":"]})," ",(0,h.jsx)("span",{className:"underline fw-medium",children:g.author})]})]})}),(0,h.jsx)("div",{className:"col-md-4","data-aos":"fade-up","data-aos-duration":500,"data-aos-easing":"linear","data-aos-delay":1e3,children:(0,h.jsx)("div",{className:"img-container",children:x?(0,h.jsx)("div",{className:"content-placeholder",children:(0,h.jsx)("h5",{className:"w-100 min-h-200 placeholder-glow mt-2 me-3",children:(0,h.jsx)("span",{className:"placeholder col-12 min-h-250"})})}):(0,h.jsx)("div",{className:"blog-img",style:{backgroundImage:"url('".concat(w+g.featured_url,"')")}})})})]})})}),(0,h.jsx)("section",{className:"py-5",children:(0,h.jsx)("div",{className:"container-xxl",children:(0,h.jsx)("div",{className:"","data-aos":"fade-up","data-aos-duration":500,"data-aos-easing":"linear",children:(0,h.jsx)("div",{className:"row",children:(0,h.jsx)("div",{className:"col-md-8",children:g["content_".concat(a.appLang)]})})})})})]})},N=function(){return(0,h.jsx)("div",{className:"",children:(0,h.jsx)(l.Suspense,{fallback:(0,h.jsx)("div",{className:"lazy-loader",children:"Loading..."}),children:(0,h.jsxs)(n.Z5,{children:[(0,h.jsx)(n.AW,{path:"/",element:(0,h.jsx)(x,{})}),(0,h.jsx)(n.AW,{path:"/article/:articleId",element:(0,h.jsx)(f,{})})]})})})}}}]);
//# sourceMappingURL=134.96f96570.chunk.js.map