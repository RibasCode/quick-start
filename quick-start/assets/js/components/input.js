"use strict"

let input = $("input")

input.each(function () {
   let $this = $(this)

   if ($this.val() !== "") {
      $this.closest(".input-container").addClass("status-focus")
   }
})

input.focusin(function () {
   $(this).closest(".input-container").addClass("status-focus")
})

input.focusout(function () {
   let $this = $(this)

   if ($this.val() === "") {
      $this.closest(".input-container").removeClass("status-focus")
   }
})

let textarea = $("textarea")

textarea.each(function () {
   let $this = $(this)

   if ($this.val() !== "") {
      $this.closest(".textarea-container").addClass("status-focus")
   }
})

textarea.focusin(function () {
   $(this).closest(".textarea-container").addClass("status-focus")
})

textarea.focusout(function () {
   let $this = $(this)

   if ($this.val() === "") {
      $this.closest(".textarea-container").removeClass("status-focus")
   }
})
