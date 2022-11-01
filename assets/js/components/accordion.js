$(document).ready(function() {
	
	let accordionHeader = $('.accordion-header');
	
	accordionHeader.click(function(){
		let $this = $(this);

		$this.closest('.accordion').toggleClass('active');
		$this.parent().find('.accordion-body').slideToggle(250);
	});
});