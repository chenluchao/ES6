var galleryThumbs = new Swiper('.gallery-thumbs', {
	spaceBetween: 10,
	slidesPerView: 4,

	loop: true,
	freeMode: true,
	loopedSlides: 5, //looped slides should be the same
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
	spaceBetween: 10,
	loop: true,
	effect: 'fade',
	loopedSlides: 5, //looped slides should be the same
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	thumbs: {
		swiper: galleryThumbs,
	},
});
var eul = document.querySelector(".info ul");

setInterval(function() {

	eul.className = "move";

	setTimeout(function() {
		eul.className = "";
		eul.appendChild(eul.children[0]);
	}, 500);

}, 2000);


var eul1 = document.querySelector(".info1 ul");

setInterval(function() {

	eul1.className = "move";

	setTimeout(function() {
		eul1.className = "";
		eul1.appendChild(eul1.children[0]);
	}, 500);

}, 2000);


var eul2 = document.querySelector(".info2 ul");

setInterval(function() {

	eul2.className = "move";

	setTimeout(function() {
		eul2.className = "";
		eul2.appendChild(eul2.children[0]);
	}, 500);

}, 2000);