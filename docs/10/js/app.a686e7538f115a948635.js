(()=>{"use strict";document.addEventListener("DOMContentLoaded",(function(){var s,e,i,t,a,n,c,d,l,o,r;s=document,i={kitId:"yql3fop",scriptTimeout:3e3,async:!0},t=s.documentElement,a=setTimeout((function(){t.className=t.className.replace(/\bwf-loading\b/g,"")+" wf-inactive"}),i.scriptTimeout),n=s.createElement("script"),c=!1,d=s.getElementsByTagName("script")[0],t.className+=" wf-loading",n.src="https://use.typekit.net/"+i.kitId+".js",n.async=!0,n.onload=n.onreadystatechange=function(){if(e=this.readyState,!(c||e&&"complete"!==e&&"loaded"!==e)){c=!0,clearTimeout(a);try{Typekit.load(i)}catch(s){}}},d.parentNode.insertBefore(n,d),l=document.querySelector("[data-title]"),o=document.querySelector("[data-header]"),r=window.scrollY,window.addEventListener("scroll",(function(){var s=window.scrollY;s>=50?(o.classList.add("is-shrink"),o.classList.remove("is-init"),o.classList.remove("is-expand")):(o.classList.add("is-expand"),o.classList.remove("is-init"),o.classList.remove("is-shrink")),s>=190?l.classList.add("is-init"):l.classList.remove("is-init")})),r>=1?(o.classList.remove("visually-hidden"),o.classList.add("is-init")):(o.classList.remove("visually-hidden"),o.classList.remove("is-init")),r>=190?(l.classList.add("is-init"),l.classList.remove("visually-hidden")):(l.classList.remove("is-init"),l.classList.remove("visually-hidden"))}))})();