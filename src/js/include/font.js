import $ from "jquery"
export default function () {
	// adobe font
	((d) => {
		let config = {
				kitId: "tlm4ljk",
				scriptTimeout: 3000,
				async: true,
			},
			h = d.documentElement,
			t = setTimeout(() => {
				h.className =
					h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive"
			}, config.scriptTimeout),
			tk = d.createElement("script"),
			f = false,
			s = d.getElementsByTagName("script")[0],
			a
		h.className += " wf-loading"
		tk.src = "https://use.typekit.net/" + config.kitId + ".js"
		tk.async = true
		tk.onload = tk.onreadystatechange = function () {
			a = this.readyState
			if (f || (a && a !== "complete" && a !== "loaded")) return
			f = true
			clearTimeout(t)
			try {
				Typekit.load(config)
			} catch (e) {}
		}
		s.parentNode.insertBefore(tk, s)
	})(document)

	// adobe font ロード完了後にページを表示する設定のため
	// 低速回線用に3秒後にページを表示させるためのclassをhtmlタグに付与
	setTimeout(() => {
		$("html")[0].addClass("loading-delay")
	}, 3000)
}
