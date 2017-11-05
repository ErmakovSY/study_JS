import React, { Component } from 'react';
import Header from './../../components/header.jsx';
import SliderMain from './../../components/sliderMain.jsx';
import './main.css';

export default class Main extends Component {
  render() {
    return (
      <div className="section__main" ref={"main"}>
        <Header getActive={this.getActive} activeItem={this.props.activeLink} scrollAnchor={this.props.scrollAnchor}/>
        <SliderMain />
      </div>
    )
  }
}