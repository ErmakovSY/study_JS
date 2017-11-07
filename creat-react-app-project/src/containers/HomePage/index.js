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
import PreloaderIcon, {ICON_TYPE} from 'react-preloader-icon';

let Events     = Scroll.Events;
let scrollSpy  = Scroll.scrollSpy;

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 2500); // simulates loading of data
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
    let loading = this.state.loading;
    if(loading) { // if your app get render immediately, remove this block 
      return (
        <div className="preloader__block">
          <div className="preloader__image-wrapper">
            <img 
              className="image" 
              src='./img/preloader.gif' 
              alt="Preloader" 
            />
          </div>
        </div>
      ) // render loader when app is not ready
    }
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