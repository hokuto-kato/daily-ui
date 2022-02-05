export default function() {
	const body = document.querySelector("body")
	const header = document.querySelector("[data-header]")
	const title1 = document.querySelector("[data-title-1]")
	const title2 = document.querySelector("[data-title-2]")
	const rectangle1 = document.querySelector("[data-rectangle-1]")
	const rectangle2 = document.querySelector("[data-rectangle-2]")
	const text1 = document.querySelector("[data-text-1]")
	const text2 = document.querySelector("[data-text-2]")
	const separate = document.querySelector("[data-separate]")
	const nav = document.querySelector("[data-nav]")
	const scroll = scrollY

	const shrink = () => {
		body.classList.add("is-scroll")
		header.classList.add("is-scroll")
		title1.classList.add("is-scroll")
		title2.classList.add("is-scroll")
		rectangle1.classList.add("is-scroll")
		rectangle2.classList.add("is-scroll")
		text1.classList.add("is-scroll")
		text2.classList.add("is-scroll")
		separate.classList.add("is-scroll")
		nav.classList.add("is-scroll")
	}
	const expand = () => {
		body.classList.remove("is-scroll")
		header.classList.remove("is-scroll")
		title1.classList.remove("is-scroll")
		title2.classList.remove("is-scroll")
		rectangle1.classList.remove("is-scroll")
		rectangle2.classList.remove("is-scroll")
		text1.classList.remove("is-scroll")
		text2.classList.remove("is-scroll")
		separate.classList.remove("is-scroll")
		nav.classList.remove("is-scroll")
	}
	const init = () => {
		if (scroll === 0) {
			header.classList.remove("visually-hidden")
		} else {
			shrink()
			nav.addEventListener("transitionend", (e) => {
				console.log(e)
				header.classList.remove("visually-hidden")
			})
		}
	}

	init()
	window.addEventListener("scroll", () => {
		const scroll = window.scrollY
		if (scroll > 0) {
			shrink()
		} else {
			expand()
		}
	})
}
