import React, { Component } from 'react';

/* List with markers in About-section */

export default class ListItem extends Component {
  render() {
    return (
      <div className="list__item">
        <div className="list__image">
          <span className="list__number">{this.props.number}</span>
        </div>
        <div className="list__text-wrapper">
          <p className="list__title">{this.props.title}</p>
          <p className="list__text">{this.props.text}</p>
        </div>
      </div>
    )
  }
}