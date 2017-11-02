import React from 'react';
import HeaderLogo from './headerLogo.jsx';
import HeaderNav from './headerNav.jsx';

/* Header container component */

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="container header__container">
          <HeaderLogo />
          <HeaderNav />
        </div>
      </div>
    );
  }
}

export default Header;