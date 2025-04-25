"use strict"

let containerButtonTheme = $(".container-button-dark-light-theme")

containerButtonTheme.click(function () {
  let body = $("body")
  let $this = $(this)

  $this.find(".icon-theme").toggleClass("status-active")
  body.toggleClass("light-theme dark-theme")
})

export function prefersColorScheme () {
  const isLightTheme = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches

  if (isLightTheme) {
    console.log("Light theme")
    containerButtonTheme.click()
  }
}
