import $ from "jquery"
export default function () {
	const $trigger = $("[data-trigger-menu]")
	const $targetMenu = $("[data-target-menu]")
	const $targetMenuChild = $("[data-target-menu-child]")

	$($trigger).on("click", () => {
		if ($targetMenu.hasClass("active")) {
			$($targetMenu).removeClass("active").addClass("close")
			$($targetMenu).on("animationend", () =>{
				$($targetMenu).removeClass("close")
			})
			$($targetMenuChild).removeClass("active")
		} else {
			$($targetMenu).add($targetMenuChild).addClass("active")
		}
	})
}
