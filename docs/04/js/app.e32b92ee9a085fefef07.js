(()=>{"use strict";var e=document.querySelector("[data-trigger-menu]"),t=document.querySelector("[data-target-menu]"),a=document.querySelector("body");document.addEventListener("DOMContentLoaded",(function(){var s,c,n,i,r,d,o,l;s=document,n={kitId:"ymz0mwc",scriptTimeout:3e3,async:!0},i=s.documentElement,r=setTimeout((function(){i.className=i.className.replace(/\bwf-loading\b/g,"")+" wf-inactive"}),n.scriptTimeout),d=s.createElement("script"),o=!1,l=s.getElementsByTagName("script")[0],i.className+=" wf-loading",d.src="https://use.typekit.net/"+n.kitId+".js",d.async=!0,d.onload=d.onreadystatechange=function(){if(c=this.readyState,!(o||c&&"complete"!==c&&"loaded"!==c)){o=!0,clearTimeout(r);try{Typekit.load(n)}catch(e){}}},l.parentNode.insertBefore(d,l),e.addEventListener("click",(function(e){e.currentTarget.classList.contains("active")?(e.currentTarget.classList.remove("active"),t.classList.remove("active"),t.addEventListener("transitionend",(function(e){e.currentTarget.classList.add("visually-hidden"),a.classList.remove("menu-open")}),{once:!0})):(e.currentTarget.classList.add("active"),t.classList.remove("visually-hidden"),t.classList.add("active"),a.classList.add("menu-open"))}))}))})();