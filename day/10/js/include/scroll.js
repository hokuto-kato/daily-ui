export default function() {
	const title = document.querySelector("[data-title]")
	const header = document.querySelector("[data-header]")
	const pageTopPosition = window.scrollY
	const init = () => {
		if (pageTopPosition >= 1) {
			header.classList.remove("visually-hidden")
			header.classList.add("is-init")
		} else {
			header.classList.remove("visually-hidden")
			header.classList.remove("is-init")
		}
		if (pageTopPosition >= 190) {
			title.classList.add("is-init")
			title.classList.remove("visually-hidden")
		} else {
			title.classList.remove("is-init")
			title.classList.remove("visually-hidden")
		}
	}
	window.addEventListener("scroll", () => {
		const scrollVal = window.scrollY
		if (scrollVal >= 50) {
			header.classList.add("is-shrink")
			header.classList.remove("is-init")
			header.classList.remove("is-expand")
		} else {
			header.classList.add("is-expand")
			header.classList.remove("is-init")
			header.classList.remove("is-shrink")
		}
		if (scrollVal >= 190) {
			title.classList.add("is-init")
		} else {
			title.classList.remove("is-init")
		}
	})
	init()
}