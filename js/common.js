var swiper = new Swiper(".hero", {
	spaceBetween: 30,
	effect: "fade",
	loop: "true",
	autoplay: {
		delay: 6500,
	},
});
var swiper = new Swiper(".contact-slider", {
	spaceBetween: 10,
	loop: "true",
	autoplay: {
		delay: 2500,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
$('.toggle-button').click(function(){
	$(this).toggleClass('active')
	$('body').toggleClass('lock')
	$('.mobile-menu').toggleClass('active')
})