import slideUp from "./slideUp"
import slideDown from "./slideDown"

export default function(e, duration, easing){
	const el = e.currentTarget.nextElementSibling
	if ((el).classList.contains("visually-hidden")) {
		slideDown(el, duration,easing)
	} else {
		slideUp(el, duration,easing)
	}
}