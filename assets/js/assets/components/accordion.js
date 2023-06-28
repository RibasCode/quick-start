
$(document).ready(function() {

	$('.accordion').click(function(){
		$(this).toggleClass('active');
        $(this).find('.content').slideToggle(250);
	});

});
