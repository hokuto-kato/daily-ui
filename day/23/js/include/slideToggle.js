import slideUp from "./slideUp"
import slideDown from "./slideDown"

export default function(e, duration, easing){
	if(!e) return
	const el = e.currentTarget.nextElementSibling
	const trigger = e.currentTarget
	const toggle = e.currentTarget.querySelector("[data-toggle-accordion]")
	if ((el).classList.contains("visually-hidden")) {
		toggle.classList.add("is-active")
		trigger.classList.add("is-active")
		slideDown(el, duration, easing)
	} else {
		toggle.classList.remove("is-active")
		trigger.classList.remove("is-active")
		slideUp(el, duration, easing)
	}
}