const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let o=null;function n(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}function l(){t.toggleAttribute("disabled"),e.toggleAttribute("disabled")}t.addEventListener("click",(()=>{n(),o=setInterval(n,1e3),l()})),e.addEventListener("click",(()=>{clearInterval(o),l()}));
//# sourceMappingURL=01-color-switcher.3c24af78.js.map