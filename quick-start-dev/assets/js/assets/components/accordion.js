
'use strict'

$(document).ready(function() {

	$('.accordion').click(function(){
		$(this).toggleClass('state-active');
        $(this).find('.content').slideToggle(200);
	});

});
