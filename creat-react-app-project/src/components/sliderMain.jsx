import React, { Component } from 'react';
import Slider from 'react-slick';
import MainSlide from './mainSlide.jsx';

/* Slider component */

export default class SliderMain extends Component {
  render() {
    let settings = {
      className: "slider__wrapper",
      autoplay: true,
      autoplaySpeed: 7000,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true
    }
    return(
      <Slider {...settings}>
        <div className='slider__item'>
          <img src={'./img/main-bg.png'} className="image" />
          <MainSlide slideNumber={1} />
        </div>
        <div className='slider__item'>
          <img src='http://placekitten.com/g/400/200' className="image" />
          <MainSlide slideNumber={2} />
        </div>
        <div className='slider__item'>
          <img src='http://placekitten.com/g/400/200' className="image" />
          <MainSlide slideNumber={3} />
        </div>
      </Slider>
    )
  }
}