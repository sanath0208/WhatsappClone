(this["webpackJsonpwhatsapp-clone"]=this["webpackJsonpwhatsapp-clone"]||[]).push([[0],{70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},91:function(e,t,c){"use strict";c.r(t);var a=c(2),s=c.n(a),n=c(28),i=c.n(n),r=(c(70),c(16)),o=(c(71),c(72),c(111)),d=c(105),j=c(56),l=c.n(j),h=c(57),b=c.n(h),u=c(58),m=c.n(u),O=c(59),p=c.n(O),x=(c(73),c(39)),f=x.a.initializeApp({apiKey:"AIzaSyBC_25qAm7U_I_hCAwb0CBo2EAYQzkWs0A",authDomain:"whatsapp-clone-8cd3c.firebaseapp.com",projectId:"whatsapp-clone-8cd3c",storageBucket:"whatsapp-clone-8cd3c.appspot.com",messagingSenderId:"1059954463925",appId:"1:1059954463925:web:9f07f89614105192581afc",measurementId:"G-SMTN8RW0F2"}),v=f.firestore(),g=f.auth(),N=new x.a.auth.GoogleAuthProvider,S=v,_=c(34),C=c(4);var w=function(e){var t,c=e.id,s=e.name,n=e.addNewChat,i=Object(a.useState)(""),d=Object(r.a)(i,2),j=d[0],l=d[1],h=Object(a.useState)(""),b=Object(r.a)(h,2),u=b[0],m=b[1];return Object(a.useEffect)((function(){c&&S.collection("rooms").doc(c).collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){m(e.docs.map((function(e){return e.data()})))}))}),[c]),Object(a.useEffect)((function(){l(Math.floor(5e3*Math.random()))}),[]),n?Object(C.jsx)("div",{onClick:function(){var e=prompt("Please Enter Name for Chat");e&&S.collection("rooms").add({name:e})},className:"sidebarChat",children:Object(C.jsx)("h3",{className:"add-new-chat-title",children:"Add New Chat"})}):Object(C.jsx)(_.b,{to:"/rooms/".concat(c),children:Object(C.jsxs)("div",{className:"sidebarChat",children:[Object(C.jsx)(o.a,{src:"https://avatars.dicebear.com/api/human/".concat(j,".svg")}),Object(C.jsxs)("div",{className:"sidebarChat_info",children:[Object(C.jsx)("h2",{children:s}),Object(C.jsx)("p",{children:null===(t=u[0])||void 0===t?void 0:t.message})]})]})},c)},y=Object(a.createContext)(),I=function(e){var t=e.reducer,c=e.initialState,s=e.children;return Object(C.jsx)(y.Provider,{value:Object(a.useReducer)(t,c),children:s})},E=function(){return Object(a.useContext)(y)};var k=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],n=E(),i=Object(r.a)(n,2),j=i[0].user;return i[1],Object(a.useEffect)((function(){S.collection("rooms").onSnapshot((function(e){return s(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(C.jsxs)("div",{className:"sidebar",children:[Object(C.jsxs)("div",{className:"sidebar_header",children:[Object(C.jsx)(o.a,{src:null===j||void 0===j?void 0:j.photoURL}),Object(C.jsxs)("div",{className:"sidebar_headerRight",children:[Object(C.jsx)(d.a,{children:Object(C.jsx)(l.a,{})}),Object(C.jsx)(d.a,{children:Object(C.jsx)(b.a,{})}),Object(C.jsx)(d.a,{children:Object(C.jsx)(m.a,{})})]}),Object(C.jsx)("div",{className:"sidebar_headerLeft"})]}),Object(C.jsx)("div",{className:"sidebar_search",children:Object(C.jsxs)("div",{className:"sidebar_searchContainer",children:[Object(C.jsx)(p.a,{}),Object(C.jsx)("input",{placeholder:"Search or start new chat",type:"text"})]})}),Object(C.jsxs)("div",{className:"sidebar_chats",children:[Object(C.jsx)(w,{addNewChat:!0}),c.map((function(e){return Object(C.jsx)(w,{id:e.id,name:e.data.name},e.id)}))]})]})},A=(c(88),c(106)),B=c(107),D=c(108),M=c(109),T=c(60),F=c.n(T),P=c(11);var R=function(){var e,t,c=Object(a.useState)(""),s=Object(r.a)(c,2),n=s[0],i=s[1],j=Object(a.useState)(""),l=Object(r.a)(j,2),h=l[0],b=l[1],u=Object(P.f)().roomId,m=Object(a.useState)([]),O=Object(r.a)(m,2),p=O[0],f=O[1],v=Object(a.useState)(""),g=Object(r.a)(v,2),N=g[0],_=g[1],w=E(),y=Object(r.a)(w,2),I=y[0].user;return y[1],Object(a.useEffect)((function(){u&&(S.collection("rooms").doc(u).onSnapshot((function(e){_(e.data().name)})),S.collection("rooms").doc(u).collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){f(e.docs.map((function(e){return e.data()})))})))}),[u]),Object(a.useEffect)((function(){u&&(S.collection("rooms").doc(u).onSnapshot((function(e){return _(e.data().name)})),S.collection("rooms").doc(u).collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){return f(e.docs.map((function(e){return e.data()})))})))}),[u]),Object(a.useEffect)((function(){i(Math.floor(5e3*Math.random()))}),[u]),Object(C.jsxs)("div",{className:"chat",children:[Object(C.jsxs)("div",{className:"chat_header",children:[Object(C.jsx)(o.a,{src:"https://avatars.dicebear.com/api/human/".concat(n,".svg")}),Object(C.jsxs)("div",{className:"chat_headerInfo",children:[Object(C.jsx)("h3",{className:"chat-room-name",children:N}),Object(C.jsxs)("p",{className:"chat-room-last-seen",children:["Last seen "," ",new Date(null===(e=p[p.length-1])||void 0===e||null===(t=e.timestamp)||void 0===t?void 0:t.toDate()).toUTCString()]})]}),Object(C.jsxs)("div",{className:"chat_headerRight",children:[Object(C.jsx)(d.a,{children:Object(C.jsx)(A.a,{})}),Object(C.jsx)(d.a,{children:Object(C.jsx)(B.a,{})}),Object(C.jsx)(d.a,{children:Object(C.jsx)(D.a,{})})]})]}),Object(C.jsx)("div",{className:"chat_body",children:p.map((function(e){var t;return Object(C.jsxs)("p",{className:"chat_message ".concat(e.name==I.displayName&&"chat_receiver"),children:[Object(C.jsx)("span",{className:"chat_name",children:e.name}),e.message,Object(C.jsx)("span",{className:"chat_timestamp",children:new Date(null===(t=e.timestamp)||void 0===t?void 0:t.toDate()).toUTCString()})]})}))}),Object(C.jsxs)("div",{className:"chat_footer",children:[Object(C.jsx)(M.a,{}),Object(C.jsxs)("form",{children:[Object(C.jsx)("input",{value:h,onChange:function(e){return b(e.target.value)},type:"text"}),Object(C.jsx)("button",{onClick:function(e){e.preventDefault(),S.collection("rooms").doc(u).collection("messages").add({message:h,name:I.displayName,timestamp:x.a.firestore.FieldValue.serverTimestamp()}),b("")},type:"submit",children:"Send a Message"})]}),Object(C.jsx)(F.a,{})]})]})},W=c(61),L=(c(89),c(110)),U=c(50),z="SET_USER",G=function(e,t){switch(t.type){case z:return Object(U.a)(Object(U.a)({},e),{},{user:t.user});default:return e}};var J=function(){var e=E(),t=Object(r.a)(e,2);Object(W.a)(t[0]);var c=t[1];return Object(C.jsx)("div",{className:"login",children:Object(C.jsxs)("div",{className:"login_container",children:[Object(C.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",alt:""}),Object(C.jsx)("div",{className:"login_text",children:Object(C.jsx)("h1",{children:"Sign in to Whatsapp"})}),Object(C.jsx)(L.a,{type:"submit",onClick:function(){g.signInWithPopup(N).then((function(e){c({type:z,user:e.user})})).catch((function(e){return alert(e.message)}))},children:"Sign in With Google"})]})})};var q=function(){var e=E(),t=Object(r.a)(e,2),c=t[0].user;return t[1],Object(C.jsx)("div",{className:"app",children:c?Object(C.jsx)("div",{className:"app_body",children:Object(C.jsxs)(_.a,{children:[Object(C.jsx)(k,{}),Object(C.jsx)(P.c,{children:Object(C.jsx)(P.a,{path:"/rooms/:roomId",children:Object(C.jsx)(R,{})})})]})}):Object(C.jsx)(J,{})})},K=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,112)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};i.a.render(Object(C.jsx)(s.a.StrictMode,{children:Object(C.jsx)(I,{initialState:{user:null},reducer:G,children:Object(C.jsx)(q,{})})}),document.getElementById("root")),K()}},[[91,1,2]]]);
//# sourceMappingURL=main.25290615.chunk.js.map