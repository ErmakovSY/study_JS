import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default class Checkbox extends Component {
  changeHandler() {
    //
  }
  render() {
    return (
      <label className="checkbox__label">
        <input 
          type="checkbox" 
          checked={this.props.checkHandler}
          className="checkbox__input"
          onChange={this.changeHandler}
        />
        {this.props.title}
      </label>
    )
  }
}

Checkbox.propTypes = {
  check: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}