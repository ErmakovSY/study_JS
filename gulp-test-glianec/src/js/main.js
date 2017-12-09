$(document).ready(function () {

  if (window.innerWidth < 821) {
    $('.header__nav').removeClass('header__nav--visible')
  }

  $('.header__toggler').on('click', function() {
    $('.header__nav').toggleClass('header__nav--visible')
    if ($('.header__nav').hasClass('header__nav--visible')) {
      $('.header__toggler').html('<i class="fa fa-angle-double-left" aria-hidden="true"></i>');
    } else {
      $('.header__toggler').html('<i class="fa fa-angle-double-right" aria-hidden="true"></i>');
    }
  });

  $('#sliderMain').slick({
    infinite: true,
    dots: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.main__slider-arrow--left'),
    nextArrow: $('.main__slider-arrow--right'),
  });

  $('#sliderVideo').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 300,
    centerMode: true,
    focusOnSelect: true,
    prevArrow: $('.video__slider-arrow--left'),
    nextArrow: $('.video__slider-arrow--right'),
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  ///////////////////////////////////////////

  $('#countdown').countdown('2018/01/01', function(event) {
    $(this).html(event.strftime(`
      <div class="countdown__item">
        <p class="countdown__value">${event.offset.totalDays}</p>
        <p class="countdown__description">дн.</p>
      </div>
      <div class="countdown__item">
        <p class="countdown__value">%H</p>
        <p class="countdown__description">час.</p>
      </div>
      <div class="countdown__item">
        <p class="countdown__value">%M</p>
        <p class="countdown__description">мин.</p>
      </div>
      <div class="countdown__item">
        <p class="countdown__value">%S</p>
        <p class="countdown__description">сек.</p>
      </div>
    `))
  });

  //////////////////////////////////////

  $(".catalog__nav-link").click(function() {
    let tabId = $(this).attr("data-ref");
    $(".catalog__tab--active").removeClass("catalog__tab--active");
    $(tabId).addClass("catalog__tab--active");
  })

  $('#sliderCatalog1').slick({
    infinite: true,
    slidesToShow: 4,
    speed: 300,
    centerMode: true,
    prevArrow: $('.tab1-left'),
    nextArrow: $('.tab1-right'),
    responsive: [
      {
        breakpoint: 1130,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('#sliderCatalog2').slick({
    infinite: true,
    slidesToShow: 4,
    speed: 300,
    centerMode: true,
    prevArrow: $('.tab2-left'),
    nextArrow: $('.tab2-right'),
    responsive: [
      {
        breakpoint: 1130,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

//////////////////////////////////////////

  $('#sliderPopularTop').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '#sliderPopularBottom'
  });

  $('#sliderPopularBottom').slick({
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '#sliderPopularTop',
    infinite: true,
    dots: false,
    focusOnSelect: true,
    prevArrow: $('.popular__slider-arrow--left'),
    nextArrow: $('.popular__slider-arrow--right')
  });

  ////////////////////////////////////////

  $('.tooltip').tooltipster({
    content: `
      Развитие структуры играет важную роль в формировании существенных финансовых и административных условий. Опыт постоянный личественный рост и сфера нашей активности способствует подготовки и реализации дальнейших направлений развития.
    `,
    animation: 'fade',
    maxWidth: 265,
    side: ['left', 'bottom', 'top', 'right'],
    trigger: 'click',
    repositionOnScroll: true,
    functionPosition: function(instance, helper, position) {
      position.coord.top += 20;
      return position;
    }
  });

});

function initMap() {
  map = new google.maps.Map(document.getElementById('googleMap'), {
    zoom: 13,
    center: {lat: 50.428685, lng: 30.553370},
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false
  });
  marker = new google.maps.Marker({
    position: {lat: 50.419321, lng: 30.472429},
    map: map,
    icon: './img/marker.png'
  });
  marker2 = new google.maps.Marker({
    position: {lat: 50.426189, lng: 30.523794},
    map: map,
    icon: './img/marker.png'
  });
  marker3 = new google.maps.Marker({
    position: {lat: 50.448697, lng: 30.613687},
    map: map,
    icon: './img/marker.png'
  });
}