(()=>{"use strict";const e=document.querySelector("html");const t=document.querySelector("[data-trigger-menu]"),a=document.querySelector("[data-target-menu]"),s=document.querySelector("body");document.addEventListener("DOMContentLoaded",(()=>{!function(e){let t,a={kitId:"ymz0mwc",scriptTimeout:3e3,async:!0},s=e.documentElement,n=setTimeout((function(){s.className=s.className.replace(/\bwf-loading\b/g,"")+" wf-inactive"}),a.scriptTimeout),c=e.createElement("script"),i=!1,o=e.getElementsByTagName("script")[0];s.className+=" wf-loading",c.src="https://use.typekit.net/"+a.kitId+".js",c.async=!0,c.onload=c.onreadystatechange=function(){if(t=this.readyState,!(i||t&&"complete"!==t&&"loaded"!==t)){i=!0,clearTimeout(n);try{Typekit.load(a)}catch(e){}}},o.parentNode.insertBefore(c,o)}(document),setTimeout((()=>{e.classList.add("af-inactive")}),3e3),t.addEventListener("click",(e=>{e.currentTarget.classList.contains("active")?(e.currentTarget.classList.remove("active"),a.classList.remove("active"),a.addEventListener("transitionend",(e=>{e.currentTarget.classList.add("visually-hidden"),s.classList.remove("menu-open")}),{once:!0})):(e.currentTarget.classList.add("active"),a.classList.remove("visually-hidden"),a.classList.add("active"),s.classList.add("menu-open"))}))})),window.addEventListener("load",(()=>{!function(){const e=async()=>{if(!self.createImageBitmap)return!1;const e=await fetch("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=").then((e=>e.blob()));return createImageBitmap(e).then((()=>!0),(()=>!1))};!async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"body";const a=await e()?"is-webp":"is-no-webp";document.querySelector(t).classList.add(a)}()}()}))})();