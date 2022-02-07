const typeElement = document.querySelector("[data-typewriter]")
export default function() {
	const wait = async(ms) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve()
			}, ms)
		})
	}
	const typewriter = (param) => {
		return new Promise((resolve, reject) => {
			const string = param.split("")
			string.forEach((letter, index) => {
				setTimeout(() => {
					typeElement.textContent += letter
					if (index + 1 === string.length) {
						resolve()
					}
				}, 200 * index)
			})
		})
	}
	const setText = (text) => {
		return new Promise((resolve, reject) => {
			typeElement.textContent = text
			resolve()
		})
	}
	const typing = async() => {
		await typewriter("はたらく")
		await wait(500)
		await setText("")
		await setText("働く")
		await wait(1000)
		await typewriter("を")
		await wait(500)
		await typewriter("たのしむ")
		await wait(500)
		await setText("働くを楽しむ")
	}
	typing()
}