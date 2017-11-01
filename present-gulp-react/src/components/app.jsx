import React from 'react';
import Section from './section.jsx';

import SliderBlock from './sliderBlock.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Section sectionClass="section__main" />
        <Section sectionClass="section__about" />
     </div>
    );
  }
}

export default App;