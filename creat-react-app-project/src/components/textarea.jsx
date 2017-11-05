import React, { Component } from 'react';

export default class Textarea extends Component {
  render() {
    return (
      <textarea className="form__textarea" placeholder={this.props.placeholder} />
    );
  }
}