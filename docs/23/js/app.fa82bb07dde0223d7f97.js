(()=>{"use strict";const e=document.querySelector("html");function t(e,t,i){if(!e)return;const a=e.currentTarget.nextElementSibling,n=e.currentTarget,s=e.currentTarget.querySelector("[data-toggle-accordion]");a.classList.contains("visually-hidden")?(s.classList.add("is-active"),n.classList.add("is-active"),function(e,t,i){const a=document.querySelectorAll("[data-target-accordion]");e.classList.remove("visually-hidden");const n=e.previousElementSibling;n.style.pointerEvents="none";const s=e.offsetHeight,o=[{height:"".concat(s,"px")},{height:"0",paddingTop:"0",paddingBottom:"0",marginTop:"0",marginBottom:"0"}],c={duration:t,easing:i,fill:"none"},l=[{height:"0",paddingTop:"0",paddingBottom:"0",marginTop:"0",marginBottom:"0",overflow:"hidden"},{height:"".concat(s,"px"),overflow:"hidden"}],r={duration:t,easing:i,fill:"forwards"};a.forEach((t=>{t!==e&&(t.classList.contains("visually-hidden")||(t.animate(o,c).onfinish=()=>{n.style.pointerEvents="auto",t.classList.add("visually-hidden")}))})),e.animate(l,r).onfinish=()=>{n.style.pointerEvents="auto"}}(a,t,i)):(s.classList.remove("is-active"),n.classList.remove("is-active"),function(e,t,i){const a=e.offsetHeight,n=e.previousElementSibling,s=[{height:"".concat(a,"px")},{height:"0",paddingTop:"0",paddingBottom:"0",marginTop:"0",marginBottom:"0"}],o={duration:t,easing:i,fill:"none"};n.style.pointerEvents="none",e.animate(s,o).onfinish=()=>{n.style.pointerEvents="auto",e.classList.add("visually-hidden")}}(a,t,i))}const i=document.querySelector("[data-nav-toggle]"),a=document.querySelector("[data-nav-list]"),n=document.querySelectorAll("[data-trigger-accordion]"),s=document.querySelectorAll("[data-toggle-accordion]"),o=document.querySelector("body");document.addEventListener("DOMContentLoaded",(function(){!function(e){let t,i={kitId:"yfe4qeu",scriptTimeout:3e3,async:!0},a=e.documentElement,n=setTimeout((function(){a.className=a.className.replace(/\bwf-loading\b/g,"")+" wf-inactive"}),i.scriptTimeout),s=e.createElement("script"),o=!1,c=e.getElementsByTagName("script")[0];a.className+=" wf-loading",s.src="https://use.typekit.net/"+i.kitId+".js",s.async=!0,s.onload=s.onreadystatechange=function(){if(t=this.readyState,!(o||t&&"complete"!==t&&"loaded"!==t)){o=!0,clearTimeout(n);try{Typekit.load(i)}catch(e){}}},c.parentNode.insertBefore(s,c)}(document),setTimeout((()=>{e.classList.add("wf-inactive")}),3e3),i.addEventListener("click",(()=>{i.classList.contains("is-active")?(o.classList.remove("u-noscroll"),i.classList.remove("is-active"),a.classList.remove("is-active")):(o.classList.add("u-noscroll"),i.classList.add("is-active"),a.classList.add("is-active"))})),n.forEach((e=>{e.addEventListener("click",(e=>{n.forEach((e=>{e.classList.remove("is-active")})),s.forEach((e=>{e.classList.remove("is-active")})),t(e,200,"cubic-bezier(0.165, 0.840, 0.440, 1.000)")}))})),t()}))})();