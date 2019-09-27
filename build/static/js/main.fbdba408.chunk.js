(window.webpackJsonpblogit=window.webpackJsonpblogit||[]).push([[0],{17:function(e,t,n){e.exports=n(41)},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(15),u=n.n(l),c=n(16),o=n(1),i=n.n(o),s=n(4),p=n(3),m=n(5),d=n.n(m),b=null,f={getAll:function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/api/blogs");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(s.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:b}},e.next=3,d.a.post("/api/blogs",t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(s.a)(i.a.mark((function e(t,n){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:b}},e.prev=1,e.next=4,d.a.put("".concat("/api/blogs","/").concat(t),n,a);case 4:return r=e.sent,e.abrupt("return",r.data);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}(),setToken:function(e){b="bearer ".concat(e)},removeToken:function(){b=null},remove:function(){var e=Object(s.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:b}},e.next=3,d.a.delete("".concat("/api/blogs","/").concat(t),n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v={login:function(){var e=Object(s.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=(n(40),function(e){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:e.handleLogin},r.a.createElement("h2",null,"Log in to application:"),r.a.createElement("label",null,"Username:",r.a.createElement("br",null),r.a.createElement("input",{type:e.usernameType,value:e.usernameValue,onChange:e.usernameHandler}),r.a.createElement("br",null)),r.a.createElement("label",null,"Password:",r.a.createElement("br",null),r.a.createElement("input",{type:e.pwType,value:e.pwValue,onChange:e.passwordHandler}),r.a.createElement("br",null)),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Kirjaudu")),r.a.createElement("br",null))}),E=function(e){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:e.handleBlogi},r.a.createElement("h2",null,"Create new blog"),r.a.createElement("label",null,"Title:",r.a.createElement("br",null),r.a.createElement("input",{type:e.titleType,value:e.title,onChange:e.titleHandler}),r.a.createElement("br",null)),r.a.createElement("label",null,"Author:",r.a.createElement("br",null),r.a.createElement("input",{type:e.authorType,value:e.author,onChange:e.authorHandler})),r.a.createElement("br",null),r.a.createElement("label",null,"Url:",r.a.createElement("br",null),r.a.createElement("input",{type:e.urlType,value:e.url,onChange:e.urlHandler})),r.a.createElement("br",null),r.a.createElement("label",null,"Likes:",r.a.createElement("br",null),r.a.createElement("input",{type:e.likesType,value:e.likes,onChange:e.likesHandler})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Create blog")))},h=function(e,t){var n=Object(a.useState)(!1),l=Object(p.a)(n,2),u=l[0],c=l[1],o={display:u?"none":""},i={display:u?"":"none"};return r.a.createElement("div",null,r.a.createElement("div",{onClick:function(){c(!u)},className:"show"}," ",e.openBlog,r.a.createElement("div",{style:o})),r.a.createElement("div",{style:i,className:"toggleContent"},e.children))},y=function(e){var t=e.blog,n=e.addLike,a=e.removeBlog,l=e.userName,u=e.blogiUserName,c=r.a.createElement("div",null,t.title," added by ",t.author),o={display:l===u?"":"none"};return r.a.createElement("div",{style:{paddingTop:10,paddingLeft:2,border:"solid",borderWidth:1,marginBottom:5},className:"blogi"},r.a.createElement(h,{openBlog:c},r.a.createElement("div",null,r.a.createElement("a",{href:t.url},t.url),r.a.createElement("br",null),t.likes," likes\xa0\xa0",r.a.createElement("button",{onClick:n},"Like"),r.a.createElement("br",null),"added by ",t.author,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{style:o},r.a.createElement("button",{onClick:a},"Remove")))))},w=function(e){var t=e.msg,n=e.msgType;return null===t?null:r.a.createElement("div",{className:n},t)},k=r.a.forwardRef((function(e,t){var n=Object(a.useState)(!1),l=Object(p.a)(n,2),u=l[0],c=l[1],o={display:u?"none":""},i={display:u?"":"none"},s=function(){c(!u)};return Object(a.useImperativeHandle)(t,(function(){return{toggleVisibility:s}})),r.a.createElement("div",null,r.a.createElement("div",{style:o},r.a.createElement("button",{onClick:s},e.buttonLabel)),r.a.createElement("div",{style:i},e.children,r.a.createElement("button",{onClick:s},"Cansel")))})),O=function(e){var t=Object(a.useState)(""),n=Object(p.a)(t,2),r=n[0],l=n[1];return{type:e,value:r,onChange:function(e){l(e.target.value)},cleanField:function(){l("")}}};function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(n,!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=function(){var e=O("text"),t=O("password"),n=O("text"),l=O("text"),u=O("text"),c=O("text"),o=Object(a.useState)(null),m=Object(p.a)(o,2),d=m[0],b=m[1],h=Object(a.useState)(null),j=Object(p.a)(h,2),C=j[0],T=j[1],S=Object(a.useState)(null),H=Object(p.a)(S,2),B=H[0],L=H[1],N=Object(a.useState)([]),F=Object(p.a)(N,2),P=F[0],A=F[1],U=r.a.createRef();Object(a.useEffect)((function(){f.getAll().then((function(e){return A(e)}))}),[]),Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedBlogappUser");if(e){var t=JSON.parse(e);L(t),f.setToken(t.token)}}),[]);var D=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!window.confirm("remove blog ".concat(t.title," by ").concat(t.author))){e.next=5;break}return e.next=4,f.remove(t.id);case 4:A(P.filter((function(e){return e.id!==t.id})));case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),V=function(){var n=Object(s.a)(i.a.mark((function n(a){var r;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a.preventDefault(),n.prev=1,n.next=4,v.login({username:e.value,password:t.value});case 4:r=n.sent,window.localStorage.setItem("loggedBlogappUser",JSON.stringify(r)),f.setToken(r.token),L(r),e.cleanField(),t.cleanField(),n.next=18;break;case 12:n.prev=12,n.t0=n.catch(1),e.cleanField(),t.cleanField(),T("Wrong username or password!"),setTimeout((function(){T(null)}),5e3);case 18:case"end":return n.stop()}}),n,null,[[1,12]])})));return function(e){return n.apply(this,arguments)}}(),I=function(){var e=Object(s.a)(i.a.mark((function e(t){var n,a,r,l,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.likes+1,a=P.find((function(e){return e.id===t.id})),r=x({},a,{likes:n}),l=P.find((function(e){return e.id===t.id})),e.prev=4,e.next=7,f.update(a.id,r);case 7:u=e.sent,l.likes=u.likes,A(P.map((function(e){return e.id===l.id?l:e}))),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(w,{msg:null!==d?d:C,msgType:null!==d?"message":"error"}),null===B?r.a.createElement(g,{handleLogin:V,usernameType:e.type,usernameValue:e.value,usernameHandler:e.onChange,passwordHandler:t.onChange,pwType:t.type,pwValue:t.value}):r.a.createElement("div",null,r.a.createElement("h1",null,"Blogs"),r.a.createElement("p",null,B.name," logged in\xa0\xa0",r.a.createElement("button",{onClick:function(){window.localStorage.removeItem("loggedBlogappUser"),f.removeToken(),L(null)}},"Log out")),r.a.createElement(k,{buttonLabel:"New blog",ref:U},r.a.createElement(E,{handleBlogi:function(e){e.preventDefault(),U.current.toggleVisibility();var t={title:n.value,author:l.value,url:u.value,likes:c.value};f.create(t).then((function(e){A(P.concat(e)),n.cleanField(),l.cleanField(),u.cleanField(),c.cleanField(),b("A new blog ".concat(e.title," by ").concat(e.author," added!")),setTimeout((function(){b(null)}),5e3)}))},title:n.value,titleType:n.type,titleHandler:n.onChange,author:l.value,authorType:l.type,authorHandler:l.onChange,url:u.value,urlType:u.type,urlHandler:u.onChange,likes:c.value,likesType:c.type,likesHandler:c.onChange})),P.map((function(e){return r.a.createElement(y,{key:e.title,blog:e,userName:B.username,blogiUserName:e.user.username,addLike:function(){return I(e)},removeBlog:function(){return D(e)}})}))))};u.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.fbdba408.chunk.js.map