"use strict";(self.webpackChunknodis_eu=self.webpackChunknodis_eu||[]).push([[454],{9539:function(e,t,s){var a=s(1413),n=s(5671),l=s(3144),c=s(1243),o=s(9603),i=function(){function e(){(0,n.Z)(this,e)}return(0,l.Z)(e,[{key:"adminSettings",value:function(){return c.Z.get(o.Z.adminSettings,o.Z.httpOptions)}},{key:"setAdminSettings",value:function(e){return c.Z.post(o.Z.adminSettings,e,o.Z.httpOptions)}},{key:"cmsContent",value:function(){return c.Z.get(o.Z.cmsContent,o.Z.httpOptions)}},{key:"savePost",value:function(e,t){var s={headers:(0,a.Z)((0,a.Z)({},o.Z.httpOptions.headers),{},{"Content-type":"multipart/form-data"})};return c.Z.post("update"===e?o.Z.updatePost:o.Z.newPost,t,s)}},{key:"cmsPosts",value:function(e){return c.Z.post(o.Z.cmsPosts,e,o.Z.httpOptions)}},{key:"postDetail",value:function(e){return c.Z.post(o.Z.postDetail,e,o.Z.httpOptions)}},{key:"updatePostStatus",value:function(e){return c.Z.post(o.Z.postStatus,e,o.Z.httpOptions)}},{key:"listCourses",value:function(){return c.Z.get(o.Z.adminCourses,o.Z.httpOptions)}},{key:"getCourse",value:function(e){return c.Z.get(o.Z.adminCourse+"/"+e,o.Z.httpOptions)}},{key:"saveCourse",value:function(e,t){var s={headers:(0,a.Z)((0,a.Z)({},o.Z.httpOptions.headers),{},{"Content-type":"multipart/form-data"})};return c.Z.post("update"===e?o.Z.updateCourse:o.Z.newCourse,t,s)}},{key:"changeCourseStatus",value:function(e){return c.Z.post(o.Z.courseStatus,e,o.Z.httpOptions)}},{key:"getBlogPosts",value:function(){return c.Z.get(o.Z.blogPosts,o.Z.httpOptions)}},{key:"getPartners",value:function(){return c.Z.get(o.Z.allPartners,o.Z.httpOptions)}},{key:"getBanners",value:function(){return c.Z.get(o.Z.allBanners,o.Z.httpOptions)}}]),e}();t.Z=new i},6454:function(e,t,s){s.r(t),s.d(t,{default:function(){return m}});var a=s(4942),n=s(1413),l=s(9439),c=s(2791),o=s(9230),i=s(9539),d=s(4444),r=s(184),m=function(){var e=(0,o.$G)().t,t=(0,c.useState)("general"),s=(0,l.Z)(t,2),m=s[0],u=s[1],b=[{id:"general",name:"".concat(e("general"))},{id:"footer",name:"".concat(e("footer"))}],h=(0,c.useState)(!0),p=(0,l.Z)(h,2),x=p[0],f=p[1],y=(0,c.useState)(!0),N=(0,l.Z)(y,2),j=N[0],_=N[1],g=(0,c.useState)(!0),v=(0,l.Z)(g,2),Z=v[0],k=v[1],w=(0,c.useState)(!1),C=(0,l.Z)(w,2),S=C[0],O=C[1],T=(0,c.useState)({}),P=(0,l.Z)(T,2),B=P[0],E=P[1];(0,c.useEffect)((function(){F()}),[]);var F=function(){i.Z.adminSettings().then((function(e){E(e.data.result),k(!1)})).catch((function(e){console.log(e),k(!1)}))},V=function(e){var t=e.target,s=t.name,l=t.value;E((0,n.Z)((0,n.Z)({},B),{},(0,a.Z)({},s,l)))};return(0,r.jsxs)("div",{className:"container-fluid p-4",children:[(0,r.jsx)("div",{className:"d-block d-md-flex align-items-end justify-content-between mb-4",children:(0,r.jsxs)("div",{className:"section-header mb-3 mb-md-0",children:[(0,r.jsx)("div",{className:"primary",children:e("settings")}),(0,r.jsx)("h5",{className:"title fw-medium mb-0",children:e("settings_desc")})]})}),(0,r.jsx)("section",{className:"section-data p-3",children:Z?(0,r.jsxs)("div",{className:"content-placeholder",children:[(0,r.jsx)("h5",{className:"placeholder-glow mb-4",children:(0,r.jsx)("span",{className:"placeholder col-6"})}),(0,r.jsxs)("p",{className:"card-text placeholder-glow",children:[(0,r.jsx)("span",{className:"placeholder col-7 mt-3"}),(0,r.jsx)("span",{className:"placeholder col-4 mt-3"}),(0,r.jsx)("span",{className:"placeholder col-6"}),(0,r.jsx)("span",{className:"placeholder col-6"}),(0,r.jsx)("span",{className:"placeholder col-6"}),(0,r.jsx)("span",{className:"placeholder col-3"}),(0,r.jsx)("span",{className:"placeholder col-6"}),(0,r.jsx)("span",{className:"placeholder col-2"}),(0,r.jsx)("span",{className:"placeholder col-7"})]})]}):(0,r.jsxs)("div",{className:"nodis-tabs-container",children:[(0,r.jsx)("div",{className:"nodis-tabs d-flex",children:b.map((function(e,t){return(0,r.jsx)("div",{className:"tab-item me-4 "+(e.id===m?"active":""),onClick:function(){return u(e.id)},children:e.name},"tab-"+(t+1))}))}),(0,r.jsxs)("div",{className:"tabs-content mt-4",children:["general"===m&&(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-md-12",children:(0,r.jsx)("form",{onSubmit:function(e){e.preventDefault(),O(!0);var t={contact_number:B.contact_number,contact_email:B.contact_email,address:B.address};i.Z.setAdminSettings(t).then((function(e){O(!1),d.Z.notify("success",e.data.result)})).catch((function(e){console.log(e),O(!1),d.Z.notify("error",e.response.data.result)}))},children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-md-6",children:(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("label",{htmlFor:"contactNumber",className:"form-label label-text",children:e("contact_number")}),(0,r.jsx)("input",{type:"text",className:"form-control nodis-field ",disabled:x,id:"contactNumber","aria-describedby":"contactNumber",name:"contact_number",defaultValue:B.contact_number,onChange:V})]})}),(0,r.jsx)("div",{className:"col-md-6",children:(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("label",{htmlFor:"contactEmail",className:"form-label label-text",children:e("contact_email")}),(0,r.jsx)("input",{type:"email",className:"form-control nodis-field ",disabled:x,id:"contactEmail","aria-describedby":"emailHelp",name:"contact_email",defaultValue:B.contact_email,onChange:V})]})}),(0,r.jsx)("div",{className:"col-md-12",children:(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("label",{htmlFor:"contactAddress",className:"form-label label-text",children:e("address")}),(0,r.jsx)("input",{type:"text",className:"form-control nodis-field ",disabled:x,id:"contactAddress","aria-describedby":"contactAddress",name:"address",defaultValue:B.address,onChange:V})]})}),(0,r.jsx)("div",{className:"col-md-12",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-auto ms-auto",style:{display:x?"block":"none"},children:(0,r.jsx)("button",{type:"button",className:"btn nodis-btn outline btn-block w-100",onClick:function(){return f(!1)},children:e("enable_edit")})}),(0,r.jsx)("div",{className:"col-auto ms-auto p-0",style:{display:x?"none":"block"},children:(0,r.jsx)("button",{type:"button",className:"btn nodis-btn outline btn-block w-100",onClick:function(){return f(!0)},children:e("cancel")})}),(0,r.jsx)("div",{className:"col-auto ",style:{display:x?"none":"block"},children:(0,r.jsxs)("button",{type:"submit",className:"btn nodis-btn success btn-block w-100",disabled:S,children:[S&&(0,r.jsxs)("div",{className:"button-loader",children:[e("saving"),"..."]}),e("save_changes")]})})]})})]})})})}),"footer"===m&&(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-md-12",children:(0,r.jsx)("form",{onSubmit:function(e){e.preventDefault(),O(!0);var t={featured_text_en:B.featured_text_en,featured_text_bg:B.featured_text_bg,subscribe_text_en:B.subscribe_text_en,subscribe_text_bg:B.subscribe_text_bg,copyright_text_en:B.copyright_text_en,copyright_text_bg:B.copyright_text_bg,powered_by:B.powered_by,powered_by_link:B.powered_by_link,useful_links:""};i.Z.setAdminSettings(t).then((function(e){O(!1),d.Z.notify("success",e.data.result)})).catch((function(e){console.log(e),O(!1),d.Z.notify("error",e.data.result)}))},children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-md-6",children:(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("label",{htmlFor:"featuredTextEn",className:"form-label label-text",children:e("featured_text_en")}),(0,r.jsx)("textarea",{type:"text",rows:"5",className:"form-control nodis-field ",disabled:j,id:"featuredTextEn","aria-describedby":"featuredTextEn",name:"featured_text_en",defaultValue:B.featured_text_en,onChange:V})]})}),(0,r.jsx)("div",{className:"col-md-6",children:(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("label",{htmlFor:"featuredTextBg",className:"form-label label-text",children:e("featured_text_bg")}),(0,r.jsx)("textarea",{type:"text",rows:"5",className:"form-control nodis-field ",disabled:j,id:"featuredTextBg","aria-describedby":"featuredTextBg",name:"featured_text_bg",defaultValue:B.featured_text_bg,onChange:V})]})}),(0,r.jsx)("div",{className:"col-md-6",children:(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("label",{htmlFor:"copyrightTextEn",className:"form-label label-text",children:e("copyright_text_en")}),(0,r.jsx)("input",{type:"text",className:"form-control nodis-field ",disabled:j,id:"copyrightTextEn","aria-describedby":"copyrightTextEn",name:"copyright_text_en",defaultValue:B.copyright_text_en,onChange:V})]})}),(0,r.jsx)("div",{className:"col-md-6",children:(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("label",{htmlFor:"copyrightTextBg",className:"form-label label-text",children:e("copyright_text_bg")}),(0,r.jsx)("input",{type:"text",className:"form-control nodis-field ",disabled:j,id:"copyrightTextBg","aria-describedby":"copyrightTextBg",name:"copyright_text_bg",defaultValue:B.copyright_text_bg,onChange:V})]})}),(0,r.jsx)("div",{className:"col-md-6",children:(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("label",{htmlFor:"poweredbyName",className:"form-label label-text",children:e("powered_by_name")}),(0,r.jsx)("input",{type:"text",className:"form-control nodis-field ",disabled:j,id:"poweredbyName","aria-describedby":"poweredbyName",name:"powered_by",defaultValue:B.powered_by,onChange:V})]})}),(0,r.jsx)("div",{className:"col-md-6",children:(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("label",{htmlFor:"poweredbyLink",className:"form-label label-text",children:e("powered_by_link")}),(0,r.jsx)("input",{type:"text",className:"form-control nodis-field ",disabled:j,id:"poweredbyLink","aria-describedby":"poweredbyLink",name:"powered_by_link",defaultValue:B.powered_by_link,onChange:V})]})}),(0,r.jsx)("div",{className:"col-md-12",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-auto ms-auto",style:{display:j?"block":"none"},children:(0,r.jsx)("button",{type:"button",className:"btn nodis-btn outline btn-block w-100",onClick:function(){return _(!1)},children:e("enable_edit")})}),(0,r.jsx)("div",{className:"col-auto ms-auto p-0",style:{display:j?"none":"block"},children:(0,r.jsx)("button",{type:"button",className:"btn nodis-btn outline btn-block w-100",onClick:function(){return _(!0)},children:e("cancel")})}),(0,r.jsx)("div",{className:"col-auto ",style:{display:j?"none":"block"},children:(0,r.jsxs)("button",{type:"submit",className:"btn nodis-btn success btn-block w-100",disabled:S,children:[S&&(0,r.jsxs)("div",{className:"button-loader",children:[e("saving"),"..."]}),e("save_changes")]})})]})})]})})})})]})]})})]})}}}]);
//# sourceMappingURL=454.260a2133.chunk.js.map