"use strict"

import { initFadeOutWebAnimation } from "./base/animation.js"
import { prefersColorScheme } from "./components/button-dark-light-theme.js"
// import { fetchName } from "./base/fetch.js"

// init fade in web animation
initFadeOutWebAnimation({
  startAnimation: 640
})

// Detect if the user prefers a light theme using the prefers-color-scheme media query (defaulds to dark and apply the light theme if so)
prefersColorScheme()

$(document).ready(function () {
  // fetchName()
})
