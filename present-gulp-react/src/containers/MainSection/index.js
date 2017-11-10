import React, { Component } from 'react';
import Header from './../../components/header';
import ParalaxMain from './../../components/parallax';

export default class Main extends Component {

  submitHandler(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div
        className="section section__main" 
        name="section_main"
      >
        <Header />
        <ParalaxMain onClick={this.submitHandler} />
      </div>
    )
  }
}