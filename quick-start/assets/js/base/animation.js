"use strict"

$(document).ready(function () {
   let initialAnimation = $(".initial-animation")

   setTimeout(function () {
      initialAnimation.removeClass("status-active")

      setTimeout(function () {
         initialAnimation.remove()
      }, 400)
   }, 400)
})
