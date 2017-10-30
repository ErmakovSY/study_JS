import React from 'react';
import Header from './header.jsx';
import SliderBlock from './sliderBlock.jsx';

class Section extends React.Component {
  render() {
    return (
      <div className="section__main">
        <Header />
        <SliderBlock />
      </div>
    );
  }
}

export default Section;