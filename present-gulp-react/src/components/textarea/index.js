import React from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';

const Textarea = (props) => (
  <div className="textarea__wrapper">
    <textarea 
      className={props.className}
      placeholder={props.placeholder}
      onBlur={props.onBlur}
      name={props.name}
    />
    <FontAwesome 
      className="input__icon textarea__icon input__icon--valid" 
      name="check-circle"
      style={{opacity: (props.validStatus === true) ? 0.7 : 0}} 
    />
    <FontAwesome 
      className="input__icon textarea__icon input__icon--invalid" 
      name="times-circle" 
      style={{opacity: (props.validStatus === false) ? 0.7 : 0}} 
    />
  </div>
)

Textarea.propTypes = {
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func.isRequired
}

export default Textarea;