import "../sass/app.sass"
import font from "./include/font"
import supportWebp from "./include/supportWebp"
import animation from "./include/animation"

document.addEventListener("DOMContentLoaded", function() {
	font()
	supportWebp()
})
window.addEventListener("load", function() {
	animation()
})