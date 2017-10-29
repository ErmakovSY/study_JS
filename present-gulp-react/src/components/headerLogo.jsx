import React from 'react';
// import logo from './img/header-logo.png';
// let logo = require ('./img/header-logo.png');

class HeaderLogo extends React.Component {
  render() {
    return (
      <div className="header__logo">
        <img className="image" src={'./img/header-logo.png'} alt="Logo" />
        {/* <img className="image" src={logo} alt="Logo" /> */}
      </div>
    );
  }
}

export default HeaderLogo;