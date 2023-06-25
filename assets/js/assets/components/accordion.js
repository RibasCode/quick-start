$(document).ready(function() {

	let accordionButton = $('nav .accordion-button');

	accordionButton.click(function(){
		let $this = $(this);

        let getButtonType = $(this).attr('data-type');

		$this.toggleClass('active');
		$(`.accordion-body.${getButtonType}`).toggleClass('active').slideToggle(250);

        checkFilterIfInnerItemsActive();
	});
});
