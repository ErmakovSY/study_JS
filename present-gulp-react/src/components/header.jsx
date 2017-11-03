import React from 'react';
import FontAwesome from 'react-fontawesome';

/* Header container component */

const menuItems = [
  {title: 'Home', href: '#home'}, 
  {title: "About", href: "#about"}, 
  {title: "Team", href: "#team"}, 
  {title: "Features", href: "#portfolio"},
  {title: "Work", href: "#work"}, 
  {title: "Services", href: "#services"},
  {title: "Contact", href: "#contact"}
];

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onTop: 1,
      activeItem: this.props.activeItem,
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
    this.setState({togglerHide: (window.innerWidth > 650) ? 1 : 0});
    this.setState({activeItem: this.props.activeItem});
  }
  getHeaderClassesName() {
    let classes = {
      onScroll: 'header header--sticky',
      onTop: 'header'
    };
    return (this.state.onTop) ? classes.onTop : classes.onScroll;
  }
  getNavClassesName(index) {
    let classes = {
      active: 'header__nav-item header__nav-item--active',
      disactive: 'header__nav-item'
    };
    return (index == this.state.activeItem) ? classes.active : classes.disactive;
  }
  getTogglerClassesName(index) {
    let classes = {
      hidden: 'header__nav hidden',
      shown: 'header__nav'
    };
    return (this.state.togglerHide) ? classes.shown : classes.hidden;
  }
  clickHandler(index, item) {
    this.setState({activeItem: index});
    this.props.getActive(index);
    this.props.scrollAnchor(index);
  }
  clickToggler() {
    this.setState({togglerHide: !this.state.togglerHide});
  }
  render() {
    return (
      <header className={this.getHeaderClassesName()} >
        <div className="container header__container">
          <div className="header__logo">
            <img className="image" src={'./img/header-logo.png'} alt="Logo" />
          </div>
          <p className="header__button" onClick={this.clickToggler.bind(this)} ><FontAwesome name="navicon" /></p>
          <div className={this.getTogglerClassesName()}>
            {
              menuItems.map((item, i) => {
                return <a 
                    className={this.getNavClassesName(i)}
                    onClick={this.clickHandler.bind(this, i, item)} 
                    href={item.href}
                    key={i}
                  >
                    {item.title}
                  </a> 
              })
            }
          </div>
        </div>
      </header>
    );
  }
}

export default Header;