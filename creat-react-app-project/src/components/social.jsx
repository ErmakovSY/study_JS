import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

/* Social-icons-block component */

export default class Social extends Component {
  render() {
    let socialItems = this.props.items;
    return (
      <div className={this.props.className}>
        {
          socialItems.map((item, i) => {
            return (
              <a className="social__link" href={item.href} key={i}>
                <FontAwesome name={item.brand} />
              </a>
            )
          })
        }
      </div>
    )
  }
}