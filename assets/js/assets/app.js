
'use strict'

import Toast from "./components/Toast.js"

document.querySelector("button.toast-button").addEventListener("click", () => {
  const toast = new Toast({
    text: "Hello",
    position: "bottom-right",
    pauseOnHover: true,
    pauseOnFocusLoss: true,
  })
})
