const slide = document.querySelector("[data-button-slide]")
const check = document.querySelector("[data-check]")
const button = document.querySelector("[data-button]")
const thanks = document.querySelector("[data-thanks]")
const thanksBody = document.querySelector("[data-thanks-body]")
const body = document.querySelector("body")
const slideIn = [
	{
		right: "100%",
		width: "0",
	},
	{
		right: "100%",
		width: "10px",
	},
	{
		right: "100%",
		width: "0px",
	},
	{
		left: "0",
		width: "177px",
	},
]
const slideOut = [
	{
		left: "0",
		width: "177px",
	},
	{
		left: "0",
		width: "0",
	},
	{
		right: "100%",
		width: "0",
	},
]
const popUp = [
	{
		opacity: "0",
		width: "0",
		height: "0",
	},
	{
		opacity: "1",
		width: "100vw",
		height: "100vh",
	},
]
const popIn = [
	{
		opacity: "0",
	},
	{
		opacity: "1",
		fontSize: "6rem",
	},
]
const slideInTiming = {
	duration: 400,
	easing: "ease-in",
	fill: "forwards",
}
const slideOutTiming = {
	duration: 500,
	easing: "ease-out",
	fill: "forwards",
}
const popUpTiming = {
	duration: 500,
	easing: "linear",
	fill: "forwards",
}
const popInTiming = {
	duration: 200,
	easing: "ease-in",
	fill: "forwards",
}

export default function() {
	check.addEventListener("click", () => {
		if (check.checked) {
			slide.classList.remove("visually-hidden")
			slide.animate(slideIn, slideInTiming)
		} else {
			slide.animate(slideOut, slideOutTiming).onfinish = () => {
				slide.classList.add("visually-hidden")
			}
		}
	})
	button.addEventListener("click", () => {
		if (!check.checked) return
		thanks.classList.remove("visually-hidden")
		thanks.animate(popUp, popUpTiming).onfinish = () => {
			setTimeout(() => {
				thanksBody.animate(popIn, popInTiming)
			}, 100)
			body.classList.add("no-scroll")
		}
	})
}
