import "../sass/app.sass"
import font from "./include/font"
import glide from "./include/glide"
import supportWebp from "./include/supportWebp"

document.addEventListener("DOMContentLoaded", function() {
	font()
	supportWebp()
})
window.addEventListener("load", function() {
	glide()
})