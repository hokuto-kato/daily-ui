const img = document.querySelector("[data-img]")
const range = document.querySelector("[data-range]")
export default function(){
	range.addEventListener("input", () => {
		const value = range.value
		img.style.opacity = 1 - value
	})
}