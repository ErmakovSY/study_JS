import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => (
  <div className="input__wrapper">
    <label
      className="input__placeholder"
    >
      <input 
        type="text" 
        name={props.name} 
        className={props.className}
        onBlur={props.onBlur}
      />
      <span 
        style={{ 
          transform: (props.value == "") ? "" : "translateY(-70%)",
          fontSize: (props.value == "") ? "" : "12px"
        }}
      >
        {props.placeholder}
      </span>
    </label>
  </div>
)

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
}

export default Input;