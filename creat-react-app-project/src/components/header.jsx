import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

/* Header container component */

const menuItems = [
  {
    title: 'Home', 
    href: '#home'
  }, 
  {title: "About", href: "#about"}, 
  {title: "Team", href: "#team"}, 
  {title: "Features", href: "#portfolio"},
  {title: "Work", href: "#work"}, 
  {title: "Services", href: "#services"},
  {title: "Contact", href: "#contact"}
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
    this.setState({onTop: (window.scrollY ? 0 : 1)});
  }
  clickHandler(index, item) {
    this.setState({activeItem: index});
    this.props.getActive(index);
    this.props.scrollAnchor(index);
  }
  render() {
    return (
      <header className={this.getHeaderClassesName()} >
        <div className="container header__container">
          <div className="header__logo">
            <img className="image" src={'./img/header-logo.png'} alt="Logo" />
          </div>
          <p 
            className="header__button" 
            onClick={this.clickToggler.bind(this)} 
          >
            <FontAwesome name="navicon" />
          </p>
          <div className={this.getTogglerClassesName()}>
            {
              menuItems.map((item, i) => {
                return (
                  <a 
                    className={this.getNavClassesName(i)}
                    onClick={this.clickHandler.bind(this, i, item)} 
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