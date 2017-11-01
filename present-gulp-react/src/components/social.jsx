import React from 'react';
import FontAwesome from 'react-fontawesome';

class Social extends React.Component {

  render() {
    const socialItems = [
      {brand: 'facebook', href: '#'}, 
      {brand: 'twitter', href: '#'}, 
      {brand: 'google', href: '#'}, 
      {brand: 'dribbble', href: '#'}, 
      {brand: 'behance', href: '#'}
    ];
    return (
      <div className="social__wrapper">
        {
          socialItems.map((item) => {
            return <a className="social__link" href={item.href}>
                <FontAwesome name={item.brand} />
              </a> 
          })
        }
      </div>
    )
  }
}

export default Social;