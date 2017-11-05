import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    return (
      <input type="text" className="form__input" placeholder={this.props.placeholder} />
    )
  }
}
