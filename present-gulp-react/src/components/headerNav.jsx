import React from 'react';

class HeaderNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeItem: 0};
  }
  clickHandler(index) {
    console.log(`click on ${index}`);
    this.setState({activeItem: index});
  }
  getClassesName(index) {
    let classes = {
      active: 'header__nav-item header__nav-item--active',
      disactive: 'header__nav-item'
    };
    return (index == this.state.activeItem) ? classes.active : classes.disactive;
  }
  render() {
    const menuItems = [
      {title: 'Home', href: '#home'}, 
      {title: "About", href: "#about"}, 
      {title: "Work", href: "#work"}, 
      {title: "Team", href: "#team"}, 
      {title: "Services", href: "#services"},
      {title: "Features", href: "#features"}, 
      {title: "Contact", href: "#contact"}
    ];
    return (
      <div className="header__nav">
        {
          menuItems.map((item, i) => {
            return <a 
                className={this.getClassesName(i)}
                onClick={this.clickHandler.bind(this, i)} 
                href={item.href}
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