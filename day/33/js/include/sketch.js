import "./globals"
import "p5/lib/addons/p5.sound"

const trigger = document.querySelector("[data-trigger]")
const target = document.querySelector("[data-target]")
let mic, fft
let targetWidth = target.offsetWidth
let targetHeight = target.offsetHeight
export default function(){
	const sketch = (p) => {
		p.setup = () => {
			p.createCanvas(targetWidth, targetHeight)
			p.noFill()
			p.getAudioContext().resume()
			fft = new p5.FFT()
			fft.setInput(mic)
		}
		p.draw = () => {
			p.background(228)
			p.stroke(24,0,209)
			let waveform = fft.waveform()
			p.beginShape()
			for (let i = 0; i < waveform.length; i++) {
				let x = p.map(i, 0, waveform.length, 0, p.width)
				let y = p.map(waveform[i], -1, 0, p.height, p.height / 2)
				p.circle(x, y, 0)
			}
			p.endShape()
		}
	}
	trigger.addEventListener("click", () => {
		if(trigger.classList.contains("is-active")){
			trigger.classList.remove("is-active")
			mic.stop()
		} else {
			target.innerHTML = ""
			trigger.classList.add("is-active")
			mic = new p5.AudioIn()
			mic.start()
			new p5(sketch, target)
		}
	})
	const observer = new ResizeObserver((entries)=>{
		targetWidth = entries[0].contentRect.width
		targetHeight = entries[0].contentRect.height
		target.innerHTML = ""
		new p5(sketch, target)
	})
	observer.observe(target)
	new p5(sketch, target)
}