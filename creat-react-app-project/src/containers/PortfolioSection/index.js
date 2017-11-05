import React, { Component } from 'react';
import SectionTitle from './../../components/sectionTitle.jsx';
import GalleryFancy from './../../components/gallery.jsx';
import Button from './../../components/button.jsx';
import './main.css';

export default class Portfolio extends Component {
  render() {
    let photoSet = [
      {src: './img/portfolio-1.png', thumbnail: './img/portfolio-1.png', thumbnailWidth: 360, thumbnailHeight: 245},
      {src: './img/portfolio-2.png', thumbnail: './img/portfolio-2.png', thumbnailWidth: 360, thumbnailHeight: 245},
      {src: './img/portfolio-3.png', thumbnail: './img/portfolio-3.png', thumbnailWidth: 360, thumbnailHeight: 245},
      {src: './img/portfolio-4.png', thumbnail: './img/portfolio-4.png', thumbnailWidth: 360, thumbnailHeight: 245},
      {src: './img/portfolio-5.png', thumbnail: './img/portfolio-5.png', thumbnailWidth: 360, thumbnailHeight: 245},
      {src: './img/portfolio-6.png', thumbnail: './img/portfolio-6.png', thumbnailWidth: 360, thumbnailHeight: 245},
    ];
    return (
      <div className="section__portfolio" ref={"portfolio"}>
        <div className="container">
          <SectionTitle titleClass="section__title section__title--light portfolio__maintitle" text="Lovely work." />
          <GalleryFancy images={photoSet}/>
          <Button className="button portfolio__button" title={"Show me more"}/>
        </div>
      </div>
    )
  }
}