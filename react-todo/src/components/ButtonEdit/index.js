import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { ButtonEdt } from './../styledComponents.js';

const EditButton = (props) => (
  <ButtonEdt 
    id={props.id}
    onClick={props.onClick}
  >
    <FontAwesome name='pencil' />
  </ButtonEdt> 
);

EditButton.propTypes = {
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

export default EditButton;