import $ from "jquery"
export default function () {
	// // adobe font
	(function(d) {
		let config = {
				kitId: 'rwe8vjc',
				scriptTimeout: 3000,
				async: true
			},
			h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!=="complete"&&a!=="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
	})(document);

	// adobe font ロード完了後にページを表示する設定。
	// 低速回線でロードが完了しない場合に
	// 3秒後に強制的にページを表示させるためのclassをhtmlタグに付与
	setTimeout(() => {
		$("html").addClass("loading-delay")
	}, 3000)
}
