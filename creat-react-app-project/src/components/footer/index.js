import React from 'react';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
import Social from './../social';

const SOCIAL_ITEMS = [
  {
    id: 0,
    brand: 'twitter', 
    href: '#'
  }, 
  {
    id: 1,
    brand: 'facebook', 
    href: '#'
  }, 
  {
    id: 2,
    brand: 'skype', 
    href: '#'
  }, 
  {
    id: 3,
    brand: 'behance', 
    href: '#'
  }, 
  {
    id: 4,
    brand: 'linkedin', 
    href: '#'
  }
];

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <Fade left delay={500}>
        <p className="footer__copy">
          © Copyright 2017 by PSD Booster. All Rights Reserved.
        </p>
      </Fade>
      <Fade right delay={500}>
        <Social 
          items={SOCIAL_ITEMS} 
          className="footer__social" 
        />
      </Fade>
    </div>
  </footer>
)

export default Footer;