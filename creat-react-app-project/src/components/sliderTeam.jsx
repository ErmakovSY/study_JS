import React, { Component } from 'react';
import Slider from 'react-slick';
import TeamItem from './teamItem.jsx';

/* Slider component */

export default class SliderTeam extends Component {
  render() {
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
    )
  }
}