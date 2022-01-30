import $ from "jquery"

export default function() {
	const $trigger = $("[data-trigger-menu]")
	const $targetMenu = $("[data-target-menu]")
	const $targetNav = $("[data-target-nav]")
	const $targetMenuChild = $("[data-target-menu-child]")

	$trigger.on("click", () => {
		$trigger.addClass("pointer-events-none")
		if ($targetMenu.hasClass("active")) {
			//非アクティブ
			$targetMenu.removeClass("active").addClass("close")
			$targetNav.add($targetMenuChild).removeClass("active")
			$targetMenu.one("animationend", () => {
				$targetMenu.add($targetNav).removeClass("close")
				$targetNav.addClass("visually-hidden")
				$trigger.removeClass("pointer-events-none")
			})
		} else {
			//アクティブ
			$targetNav.removeClass("visually-hidden")
			$targetMenu.add($targetMenuChild)
				.add($targetNav)
				.addClass("active")
			$targetMenu.one("animationend",()=>{
				$trigger.removeClass("pointer-events-none")
			})
		}
	})
}
