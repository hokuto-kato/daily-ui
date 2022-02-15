import Glide from "@glidejs/glide"
const glide = new Glide("[data-glide]", {
	type: "slider",
	perView: 1,
	gap: 40,
	rewind: false,
	peek: 72,
	animationDuration: 500,
	animationTimingFunc: "ease-out"
})
const slideItem = document.querySelectorAll("[data-glide-item]")
const bulletItem = document.querySelectorAll("[data-glide-dir]")
export default function() {
	glide.on("run", () => {
		const currentBulletItem = document.querySelector(`[data-glide-dir="=${glide.index}"]`)
		slideItem.forEach(item => {
			item.classList.remove("is-active")
		})
		slideItem[glide.index].classList.add("is-active")
		bulletItem.forEach(item => {
			item.classList.remove("is-active")
		})
		currentBulletItem.classList.add("is-active")
	})
	glide.mount()
}