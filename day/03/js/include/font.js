import preload from "./preload"
export default function() {
	(function(d) {
		let config = {
				kitId: "pof7yrz",
				scriptTimeout: 3000,
				async: true,
			},
			h = d.documentElement, t = setTimeout(function() {
				h.className = h.className.replace(/\bwf-loading\b/g, "") +
					" wf-inactive"
			}, config.scriptTimeout), tk = d.createElement("script"), f = false,
			s = d.getElementsByTagName("script")[0], a
		h.className += " wf-loading"
		tk.src = "https://use.typekit.net/" + config.kitId + ".js"
		tk.async = true
		tk.onload = tk.onreadystatechange = function() {
			a = this.readyState
			if (f || a && a !== "complete" && a !== "loaded") return
			f = true
			clearTimeout(t)
			try {
				Typekit.load(
					{
						kitId: "pof7yrz",
						scriptTimeout: 3000,
						async: true,
						loading: function() {
							console.log("loading")
						},
						active: function() {
							console.log("active")
							preload()
						},
						inactive: function() {
							console.log("inactive")
							preload()
						},
					},
				)
			} catch (e) {}
		}
		s.parentNode.insertBefore(tk, s)
	})(document)
}