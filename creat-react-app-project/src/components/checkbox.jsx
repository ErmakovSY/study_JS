import React, { Component } from 'react';

export default class Checkbox extends Component {
  changeHandler() {
    //
  }
  render() {
    return (
      <label className="checkbox__label">
        { this.props.title }
        <input 
          type="checkbox" 
          checked={ this.props.check }
          className="checkbox__input"
          onChange={ this.changeHandler }
        />
      </label>
    )
  }
}