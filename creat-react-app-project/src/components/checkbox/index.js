import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Checkbox extends Component {
  changeHandler() {
    //
  }
  render() {
    return (
      <label className="checkbox__label">
        {this.props.title}
        <input 
          type="checkbox" 
          checked={this.props.checkHandler}
          className="checkbox__input"
          onChange={this.changeHandler}
        />
      </label>
    )
  }
}

Checkbox.propTypes = {
  check: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}