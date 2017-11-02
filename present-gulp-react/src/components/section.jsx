import React from 'react';
import Header from './header.jsx';
import SliderBlock from './sliderBlock.jsx';
import SectionTitle from './sectionTitle.jsx';
import ContentAbout from './contentAbout.jsx';
import TeamItem from './teamItem.jsx';

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
          <div id="team" className={this.props.sectionClass}>
            <div className="container">
              <SectionTitle titleClass="section__title section__title--dark" text="Our team" />
              <div className="section__content-wrapper">
                <SliderBlock section="team" content={itemsInfo} />
              </div>
            </div>
          </div>
        );
      }
      default: return (
        <div className="section__content-wrapper">
          <p>Component not found...</p>
        </div>
      );
    }
    
  }
}

export default Section;