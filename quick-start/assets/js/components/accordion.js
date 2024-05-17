
"use strict"

$(document).ready(function() {

	$(".accordion").click(function(){
		$(this).toggleClass("status-active");
        $(this).find(".content").slideToggle(200);
	});

});
