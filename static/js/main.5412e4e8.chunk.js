(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{49:function(e,n,t){},50:function(e,n,t){},85:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t(0),i=t.n(c),o=t(38),a=t.n(o),u=(t(49),t(21)),l=(t(50),t(39)),s=t(40),d=t(42);function b(){var e=Object(s.a)(["\n  width: 25px;\n  height: 25px;\n  border: 1px solid white;\n  background-color: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return b=function(){return e},e}var f=["\ud83c\udf53","\ud83c\udf47","\ud83c\udf48","\ud83c\udf49","\ud83c\udf4a","\ud83c\udf4b","\ud83c\udf4c","\ud83c\udf4d","\ud83e\udd6d","\ud83c\udf4e","\ud83c\udf4f","\ud83c\udf50","\ud83c\udf51","\ud83c\udf52"],j=d.a.div(b(),(function(e){return e.tile.player?e.playerId===e.tile.player.id?"deepskyblue":"white":"rgba(0,0,0,0)"})),p=function(e){var n=e.children,t=e.tile,i=e.playerId,o=Object(c.useMemo)((function(){return f[Math.floor(Math.random()*f.length)]}),[]);return Object(r.jsxs)(j,{tile:t,playerId:i,children:[t.fruit&&o,n]})},w=t(22),y=t(23);function O(e,n){var t=Object(c.useCallback)((function(t){var r=t.key,c=Object(y.a)(t,["key"]);r===e&&n(Object(w.a)({key:r},c))}),[e,n]),r=Object(c.useCallback)((function(t){var r=t.key,c=Object(y.a)(t,["key"]);r===e&&n(Object(w.a)({key:r},c))}),[e,n]);Object(c.useEffect)((function(){return window.addEventListener("keydown",t),window.addEventListener("keyup",r),function(){window.removeEventListener("keydown",t),window.removeEventListener("keyup",r)}}),[t,r])}var v=new l.Manager("ws://192.168.15.61:4000").socket("/");var h=function(){var e=Object(c.useState)(),n=Object(u.a)(e,2),t=n[0],i=n[1],o=Object(c.useState)(null),a=Object(u.a)(o,2),l=a[0],s=a[1],d=Object(c.useRef)(v);Object(c.useEffect)((function(){d.current.io.on("connect",(function(){console.log("connect ".concat(d.current.id))})),d.current.io.on("error",(function(e){console.error(e)}))}),[]),Object(c.useEffect)((function(){d.current.on("game-status",(function(e){console.log(e),null!==e.winner&&"string"===typeof e.winner&&s("draw"===e.winner?"draw":e.winner===d.current.id?"win":"lose"),i(e.board)}))}),[]);var b=Object(c.useCallback)((function(e){d.current.emit("move-player",d.current.id,"left")}),[]),f=Object(c.useCallback)((function(e){d.current.emit("move-player",d.current.id,"right")}),[]),j=Object(c.useCallback)((function(e){d.current.emit("move-player",d.current.id,"up")}),[]),w=Object(c.useCallback)((function(e){d.current.emit("move-player",d.current.id,"down")}),[]);return O("ArrowLeft",b),O("ArrowRight",f),O("ArrowUp",j),O("ArrowDown",w),console.log(l),Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)("header",{className:"App-header",children:[Object(r.jsx)("div",{children:null!==l&&("draw"===l?"Draw":"win"===l?"You Win":"You Lose")}),Object(r.jsx)("div",{style:{display:"flex"},children:t&&t.map((function(e,n){return Object(r.jsx)("div",{children:e.map((function(e,n){return Object(r.jsx)(p,{tile:e,playerId:d.current.id},n)}))},n)}))})]})})};a.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(h,{})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.5412e4e8.chunk.js.map