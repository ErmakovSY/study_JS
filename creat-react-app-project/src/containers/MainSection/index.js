import React, { Component } from 'react';
import Header from './../../components/header.jsx';
import TheContainer from './../../components/parallax.jsx';
// import SliderMain from './../../components/sliderMain.jsx';
import './main.scss';

export default class Main extends Component {
  render() {
    return (
      <div className="section section__main" name="section_main">
        <Header 
          setActive={ this.props.setActive }
        />
        <TheContainer />
      </div>
    )
  }
}