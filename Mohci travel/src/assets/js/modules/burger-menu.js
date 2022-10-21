const trigger = $('.js-trigger');
const nav = $('.js-nav');
const body = $('body');

trigger.on('click', function() {
	$(this).toggleClass('trigger--pressed');
	nav.toggleClass('nav--active');
	body.toggleClass('locked');
});