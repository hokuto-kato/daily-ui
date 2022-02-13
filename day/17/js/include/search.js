const searchTrigger = document.querySelector("[data-trigger-search]")
const searchTarget = document.querySelector("[data-target-search]")
export default function() {
	searchTrigger.addEventListener("click", () => {
		searchTarget.classList.toggle("is-active")
	})
}