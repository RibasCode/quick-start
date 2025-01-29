"use strict"

function updateGradients (object) {
  let { thisSlider = null } = object

  let sliderGradientRight = thisSlider.find(".slider-gradient.right")
  let sliderGradientLeft = thisSlider.find(".slider-gradient.left")
  let currentScroll = thisSlider.find(".slider-container").scrollLeft()
  let maxScroll = thisSlider.find(".slider-container").get(0).scrollWidth - thisSlider.find(".slider-container").get(0).clientWidth

  if (currentScroll !== maxScroll) {
    sliderGradientRight.addClass("status-active")
  }
  if (currentScroll === maxScroll) {
    sliderGradientRight.removeClass("status-active")
  }

  if (currentScroll !== 0) {
    sliderGradientLeft.addClass("status-active")
  }
  if (currentScroll === 0) {
    sliderGradientLeft.removeClass("status-active")
  }
}

function updateButtons (object) {
  let { thisSlider = null } = object

  let thisSliderContainer = thisSlider.find(".slider-container")
  let sliderButtonRight = thisSlider.find(".slider-button.right")
  let sliderButtonLeft = thisSlider.find(".slider-button.left")

  setTimeout(function () {
    let currentScroll = thisSliderContainer.scrollLeft()
    let maxScroll = thisSliderContainer.get(0).scrollWidth - thisSliderContainer.get(0).clientWidth

    console.log(currentScroll, maxScroll)

    if (currentScroll !== maxScroll) {
      sliderButtonRight.addClass("status-active")
    }

    if (currentScroll === maxScroll) {
      sliderButtonRight.removeClass("status-active")
    }

    if (currentScroll !== 0) {
      sliderButtonLeft.addClass("status-active")
    }

    if (currentScroll === 0) {
      sliderButtonLeft.removeClass("status-active")
    }
  }, 201)
}

function scrollAnimation (object) {
  let { thisSlider = null, direction = null } = object

  let thisSliderContainer = thisSlider.find(".slider-container")
  let currentScroll = thisSliderContainer.scrollLeft()

  if (direction === "right") {
    thisSliderContainer.animate({ scrollLeft: currentScroll + 300 }, 200)
  }

  if (direction === "left") {
    thisSliderContainer.animate({ scrollLeft: currentScroll - 300 }, 200)
  }
}

$(document).ready(function () {
  let slider = $(".slider")
  let sliderContainer = $(".slider-container")
  let sliderButtonRight = $(".slider-button.right")
  let sliderButtonLeft = $(".slider-button.left")

  // Slider - Hover.
  slider.hover(function () {
    let thisSliderContainer = $(this).find(".slider-container")
    let sliderButtonRight = $(this).find(".slider-button.right")
    let sliderButtonLeft = $(this).find(".slider-button.left")

    let currentScroll = thisSliderContainer.scrollLeft()
    let maxScroll = thisSliderContainer.get(0).scrollWidth - thisSliderContainer.get(0).clientWidth

    if (currentScroll === 0 || currentScroll !== maxScroll) {
      sliderButtonRight.addClass("status-active")
    }

    if (currentScroll !== 0 || currentScroll === maxScroll) {
      sliderButtonLeft.addClass("status-active")
    }

    if (currentScroll === 0 && maxScroll === 0) {
      sliderButtonRight.removeClass("status-active")
      sliderButtonLeft.removeClass("status-active")
    }
  }, function () {
    sliderButtonRight.removeClass("status-active")
    sliderButtonLeft.removeClass("status-active")
  })

  // Slider - Button right.
  sliderButtonRight.click(function () {
    scrollAnimation({
      thisSlider: $(this).closest(".slider"),
      direction: "right"
    })

    updateButtons({
      thisSlider: $(this).closest(".slider")
    })
  })

  // Slider - Button left.
  sliderButtonLeft.click(function () {
    scrollAnimation({
      thisSlider: $(this).closest(".slider"),
      direction: "left"
    })

    updateButtons({
      thisSlider: $(this).closest(".slider")
    })
  })

  // Gradients functionallity on horizontal scroll for mobile
  sliderContainer.scroll(function () {
    slider.each(function () {
      updateGradients({
        thisSlider: $(this)
      })
    })
  })

  // Check if gradients are needed when resizing the window.
  $(window).resize(function () {
    slider.each(function () {
      updateGradients({
        thisSlider: $(this)
      })
    })
  })

  // Initialization
  slider.each(function () {
    updateGradients({
      thisSlider: $(this)
    })
  })
})
