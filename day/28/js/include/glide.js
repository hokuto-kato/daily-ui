import Glide from "@glidejs/glide"
const glide = new Glide("[data-glide]", {
	type: "slider",
	perView: 1,
	rewind: false,
	rewindDuration: 0,
	animationDuration: 0,
	animationTimingFunc: "linear"
})
const bulletItem = document.querySelectorAll("[data-glide-dir]")
export default function() {
	glide.on("run", () => {
		bulletItem.forEach(item => {
			item.classList.remove("is-active")
		})
		const currentBulletItem = document.querySelector(`[data-glide-dir="=${glide.index}"]`)
		currentBulletItem.classList.add("is-active")
	})
	glide.mount()
}