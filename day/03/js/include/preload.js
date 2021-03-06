import createjs from "preload-js"
import imgJpg from "~/img/img.jpg"
import imgWebp from "~/img/img.webp"

export default function() {
	const supportWebp = async() => {
		if (!self.createImageBitmap) return false
		const webpData = "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="
		const blob = await fetch(webpData).then((r) => r.blob())
		return createImageBitmap(blob).then(
			() => true,
			() => false,
		)
	}
	// LoadQueueクラス
	const loadQueue = new createjs.LoadQueue()
	// セレクタ
	const progressBar = document.querySelector("[data-progress-bar]")
	const progressBarWrap = document.querySelector("[data-progress-bar-wrap]")
	const progressNumber = document.querySelector("[data-progress-number]")
	const imgWrap = document.querySelector("[data-img]")
	const handleProgress = event => {
		// 読み込み率を0.0~1.0で取得
		const progress = event.progress
		// 0~100に変換
		const percent = Math.floor(event.progress * 100)
		progressNumber.textContent = percent.toString()
		progressNumber.style.opacity = `calc(${progress} + 0.2)`
		progressBar.style.opaicty = `calc(${progress} + 0.2)`
		progressBar.style.width = `${percent}%`
	}
	const handleComplete = () => {
		setTimeout(() => {
			progressNumber.classList.add("complete")
			progressBarWrap.classList.add("complete")
			imgWrap.classList.add("complete")
			progressNumber.addEventListener("transitionend", () => {
				progressNumber.remove()
				progressBarWrap.remove()
			})
		}, 500)
	}
	const handleFileLoadComplete = event => {
		const result = event.result
		result.setAttribute("alt", "イメージ01")
		result.setAttribute("width", "374")
		result.setAttribute("height", "578")
		result.setAttribute("class", "main__img-body")
		imgWrap.appendChild(result)
	}

	const loadStart = async() => {
		const isWebp = await supportWebp()
		const imgSource = isWebp ? imgWebp : imgJpg
		const manifest = [
			{
				src: imgSource,
			},
		]
		// 並列での読み込み数を設定
		loadQueue.setMaxConnections(1)
		// 読み込みの進行状況が変化した
		loadQueue.addEventListener("progress", handleProgress)
		// 1つのファイルを読み込み終わったら
		loadQueue.addEventListener("fileload", handleFileLoadComplete)
		// 全てのファイルを読み込み終わったら
		loadQueue.addEventListener("complete", handleComplete)
		// 読み込み開始
		loadQueue.loadManifest(manifest)
	}
	loadStart()
}
