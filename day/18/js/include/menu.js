import wait from "./wait"
export default class {
	constructor() {
		this.current = document.querySelector("[data-current]")
		this.item = document.querySelectorAll("[data-item]")
		this.currentPosition = 0
		this.itemPosition = 0
		this.currentItem = ""
		this.shrink = {
			width: "22.3px",
			height: "8.4px",
		}
		this.expand = {
			width: "80px",
			height: "30px",
		}
		this.colorWhite = {
			color: "#fff",
		}
		this.colorBlack = {
			color: "#555",
		}
		this.timingSize = {
			duration: 600,
			easing: "cubic-bezier(0.230, 1.000, 0.320, 1.000)",
			fill: "forwards",
		}
		this.timingSlide = {
			duration: 600,
			easing: "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
			fill: "forwards",
		}
		this.slide = {}
		this.init()
		this.handleEvent()
	}

	shrinkObject = () => {
		return new Promise((resolve, reject) => {
			this.current.animate(this.shrink, this.timingSize).onfinish = () => {
				resolve()
			}
		})
	}
	expandObject = () => {
		return new Promise((resolve, reject) => {
			this.currentItem.animate(this.colorWhite, this.timingSize)
			this.current.animate(this.expand, this.timingSize).onfinish = () => {
				resolve()
			}
		})
	}
	slideObject = () => {
		return new Promise((resolve, reject) => {
			this.slide = [
				{ left: `${this.currentPosition}px` },
				{ left: `${this.itemPosition - 16}px` },
			]
			this.current.animate(this.slide, this.timingSlide).onfinish = () => {
				resolve()
			}
		})
	}
	startAnime = async() => {
		await this.shrinkObject()
		await this.slideObject()
		await this.expandObject()
		this.item.forEach((e) => {
			e.style.pointerEvents = "auto"
		})
	}
	init = () =>{
		this.item[0].style.color = "#fff"
	}
	handleEvent() {
		this.item.forEach((e, i) => {
			e.addEventListener("click", (e) => {
				this.item.forEach((e, i) => {
					e.style.pointerEvents = "none"
					e.animate(this.colorBlack, this.timingSize)
				})
				this.currentItem = e.currentTarget
				this.itemPosition = e.currentTarget.offsetLeft
				this.currentPosition = this.current.offsetLeft
				this.startAnime()
			})
		})
	}
}