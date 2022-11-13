const trigger = $('.js-trigger');
const headerEntry = $('.js-header-entry');
const body = $('body');

trigger.on('click', () => {
	trigger.toggleClass('trigger--pressed');
	headerEntry.toggleClass('header__entry--active');
	body.toggleClass('locked');
});