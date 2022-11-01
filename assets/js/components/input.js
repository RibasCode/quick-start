'use strict'

$(document).ready(function() {
	
	let input = $('input');

	input.each( function(){

		if($(this).val() != ''){

			$(this).addClass('focus');
			$(this).closest('.input-container').find('label').addClass('focus')
															 .css('transition', 'none');
		}
	});

	input.focusin(function() {

		$(this).closest('.input-container').find('label').addClass('focus');

	});

	input.focusout(function() {

		if($(this).val() != ''){

		}else{

			$(this).closest('.input-container').find('label').removeClass('focus')
															 .css('transition', 'all 0.0625s ease-in-out');
		}
	});
});