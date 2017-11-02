import React from 'react';
import Section from './section.jsx';
import SliderBlock from './sliderBlock.jsx';

/* Main component */

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Section sectionClass="section__main" />
        <Section sectionClass="section__about" />
        <Section sectionClass="section__team" />
        <Section sectionClass="section__portfolio" />
     </div>
    );
  }
}

export default App;