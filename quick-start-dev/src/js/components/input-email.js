"use strict"

function validateEmail (email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

$("input[type='email']").on("input", function () {
  if (validateEmail($(this).val()) === false) {
    $(this).parent().addClass("status-error").removeClass("status-success")
  }

  if (validateEmail($(this).val()) === true) {
    $(this).parent().addClass("status-success").removeClass("status-error")
  }

  if ($(this).val() === "") {
    $(this).parent().removeClass("status-error status-success")
  }
})
