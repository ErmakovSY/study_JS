import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Input = (props) => (
  <input type="text" className="input form__input" placeholder={props.placeholder} />
)

Input.propTypes = {
  placeholder: PropTypes.string
}

export default Input;