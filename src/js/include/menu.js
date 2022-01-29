import $ from "jquery"

const $menuTrigger = $("[data-trigger-menu]")
const $menuTarget = $("[data-target-menu]")

export default function() {
	$menuTrigger.on("click", (e) => {
		if ($(e.currentTarget).hasClass("active")) {
			//非アクティブ
			$(e.currentTarget).add($menuTarget).removeClass("active")
			$menuTarget.one("transitionend", (e) => {
				$(e.currentTarget).addClass("visually-hidden")
				$('body').removeClass("menu-open")
			})
		} else {
			//アクティブ
			$(e.currentTarget).addClass("active")
			$($menuTarget).removeClass("visually-hidden").addClass("active")
			$('body').addClass("menu-open")
		}
	})
}
