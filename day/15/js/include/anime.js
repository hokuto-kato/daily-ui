const slideIn = [
	{ width: "0" },
	{ width: "177px" },
]
const slideOut = [
	{ width: "177px" },
	{ width: "0%" },
]
const expand = [
	{
		width: "15px",
		height: "15px",
	},
]
const shrink = [
	{
		width: "0",
		height: "0",
	},
]
const heartOn = [
	{
		background: `url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M18.515 1.485a5.072 5.072 0 0 0-8.513 2.394 5.07 5.07 0 1 0-8.514 4.772l8.514 8.519 8.516-8.515a5.07 5.07 0 0 0-.003-7.17Z%27 fill=%27%23fd5ed3%27/%3e%3c/svg%3e")`,
	},
]
const heartOff = [
	{
		background: `url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M18.515 1.485a5.072 5.072 0 0 0-8.513 2.394 5.07 5.07 0 1 0-8.514 4.772l8.514 8.519 8.516-8.515a5.07 5.07 0 0 0-.003-7.17Z%27 fill=%27%23fff%27/%3e%3c/svg%3e")`,
	},
]
const timing =
	{
		duration: 200,
		easing: "ease-out",
		fill: "forwards",
	}
export { slideIn, slideOut, timing, expand, shrink, heartOn, heartOff }