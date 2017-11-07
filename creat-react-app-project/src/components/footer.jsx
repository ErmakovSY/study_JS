import React, { Component } from 'react';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
import Social from './social.jsx';

let socialItems = [
  {
    brand: 'twitter', 
    href: '#'
  }, 
  {
    brand: 'facebook', 
    href: '#'
  }, 
  {
    brand: 'skype', 
    href: '#'
  }, 
  {
    brand: 'behance', 
    href: '#'
  }, 
  {
    brand: 'linkedin', 
    href: '#'
  }
];

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <Fade left delay={ 500 }>
            <p className="footer__copy">
              © Copyright 2017 by PSD Booster. All Rights Reserved.
            </p>
          </Fade>
          <Fade right delay={ 500 }>
            <Social 
              items={socialItems} 
              className="footer__social" 
            />
          </Fade>
        </div>
      </footer>
    )
  }
}