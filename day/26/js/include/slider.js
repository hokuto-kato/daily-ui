const color = document.querySelector("[data-color]")
const slider = document.querySelector("[data-slider]")
const switcher = document.querySelector("[data-switch]")
const bar = document.querySelector("[data-bar]")
export default function(){
	slider.addEventListener("click",()=>{
		if (color.classList.contains("is-active")){
			color.classList.remove("is-active")
			switcher.classList.remove("is-active")
			bar.classList.remove("is-active")
			switcher.textContent = "OFF"
		} else {
			color.classList.add("is-active")
			switcher.classList.add("is-active")
			bar.classList.add("is-active")
			switcher.textContent = "ON"
		}
	})
}