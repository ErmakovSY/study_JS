import React from 'react';
import PropTypes from 'prop-types';

const Textarea = (props) => (
  <div className="textarea__wrapper">
    <label
      className="textarea__placeholder"
    >
      <textarea 
        className={props.className}
        onBlur={props.onBlur}
        name={props.name}
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

Textarea.propTypes = {
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func.isRequired
}

export default Textarea;