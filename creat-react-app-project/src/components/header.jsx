import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';

import Scroll from 'react-scroll';
let Link = Scroll.Link;
let menuItems = [
  {
    title: 'Home', 
    href: 'section_main'
  }, 
  {
    title: "About", 
    href: "section_about"
  }, 
  {
    title: "Team", 
    href: "section_team"
  }, 
  {
    title: "Portfolio", 
    href: "section_portfolio"
  },
  {
    title: "Work", 
    href: "section_work"
  }, 
  {
    title: "Features", 
    href: "section_features"
  },
  {
    title: "Contact", 
    href: "section_contact"
  }
];

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onTop: true,
      showNav: false
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandler.bind(this));
    this.setState({ showNav: (window.innerWidth < 651) ? false : true });
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler.bind(this));
  }
  scrollHandler() {
    this.setState({ onTop: (window.scrollY ? false : true) });
    // this.setState({ showNav: (window.innerWidth < 651) ? false : true });
  }
  togglerClickHandler() {
    this.setState({ showNav: !this.state.showNav });
  }
  render() {
    let headerClass = classNames({
      'header': this.state.onTop,
      'header header--sticky': !this.state.onTop
    });
    let navClass = classNames({
      'header__nav': this.state.showNav,
      'header__nav header__nav--hidden': !this.state.showNav
    });
    return (
      <header className={ headerClass }>
        <div className="container header__container">
          <Fade left delay={ 800 }>
            <div className="header__logo">
              <img 
                className="image" 
                src='./img/header-logo.png' 
                alt="Logo" 
              />
            </div>
          </Fade>
          <p 
            className="header__button"
            onClick={this.togglerClickHandler.bind(this)}
          >
            <FontAwesome name="navicon" />
          </p>
          <Fade right delay={ 800 }>
            <div className={ navClass }>
              {
                menuItems.map((item, i) => {
                  return (
                    <Link 
                      className="header__item"
                      activeClass="header__item--active" 
                      to={ item.href } 
                      spy={ true } 
                      smooth={ true } 
                      offset={ 0 } 
                      duration={ 500 } 
                      key={ item.title }
                    >
                      { item.title }
                    </Link>
                  )
                })
              }
            </div>
          </Fade>
        </div>
      </header>
    )
  }
}