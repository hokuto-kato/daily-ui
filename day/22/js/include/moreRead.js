const trigger = document.querySelector("[data-trigger-more]")
const wrap = document.querySelector("[data-trigger-more-wrap]")
const target = document.querySelector("[data-target-more]")
export default function() {
	const getHeight = () => {
		target.style.height = "auto"
		const height = target.clientHeight
		target.style.height = "323px"
		return height
	}
	const expand = [
		{height: "323px"},
		{height: `${getHeight()}px`},
	]
	const timing = {
		duration: 400,
		easing: "ease-out",
		fill: "forwards"
	}
	trigger.addEventListener("click", () => {
		target.animate(expand, timing)
		wrap.style.display = "none"
	})
}