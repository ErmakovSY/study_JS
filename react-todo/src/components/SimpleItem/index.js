import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const SimpleInput = (props) => <div> <input {...props} /> </div>;

SimpleInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default SimpleInput;