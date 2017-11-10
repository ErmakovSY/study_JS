import React from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';

const Input = (props) => (
  <div className="input__wrapper">
    <input 
      type="text" 
      name={props.name} 
      placeholder={props.placeholder} 
      className={props.className}
      onBlur={props.onBlur}
    />
    <FontAwesome 
      className="input__icon input__icon--valid" 
      name="check-circle"
      style={{opacity: (props.validStatus === true) ? 0.7 : 0}} 
    />
    <FontAwesome 
      className="input__icon input__icon--invalid" 
      name="times-circle" 
      style={{opacity: (props.validStatus === false) ? 0.7 : 0}} 
    />
  </div>
)

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired
}

export default Input;