
"use strict"

$(document).ready(function() {

    $(".toast-button").click(() => {
        Toastify({
            text: "This is a toast",
            className: "info",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            onClick: function(){} // Callback after click
        }).showToast();
    });

});
