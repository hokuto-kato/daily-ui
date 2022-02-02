export default function(el, duration,easing) {
	const height = el.offsetHeight
	const trigger = el.previousElementSibling
	const slideUp = [
		{
			height: `${height}px`,
		},
		{
			height: "0",
			paddingTop: "0",
			paddingBottom: "0",
			marginTop: "0",
			marginBottom: "0",
		},
	]
	const slideUpTiming = {
		duration: duration,
		easing: easing,
		fill: "none",
	}

	trigger.style.pointerEvents = "none"

	el.animate(slideUp, slideUpTiming).onfinish = () => {
		trigger.style.pointerEvents = "auto"
		el.classList.add("visually-hidden")
	}
}
