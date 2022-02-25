import Swiper, { Pagination,Mousewheel,Parallax } from "swiper"
const scroll = document.querySelector('[data-scroll]')
export default function(){
	const swiper = new Swiper(".swiper", {
		modules: [Pagination, Mousewheel,Parallax],
		direction: "vertical",
		effect: "scroll",
		slidesPerView: 1,
		loop: false,
		mousewheel: true,
		grabCursor: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	})
	swiper.on("activeIndexChange",()=>{
		scroll.classList.add("visually-hidden")
	})
}