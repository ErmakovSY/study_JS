$(document).ready(function () {

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
    speed: 300,
    centerMode: true,
    prevArrow: $('.video__slider-arrow--left'),
    nextArrow: $('.video__slider-arrow--right'),
  });

});