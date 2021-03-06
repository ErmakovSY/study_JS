import React, { Component } from 'react';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
import SectionTitle from './../../components/sectionTitle';
import GalleryFancy from './../../components/gallery';
import Button from './../../components/button';

const PHOTOSET = [
  {
    src: './img/portfolio-1-full.png', 
    thumbnail: './img/portfolio-1.png', 
    thumbnailWidth: 360, 
    thumbnailHeight: 245
  },
  {
    src: './img/portfolio-2-full.png', 
    thumbnail: './img/portfolio-2.png', 
    thumbnailWidth: 360, 
    thumbnailHeight: 245
  },
  {
    src: './img/portfolio-3-full.png', 
    thumbnail: './img/portfolio-3.png', 
    thumbnailWidth: 360, 
    thumbnailHeight: 245
  },
  {
    src: './img/portfolio-4-full.png', 
    thumbnail: './img/portfolio-4.png', 
    thumbnailWidth: 360, 
    thumbnailHeight: 245
  },
  {
    src: './img/portfolio-5-full.png', 
    thumbnail: './img/portfolio-5.png', 
    thumbnailWidth: 360, 
    thumbnailHeight: 245
  },
  {
    src: './img/portfolio-6-full.png', 
    thumbnail: './img/portfolio-6.png', 
    thumbnailWidth: 360, 
    thumbnailHeight: 245
  }
];

export default class Portfolio extends Component {

submitHandler(e) {
  e.preventDefault();
}

  render() {
    return (
      <div 
        className="section section__portfolio" 
        name="section_portfolio"
      >
        <div className="container">
          <Fade right big duration={400}>
            <SectionTitle 
              titleClass="section__title--light portfolio__maintitle animated" 
              text="Lovely work." 
            />
          </Fade>
          <Zoom>
            <GalleryFancy images={PHOTOSET}/>
            <Button 
              className="button portfolio__button" 
              title="Show me more"
              onClick={this.submitHandler}
            />
          </Zoom>
        </div>
      </div>
    )
  }
}