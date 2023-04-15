new Swiper('.auction__container', {
	mousewheel: {
		sensitivity: 1,
	},

	keyboard: {
		enabled: true,
		onlyInViewport: false,
	},

	autoplay: {
		delay: 4500, 
		disableOnInteraction: false,
	},

	spaceBetween: 30,

	touchEventsTarget: 'wrapper',

	slideToClickedSlide: true,

	watchOverflow: true,

	slidesPerGroup: 1,

	centeredSlides: true,

	initialSlide: 0,

	loop: true,

	loopedSlides: 3,

	speed: 1000
});
