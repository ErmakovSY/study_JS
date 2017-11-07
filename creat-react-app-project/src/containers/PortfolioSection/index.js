import React, { Component } from 'react';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
import SectionTitle from './../../components/sectionTitle';
import GalleryFancy from './../../components/gallery';
import Button from './../../components/button';
import './main.scss';

const PHOTOSET = [
  {
    src: './img/portfolio-1.png', 
    thumbnail: './img/portfolio-1.png', 
    thumbnailWidth: 360, 
    thumbnailHeight: 245
  },
  {
    src: './img/portfolio-2.png', 
    thumbnail: './img/portfolio-2.png', 
    thumbnailWidth: 360, 
    thumbnailHeight: 245
  },
  {
    src: './img/portfolio-3.png', 
    thumbnail: './img/portfolio-3.png', 
    thumbnailWidth: 360, 
    thumbnailHeight: 245
  },
  {
    src: './img/portfolio-4.png', 
    thumbnail: './img/portfolio-4.png', 
    thumbnailWidth: 360, 
    thumbnailHeight: 245
  },
  {
    src: './img/portfolio-5.png', 
    thumbnail: './img/portfolio-5.png', 
    thumbnailWidth: 360, 
    thumbnailHeight: 245
  },
  {
    src: './img/portfolio-6.png', 
    thumbnail: './img/portfolio-6.png', 
    thumbnailWidth: 360, 
    thumbnailHeight: 245
  }
];

export default class Portfolio extends Component {
  render() {
    return (
      <div 
        className="section section__portfolio" 
        name="section_portfolio"
      >
        <div className="container">
          <Fade right big duration={ 400 }>
            <SectionTitle 
              titleClass="section__title section__title--light portfolio__maintitle animated" 
              text="Lovely work." 
            />
          </Fade>
          <Zoom>
            <GalleryFancy images={PHOTOSET}/>
            <Button 
              className="button portfolio__button" 
              title="Show me more"
            />
          </Zoom>
        </div>
      </div>
    )
  }
}