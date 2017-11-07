import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => (
  <button className={props.className}>
    {props.title}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired
}

export default Button;