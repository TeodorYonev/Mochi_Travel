import Swiper from 'swiper/swiper-bundle';

const sliderCustomers = new Swiper('.js-slider-customers .swiper', {
	loop: true,
	autoplay: {
		delay: 3000,
	},
	navigation: {
		prevEl: '.slider__prev',
		nextEl: '.slider__next',
	}
})