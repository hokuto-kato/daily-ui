import "./keyframe"
import wait from "./wait"
import { slideIn, slideOut, timing } from "./keyframe"

const splash = document.querySelector("[data-splash]")
const slide = document.querySelector("[data-slide]")
export default function() {
	const slideInAnimation = () => {
		return new Promise((resolve, reject) => {
			slide.animate(slideIn, timing).onfinish = () => {
				resolve()
			}
		})
	}
	const slideOutAnimation = () => {
		return new Promise((resolve, reject) => {
			slide.animate(slideOut, timing).onfinish = () => {
				resolve()
			}
		})
	}
	const splashHidden = () => {
		splash.style.display = "none"
	}
	const start = async() => {
		await wait(2000)
		await slideInAnimation()
		splashHidden()
		await slideOutAnimation()
	}
	start()
}