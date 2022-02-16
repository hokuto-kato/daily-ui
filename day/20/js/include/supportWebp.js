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
	const addClass = async(target = "body") => {
		const isWebp = await supportWebp()
		const className = isWebp ? "is-webp" : "is-no-webp"
		document.querySelector(target).classList.add(className)
	}
	addClass()
}
