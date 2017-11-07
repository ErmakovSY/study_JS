import React, { Component } from 'react';

export default class SectionTitle extends Component {
  render() {
    return (
      <p className={this.props.titleClass}>{this.props.text}</p>
    )
  }
}