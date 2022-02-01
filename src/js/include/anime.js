const textBg = document.querySelectorAll("[data-text-bg]")
const img = document.querySelector("[data-img]")
const slideDown = [
	{ height: "0" },
	{ height: "100%" },
]
const slideDownTiming = {
	duration: 800,
	easing: "cubic-bezier(.1,.71,.21,1)",
	fill: "forwards",
}
const fadeIn = [
	{ opacity: "0" },
	{ opacity: "1" },
]
const fadeInTiming = {
	duration: 800,
	easing: "cubic-bezier(.1,.71,.21,1)",
	fill: "forwards",
}
export default function() {
	setTimeout(() => {
		textBg.forEach((el)=>{
			el.animate(slideDown, slideDownTiming)
		})
		img.animate(fadeIn, fadeInTiming)
	},500)
}