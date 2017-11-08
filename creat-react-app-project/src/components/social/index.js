import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import './style.scss';

export default class Social extends Component {
  render() {
    let socialItems = this.props.items;
    return (
      <div className={this.props.className}>
        {
          socialItems.map(item => 
            <a 
              className="social__link" 
              href={item.href} 
              key={item.id}
            >
              <FontAwesome name={item.brand} />
            </a>
          )
        }
      </div>
    )
  }
}

Social.propTypes = {
  className: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
}