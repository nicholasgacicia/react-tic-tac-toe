(this["webpackJsonpreact-tic-tac-toe"]=this["webpackJsonpreact-tic-tac-toe"]||[]).push([[0],{17:function(e,c,t){},18:function(e,c,t){"use strict";t.r(c);var i=t(1),n=t(11),a=t.n(n),s=t(10),l=t(6),r=t(20),o=t(21),j=t(22);function h(e){for(var c=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],t=0;t<c.length;t++){var i=Object(l.a)(c[t],3),n=i[0],a=i[1],s=i[2];if(e[n]&&e[n]===e[a]&&e[n]===e[s])return e[n]}return null}console.log(h([null,null,null,"X","X","X",null,null,null]));var b=t(0),d={background:"lightblue",border:"1px solid darkred",fontSize:"40px",fontWeight:"900",cursor:"pointer",outline:"none"},O=function(e){var c=e.value,t=e.onClick;return Object(b.jsx)("button",{style:d,onClick:t,children:c})},u={border:"4px solid darkred",borderRadius:"10px",width:"300px",height:"300px",margin:"0 auto",display:"grid",gridTemplate:"repeat(3, 1fr) / repeat(3, 1fr)"},x=function(e){var c=e.squares,t=e.onClick;return Object(b.jsx)("div",{style:u,children:c.map((function(e,c){return Object(b.jsx)(O,{value:e,onClick:function(){return t(c)}},c)}))})},m={margin:"0px auto",textAlign:"left"},f=function(){var e=Object(i.useState)([Array(9).fill(null)]),c=Object(l.a)(e,2),t=c[0],n=c[1],a=Object(i.useState)(0),d=Object(l.a)(a,2),O=d[0],u=d[1],f=Object(i.useState)(!0),p=Object(l.a)(f,2),g=p[0],w=p[1],v=h(t[O]);return Object(b.jsx)(r.a,{children:Object(b.jsxs)(o.a,{children:[Object(b.jsx)(j.a,{}),Object(b.jsxs)(j.a,{xs:5,children:[Object(b.jsx)(x,{className:"board",squares:t[O],onClick:function(e){var c=t.slice(0,O+1),i=c[O],a=Object(s.a)(i);v||a[e]||(a[e]=g?"X":"O",n([].concat(Object(s.a)(c),[a])),u(c.length),w(!g))}}),Object(b.jsx)("p",{children:Object(b.jsx)("strong",{children:v?"Winner: "+v:"Next Player: "+(g?"X":"O")})})]}),Object(b.jsx)(j.a,{children:Object(b.jsx)("div",{style:m,children:t.map((function(e,c){var t=c?"Go to move #".concat(c):"Go to start";return Object(b.jsx)("li",{className:"li",children:Object(b.jsx)("button",{className:"btn btn-outline-danger",onClick:function(){return u(e=c),void w(e%2===0);var e},children:t})},c)}))})})]})})},p=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("footer",{children:[Object(b.jsxs)("div",{className:"social",children:[Object(b.jsx)("a",{href:"https://www.linkedin.com/in/nicholas-gacicia/",children:Object(b.jsx)("i",{className:"icon ion-social-linkedin"})}),Object(b.jsx)("a",{href:"https://github.com/nicholasgacicia",children:Object(b.jsx)("i",{className:"icon ion-social-github"})}),Object(b.jsx)("a",{href:"https://twitter.com/NicholasGacicia",children:Object(b.jsx)("i",{className:"icon ion-social-twitter"})}),Object(b.jsx)("a",{href:"https://www.facebook.com/NicholasGacicia/",children:Object(b.jsx)("i",{className:"icon ion-social-facebook"})}),Object(b.jsx)("a",{href:"https://www.instagram.com/nicholasgacicia/",children:Object(b.jsx)("i",{className:"icon ion-social-instagram"})})]}),Object(b.jsxs)("ul",{className:"list-inline",children:[Object(b.jsx)("li",{className:"list-inline-item",children:Object(b.jsx)("a",{href:"https://www.nicholasgacicia.com/#home",children:"Home"})}),Object(b.jsx)("li",{className:"list-inline-item",children:Object(b.jsx)("a",{href:"https://www.nicholasgacicia.com/#about",children:"About"})}),Object(b.jsx)("li",{className:"list-inline-item",children:Object(b.jsx)("a",{href:"https://www.nicholasgacicia.com/#services",children:"Services"})}),Object(b.jsx)("li",{className:"list-inline-item",children:Object(b.jsx)("a",{href:"https://www.nicholasgacicia.com/#portfolio",children:"Portfolio"})}),Object(b.jsx)("li",{className:"list-inline-item",children:Object(b.jsx)("a",{href:"https://www.nicholasgacicia.com/#contact",children:"Contact"})})]}),Object(b.jsx)("p",{className:"copyright",children:"Nicholas Gacicia \xa9 2021, All Right Reserved"})]})})},g=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("header",{className:"header",children:Object(b.jsx)("h1",{children:"Tic-Tac-Toe"})})})};t(17);var w=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(g,{}),Object(b.jsx)("main",{children:Object(b.jsx)(f,{})}),Object(b.jsx)(p,{})]})};a.a.render(Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(w,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.1e351410.chunk.js.map