import React from 'react';
import Slider from 'react-slick';
import MainSlide_1 from "./mainSlide1.jsx";

class SliderBlock extends React.Component {
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
  };
    return(
      <Slider {...settings}>
        <div className='slider__item'>
          <img src={'./img/main-bg.png'} className="image" />
          <MainSlide_1 />
        </div>
        <div className='slider__item'><img src='http://placekitten.com/g/400/200' className="image" /></div>
        <div className='slider__item'><img src='http://placekitten.com/g/400/200' className="image" /></div>
        <div className='slider__item'><img src='http://placekitten.com/g/400/200' className="image" /></div>
      </Slider>
    );
  }
}

export default SliderBlock;