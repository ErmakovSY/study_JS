import React, { Component } from 'react';
import Main from './../MainSection/index.js';
import About from './../AboutSection/index.js';
import Team from './../TeamSection/index.js';
import Portfolio from './../PortfolioSection/index.js';
import Work from './../WorkSection/index.js';
import Features from './../FeaturesSection/index.js';
import Contact from './../ContactSection/index.js';
import './main.scss';

import Scroll from 'react-scroll'; // Imports all Mixins

let Events     = Scroll.Events;
let scrollSpy  = Scroll.scrollSpy;

export default class HomePage extends Component {
  componentDidMount() {
    Events.scrollEvent.register('begin', (to, element) => {
      // console.log("begin", arguments);
    });
    Events.scrollEvent.register('end', (to, element) => {
      // console.log("end", arguments);
    });
    scrollSpy.update();
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  render() {
    return (
      <div>
        <Main />
        <About />
        <Team  />
        <Portfolio />
        <Work />
        <Features />
        <Contact />
      </div>
    )
  }
}