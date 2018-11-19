import 'slick-carousel';
import 'magnific-popup';

  $('menu .menu_list li').click(function(){
    $('menu .menu_list li').removeClass("is-active");
    console.log($(this));
    $(this).addClass("is-active");
});

	$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

$('.slick').slick({
	infinite: true,
  nextArrow: '.slider__next',
  prevArrow: '.slider__prev'
});
