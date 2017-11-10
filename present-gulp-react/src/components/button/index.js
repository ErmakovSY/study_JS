import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => (
  <button 
    className={props.className}
    onClick={props.onClick}
  >
    {props.title}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button;