import $ from "jquery"
import slick from "slick-carousel"
const carousel = document.querySelector("[data-carousel]")
export default function () {
	$(carousel).slick({
		centerMode: true,
		variableWidth: true,
		slidesToShow: 1,
		arrows: false
	})
}