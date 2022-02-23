const input = document.querySelectorAll("[data-input]")
const close = document.querySelectorAll("[data-close]")
const overlay = document.querySelector("[data-overlay]")
const trigger = document.querySelector("[data-trigger-dialog]")
const target = document.querySelector("[data-target-dialog]")

export default function(){
	const hidden = () => {
		target.classList.add("visually-hidden")
		overlay.classList.add("visually-hidden")
		target.removeEventListener("transitionend", hidden)
	}
	close.forEach((i) => {
		i.addEventListener("click", () => {
			target.classList.remove("is-active")
			overlay.classList.remove("is-active")
			target.addEventListener("transitionend", hidden)
		})
	})
	trigger.addEventListener("click", () => {
		overlay.classList.remove("visually-hidden")
		overlay.classList.add("is-active")
		target.classList.remove("visually-hidden")
		target.classList.add("is-active")
	})
	input.forEach((i) => {
		i.addEventListener("focusin", (e) => {
			const placeholder = i.nextElementSibling
			e.currentTarget.classList.add("is-active")
			placeholder.classList.add("is-active")
		})
		i.addEventListener("focusout", (e) => {
			const placeholder = i.nextElementSibling
			if (e.currentTarget.value.length === 0) {
				e.currentTarget.classList.remove("is-active")
				placeholder.classList.remove("is-active")
			}
		})
	})
}