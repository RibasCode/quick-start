"use strict"

$(".modal-container .button-cancel").click(function () {
  $(this).closest(".modal-container").removeClass("status-visible")
})

$(".modal-button").click(function () {
  $(".modal-container").addClass("status-visible")
})
