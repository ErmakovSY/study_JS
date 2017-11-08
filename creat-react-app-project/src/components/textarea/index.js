import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Textarea = (props) => (
  <textarea 
    className="textarea form__textarea" 
    placeholder={props.placeholder} 
  />
)

Textarea.propTypes = {
  placeholder: PropTypes.string
}

export default Textarea;