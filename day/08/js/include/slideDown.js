export default function(currentTargetEl, duration, easing) {
	const targetAll = document.querySelectorAll("[data-target-accordion]")
	currentTargetEl.classList.remove("visually-hidden")
	const trigger = currentTargetEl.previousElementSibling
	trigger.style.pointerEvents = "none"
	const height = currentTargetEl.offsetHeight
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
	const slideDown = [
		{
			height: "0",
			paddingTop: "0",
			paddingBottom: "0",
			marginTop: "0",
			marginBottom: "0",
			overflow: "hidden",
		},
		{
			height: `${height}px`,
			overflow: "hidden",
		},
	]
	const slideDownTiming = {
		duration: duration,
		easing: easing,
		fill: "forwards",
	}
	const rotateOut = [
		{
			transform: "rotate(0deg) translate(1px, -1px)",
		},
		{
			transform: "rotate(90deg) translateY(-1px)",
		},
	]
	const rotateOutTiming = {
		duration: 200,
		easing: "ease-in",
		fill: "forwards",
	}

	targetAll.forEach((targetAllEl) => {
		if (targetAllEl !== currentTargetEl) {
			if (!targetAllEl.classList.contains("visually-hidden")) {
				targetAllEl.previousElementSibling.children[1].children[1].animate(rotateOut,rotateOutTiming)
				targetAllEl.animate(slideUp, slideUpTiming).onfinish = () => {
					trigger.style.pointerEvents = "auto"
					targetAllEl.classList.add("visually-hidden")
				}
			}
		}
	})

	currentTargetEl.animate(slideDown, slideDownTiming).onfinish = () => {
		trigger.style.pointerEvents = "auto"
	}
}
