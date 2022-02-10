import Glide from "@glidejs/glide"
const control = document.querySelector('[data-glide-el="controls"]')
const controlItem = document.querySelectorAll("[data-glide-dir]")
const currentBar = document.querySelector("[data-glide-current]")
const glide = new Glide(".glide", {
	type: "slider",
	perView: 1,
	rewind: false,
	gap: 0,
	animationDuration: 0,
})
export default function() {
	glide.on("move", () => {
		const currentIndex = glide.index
		const parentPsotion = control.getBoundingClientRect().left
		const childPsotion = controlItem[currentIndex].getBoundingClientRect().left
		const currentLeft = childPsotion - parentPsotion
		currentBar.style.left = `${currentLeft}px`
	})
	glide.mount()
}