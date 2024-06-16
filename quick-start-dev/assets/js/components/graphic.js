"use strict"

$(document).ready(function () {
   $(".graphic").each(function () {
      let progress = $(this).find("#number").text().slice(0, -1)
      let progressInt = parseInt(progress)
      let calcProgress = 472 - 472 * progressInt / 100

      $(this).find("circle").css("stroke-dashoffset", calcProgress)
      $(this).animate({
         strokeDashoffset: calcProgress
      })
   })
})
