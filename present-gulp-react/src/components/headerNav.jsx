import React from 'react';
import HeaderLink from './headerLink.jsx';

class HeaderNav extends React.Component {
  childClick() {
    console.log("click");
  }
  render() {
    const items = [
      {title: 'Home', href: '#'}, 
      {title: "About", href: "#"}, 
      {title: "Work", href: "#"}, 
      {title: "Team", href: "#"}, 
      {title: "Services", href: "#"},
      {title: "Features", href: "#"}, 
      {title: "Contact", href: "#"}
    ];
    return (
      <div className="header__nav">
        {items.map((item) => {
          return <HeaderLink title={item.title} href={item.href} clickToItem={this.childClick.bind(this)} />;
        })}
      </div>
    )
  }
}

export default HeaderNav;