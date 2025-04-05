"use strict"

// Apply status to elements in bulk

export function setStatus (object) {
  let { elements = null, statusHidden = null, statusVisible = null, statusInvisible = null, statusLoading = null, statusActive = null, statusDisabled = null, statusSuccess = null, statusInfo = null, statusWarning = null, statusError = null } = object

  if (!elements) throw new Error("Must specify some elements to apply a status")

  // Si no es pasa cap paràmetre a la funció, la propietat serà = null
  // let statusHidden = object.statusHidden;
  // let statusVisible = object.statusVisible;
  // let statusInvisible = object.statusInvisible;
  // let statusInvisible = object.statusLoading;
  // let statusActive = object.statusActive;
  // let statusDisabled = object.statusDisabled;
  // let statusSuccess = object.statusSuccess;
  // let statusInfo = object.statusInfo;
  // let statusWarning = object.statusWarning;
  // let statusError = object.statusError;

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

    // Status: Invisible
    if (statusInvisible !== null) {
      if (statusInvisible === true) {
        element.addClass("status-invisible")
      }
      if (statusInvisible === false) {
        element.removeClass("status-invisible")
      }
      if (statusInvisible === "toggle") {
        element.toggleClass("status-invisible")
      }
    }

    // Status: Loading
    if (statusLoading !== null) {
      if (statusLoading === true) {
        element.addClass("status-invisible")
      }
      if (statusLoading === false) {
        element.removeClass("status-invisible")
      }
      if (statusLoading === "toggle") {
        element.toggleClass("status-invisible")
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
        element.attr("disabled", true)
      }
      if (statusDisabled === false) {
        element.attr("disabled", false)
      }
      if (statusDisabled === "toggle") {
        element.hasAttr("disabled") ? element.attr("disabled", false) : element.attr("disabled", true)
      }
    }

    // Status: Success
    if (statusSuccess !== null) {
      if (statusSuccess === true) {
        element.addClass("status-success")
      }
      if (statusSuccess === false) {
        element.removeClass("status-success")
      }
      if (statusSuccess === "toggle") {
        element.toggleClass("status-success")
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
