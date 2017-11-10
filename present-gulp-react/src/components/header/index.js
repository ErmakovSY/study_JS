import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
import Scroll from 'react-scroll';

let Link = Scroll.Link;
const MENU_ITEMS = [
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
    this.togglerClickHandler = this.togglerClickHandler.bind(this);
    this.scrollHandler = this.scrollHandler.bind(this)
    this.state = {
      onTop: true,
      showNav: false,
      togglerView: true
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandler);
    this.setState({ 
      showNav: (window.innerWidth < 651) ? false : true 
    });
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler);
  }
  scrollHandler() {
    this.setState({ 
      onTop: (window.scrollY ? false : true) 
    });
  }
  togglerClickHandler() {
    this.setState({ 
      showNav: !this.state.showNav, 
      togglerView: !this.state.togglerView 
    });
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
    let togglerClass = classNames({
      'header__button': this.state.togglerView,
      'header__button header__button--selected': !this.state.togglerView
    });
    return (
      <header className={headerClass}>
        <div className="container header__container">
          <Fade left delay={800}>
            <div className="header__logo">
              <img 
                className="image" 
                src='./img/header-logo.png' 
                alt="Logo" 
              />
            </div>
          </Fade>
          <p 
            className={togglerClass}
            onClick={this.togglerClickHandler}
          >
            <FontAwesome name="navicon" />
          </p>
          <Fade right delay={800}>
            <div className={navClass}>
              {
                MENU_ITEMS.map(item => 
                  <Link 
                    className="header__item"
                    activeClass="header__item--active" 
                    to={item.href} 
                    spy={true} 
                    smooth={true} 
                    offset={0} 
                    duration={400} 
                    key={item.title}
                  >
                    {item.title}
                  </Link>
                )
              }
            </div>
          </Fade>
        </div>
      </header>
    )
  }
}