import $ from 'jquery'
window.jQuery = $
window.$ = $

import 'slick-carousel/slick/slick.js';

document.addEventListener('DOMContentLoaded', () => {

	$('.accordion-item .heading').on('click', function(e) {
		e.preventDefault();

		if($(this).closest('.accordion-item').hasClass('active')) {
			$('.accordion-item').removeClass('active');
		} else {
			$('.accordion-item').removeClass('active');
			$(this).closest('.accordion-item').addClass('active');
		}

		var $content = $(this).next();
		$content.slideToggle(200);
		$('.accordion-item .content').not($content).slideUp('fast');
	});

	$('.painters_slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<svg class="slick-arrows slick-prev" width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="34.5" cy="34.5" r="34" stroke="white"/><path d="M44.428 27.068L27.25 35.09L44.428 43.112L43.714 44.624L23.26 35.09L43.714 25.556L44.428 27.068Z" fill="white"/></svg>',
		nextArrow: '<svg class="slick-arrows slick-next" width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="34.5" cy="34.5" r="34" stroke="white"/><path d="M27.108 26.068L44.286 34.09L27.108 42.112L27.822 43.624L48.276 34.09L27.822 24.556L27.108 26.068Z" fill="white"/></svg>',
	});

	$('.event_slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<svg class="slick-arrows slick-prev" width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="34.5" cy="34.5" r="34" stroke="#545973"/><path d="M44.428 27.068L27.25 35.09L44.428 43.112L43.714 44.624L23.26 35.09L43.714 25.556L44.428 27.068Z" fill="#545973"/></svg>',
		nextArrow: '<svg class="slick-arrows slick-next" width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="34.5" cy="34.5" r="34" stroke="#545973"/><path d="M27.108 26.068L44.286 34.09L27.108 42.112L27.822 43.624L48.276 34.09L27.822 24.556L27.108 26.068Z" fill="#545973"/></svg>',
		responsive: [
			{
				breakpoint: 1440,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});

	$('.reviews_slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<svg class="slick-arrows slick-prev" width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="34.5" cy="34.5" r="34" stroke="#545973"/><path d="M44.428 27.068L27.25 35.09L44.428 43.112L43.714 44.624L23.26 35.09L43.714 25.556L44.428 27.068Z" fill="#545973"/></svg>',
		nextArrow: '<svg class="slick-arrows slick-next" width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="34.5" cy="34.5" r="34" stroke="#545973"/><path d="M27.108 26.068L44.286 34.09L27.108 42.112L27.822 43.624L48.276 34.09L27.822 24.556L27.108 26.068Z" fill="#545973"/></svg>',
	});


	;(function() {
		if (typeof ymaps === 'undefined') {
			return;
		}
	
		ymaps.ready(function () {
			var ymap = document.querySelector('.map');
      var coordinates = ymap.getAttribute('data-coordinates');
      var address = ymap.getAttribute('data-address');
			var myMap = new ymaps.Map('ymap2', {
							center: coordinates.split(','),
							zoom: 15
					}, {
							searchControlProvider: 'yandex#search'
					}),
					myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
							balloonContent: address
					});
			myMap.geoObjects.add(myPlacemark);
			myMap.behaviors.disable('scrollZoom');
	});
	
	
	})();

	function Marquee(selector, speed) {
		const parentSelector = document.querySelector(selector);
		const clone = parentSelector.innerHTML;
		const firstElement = parentSelector.children[0];
		let i = 0;
		// console.log(firstElement);
		parentSelector.insertAdjacentHTML('beforeend', clone);
		parentSelector.insertAdjacentHTML('beforeend', clone);
	
		setInterval(function () {
			firstElement.style.marginLeft = `-${i}px`;
			if (i > firstElement.clientWidth) {
				i = 0;
			}
			i = i + speed;
		}, 0);
	}

	//1 class selector for marquee
	//2 marquee speed 0.2
	window.addEventListener('load', Marquee('.marquee', 0.5))

		//E-mail Ajax Send
		$("form").submit(function() { //Change
			var th = $(this);
			$.ajax({
				type: "POST",
				url: "/assets/mail.php", //Change
				data: th.serialize()
			}).done(function() {
				$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
				setTimeout(function() {
					// Done Functions
					$(th).find('.success').removeClass('active').fadeOut();
					th.trigger("reset");
				}, 5000);
			});
			return false;
		});

		var $menu = $(".menu__wrapper");
		var height = $('.top-line__wrapper').height();
    $(window).scroll(function(){
        if ( $(this).scrollTop() > height && $menu.hasClass("default") ){
            $menu.removeClass("default").addClass("fixed");
        } else if($(this).scrollTop() <= height && $menu.hasClass("fixed")) {
            $menu.removeClass("fixed").addClass("default");
        }
    });//scroll


	$('.burger').on('click', () => {
		$('.menu-modal').addClass('active');
	});
	$('.close').on('click', () => {
		$('.menu-modal').removeClass('active');
	});
	$('.menu-modal a').on('click', () => {
		$('.menu-modal').removeClass('active');
	});

	if (window.screen.width < 992) {
		$('.close-modal').on('click', () => {
			$('.modal').removeClass('active');
			$('.modal img').remove();
		});
		$('.events_past__wrapper .item img').click(function() {
			let image = $(this).attr('src');
			$('.modal').addClass('active').append('<img src="'+image+'">');
		});
	}

})
