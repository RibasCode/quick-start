"use strict"

let timeout = 500

$(".input-search").on("input", function () {
  clearTimeout(timeout)
  timeout = setTimeout(() => {
    console.log($(this).val())
  }, 500)
})
