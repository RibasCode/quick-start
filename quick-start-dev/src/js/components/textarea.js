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
