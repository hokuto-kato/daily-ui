(()=>{"use strict";var t=document.querySelector("[data-button-slide]"),e=document.querySelector("[data-check]"),i=document.querySelector("[data-button]"),a=document.querySelector("[data-thanks]"),n=document.querySelector("[data-thanks-body]"),d=document.querySelector("body"),o=[{right:"100%",width:"0"},{right:"100%",width:"10px"},{right:"100%",width:"0px"},{left:"0",width:"177px"}],c=[{left:"0",width:"177px"},{left:"0",width:"0"},{right:"100%",width:"0"}],s=[{opacity:"0",width:"0",height:"0"},{opacity:"1",width:"100vw",height:"100vh"}],r=[{opacity:"0"},{opacity:"1",fontSize:"6rem"}],l={duration:400,easing:"ease-in",fill:"forwards"},u={duration:500,easing:"ease-out",fill:"forwards"},h={duration:500,easing:"linear",fill:"forwards"},m={duration:200,easing:"ease-in",fill:"forwards"};document.addEventListener("DOMContentLoaded",(function(){var f,y,p,w,g,k,v,L;f=document,p={kitId:"ukk7tpt",scriptTimeout:3e3,async:!0},w=f.documentElement,g=setTimeout((function(){w.className=w.className.replace(/\bwf-loading\b/g,"")+" wf-inactive"}),p.scriptTimeout),k=f.createElement("script"),v=!1,L=f.getElementsByTagName("script")[0],w.className+=" wf-loading",k.src="https://use.typekit.net/"+p.kitId+".js",k.async=!0,k.onload=k.onreadystatechange=function(){if(y=this.readyState,!(v||y&&"complete"!==y&&"loaded"!==y)){v=!0,clearTimeout(g);try{Typekit.load(p)}catch(t){}}},L.parentNode.insertBefore(k,L),e.addEventListener("click",(function(){e.checked?(t.classList.remove("visually-hidden"),t.animate(o,l)):t.animate(c,u).onfinish=function(){t.classList.add("visually-hidden")}})),i.addEventListener("click",(function(){e.checked&&(a.classList.remove("visually-hidden"),a.animate(s,h).onfinish=function(){setTimeout((function(){n.animate(r,m)}),100),d.classList.add("no-scroll")})}))}))})();