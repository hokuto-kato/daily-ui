import sass from "../sass/app.sass"
import font from "./include/font"
import menu from "./include/menu"
import supportWebp from "./include/supportWebp"

document.addEventListener("DOMContentLoaded", () => {
  font()
  menu()
})
window.addEventListener("load", () => {
  supportWebp()
})