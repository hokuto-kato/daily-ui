export default function() {
	const title = document.querySelector("[data-title]")
	const header = document.querySelector("[data-header]")
	let firstScrollFlag = true
	const init = () => {
		const scrollVal = window.scrollY
		console.log(scrollVal)
		if (scrollVal >= 1) {
			header.classList.remove("visually-hidden")
			header.classList.add("is-init")
		} else {
			header.classList.remove("visually-hidden")
			header.classList.remove("is-init")
		}
		if (scrollVal >= 190) {
			title.classList.add("is-init")
			title.classList.remove("visually-hidden")
		} else {
			title.classList.remove("is-init")
			title.classList.remove("visually-hidden")
		}
	}
	window.addEventListener("scroll", () => {
		if(!firstScrollFlag){
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
		}
		firstScrollFlag = false
	})
	init()
}