export default function() {
	const voiceNav = document.querySelector("[data-target-voice-nav]")
	const voiceList = document.querySelector("[data-target-voice-list]")
	const trigger = document.querySelector("[data-trigger]")

	trigger.addEventListener("click", (e) => {
		if (voiceNav.classList.contains("visually-hidden")) {
			trigger.style.pointerEvents = "none"
			voiceNav.classList.remove("visually-hidden")
			voiceList.classList.add("is-active")
			voiceNav.classList.add("is-active")
			voiceNav.addEventListener("transitionend", () => {
				trigger.style.pointerEvents = "auto"
			}, { once: true })
		} else {
			trigger.style.pointerEvents = "none"
			voiceList.classList.remove("is-active")
			voiceNav.classList.remove("is-active")
			voiceNav.addEventListener("transitionend", () => {
				voiceNav.classList.add("visually-hidden")
				trigger.style.pointerEvents = "auto"
			}, { once: true })
		}
	})
}