"use strict"

function gradientStatus () {
   let sliderCategoryContainerJQ = $(".slider .slider-element-container")
   let sliderCategoryContainerJS = document.querySelector(".slider .slider-element-container")
   let sliderGradientRight = $(".slider .gradient-right")
   let sliderGradientLeft = $(".slider .gradient-left")

   let currentScroll = sliderCategoryContainerJQ.scrollLeft()
   let maxScroll = sliderCategoryContainerJS.scrollWidth - sliderCategoryContainerJS.clientWidth

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

$(document).ready(function () {
   // Variables
   let slider = $(".slider")
   let sliderCategoryContainerJQ = $(".slider .slider-element-container")
   let sliderCategoryContainerJS = document.querySelector(".slider .slider-element-container")
   let sliderElement = $(".slider .slider-element")
   let sliderButtonLeft = $(".slider .button-slider.left")
   let sliderButtonRight = $(".slider .button-slider.right")
   let sliderGradientRight = $(".slider .gradient-right")
   let sliderGradientLeft = $(".slider .gradient-left")

   // Functions
   function moveScroll (direction) {
      let currentScroll = sliderCategoryContainerJQ.scrollLeft()
      let getCourseCardWidth = sliderElement.width() + 30.424 * 5

      if (direction === "right") {
         sliderCategoryContainerJQ.animate({ scrollLeft: currentScroll + getCourseCardWidth }, 200)
      }

      if (direction === "left") {
         sliderCategoryContainerJQ.animate({ scrollLeft: currentScroll - getCourseCardWidth }, 200)
      }
   };

   // Slider - Hover.
   slider.hover(function () {
      let currentScroll = sliderCategoryContainerJQ.scrollLeft()
      let maxScroll = sliderCategoryContainerJS.scrollWidth - sliderCategoryContainerJS.clientWidth

      if (currentScroll === 0) {
         sliderButtonRight.addClass("status-active")
      }

      if (currentScroll !== 0) {
         sliderButtonLeft.addClass("status-active")
      }

      if (currentScroll === maxScroll) {
         sliderButtonLeft.addClass("status-active")
      }

      if (currentScroll !== maxScroll) {
         sliderButtonRight.addClass("status-active")
      }

      if (currentScroll === 0 && maxScroll === 0) {
         sliderButtonLeft.removeClass("status-active")
         sliderButtonRight.removeClass("status-active")
      }
   }, function () {
      sliderButtonLeft.removeClass("status-active")
      sliderButtonRight.removeClass("status-active")
   })

   // Slider - Button left.
   sliderButtonLeft.click(function () {
      moveScroll("left")
   })

   sliderButtonLeft.mouseup(function () {
      setTimeout(function () {
         let currentScroll = sliderCategoryContainerJQ.scrollLeft()
         let maxScroll = sliderCategoryContainerJS.scrollWidth - sliderCategoryContainerJS.clientWidth

         if (currentScroll !== maxScroll) {
            sliderButtonRight.addClass("status-active")
            sliderGradientRight.addClass("status-active")
         }

         if (currentScroll === 0) {
            sliderButtonLeft.removeClass("status-active")
            sliderGradientLeft.removeClass("status-active")
         }
      }, 201)
   })

   // Slider - Button right.
   sliderButtonRight.click(function () {
      moveScroll("right")
   })

   sliderButtonRight.mouseup(function () {
      setTimeout(function () {
         let currentScroll = sliderCategoryContainerJQ.scrollLeft()
         let maxScroll = sliderCategoryContainerJS.scrollWidth - sliderCategoryContainerJS.clientWidth

         if (currentScroll === maxScroll) {
            sliderButtonRight.removeClass("status-active")
            sliderGradientRight.removeClass("status-active")
         }

         if (currentScroll !== 0) {
            sliderButtonLeft.addClass("status-active")
            sliderGradientLeft.addClass("status-active")
         }
      }, 201)
   })

   // Gradients functionallity on horizontal scroll for mobile
   sliderCategoryContainerJQ.scroll(function () {
      gradientStatus()
   })

   // Check if gradients are needed when resizing the window.
   $(window).resize(function () {
      gradientStatus()
   })

   setTimeout(() => {
      gradientStatus()
   }, "1000")
   // Initialization
})
