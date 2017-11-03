import React from 'react';
import HeaderLogo from './headerLogo.jsx';
import HeaderNav from './headerNav.jsx';

/* Header container component */

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onTop: 1
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandler.bind(this));
  }
  componentWillUnmount() {
      window.removeEventListener('scroll', this.scrollHandler.bind(this));
  }
  scrollHandler() {
    this.setState({onTop: (window.scrollY ? 0 : 1)});
  }
  getClassesName() {
    let classes = {
      onScroll: 'header header--sticky',
      onTop: 'header'
    };
    return (this.state.onTop) ? classes.onTop : classes.onScroll;
  }
  render() {
    return (
      <header className={this.getClassesName()} >
        <div className="container header__container">
          <HeaderLogo />
          <HeaderNav />
        </div>
      </header>
    );
  }
}

export default Header;