import "../sass/app.sass"
import font from "./include/font"
import glide from "./include/glide"
import favorite from "./include/favorite"

document.addEventListener("DOMContentLoaded", () => {
	font()
	favorite()
})
window.addEventListener("load", () => {
	glide()
})