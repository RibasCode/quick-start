"use strict"

// Apply status to elements in bulk

export function setStatus (object) {
  let { elements = null, statusVisible = null, statusHidden = null, statusActive = null, statusInactive = null, statusDisabled = null, statusInfo = null, statusWarning = null, statusError = null } = object

  if (!elements) throw new Error("Must specify some elements to apply a status")

  // Si no es pasa cap paràmetre a la funció, la propietat serà = null
  // let statusVisible = object.statusVisible;
  // let statusHidden = object.statusHidden;
  // let statusActive = object.statusActive;
  // let statusInactive = object.statusInactive;
  // let statusDisabled = object.statusDisabled;
  // let statusInfo = object.statusInfo;
  // let statusWarning = object.statusWarning;
  // let statusError = object.statusError;

  for (let i = 0; i < elements.length; i++) {
    let element = $(elements[i])

    // Status: Visible
    if (statusVisible !== null) {
      if (statusVisible === true) {
        element.addClass("status-shown")
      }
      if (statusVisible === false) {
        element.removeClass("status-shown")
      }
      if (statusVisible === "toggle") {
        element.toggleClass("status-shown")
      }
    }

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

    // Status: Inactive
    if (statusInactive !== null) {
      if (statusInactive === true) {
        element.addClass("status-inactive")
      }
      if (statusInactive === false) {
        element.removeClass("status-inactive")
      }
      if (statusInactive === "toggle") {
        element.toggleClass("status-inactive")
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
