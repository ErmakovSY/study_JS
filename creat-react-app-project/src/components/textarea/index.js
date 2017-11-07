import React from 'react';
import PropTypes from 'prop-types';

const Textarea = (props) => (
  <textarea 
    className="form__textarea" 
    placeholder={props.placeholder} 
  />
)

Textarea.propTypes = {
  placeholder: PropTypes.string
}

export default Textarea;