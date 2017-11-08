import React, { Component } from 'react';
import Scroll from 'react-scroll';
import Main from './../MainSection';
import About from './../AboutSection';
import Team from './../TeamSection';
import Portfolio from './../PortfolioSection';
import Work from './../WorkSection';
import Features from './../FeaturesSection';
import Contact from './../ContactSection';
import ButtonUp from './../../components/scrollUpButton';

let Events = Scroll.Events;
let scrollSpy = Scroll.scrollSpy;

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  componentDidMount() {
    setTimeout(() => 
      this.setState({ 
        loading: false 
      }),
    2000); // simulates loading of data

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
    if (loading) { // if your app get render immediately, remove this block 
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
        <ButtonUp />
      </div>
    )
  }
}