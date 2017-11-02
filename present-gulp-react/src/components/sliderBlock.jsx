import React from 'react';
import Slider from 'react-slick';
import MainSlide from './mainSlide.jsx';
import TeamItem from './teamItem.jsx';

/* Slider component */

class SliderBlock extends React.Component {
  render() {
    switch (this.props.section) {
      case "main": {
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
        );
      }
      case "team": {
        let settings = {
          className: "team__slider",
          autoplay: false,
          autoplaySpeed: 3000,
          speed: 1000,
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          dotsClass: 'slick-dots team__dots',
        };
        let items = this.props.content;
        return (
          <Slider {...settings}>
            {
              items.map((item, i) => {
                return (
                  <div className='slider__item--team' key={i}>
                    <TeamItem image={item.image} name={item.name} job={item.job} social={item.social} />
                  </div> 
                )
              })
            }
          </Slider>
        );
      }
    }
  }
}

export default SliderBlock;