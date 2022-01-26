import $ from "jquery"
import img from "~/img/img.jpg"
import createjs from "preload-js"

// 読み込む外部ファイル情報
const manifest = [
	{ src: img }, // Image
]

export default function () {
	// LoadQueueクラス
	const loadQueue = new createjs.LoadQueue()
	// セレクタ
	const $progressBar = $("[data-progress-bar]")
	const $progressBarWrap = $("[data-progress-bar-wrap]")
	const $progressNumber = $("[data-progress-number]")
	const $img = $("[data-img]")

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

	function handleProgress(event) {
		// 読み込み率を0.0~1.0で取得
		const progress = event.progress
		// 0~100に変換
		const percent = Math.floor(event.progress * 100)
		$($progressNumber).text(percent).css({
			opacity: `calc(${progress} + 0.2)`,
			transform: `translate(-50%, -50%) rotate(${percent *
			3.6}deg)`,
		})
		$($progressBar).css({
			opacity: `calc(${progress} + 0.2)`,
			width: `${percent}%`,
		})
	}

	function handleFileLoadComplete(event) {
		const result = event.result
		$($img).append(result)
	}

	function handleComplete() {
		setTimeout(() => {
			$($progressNumber).
				add($progressBarWrap).
				add($img).
				addClass("complete")
		}, 500)
	}
}
