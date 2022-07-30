import Swiper, { Pagination } from "swiper"

export default function(){
	const indexEl = document.querySelector("[data-carousel-index]")
	const countEl = document.querySelector("[data-carousel-count]")
	const wrapEl = document.querySelector("[data-carousel-wrap]")
	const itemLength = wrapEl.querySelectorAll("[data-carousel-item]").length
	const init = () => {
		countEl.textContent = itemLength.toString().padStart(2, "0")
	}
	const changeIndex = () => {
		const index = swiper.realIndex + 1
		indexEl.textContent = index.toString().padStart(2, "0")
	}
	const swiper = new Swiper(".swiper", {
		modules: [Pagination],
		loop: true,
		spaceBetween: 20,
		grabCursor: true,
		centeredSlides: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		on: {
			beforeInit: () => {
				init()
			},
		},
	})
	swiper.on("slideChange", () => {
		changeIndex()
	})
}