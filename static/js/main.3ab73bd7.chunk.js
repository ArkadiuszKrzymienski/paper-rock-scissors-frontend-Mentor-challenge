(this["webpackJsonppaper-rock-scissors"]=this["webpackJsonppaper-rock-scissors"]||[]).push([[0],{28:function(e,s,c){},29:function(e,s,c){"use strict";c.r(s);var t=c(0),r=c.n(t),o=c(16),n=c.n(o),a=c(10),i=c(7),l=c(2),j=c(1),d=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("footer",{children:Object(j.jsx)("button",{className:"rules",children:"Rules"})})})},u=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("header",{className:"top-panel",children:[Object(j.jsxs)("h1",{children:[Object(j.jsx)("span",{children:"Rock"}),Object(j.jsx)("span",{children:"Paper"}),Object(j.jsx)("span",{children:"Scissors"})]}),Object(j.jsxs)("div",{className:"result-panel",children:[Object(j.jsx)("p",{children:"Score"}),Object(j.jsx)("h2",{className:"score",children:"0"})]})]})})},b=["rock","paper","scissors"],h=0,p=function(e){var s=e.setPlayerChoose,c=e.setCounter,r=e.setWin,o=e.setBotChoose,n=function(e){var t=e.target.dataset.id;s(t);var n=b[Math.floor(3*Math.random())];o(n),console.log(t,n,h),"rock"===t&&"paper"===n?(--h,c(h),r("Lose")):"rock"===t&&"scissors"===n?(++h,c(h),r("Win")):"paper"===t&&"scissors"===n?(--h,c(h),r("Lose")):"paper"===t&&"rock"===n?(++h,c(h),r("Win")):"scissors"===t&&"rock"===n?(--h,c(h),r("Lose")):"scissors"===t&&"paper"===n?(++h,c(h),r("Win")):r("Draw")};return Object(t.useEffect)((function(){document.querySelector(".score").innerHTML=h}),[]),Object(j.jsxs)("div",{className:"start-container",children:[Object(j.jsx)(i.b,{to:"/result","data-id":"paper",className:"option paper",onClick:n}),Object(j.jsx)(i.b,{to:"/result","data-id":"scissors",className:"option scissors",onClick:n}),Object(j.jsx)(i.b,{to:"/result","data-id":"rock",className:"option rock",onClick:n})]})},O=r.a.memo(p),x=function(e){var s=e.playerChoose,c=e.botChoose,r=e.win;return Object(t.useEffect)((function(){setTimeout((function(){document.querySelector(".hide").classList=c+" ".concat("Lose"===r?"win":null),document.querySelector(".result-container h3").style.color="white",document.querySelector(".result-container a").style.backgroundColor="white",document.querySelector(".result-container a").style.color="hsl(237, 49%, 15%)",document.querySelector(".playerChoose").classList=s+" ".concat("Win"===r?"win":null)}),2e3)}),[]),Object(j.jsxs)("div",{className:"result-container",children:[Object(j.jsxs)("div",{className:"circles",children:[Object(j.jsxs)("div",{className:"circle",children:[Object(j.jsx)("div",{className:"playerChoose ".concat(s)}),Object(j.jsx)("p",{children:"You picked"})]}),Object(j.jsxs)("div",{className:"circle",children:[Object(j.jsx)("div",{className:"hide"}),Object(j.jsx)("p",{children:"The house picked"})]})]}),Object(j.jsx)("h3",{style:{color:"transparent"},children:"Lose"===r||"Win"===r?"You ".concat(r):"Draw"}),Object(j.jsx)(i.b,{to:"/",className:"again",style:{backgroundColor:"transparent",color:"transparent"},children:"Play again"})]})};c(28);var m=function(){var e=Object(t.useState)(""),s=Object(a.a)(e,2),c=s[0],r=s[1],o=Object(t.useState)(""),n=Object(a.a)(o,2),b=n[0],h=n[1],p=Object(t.useState)(""),m=Object(a.a)(p,2),y=m[0],k=m[1],C=Object(t.useState)(0),f=Object(a.a)(C,2),v=(f[0],f[1]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u,{}),Object(j.jsx)("div",{className:"game-container",children:Object(j.jsx)(i.a,{children:Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{exact:!0,path:"/",children:Object(j.jsx)(O,{setPlayerChoose:r,playerChoose:c,setCounter:v,setWin:k,setBotChoose:h})}),Object(j.jsx)(l.a,{path:"/result",children:Object(j.jsx)(x,{win:y,botChoose:b,playerChoose:c})})]})})}),Object(j.jsx)(d,{})]})};n.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.3ab73bd7.chunk.js.map