import wait from "./wait.js"

const itemEm = document.querySelector("[data-indicator-item-em]")
const item = document.querySelectorAll("[data-indicator-item]")
const indicator = document.querySelector("[data-indicator]")
export default function() {
	const showEm = () => {
		return new Promise((resolve, reject) => {
			itemEm.classList.add("is-showExpand")
			itemEm.addEventListener("animationend", () => {
				resolve()
			})
		})
	}
	const showItem = () => {
		return new Promise((resolve, reject) => {
			item.forEach((e, i) => {
				setTimeout(() => {
					e.classList.add("is-showDisplay")
					if (i === item.length - 1) {
						resolve()
					}
				}, i * 50)
			})
		})
	}
	const fadeOutIndicator = () => {
		return new Promise((resolve, reject) => {
			indicator.classList.add("is-fadeOut")
			indicator.addEventListener("animationend", () => {
				resolve()
			})
		})
	}
	const init = () => {
		return new Promise((resolve, reject) => {
			itemEm.classList.remove("is-showExpand")
			indicator.classList.remove("is-fadeOut")
			item.forEach((e, i) => {
				e.classList.remove("is-showDisplay")
			})
			resolve()
		})
	}
	const scrollAnime = async() => {
		await showEm()
		await showItem()
		await wait(1000)
		await fadeOutIndicator()
		await init()
		await wait(300)
	}
	const startAnime = async() => {
		while (true) {
			await scrollAnime()
		}
	}
	startAnime()
}