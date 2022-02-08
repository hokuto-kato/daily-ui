import sass from "../sass/app.sass"
import font from "./include/font"
import type from "./include/type"
import supportWebp from "./include/supportWebp"

document.addEventListener("DOMContentLoaded", () => {
	font()
	supportWebp()
})
window.addEventListener("load", () => {
	type()
})