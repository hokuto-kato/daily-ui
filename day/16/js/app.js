import "../sass/app.sass"
import font from "./include/font"
import supportWebp from "./include/supportWebp"
import anime from "./include/anime"

document.addEventListener("DOMContentLoaded", () => {
	font()
	supportWebp()
})
window.addEventListener("load", () => {
	anime()
})