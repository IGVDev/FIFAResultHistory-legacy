(this.webpackJsonpfifaresults=this.webpackJsonpfifaresults||[]).push([[0],{30:function(e,t,a){e.exports=a(62)},35:function(e,t,a){},54:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(25),i=a.n(o),l=(a(35),a(6)),c=a(12),s=function(e){var t=e.hteam,a=e.ateam,n=e.id,o=e.team1,i=e.team2,l=e.hscore,c=e.ascore,s=e.winner;return r.a.createElement("div",{className:"bg-gray br3 pa3 ma2 grow bw2 shadow-5 dt dt--fixed w-auto fl"},r.a.createElement("h1",null,"Winner: ",r.a.createElement("br",null)," ",s),r.a.createElement("div",{className:"flex items-center"},r.a.createElement("img",{alt:"team1",src:"https://robohash.org/".concat(n,"?size=50x50")}),r.a.createElement("div",null,r.a.createElement("h2",null,l," - "),r.a.createElement("p",null,o," - "),r.a.createElement("p",null,t," - ")),r.a.createElement("div",null,r.a.createElement("h2",null,c),r.a.createElement("p",null,i),r.a.createElement("p",null,a)),r.a.createElement("img",{alt:"team1",src:"https://robohash.org/".concat(n+2,"?size=50x50")})))},m=function(e){var t=e.matches;return r.a.createElement("div",{className:"flex"},t.map((function(e){return r.a.createElement("div",null,r.a.createElement(s,{key:e.id,hteam:e.hteam,ateam:e.ateam,hscore:e.hscore,ascore:e.ascore,team1:e.team1,team2:e.team2,winner:e.winner}))})))},u=a(9),h=a(2),p=a(3),d=a(5),f=a(4),g=function(e){return e.hscore>e.ascore?e.hteam:e.ascore>e.hscore?e.ateam:"tie"},b=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).onOptionChange=function(e){n.setState(Object(u.a)({},e.target.id,e.target.value)),n.setState({needConfirm:!1})},n.onSubmitResult=function(){var e=n.state,t=e.hteam,a=e.ateam,r=e.team1,o=e.team2,i=e.hscore,l=e.ascore,c=e.winner;t&&a&&r&&o&&c?(fetch("https://peaceful-wildwood-69585.herokuapp.com/3001/matchload",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({hteam:t,ateam:a,team1:r,team2:o,hscore:i,ascore:l,winner:c})}).catch((function(e){return console.log("oops")})),n.setState={hteam:"",ateam:"",team1:"",team2:"",hscore:0,ascore:0,winner:"",needConfirm:!1},alert("Match loaded to database")):alert("Missing data")},n.onScoreVerification=function(){n.setState({winner:g(n.state)}),n.setState({needConfirm:!0})},n.state={hteam:"",ateam:"",team1:"",team2:"",hscore:0,ascore:0,winner:"",needConfirm:!1},n}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("article",{className:"br3 white pa3 ma2 bw1 ba shadow-5 dt dt--fixed w-auto fl"},r.a.createElement("h1",null,"Load Match"),r.a.createElement("main",{className:"b flex pa2"},r.a.createElement("div",null,r.a.createElement("p",null,"Player Name"),r.a.createElement("input",{type:"text",id:"hteam",onChange:this.onOptionChange}),r.a.createElement("p",null,"Team"),r.a.createElement("input",{type:"text",id:"team1",onChange:this.onOptionChange}),r.a.createElement("p",null,"Score"),r.a.createElement("input",{type:"number",id:"hscore",onChange:this.onOptionChange})),r.a.createElement("h2",{className:"pa3"},"VS"),r.a.createElement("div",null,r.a.createElement("p",null,"Player Name"),r.a.createElement("input",{type:"text",id:"ateam",onChange:this.onOptionChange}),r.a.createElement("p",null,"Team"),r.a.createElement("input",{type:"text",id:"team2",onChange:this.onOptionChange}),r.a.createElement("p",null,"Score"),r.a.createElement("input",{type:"number",id:"ascore",onChange:this.onOptionChange}))),r.a.createElement("h2",null,"Winner: ",this.state.winner),this.state.needConfirm?r.a.createElement("input",{className:"b br3 ph3 pv2 input-reset ba b--white white bg-green grow pointer f6 dib",type:"submit",value:"Confirm",onClick:this.onSubmitResult}):r.a.createElement("input",{className:"b br3 ph3 pv2 input-reset ba b--white white bg-transparent grow pointer f6 dib",type:"submit",value:"Submit",onClick:this.onScoreVerification}))}}]),a}(r.a.Component),E=function(e){var t=e.onRouteChange,a=e.isSignedIn,n=e.loginWithPopup,o=e.logout,i=e.username;return a?r.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement("p",{className:"f3 white pa3 absolute left-0"},"Hello ",i),r.a.createElement("p",{onClick:function(){return t("home")},className:"f3 link dim white underline pa3 pointer"},"Home"),r.a.createElement("p",{onClick:function(){return t("load")},className:"f3 link dim white underline pa3 pointer"},"Load Match"),r.a.createElement("p",{onClick:function(){return o({returnTo:window.location.origin})},className:"f3 link dim white underline pa3 pointer"},"Sign Out")):r.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement("p",{onClick:function(){return t("home")},className:"f3 link dim white underline pa3 pointer"},"Home"),r.a.createElement("p",{onClick:function(){return n()},className:"f3 link dim white underline pa3 pointer"},"Sign In"))},w=a(8),C=a.n(w),v=(n.Component,r.a.Component,r.a.Component,a(26)),S=a.n(v),O=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],o=t[1];Object(n.useEffect)((function(){C.a.get("https://peaceful-wildwood-69585.herokuapp.com/standings").then((function(e){return o(e)}))}),[]);return r.a.createElement(S.a,{title:"Standings",columns:[{name:"Name",selector:"name",sortable:!0},{name:"Points",selector:"points",sortable:!0,right:!0},{name:"P",selector:"gamesPlayed",sortable:!0,right:!0},{name:"W",selector:"gamesWon",sortable:!0,right:!0},{name:"D",selector:"gamesTied",sortable:!0,right:!0},{name:"L",selector:"gamesLost",sortable:!0,right:!0},{name:"%",selector:"winpercent",sortable:!0,right:!0},{name:"GF",selector:"goalsFor",sortable:!0,right:!0},{name:"GA",selector:"goalsAgainst",sortable:!0,right:!0},{name:"GD",selector:"goalDif",sortable:!0,right:!0}],data:a.data,theme:"dark"})},y=(a(54),a(55),a(11)),k={matches:[],route:"home",isSignedIn:!1,user:{name:"Guest",email:""}},j=function(){var e=Object(y.b)(),t=e.loginWithPopup,a=e.logout,o=e.isAuthenticated,i=e.user,s=Object(n.useState)({matches:[],route:"home",isSignedIn:o,user:{name:"Guest",email:""}}),m=Object(c.a)(s,2),u=m[0],h=m[1],p=function(e){e&&h(Object(l.a)(Object(l.a)({},u),{},{isSignedIn:o,user:{name:e.given_name,email:e.email}}))};Object(n.useEffect)((function(){p(i)}),[i]);var d;switch(u.route){case"home":d=r.a.createElement(O,null);break;case"load":d=r.a.createElement(b,null)}return r.a.createElement("div",{className:"App white"},r.a.createElement(E,{isSignedIn:u.isSignedIn,onRouteChange:function(e){"signout"===e?h(k):"home"===e&&h(Object(l.a)(Object(l.a)({},u),{},{isSignedIn:!0})),h(Object(l.a)(Object(l.a)({},u),{},{route:e}))},loginWithPopup:t,logout:a,loadUser:p,username:u.user.name}),r.a.createElement("div",{className:"flex"},d))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(y.a,{clientId:"6olnEN1eSbfsiKTF9iMFEeUJMDLY8Mtt",domain:"dev-bowof--q.us.auth0.com",redirectUri:window.location.origin},r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.56cce244.chunk.js.map