import sass from "../sass/app.sass"
import font from "./include/font"
import carousel from "./include/carousel"
import supportWebp from "./include/supportWebp"

document.addEventListener("DOMContentLoaded", () => {
	font()
	carousel()
	supportWebp()
})