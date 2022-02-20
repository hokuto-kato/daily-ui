import slideToggle from "./slideToggle"

const toggle = document.querySelector("[data-nav-toggle]")
const list = document.querySelector("[data-nav-list]")
const accordionTrigger = document.querySelectorAll("[data-trigger-accordion]")
const accordionToggle = document.querySelectorAll("[data-toggle-accordion]")
const body = document.querySelector("body")
export default function(){
	toggle.addEventListener("click", () => {
		if(toggle.classList.contains("is-active")){
			body.classList.remove ("u-noscroll")
			toggle.classList.remove("is-active")
			list.classList.remove("is-active")
		} else {
			body.classList.add("u-noscroll")
			toggle.classList.add("is-active")
			list.classList.add("is-active")
		}
	})
	accordionTrigger.forEach((el) => {
		el.addEventListener("click", (e) => {
			accordionTrigger.forEach((el) => {
				el.classList.remove("is-active")
			})
			accordionToggle.forEach((el) => {
				el.classList.remove("is-active")
			})
			slideToggle(e, 200, "cubic-bezier(0.165, 0.840, 0.440, 1.000)")
		})
	})
}