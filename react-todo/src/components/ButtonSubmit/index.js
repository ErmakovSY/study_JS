import React from 'react';
import PropTypes from 'prop-types';
import { ButtonAdd } from './../styledComponents.js';

const SubmitButton = (props) => (
  <ButtonAdd 
    onClick={props.onClick}
  >
    +
  </ButtonAdd> 
);

SubmitButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default SubmitButton;