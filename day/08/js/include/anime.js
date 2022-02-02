const trigger = document.querySelectorAll("[data-trigger-accordion]")
const flash = [
	{ opacity: "1" },
	{ opacity: ".9" },
	{ opacity: "1" },
]
const rotateIn = [
	{
		transform: "rotate(90deg) translateY(-1px)",
	},
	{
		transform: "rotate(0deg) translate(1px, -1px)",

	},
]
const rotateOut = [
	{
		transform: "rotate(0deg) translate(1px, -1px)",
	},
	{
		transform: "rotate(90deg) translateY(-1px)",
	},
]
const flashTiming = {
	duration: 200,
	easing: "linear",
	fill: "none",
}
const rotateInTiming = {
	duration: 200,
	easing: "ease-in",
	fill: "forwards",
}
const rotateOutTiming = {
	duration: 200,
	easing: "ease-in",
	fill: "forwards",
}
export default function() {
	trigger.forEach(el => {
		el.addEventListener("click", (e) => {
			e.currentTarget.animate(flash, flashTiming)
			const line = e.currentTarget.querySelectorAll("[data-line]")[0]
			if (line.classList.contains("is-rotate")) {
				line.animate(rotateOut, rotateOutTiming)
				line.classList.remove("is-rotate")
			} else {
				line.animate(rotateIn, rotateInTiming)
				line.classList.add("is-rotate")
			}
		})
	})

}