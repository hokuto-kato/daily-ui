import { slideIn, slideOut, expand, shrink, heartOn, heartOff, timing } from "./anime"
const favorite = document.querySelector("[data-favorite]")
const favoriteNum = document.querySelector("[data-favorite-num]")
const button = document.querySelector("[data-button]")
const buttonBody = document.querySelector("[data-button-body]")
const buttonBg = document.querySelector("[data-button-bg]")
export default function() {
	if (!window.localStorage) return
	const key = "isFavorite"
	const val = "true"
	const init = () => {
		let getValue = window.localStorage.getItem(key)
		if (getValue) {
			favorite.classList.add("is-favorite")
			button.classList.add("is-favorite")
			favorite.classList.remove("visually-hidden")
			button.classList.remove("visually-hidden")
			buttonBody.textContent = "お気に入りを解除"
		} else {
			favorite.classList.remove("visually-hidden")
			button.classList.remove("visually-hidden")
			buttonBody.textContent = "お気に入りを登録"
		}
	}
	button.addEventListener("click", () => {
		let getValue = window.localStorage.getItem(key)
		if (getValue) {
			window.localStorage.removeItem(key)
			buttonBody.textContent = "お気に入りを登録"
			buttonBg.animate(slideOut, timing)
			favoriteNum.animate(shrink, timing)
			favorite.animate(heartOff, timing)
		} else {
			window.localStorage.setItem(key, val)
			buttonBody.textContent = "お気に入りを解除"
			buttonBg.animate(slideIn, timing)
			favoriteNum.animate(expand, timing)
			favorite.animate(heartOn, timing)
		}
	})
	init()
}