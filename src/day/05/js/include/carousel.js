import $ from "jquery"
import slick from "slick-carousel"

const $carousel = $("[data-carousel]")
const $carouselDot = $("[data-carousel-dot]")
const $carouselIndex = $("[data-caounsel-index]")
const $carouselCount = $("[data-caounsel-count]")
let carouselIndex = 0
let carouselCount = 0
let carouselIndexPad = 0
let carouselCountPad = 0

export default function() {
	const setIndicatorNum = () => {
		$carouselIndex.text(carouselIndexPad)
		$carouselCount.text(carouselCountPad)
	}
	$carousel.on("init", (event, slick) => {
		carouselIndex = slick.currentSlide + 1
		carouselIndexPad = String(carouselIndex).padStart(2, "0")
		carouselCount = slick.slideCount
		carouselCountPad = String(carouselCount).padStart(2, "0")
		setIndicatorNum()
	})
	$carousel.on("afterChange", (event, slick) => {
		carouselIndex = slick.currentSlide + 1
		carouselIndexPad = String(carouselIndex).padStart(2, "0")
		setIndicatorNum()
	})
	$carousel.slick({
		dots: true,
		dotsClass: "carousel__indicator--dot-body",
		appendDots: $carouselDot,
		variableWidth: false,
		centerPadding: "10%",
		centerMode: false,
		slidesToShow: true,
		arrows: false,
		customPaging: function(slider, i) {
			return $(`<button type="button" />`)
		},
	})
}