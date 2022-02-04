export default function() {
	const trigger = document.querySelector("[data-trigger-menu]")
	const targetMenu = document.querySelector("[data-target-menu]")
	const targetNav = document.querySelector("[data-target-nav]")
	const targetMenuChild = document.querySelector("[data-target-menu-child]")
	trigger.addEventListener("click", () => {
		trigger.classList.add("pointer-events-none")
		if (targetMenu.classList.contains("active")) {
			//非アクティブ
			targetMenu.classList.remove("active")
			targetMenu.classList.add("close")
			targetNav.classList.remove("active")
			targetMenuChild.classList.remove("active")
			targetMenu.addEventListener("animationend", () => {
				targetMenu.classList.remove("close")
				targetNav.classList.remove("close")
				targetNav.classList.add("visually-hidden")
				trigger.classList.remove("pointer-events-none")
			}, { once: true })
		} else {
			//アクティブ
			targetNav.classList.remove("visually-hidden")
			targetMenu.classList.add("active")
			targetMenuChild.classList.add("active")
			targetNav.classList.add("active")
			targetMenu.addEventListener("animationend", () => {
				trigger.classList.remove("pointer-events-none")
			}, { once: true })
		}
	})
}
