import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Button = (props) => (
  <button className={`button ${props.className}`}>
    {props.title}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired
}

export default Button;