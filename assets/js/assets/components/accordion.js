$(document).ready(function() {

	let accordionButton = $('nav .accordion-button');

	accordionButton.click(function(){
		let $this = $(this);

		$this.toggleClass('active');
		$(`.accordion-body`).toggleClass('active').slideToggle(250);

        checkFilterIfInnerItemsActive();
	});
});
