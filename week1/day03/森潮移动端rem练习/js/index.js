requirejs.config({
	baseUrl: "js",
	paths: {
		extend: "extend",
		jquery: "jquery.min",
		swiper: "swiper.min",
	},
	shim: {
		extend: {
			deps: ["jquery"]
		},
		jquery: {
			exports: "jQuery"
		},
		swiper: {
			exports: "Swiper",
			deps: ["jquery"]
		},
	}
});
requirejs(["jquery", "swiper","extend"], function($, swiper){
	var swiper1 = new swiper('#swiper1', {
		loop: true,
		autoplay: true,
		speed: 800,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
	
	$(".tab").tab("active", "click");
})