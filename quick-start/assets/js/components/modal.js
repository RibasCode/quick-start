"use strict"

$(".modal-container .button-cancel").click(function () {
   $(this).closest(".modal-container").removeClass("status-active")
})

$(".modal-button").click(function () {
   $(".modal-container").addClass("status-active")
})
