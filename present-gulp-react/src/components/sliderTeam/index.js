import React, { Component } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import ItemTeam from './../itemTeam';

const SETTINGS = {
  className: "team__slider",
  autoplay: false,
  autoplaySpeed: 3000,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  dotsClass: 'slick-dots team__dots',
  responsive: [
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, 
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, 
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export default class SliderTeam extends Component {
  render() {
    let items = this.props.content;
    return (
      <Slider {...SETTINGS}>
        {
          items.map(item => 
            <div 
              className='slider__item--team' 
              key={item.name}
            >
              <ItemTeam 
                image={item.image} 
                name={item.name} 
                job={item.job} 
                social={item.social} 
              />
            </div> 
          )
        }
      </Slider>
    )
  }
}

SliderTeam.propTypes = {
  content: PropTypes.array.isRequired
}