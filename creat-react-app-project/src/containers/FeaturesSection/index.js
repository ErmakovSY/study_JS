import React, { Component } from 'react';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
import SectionTitle from './../../components/sectionTitle';
import './main.scss';

const ITEMS = [
  {
    src: "./img/features-1.png", 
    title: "Product Design: Eames Chairs", 
    text: "Eames designs are certainly iconic. Everyone of us know at least two or three of their famous chairs. I would even risk saying that most of us dream about having a nice Eames.",
    appearance: {
      duration: 400,
      delay: 400
    }
  },
  {
    src: "./img/features-2.png", 
    title: "Elegant and Colorful Logos", 
    text: "I’ve always found logo design to be one of the most challenging things to get right. There’s so much that a logo can say about a brand without actually saying it.",
    appearance: {
      duration: 400,
      delay: 200
    }
  },
  {
    src: "./img/features-3.png", 
    title: "A Showcase of Creative", 
    text: "It’s always interesting to see another designer’s take on a famous website, app or even physical product. Different designers add their own personality and style.",
    appearance: {
      duration: 400,
      delay: 0
    }
  }
];

export default class Features extends Component {
  render() {
    return (
      <div 
        className="section section__features" 
        name="section_features"
      >
        <div className="container">
          <Fade right big duration={400}>
            <SectionTitle 
              titleClass="section__title--light" 
              text="Features."
            />
          </Fade>
          <Zoom>
            <div className="section__content-wrapper features__wrapper">
              {
                ITEMS.map(item => 
                  <Fade left big 
                    duration={item.appearance.duration} 
                    delay={item.appearance.delay}
                    className="features__item"
                    key={item.title}
                  >
                    <div className="features__image">
                      <img 
                        className="image" 
                        src={item.src} 
                        alt={item.title} 
                      />
                    </div>
                    <p className="features__title">
                      {item.title}
                    </p>
                    <p className="features__text">
                      {item.text}
                    </p>
                  </Fade>
                )
              }
            </div>
          </Zoom>
        </div>
      </div>
    )
  }
}