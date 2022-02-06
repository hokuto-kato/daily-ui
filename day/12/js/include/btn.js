const btn = document.querySelector("[data-btn]");
const polygon = document.querySelector("[data-polygon]");
export default function() {
	btn.addEventListener("click", () => {
		btn.classList.toggle("is-active")
		polygon.classList.toggle("is-active")
	})
}