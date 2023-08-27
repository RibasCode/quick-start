
'use strict'

$(document).ready(function(){

	$('.modal-container .button-cancel').click(function(){
        $(this).closest('.modal-container').removeClass('active');
	});

    $('.modal-button').click(function(){
        $('.modal-container').addClass('active');
	});

});
