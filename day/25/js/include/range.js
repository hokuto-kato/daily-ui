const num = document.querySelector("[data-num]")
const range = document.querySelector("[data-range]")
export default function(){
	range.addEventListener("input", () => {
		num.textContent = range.value
	})
}