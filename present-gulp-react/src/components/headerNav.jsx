import React from 'react';

/* Header navbar component */

const menuItems = [
  {title: 'Home', href: '#home'}, 
  {title: "About", href: "#about"}, 
  {title: "Work", href: "#work"}, 
  {title: "Team", href: "#team"}, 
  {title: "Services", href: "#services"},
  {title: "Features", href: "#portfolio"}, 
  {title: "Contact", href: "#contact"}
];

class HeaderNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandler.bind(this));
  }
  componentWillUnmount() {
      window.removeEventListener('scroll', this.scrollHandler.bind(this));
  }
  scrollHandler() {
    // let ofset = React.findDOMNode(this.refs.work);
    // console.log(ofset);
  }
  clickHandler(index, item) {
    this.setState({activeItem: index});
    console.log(window.scrollY);
  }
  getClassesName(index) {
    let classes = {
      active: 'header__nav-item header__nav-item--active',
      disactive: 'header__nav-item'
    };
    return (index == this.state.activeItem) ? classes.active : classes.disactive;
  }
  render() {
    return (
      <div className="header__nav">
        {
          menuItems.map((item, i) => {
            return <a 
                className={this.getClassesName(i)}
                onClick={this.clickHandler.bind(this, i, item)} 
                href={item.href}
                key={i}
              >
                {item.title}
              </a> 
          })
        }
      </div>
    )
  }
}

export default HeaderNav;