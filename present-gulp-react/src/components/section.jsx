import React from 'react';
import Header from './header.jsx';
import SliderBlock from './sliderBlock.jsx';
import SectionTitle from './sectionTitle.jsx';
import ContentAbout from './contentAbout.jsx';

class Section extends React.Component {
  render() {
    switch (this.props.sectionClass) {
      case "section__main": return (
        <div className={this.props.sectionClass}>
          <Header />
          <SliderBlock />
        </div>
      );
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
    }
    
  }
}

export default Section;