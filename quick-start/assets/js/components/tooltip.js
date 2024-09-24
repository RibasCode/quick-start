"use strict"

const tooltip = {
  init: function () {
    let tooltips = $(".tooltip")

    tooltips.each(function () {
      let $this = $(this)

      $this.parent().addClass("state-tooltip")
    })
  }
}

$(document).ready(function () {
  tooltip.init()
})

export { tooltip }
