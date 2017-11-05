import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Main from './../MainSection/index.js';
import About from './../AboutSection/index.js';
import Team from './../TeamSection/index.js';
import Portfolio from './../PortfolioSection/index.js';
import Work from './../WorkSection/index.js';
import Features from './../FeaturesSection/index.js';
import Contact from './../ContactSection/index.js';
import './main.scss';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <ScrollableAnchor id={'section_main'}>
          <Main />
        </ScrollableAnchor>
        <ScrollableAnchor id={'section_about'}>
          <About />
        </ScrollableAnchor>
        <ScrollableAnchor id={'section_team'}>
          <Team />
        </ScrollableAnchor>
        <ScrollableAnchor id={'section_portfolio'}>
          <Portfolio />
        </ScrollableAnchor>
        <ScrollableAnchor id={'section_work'}>
          <Work />
        </ScrollableAnchor>
        <ScrollableAnchor id={'section_features'}>
          <Features />
        </ScrollableAnchor>
        <ScrollableAnchor id={'section_contact'}>
          <Contact />
        </ScrollableAnchor>
      </div>
    )
  }
}