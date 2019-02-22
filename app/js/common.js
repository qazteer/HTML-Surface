$(function() {

	$('#my-menu').mmenu({
            extensions: ['effect-menu-slide','pagedim-black', 'position-right'],
            navbar: {
            	'title' : '<img src="img/surface_logo_text.svg" alt="surface">'
            }
            //classes: 'mm-light'
    });

    var API = $('#my-menu').data('mmenu');
 	var $icon = $('.hamburger');
 
	 API.bind( "open:finish", function()
	 {
	    $icon.addClass( "is-active" );
	 });

	 API.bind( "close:finish", function() 
	 {
	    $icon.removeClass( "is-active" );
	 });﻿

	$('.carousel-services').on('initialized.owl.carousel', function(){
		setTimeout(function(){
			carouselService();
		}, 100);
	});

	$('.carousel-services').owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 700,
		navText: ['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
		responsiveClass: true,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1100: {
				items: 3
			},
		}
	});

	function carouselService(){
		$('.carousel-services-item').each(function(){
			var ths = $(this),
				thsh = ths.find('.carousel-services-content').outerHeight();
				ths.find('.carousel-services-image').css('min-height', thsh);
		});
	}

	//Resize Window
	function onResize(){
		$('.carousel-services-content').equalHeights();
	}onResize();
	//window.onresize(){onResize();}
});
