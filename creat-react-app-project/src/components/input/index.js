import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => (
  <input type="text" className="form__input" placeholder={props.placeholder} />
)

Input.propTypes = {
  placeholder: PropTypes.string
}

export default Input;