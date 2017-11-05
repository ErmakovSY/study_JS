import React, { Component } from 'react';

/* Form button component */

export default class Button extends Component {
  render() {
    return (
      <button className={this.props.className}>{this.props.title}</button>
    )
  }
}