(()=>{"use strict";const t=document.querySelector("html");const e=document.querySelector("[data-typewriter]");document.addEventListener("DOMContentLoaded",(()=>{!function(t){let e,a={kitId:"fdd1npm",scriptTimeout:3e3,async:!0},n=t.documentElement,i=setTimeout((function(){n.className=n.className.replace(/\bwf-loading\b/g,"")+" wf-inactive"}),a.scriptTimeout),o=t.createElement("script"),s=!1,c=t.getElementsByTagName("script")[0];n.className+=" wf-loading",o.src="https://use.typekit.net/"+a.kitId+".js",o.async=!0,o.onload=o.onreadystatechange=function(){if(e=this.readyState,!(s||e&&"complete"!==e&&"loaded"!==e)){s=!0,clearTimeout(i);try{Typekit.load(a)}catch(t){}}},c.parentNode.insertBefore(o,c)}(document),setTimeout((()=>{t.classList.add("wf-inactive")}),3e3),function(){const t=async()=>{if(!self.createImageBitmap)return!1;const t=await fetch("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=").then((t=>t.blob()));return createImageBitmap(t).then((()=>!0),(()=>!1))};!async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"body";const a=await t()?"is-webp":"is-no-webp";document.querySelector(e).classList.add(a)}()}()})),window.addEventListener("load",(()=>{!function(){const t=async t=>new Promise((e=>{setTimeout((()=>{e()}),t)})),a=t=>new Promise(((a,n)=>{const i=t.split("");i.forEach(((t,n)=>{setTimeout((()=>{e.textContent+=t,n+1===i.length&&a()}),200*n)}))})),n=t=>new Promise(((a,n)=>{e.textContent=t,a()}));(async()=>{await a("はたらく"),await t(500),await n(""),await n("働く"),await t(1e3),await a("を"),await t(500),await a("たのしむ"),await t(500),await n("働くを楽しむ")})()}()}))})();