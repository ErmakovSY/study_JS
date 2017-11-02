import React from 'react';
import Button from './button.jsx';
import Header from './header.jsx';
import SliderBlock from './sliderBlock.jsx';
import SectionTitle from './sectionTitle.jsx';
import ContentAbout from './contentAbout.jsx';
import TeamItem from './teamItem.jsx';
import Portfolio from './gallery.jsx';
import ParallaxContainer from './parallax.jsx';

/* Section component */

class Section extends React.Component {
  render() {
    switch (this.props.sectionClass) {
      /* MAIN section */
      case "section__main": return (
        <div className={this.props.sectionClass}>
          <Header />
          <SliderBlock section="main" />
        </div>
      );
      /* ABOUT section */
      case "section__about": return (
        <div className={this.props.sectionClass}>
          <div className="container">
            <SectionTitle titleClass="section__title section__title--dark" text="We are modest." />
            <div className="section__content-wrapper">
              <ContentAbout block="left" />
              <ContentAbout block="right" />
            </div>
          </div>
        </div>
      );
      /* TEAM section */
      case "section__team": {
        /* some data about team */
        let itemsInfo = [
          {image: './img/team-1.png', name: "Tomas Newman", job: "CEO and Founder", social: [{brand: 'facebook', href: '#'}, {brand: 'twitter', href: '#'}]},
          {image: './img/team-2.png', name: "John Backer", job: "Head of Development", social: [{brand: 'instagram', href: '#'}]},
          {image: './img/team-3.png', name: "Mark Conor", job: "Graphic Designer", social: [{brand: 'vimeo', href: '#'}, {brand: 'instagram', href: '#'}, {brand: 'facebook', href: '#'}]},
          {image: './img/team-4.png', name: "Nick Zelman", job: "Client Service Director", social: [{brand: 'twitter', href: '#'}, {brand: 'instagram', href: '#'}]},
          {image: './img/team-1.png', name: "Andrew Duglas", job: "Project Manager", social: [{brand: 'skype', href: '#'}]},
          {image: './img/team-2.png', name: "Bruce Grand", job: "Sales Manager", social: [{brand: 'twitter', href: '#'}, {brand: 'pinterest', href: '#'}, {brand: 'facebook', href: '#'}]},
        ];
        return (
          <div className={this.props.sectionClass}>
            <div className="container">
              <SectionTitle titleClass="section__title section__title--dark" text="Meet the team." />
              <div className="section__content-wrapper">
                <SliderBlock section="team" content={itemsInfo} />
              </div>
            </div>
          </div>
        );
      }
      /* PORTFOLIO section */
      case "section__portfolio": {
        /* some photos */
        const PHOTO_SET = [
          {src: './img/portfolio-1.png', thumbnail: './img/portfolio-1.png', thumbnailWidth: 360, thumbnailHeight: 265},
          {src: './img/portfolio-2.png', thumbnail: './img/portfolio-2.png', thumbnailWidth: 360, thumbnailHeight: 265},
          {src: './img/portfolio-3.png', thumbnail: './img/portfolio-3.png', thumbnailWidth: 360, thumbnailHeight: 265},
          {src: './img/portfolio-4.png', thumbnail: './img/portfolio-4.png', thumbnailWidth: 360, thumbnailHeight: 265},
          {src: './img/portfolio-5.png', thumbnail: './img/portfolio-5.png', thumbnailWidth: 360, thumbnailHeight: 265},
          {src: './img/portfolio-6.png', thumbnail: './img/portfolio-6.png', thumbnailWidth: 360, thumbnailHeight: 265},
        ];
        return (
          <div className={this.props.sectionClass}>
            <div className="container">
              <SectionTitle titleClass="section__title section__title--light" text="Lovely work." />
              <Portfolio images={PHOTO_SET}/>
              <Button className="button portfolio__button" title={"Show me more"}/>
            </div>
          </div>
        );
      }
      default: return (
        <div className="section__content-wrapper">
          <p style={{color:"#ed1c24", fontSize:24}}>Component not found...</p>
        </div>
      );
    }
    
  }
}

export default Section;