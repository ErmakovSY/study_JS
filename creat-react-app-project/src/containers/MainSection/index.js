import React, { Component } from 'react';
import Header from './../../components/header';
import ParalaxMain from './../../components/parallax';
import './main.scss';

const Main = () => (
  <div
    className="section section__main" 
    name="section_main"
  >
    <Header />
    <ParalaxMain />
  </div>
)

export default Main;