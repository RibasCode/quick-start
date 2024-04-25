
"use strict"

$(document).ready(function(){

	$(".modal-container .button-cancel").click(function(){
        $(this).closest(".modal-container").removeClass("state-active");
	});

    $(".modal-button").click(function(){
        $(".modal-container").addClass("state-active");
	});

});
