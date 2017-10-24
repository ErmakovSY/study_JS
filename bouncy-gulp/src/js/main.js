$(document).ready(function() {
  //portfolio-section

    ////gallery
    (function($) {
      function getWindowWidth() {
        return Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
      }
      // Instantiate wookmark after all images have been loaded
      let wookmark;
      imagesLoaded('#filter-container', function() {
        wookmark = new Wookmark('#filter-container', {
          fillEmptySpace: true, // Optional, fill the bottom of each column with widths of flexible height
          autoResize: true,
          flexibleWidth: true,
          itemWidth: function() {
            return getWindowWidth() * 0.18;
          }
        });
      });
      // Setup filter buttons when jQuery is available
      let $filters = $('.portfolio__tab');
      /**
       * When a filter is clicked, toggle it's active state and refresh.
       */
      function onClickFilter(e) {
        let $item = $(e.currentTarget),
            activeFilters = [],
            filterType = $item.data('filter');
        if (filterType === 'all') {
          $filters.removeClass('active');
        } else {
          $item.toggleClass('active');
          // Collect active filter strings
          $filters.filter('.active').each(function() {
            activeFilters.push($(this).data('filter'));
          });
        }
        wookmark.filter(activeFilters, 'or');
      }
      // Capture filter click events.
      $('.portfolio__tabs-wrapper').on('click.wookmark-filter', 'p', onClickFilter);
    })(jQuery);
  
  //team-section

    ////slider
  $('.section__slider').slick({
    arrows: true,
    dots: true,
    prevArrow: '<button type="button" class="slider__arrow slider__arrow--prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
    nextArrow: '<button type="button" class="slider__arrow slider__arrow--next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
    dotsClass: 'slider__dots',

    // responsive: [
    //   {
    //     breakpoint: 1024,
    //       settings: {
    //         slidesToShow: 3,
    //         slidesToScroll: 3,
    //         infinite: true,
    //         dots: true
    //       }
    //   },
    //   {
    //     breakpoint: 600,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 2
    //       }
    //   },
    //   {
    //     breakpoint: 480,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1
    //       }
    //   }
    // ]
  });

    ////text-scroll
  $('.slider__text-wrapper').slimScroll({
    height : '365px',
    size : '4px',
    color: '#19bd9a',
    distance : '1px',
    opacity : 1,
    borderRadius: 'none',
    railBorderRadius : 'none',
    wrapperClass : 'slider__scroll-wrapper'
  });

  //testimonals-section
    ////text-scroll
    $('.testimonals__slider-text-wrapper').slimScroll({
      height : '140px',
      size : '4px',
      color: '#19bd9a',
      distance : '1px',
      opacity : 1,
      borderRadius: 'none',
      railBorderRadius : 'none',
      wrapperClass : 'testimonals__scroll-wrapper',
    });
})
