import slideToggle from "./slideToggle"
const trigger = document.querySelectorAll("[data-trigger-accordion]")

export default function() {
	trigger.forEach((el) => {
		el.addEventListener("click", (e) => {
			slideToggle(e, 300, "ease-out")
		})
	})
}
