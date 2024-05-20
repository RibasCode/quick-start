
"use strict"

$(document).ready(function() {

    let containerButtonTheme = $(".container-button-theme");
    let body = $("body");

    containerButtonTheme.click(function () {
        let $this = $(this);

        $this.find(".icon-theme").toggleClass("status-active");
        body.toggleClass("light-theme dark-theme");

    });

});
