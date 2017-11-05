import React, { Component } from 'react';

/* Section title component */

export default class SectionTitle extends Component {
  render() {
    return (
      <p className={this.props.titleClass}>{this.props.text}</p>
    )
  }
}