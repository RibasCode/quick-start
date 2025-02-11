"use strict"

export function initFadeWebAnimation (object) {
  let { startAnimation } = object

  setTimeout(function () {
    let initialAnimationContainer = $(".initial-animation")
    initialAnimationContainer.removeClass("status-active")

    setTimeout(function () {
      initialAnimationContainer.remove()
    }, startAnimation + 100)
  }, startAnimation)
}
