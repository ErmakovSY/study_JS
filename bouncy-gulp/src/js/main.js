

$(document).ready(() => {
  /* PORTFOLIO-section */

    /* gallery */
    $('.portfolio__tabs-block').filterizr({layout: 'sameWidth'});
    /* end gallery */

  /* END PORTFOLIO-section */
  
  /* TEAM-section */

  /* slider */
  $('.section__slider').slick({
    fade: true,
    cssEase: 'linear',
    arrows: ($(window).width() > 650) ? true : false,
    dots: true,
    prevArrow: '<button type="button" class="slider__arrow slider__arrow--prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
    nextArrow: '<button type="button" class="slider__arrow slider__arrow--next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
    dotsClass: 'slider__dots',
  });
  /* end slider */
  /* text-scroll */
  $('.slider__text-wrapper').slimScroll({
    height : ($(window).width() > 650) ? '365px' : ($(window).width() > 380) ? '250px' : '150px',
    size : '4px',
    color: '#19bd9a',
    distance : '1px',
    opacity : 1,
    borderRadius: 'none',
    railBorderRadius : 'none',
    wrapperClass : 'slider__scroll-wrapper'
  });
  /* end text-scroll */

  /* END TEAM-section */

  /* TESTIMONALS-section */

  /* text-scroll */
  $('.testimonals__slider-text-wrapper').slimScroll({
    height : '140px',
    size : '4px',
    color: '#19bd9a',
    distance : '1px',
    opacity : 1,
    borderRadius: 'none',
    railBorderRadius : 'none',
    wrapperClass : 'testimonals__scroll-wrapper',
    start: 'bottom'
  });
  /* end text-scroll */

  /* END TESTIMONALS-section */

  /* button-up */
  if ($('#button__page-up').length) {
		let scrollTrigger = 300, // px
			backToTop = () => {
				let scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$('#button__page-up').addClass('is-visible');
				} else {
					$('#button__page-up').removeClass('is-visible');
				}
			};
		backToTop();
		$(window).on('scroll', () => {
			backToTop();
		});
		$('#button__page-up').on('click', (e) => {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 1000);
		});
  }
  /* end button-up */
  
  /* slow scroll from menu-item to current section */
  slowScroll = (item) => {
    let id = $(item).attr('href');
    let topOfPage = $(id).offset().top;
    $('body,html').animate({scrollTop: topOfPage}, 700);
    // if (!$(item).hasClass("active")) {
    //   $('.header__nav-item').removeClass("active");
    //   $(item).addClass("active");
    // }
  }

 

  // if($('#posChecked').val() == 0) {
  //   window.pos = [];
  //   $('.header__nav-item').each((index, el) => {
  //     let id = $(el).attr('href');
  //     pos.push(
  //       {
  //         element: id,
  //         offset: $(id).offset().top
  //       }  
  //     );
  //   });
  //   $('#posChecked').val(1);
  // }
  // $(window).on('scroll', () => {
  //   let posCurrent = $(window).scrollTop();
  //   pos.map((currItem, i) => {
  //     let prevItem = (i == 0) ? pos[0] : pos[i - 1];
  //     let nextItem = (i == pos.length - 1) ? pos[pos.length - 1] : pos[i + 1];

  //     if (i == 0 && posCurrent < nextItem.offset) {
  //       console.log(`first: ${currItem.element}, pos:${posCurrent}`);
  //       return;
  //     }
  //     else if (i > 0 && i < pos.length-1 && posCurrent > prevItem.offset && posCurrent < currItem.offset) {
  //       console.log(`some: ${prevItem.element}, prev: ${prevItem.element}, next: ${nextItem.element}, pos:${posCurrent}`);
  //       return;
  //     }
  //     else if (i == pos.length-1 && posCurrent > currItem.offset) {
  //       console.log(`last: ${currItem.element}, pos:${posCurrent}`);
  //       return;
  //     }
  //   })
  // });
  
  

  /* end slow scroll from menu-item to current section */

  /* MAIN-section */

  $('#button__nav').click((e) => {
    e.preventDefault();
    hideShowMenu('.header__nav-wrapper');
  });

  $(window).on('scroll', () => {
    let menuPosition = hideShowMenu('.header__nav-wrapper', 'check');
    if (menuPosition && $(window).width() < 540) {
      hideShowMenu('.header__nav-wrapper', 'hide');
    }
  });

  /* END MAIN-section */

});

function hideShowMenu(selector, action = null) {
  switch(action) {
    case 'hide': $(selector).animate({right: '-100%', opacity: 0}, 500); break;
    case 'show': $(selector).animate({right: '50%', opacity: 1}, 500); break;
    case 'check': return ($(selector).css('opacity') != 1) ? 0 : 1; break;
    default: {
      if ($(selector).css('opacity') == 1) {
        $(selector).animate({right: '-100%', opacity: 0}, 500);
      } else {
        $(selector).animate({right: '50%', opacity: 1}, 500);
      }
    }
  }
}

function initMap() {
  map = new google.maps.Map(document.getElementById('mapBlock'), {
    zoom: 14,
    center: {lat: 47.816011, lng: 35.170238},
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false
  });
  marker = new google.maps.Marker({
    position: {lat: 47.816011, lng: 35.170238},
    map: map,
    icon: './img/map-marker.png'
  });
}