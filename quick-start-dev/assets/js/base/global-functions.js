"use strict"

// Global: Functions

export function setStatus (object) {
   let { elements = null, statusActive = null, statusInactive = null, statusInfo = null, statusWarning = null, statusError = null, statusHidden = null } = object

   if (!elements) throw new Error("Must specify some elements to apply an status")

   // Si no es pasa cap paràmetre a la funció, la propietat serà = null
   // let statusActive = object.statusActive;
   // let statusInactive = object.statusInactive;
   // let statusInfo = object.statusInfo;
   // let statusWarning = object.statusWarning;
   // let statusError = object.statusError;
   // let statusHidden = object.statusHidden;

   for (let i = 0; i < elements.length; i++) {
      let element = $(elements[i])

      // Status: Hidden
      if (statusHidden === true) {
         element.addClass("status-hidden")
      }
      if (statusHidden === false) {
         element.removeClass("status-hidden")
      }
      if (statusHidden === "toggle") {
         element.toggleClass("status-hidden")
      }

      // Status: Active
      if (statusActive === true) {
         element.addClass("status-active")
      }
      if (statusActive === false) {
         element.removeClass("status-active")
      }
      if (statusActive === "toggle") {
         element.toggleClass("status-active")
      }

      // Status: Inactive
      if (statusInactive === true) {
         element.addClass("status-inactive")
      }
      if (statusInactive === false) {
         element.removeClass("status-inactive")
      }
      if (statusInactive === "toggle") {
         element.toggleClass("status-inactive")
      }

      // Status: Info
      if (statusInfo === true) {
         element.addClass("status-info")
      }
      if (statusInfo === false) {
         element.removeClass("status-info")
      }
      if (statusInfo === "toggle") {
         element.toggleClass("status-info")
      }

      // Status: Warning
      if (statusWarning === true) {
         element.addClass("status-warning")
      }
      if (statusWarning === false) {
         element.removeClass("status-warning")
      }
      if (statusWarning === "toggle") {
         element.toggleClass("status-warning")
      }

      // Status: Error
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
};

export function removeElements (object) {
   let { elements = null } = object

   if (!elements) throw new Error("Must specify some elements to remove")

   for (let i = 0; i < elements.length; i++) {
      let element = $(elements[i])

      element.remove()
   }
}
