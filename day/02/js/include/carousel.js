import Glide from "@glidejs/glide"
const glide = new Glide("[data-glide]", {
	type: "slider",
	perView: 1,
	gap: 80,
	rewind: false,
	peek: 163
})
export default function() {
	glide.mount()
}