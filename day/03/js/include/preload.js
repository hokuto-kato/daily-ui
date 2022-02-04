import img from "~/img/img.jpg"
import createjs from "preload-js"

// 読み込む外部ファイル情報
const manifest = [
	{ src: img }, // Image
]

export default function() {
	// LoadQueueクラス
	const loadQueue = new createjs.LoadQueue()
	// セレクタ
	const progressBar = document.querySelector("[data-progress-bar]")
	const progressBarWrap = document.querySelector("[data-progress-bar-wrap]")
	const progressNumber = document.querySelector("[data-progress-number]")
	const img = document.querySelector("[data-img]")
	const handleProgress = event => {
		// 読み込み率を0.0~1.0で取得
		const progress = event.progress
		// 0~100に変換
		const percent = Math.floor(event.progress * 100)
		progressNumber.textContent = percent
		progressNumber.style.opacity = `calc(${progress} + 0.2)`
		progressNumber.style.transform = `translate(-50%, -50%) rotate(${percent * 3.6}deg)`
		progressBar.style.opaicty = `calc(${progress} + 0.2)`
		progressBar.style.width = `${percent}%`
	}
	const handleFileLoadComplete = event => {
		const result = event.result
		result.setAttribute("alt", "イメージ01")
		img.appendChild(result)
	}
	const handleComplete = () => {
		setTimeout(() => {
			progressNumber.classList.add("complete")
			progressBarWrap.classList.add("complete")
			img.classList.add("complete")
			progressNumber.addEventListener("transitionend", () => {
				progressNumber.remove()
				progressBarWrap.remove()
			})
		}, 500)
	}
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
