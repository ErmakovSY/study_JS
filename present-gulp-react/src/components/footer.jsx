import React from 'react';
import Social from './social.jsx';

let socialItems = [
  {brand: 'twitter', href: '#'}, 
  {brand: 'facebook', href: '#'}, 
  {brand: 'skype', href: '#'}, 
  {brand: 'behance', href: '#'}, 
  {brand: 'linkedin', href: '#'}
];

class Footer extends React.Component {
  render() {

    return (
      <footer className="footer">
        <p className="footer__copy">© Copyright 2017 by PSD Booster. All Rights Reserved.</p>
        <Social items={socialItems} className="footer__social" />
      </footer>
    );
  }
}
export default Footer;