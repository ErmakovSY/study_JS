import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Checkbox = (props) => (
  <label className="checkbox__label">
    <input 
      type="checkbox" 
      name={props.name}
      className={props.className}
      onChange={props.onChange}
    />
    {props.title}
  </label>
)
export default Checkbox;

Checkbox.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}