import sass from "../sass/app.sass"
import font from "./include/font"
import anime from "./include/anime"

document.addEventListener("DOMContentLoaded", () => {
	font()
})
window.addEventListener("load", () => {
	anime()
})