(this.webpackJsonpquizzler=this.webpackJsonpquizzler||[]).push([[0],{43:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n(28),a=n.n(s),i=n(11),r=n(1);var o=function(){return Object(r.jsxs)("nav",{className:"navbar-nav",children:[Object(r.jsx)("div",{className:"navbar",children:Object(r.jsx)(i.b,{to:"/",className:"brand",children:"Quiz N Go"})}),Object(r.jsx)("div",{className:"nav-list",children:Object(r.jsx)(i.b,{to:"/create",className:"nav-link",children:" Create"})})]})},j=n(25);n(40);j.a.initializeApp({apiKey:"AIzaSyAJQjb1aSNQiIcsZh8bRZEdJaR81FuxYSU",authDomain:"quizzngo.firebaseapp.com",projectId:"quizzngo",storageBucket:"quizzngo.appspot.com",messagingSenderId:"678585433649",appId:"1:678585433649:web:48082bce6c82406e591f10"});var l=j.a.firestore();l.collection("quizz");var u=l;var d=function(){return Object(r.jsxs)("div",{className:"horizontal",children:[Object(r.jsxs)("div",{className:"flex-vert",children:[Object(r.jsx)("p",{className:"title",children:"Multiple Choice Based"}),Object(r.jsx)("p",{className:"para",children:'Create lovely looking MCQ based Quiz with upto 4 options. Share invite link and "Quiz N GO"!'})]}),Object(r.jsx)("div",{className:"flex-vert img",children:Object(r.jsx)("img",{src:"images/intro-pic1.png",alt:""})})]})};var b=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(o,{}),Object(r.jsx)(d,{})]})},O=n(4),h=n(26),p=n(20),x=n(18),m=n(6);var f=function(e){return Object(r.jsxs)("div",{className:"question",children:[Object(r.jsx)("span",{children:e.question}),Object(r.jsx)("span",{children:e.correct}),Object(r.jsx)("span",{children:e.options})]})};var v=function(){var e=Object(c.useState)([]),t=Object(m.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)([]),j=Object(m.a)(a,2),l=j[0],d=j[1],b=Object(c.useState)({option:"",correctOption:"",newquestion:""}),O=Object(m.a)(b,2),v=O[0],g=O[1],N=Object(c.useState)(!1),q=Object(m.a)(N,2),z=q[0],S=q[1],C=Object(c.useState)(""),k=Object(m.a)(C,2),Q=k[0],y=k[1],w=function(e){var t=e.target.name,n=e.target.value;g(Object(x.a)(Object(x.a)({},v),{},Object(p.a)({},t,n)))},A=Object(c.useState)(""),T=Object(m.a)(A,2),E=T[0],I=T[1];return z?Object(r.jsx)("div",{className:"final-contain",children:Object(r.jsxs)("div",{className:"finalScore",children:[Object(r.jsx)("h3",{children:"Congrats!"}),Object(r.jsx)("p",{children:E}),Object(r.jsx)("button",{className:"leader",children:Object(r.jsx)(i.b,{to:"/quiz/".concat(E),children:"Link To Quiz"})})]})}):Object(r.jsxs)("div",{children:[Object(r.jsx)(o,{}),Object(r.jsxs)("div",{className:"bg-overlay",children:[Object(r.jsxs)("div",{className:"question-dashboard bg-overlay",children:[Object(r.jsx)(f,{question:"Question",options:"No Of Options",correct:"Correct Option"}),n.map((function(e,t){return Object(r.jsx)(f,{question:e.question,options:e.options.length,correct:e.correctAns},t)})),Object(r.jsx)("button",{className:"btn",onClick:function(){u.collection("quizzes").add({questions:n,name:Q,users:[]}).then((function(e){return I(e.id)})),S(!0)},children:"add Quiz"})]}),Object(r.jsxs)("div",{className:"form",children:[Object(r.jsx)("div",{className:"flex-vert",children:Object(r.jsx)("input",{type:"text",autoComplete:!1,value:Q,onChange:function(e){y(e.target.value)},name:"",placeholder:"Quiz Name",id:""})}),Object(r.jsxs)("div",{className:"form-vert",children:[Object(r.jsx)("input",{type:"text",autoComplete:"false",autoSave:"false",name:"newquestion",placeholder:"Enter ur Question here",value:v.newquestion,onChange:w}),Object(r.jsx)("input",{type:"text",autoComplete:!1,name:"option",placeholder:"Add ur options here",value:v.option,id:"option",onChange:w}),Object(r.jsx)("input",{type:"text",autoComplete:!1,name:"correctOption",placeholder:"Correct Ans here",value:v.correctOption,onChange:w})]}),Object(r.jsx)("div",{className:"form-vert",children:l.map((function(e,t){return Object(r.jsx)("div",{className:"option",children:e},t)}))}),Object(r.jsxs)("div",{className:"form-vert",children:[Object(r.jsx)("button",{className:"btn",onClick:function(){l.length>3?alert("A max of 4 options can be added"):(""!==v.option?d((function(e){return[].concat(Object(h.a)(e),[v.option])})):alert(" fill in option before u can add em"),g(Object(x.a)(Object(x.a)({},v),{},{option:""})))},children:"Add option"}),Object(r.jsx)("button",{className:"btn",onClick:function(){if(""!==v.newquestion&&null!==l.length&&""!==v.correctOption){if(console.log(l),l.length<2)return void alert("Specify atlesat 2 options");if(0===l.filter((function(e){return v.correctOption===e})).length)return void alert("Correct option must be provided as an option as well");s((function(e){return[].concat(Object(h.a)(e),[{question:v.newquestion,options:l,correctAns:v.correctOption}])})),console.log(l)}g({option:"",correctOption:"",newquestion:""}),d([])},children:"Add"})]})]})]})]})};var g=function(e){return Object(r.jsx)("button",{className:"gameOption",onClick:e.onclick,children:e.option})};var N=function(e){return Object(r.jsx)("div",{className:"final-contain",children:Object(r.jsxs)("div",{className:"finalScore",children:[Object(r.jsx)("h3",{children:"Congrats!"}),Object(r.jsx)("p",{children:e.score}),Object(r.jsx)("button",{className:"leader",children:Object(r.jsx)(i.b,{to:"/leaderboard/".concat(e.href),children:"Leaderboard"})})]})})};var q=function(){var e,t=Object(c.useState)(!1),n=Object(m.a)(t,2),s=n[0],a=n[1],i=Object(c.useState)([]),o=Object(m.a)(i,2),j=o[0],l=o[1],d=Object(O.g)().id,b=Object(c.useState)(0),h=Object(m.a)(b,2),p=h[0],x=h[1],f=[],v=Object(c.useState)(0),q=Object(m.a)(v,2),z=q[0],S=q[1],C=Object(c.useState)(60),k=Object(m.a)(C,2),Q=k[0],y=k[1],w=Object(c.useState)(!1),A=Object(m.a)(w,2),T=A[0],E=A[1],I=!1,J=Object(c.useState)(""),B=Object(m.a)(J,2),L=B[0],M=B[1],U=Object(c.useState)(!1),Y=Object(m.a)(U,2),D=Y[0],G=Y[1];Object(c.useEffect)((function(){return u.collection("quizzes").onSnapshot((function(e){l(e.docs.map((function(e){return{id:e.id,questions:e.data().questions,name:e.data().name,users:e.data().users}})))})),function(){E(!1),l([])}}),[]),Object(c.useEffect)((function(){e=setTimeout((function(){I||Q>0&&y(Q-1)}),1e3)}),[Q]);var R=0,Z=function(t){var n;(t.target.innerText===f[0].questions[p].correctAns&&(R=z+Math.floor(16.66666*Q),I=!0,clearTimeout(e),y(60),I=!1,S(R)),f[0].questions.length-1<=p)?(n=f[0].users,setTimeout((function(){console.log(n),n.push({user:L,score:R}),u.collection("quizzes").doc(d).update({users:n}),E(!0)}),1500)):x(p+1)};if(D){if(y(60),j.length>0)return clearTimeout(F),f=j.filter((function(e){return e.id==d})),T?Object(r.jsx)(N,{score:z,href:d}):f.length>0?Object(r.jsx)("div",{className:"contain",children:Object(r.jsxs)("div",{className:"gameQuiz",children:[Object(r.jsxs)("div",{className:"gameQuestion",children:[Object(r.jsx)("h1",{children:f[0].name}),Object(r.jsx)("p",{id:"time",children:Q}),Object(r.jsx)("p",{children:z})]}),Object(r.jsx)("p",{className:"ques",children:f[0].questions[p].question}),Object(r.jsx)("div",{className:"parent-options",children:f[0].questions[p].options.map((function(e,t){return Object(r.jsx)(g,{option:e,onclick:Z},t)}))})]})}):Object(r.jsx)(O.a,{to:"/"});var F=setTimeout((function(){a(!0)}),5e3);return s?Object(r.jsx)(O.a,{to:"/"}):Object(r.jsx)("h1",{children:"loading"})}return f=j.filter((function(e){return e.id==d})),Object(r.jsx)("div",{className:"final-contain",children:Object(r.jsxs)("div",{className:"finalScore",children:[Object(r.jsx)("h3",{children:"Enter Your Username"}),Object(r.jsx)("input",{type:"text",placeholder:"name",value:L,onChange:function(e){M(e.target.value)}}),Object(r.jsx)("button",{className:"leader",onClick:function(){console.log(f),f[0].users.filter((function(e){return e.user===L})).length>0?alert("name taken already!"):G(!0)},children:"Done"})]})})};var z=function(e){return Object(r.jsxs)("div",{className:"leaderboardScore",children:[Object(r.jsx)("span",{children:e.ind+1}),Object(r.jsx)("span",{className:"a",children:e.user}),Object(r.jsx)("span",{className:"b",children:e.score})]})};var S=function(){var e=Object(O.g)().id,t=Object(c.useState)([]),n=Object(m.a)(t,2),s=n[0],a=n[1],i=[];return Object(c.useEffect)((function(){u.collection("quizzes").onSnapshot((function(e){a(e.docs.map((function(e){return{id:e.id,questions:e.data().questions,name:e.data().name,users:e.data().users}})))}))}),[]),s.length>0?((i=s.filter((function(t){return t.id==e}))[0].users).sort((function(e,t){return t.score-e.score})),i.length>0?Object(r.jsx)("div",{className:"quizleaderboard",children:i.map((function(e,t){return Object(r.jsx)(z,{user:e.user,score:e.score,ind:t},t)}))}):Object(r.jsx)("h1",{children:"No User Has taken This Quiz Yet"})):Object(r.jsx)("h1",{children:"Loading..."})};a.a.render(Object(r.jsx)(i.a,{children:Object(r.jsxs)(O.d,{children:[Object(r.jsx)(O.b,{exact:!0,path:"/",children:Object(r.jsx)(b,{})}),Object(r.jsx)(O.b,{exact:!0,path:"/create",children:Object(r.jsx)(v,{})}),Object(r.jsx)(O.b,{path:"/quiz/:id",children:Object(r.jsxs)("div",{children:[Object(r.jsx)(o,{}),Object(r.jsx)(q,{})]})}),Object(r.jsx)(O.b,{path:"/leaderboard/:id",children:Object(r.jsxs)("div",{children:[Object(r.jsx)(o,{}),Object(r.jsx)(S,{})]})})]})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.1736264f.chunk.js.map