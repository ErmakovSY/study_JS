import React from 'react';

/* Header logo component */

class HeaderLogo extends React.Component {
  render() {
    return (
      <div className="header__logo">
        <img className="image" src={'./img/header-logo.png'} alt="Logo" />
      </div>
    );
  }
}

export default HeaderLogo;