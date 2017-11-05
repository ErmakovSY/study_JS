import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';

/* Header container component */

const menuItems = [
  {
    title: 'Home', 
    href: '#section_main'
  }, 
  {
    title: "About", 
    href: "#section_about"
  }, 
  {
    title: "Team", 
    href: "#section_team"
  }, 
  {
    title: "Portfolio", 
    href: "#section_portfolio"
  },
  {
    title: "Work", 
    href: "#section_work"
  }, 
  {
    title: "Features", 
    href: "#section_features"
  },
  {
    title: "Contact", 
    href: "#section_contact"
  }
];

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onTop: 1,
      activeItem: this.props.activeItem
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandler.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler.bind(this));
  }
  scrollHandler() {
    this.setState({ onTop: (window.scrollY ? 0 : 1) });
  }
  clickHandler(index, item) {
    this.setState({ activeItem: index });
  }
  render() {
    return (
      <header className="header" >
        <div className="container header__container">
          <div className="header__logo">
            <img 
              className="image" 
              src='./img/header-logo.png' 
              alt="Logo" 
            />
          </div>
          <p 
            className="header__button" 
          >
            <FontAwesome name="navicon" />
          </p>
          <div className="header__nav">
            {
              menuItems.map((item, i) => {
                return (
                  <a 
                    className="header__item"
                    href={item.href}
                    key={item.title}
                  >
                    {item.title}
                  </a> 
                )
              })
            }
          </div>
        </div>
      </header>
    )
  }
}