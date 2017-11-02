import React from 'react';
import FontAwesome from 'react-fontawesome';

/* Social-icons-block component */

class Social extends React.Component {
  render() {
    let socialItems = this.props.items;
    return (
      <div className={this.props.className}>
        {
          socialItems.map((item, i) => {
            return <a className="social__link" href={item.href} key={i}>
                     <FontAwesome name={item.brand} />
                  </a> 
          })
        }
      </div>
    )
  }
}

export default Social;