"use strict"

$(document).ready(function () {
   let tooltipNew = $(".tooltip")

   tooltipNew.each(function () {
      let $this = $(this)

      $this.parent().addClass("state-tooltip")
   })
})
