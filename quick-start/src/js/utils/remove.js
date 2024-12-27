"use strict"

// Remove elements in bulk

export function removeElements (object) {
  let { elements = null } = object

  if (!elements) throw new Error("Must specify some elements to remove")

  for (let i = 0; i < elements.length; i++) {
    let element = $(elements[i])

    element.remove()
  }
}
