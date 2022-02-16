import "../sass/app.sass"
import font from "./include/font"
import serviceWorker from "./include/serviceWorker"

document.addEventListener("DOMContentLoaded", function() {
	font()
})
window.addEventListener("load", () => {
	serviceWorker()
})
