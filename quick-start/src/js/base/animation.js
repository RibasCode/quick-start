"use strict"

setTimeout(function () {
  let initialAnimation = $(".initial-animation")
  initialAnimation.removeClass("status-active")

  setTimeout(function () {
    initialAnimation.remove()
  }, 400)
}, 400)
