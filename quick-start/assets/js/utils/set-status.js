"use strict"

// Apply status to elements in bulk

export function setStatus (object) {
  let { elements = null, statusHidden = null, statusVisible = null, statusActive = null, statusDisabled = null, statusInfo = null, statusWarning = null, statusError = null } = object

  if (!elements) throw new Error("Must specify some elements to apply a status")

  for (let i = 0; i < elements.length; i++) {
    let element = $(elements[i])

    // Status: Hidden
    if (statusHidden !== null) {
      if (statusHidden === true) {
        element.addClass("status-hidden")
      }
      if (statusHidden === false) {
        element.removeClass("status-hidden")
      }
      if (statusHidden === "toggle") {
        element.toggleClass("status-hidden")
      }
    }

    // Status: Visible
    if (statusVisible !== null) {
      if (statusVisible === true) {
        element.addClass("status-visible")
      }
      if (statusVisible === false) {
        element.removeClass("status-visible")
      }
      if (statusVisible === "toggle") {
        element.toggleClass("status-visible")
      }
    }

    // Status: Active
    if (statusActive !== null) {
      if (statusActive === true) {
        element.addClass("status-active")
      }
      if (statusActive === false) {
        element.removeClass("status-active")
      }
      if (statusActive === "toggle") {
        element.toggleClass("status-active")
      }
    }

    // Status: Disabled
    if (statusDisabled !== null) {
      if (statusDisabled === true) {
        element.addClass("status-disabled")
      }
      if (statusDisabled === false) {
        element.removeClass("status-disabled")
      }
      if (statusDisabled === "toggle") {
        element.toggleClass("status-disabled")
      }
    }

    // Status: Info
    if (statusInfo !== null) {
      if (statusInfo === true) {
        element.addClass("status-info")
      }
      if (statusInfo === false) {
        element.removeClass("status-info")
      }
      if (statusInfo === "toggle") {
        element.toggleClass("status-info")
      }
    }

    // Status: Warning
    if (statusWarning !== null) {
      if (statusWarning === true) {
        element.addClass("status-warning")
      }
      if (statusWarning === false) {
        element.removeClass("status-warning")
      }
      if (statusWarning === "toggle") {
        element.toggleClass("status-warning")
      }
    }

    // Status: Error
    if (statusError !== null) {
      if (statusError === true) {
        element.addClass("status-error")
      }
      if (statusError === false) {
        element.removeClass("status-error")
      }
      if (statusError === "toggle") {
        element.toggleClass("status-error")
      }
    }
  }
};
