const trigger = document.querySelectorAll("[data-trigger-color]")
const target = document.querySelector("[data-target-color]")
export default function(){
	const changeText = (color) => {
		target.textContent = color
	}
	trigger.forEach((e) => {
		e.addEventListener("click", (e) => {
			changeText(e.currentTarget.getAttribute("aria-label"))
		})
	})
}