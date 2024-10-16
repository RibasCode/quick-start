"use strict"

const tooltip = {
  init: function () {
    let allTooltips = $(".tooltip")

    allTooltips.each(function () {
      let $this = $(this)

      $this.parent().addClass("state-tooltip")
    })
  }
}

$(document).ready(function () {
  tooltip.init()
})

export { tooltip }
