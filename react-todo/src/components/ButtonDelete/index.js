import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { ButtonDel } from './../styledComponents.js';

const DeleteButton = (props) => (
  <ButtonDel 
    id={props.id}
    onClick={props.onClick}
  >
    <FontAwesome name='times' />
  </ButtonDel> 
);

DeleteButton.propTypes = {
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

export default DeleteButton;