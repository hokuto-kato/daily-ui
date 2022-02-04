const menuTrigger = document.querySelector("[data-trigger-menu]")
const menuTarget = document.querySelector("[data-target-menu]")
const body = document.querySelector("body")

export default function() {
	menuTrigger.addEventListener("click", (e) => {
		if (e.currentTarget.classList.contains("active")) {
			//非アクティブ
			e.currentTarget.classList.remove("active")
			menuTarget.classList.remove("active")
			menuTarget.addEventListener("transitionend", (e) => {
				e.currentTarget.classList.add("visually-hidden")
				body.classList.remove("menu-open")
			},{once: true})
		} else {
			//アクティブ
			e.currentTarget.classList.add("active")
			menuTarget.classList.remove("visually-hidden")
			menuTarget.classList.add("active")
			body.classList.add("menu-open")
		}
	})
}
