const trigger = document.querySelector("[data-trigger-cart]")
const overlay = document.querySelector("[data-overlay]")
const target = document.querySelector("[data-target-cart]")
const close = document.querySelector("[data-close]")
const body = document.querySelector("body")
export default function(){
	const fadeIn = [
		{ opacity: 0 },
		{ opacity: 1 },
	]
	const fadeOut = [
		{ opacity: 1 },
		{ opacity: 0 },
	]
	const slideIn = [
		{ transform: "translateY(100%)" },
		{ transform: "translateY(0)" },
	]
	const slideOut = [
		{ transform: "translateY(0)" },
		{ transform: "translateY(100%)" },
	]
	const timing = {
		duration: 400,
		fill: "forwards",
		easing: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
	}
	trigger.addEventListener("click", () => {
		overlay.classList.remove("visually-hidden")
		target.classList.remove("visually-hidden")
		body.classList.add("u-no-scroll")
		overlay.animate(fadeIn, timing)
		target.animate(slideIn, timing)
	})
	close.addEventListener("click", () => {
		overlay.animate(fadeOut, timing)
		target.animate(slideOut, timing).onfinish = () => {
			overlay.classList.add("visually-hidden")
			target.classList.add("visually-hidden")
			body.classList.remove("u-no-scroll")
		}
	})
}