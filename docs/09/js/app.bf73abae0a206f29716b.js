(()=>{"use strict";var e=document.querySelector("html");function t(){var e,t,n,o,a,i,c,s=65;function c(){var e,l,d,r;t.clearRect(0,0,o,n),e="#5F4A85",l=1,d=3,r=0,t.fillStyle=e,t.globalAlpha=l,t.beginPath(),function(e,n,c){var l=e,d=Math.sin(l)/n;t.moveTo(i,s*d+a);for(var r=i;r<=o+10;r+=10)l=e+(-i+r)/s/n,d=Math.sin(l-c)/3,t.lineTo(r,s*d+a)}(c.t/.5,d,r),t.lineTo(o+10,n),t.lineTo(0,n),t.closePath(),t.fill(),c.seconds=c.seconds+.005,c.t=c.seconds*Math.PI,setTimeout(c,35)}c.seconds=0,c.t=0,(e=document.querySelector("[data-wave]")).width=document.documentElement.clientWidth,e.height=65,t=e.getContext("2d"),n=e.height,o=e.width,a=Math.floor(n/2),i=0,c()}document.addEventListener("DOMContentLoaded",(function(){var n,o,a,i,c,s,l,d;n=document,a={kitId:"yql3fop",scriptTimeout:3e3,async:!0},i=n.documentElement,c=setTimeout((function(){i.className=i.className.replace(/\bwf-loading\b/g,"")+" wf-inactive"}),a.scriptTimeout),s=n.createElement("script"),l=!1,d=n.getElementsByTagName("script")[0],i.className+=" wf-loading",s.src="https://use.typekit.net/"+a.kitId+".js",s.async=!0,s.onload=s.onreadystatechange=function(){if(o=this.readyState,!(l||o&&"complete"!==o&&"loaded"!==o)){l=!0,clearTimeout(c);try{Typekit.load(a)}catch(e){}}},d.parentNode.insertBefore(s,d),setTimeout((function(){e.classList.add("wf-inactive")}),3e3),t()}))})();