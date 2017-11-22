import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { ButtonDone } from './../styledComponents';

const DoneButton = (props) => (
  <ButtonDone 
    id={props.id}
    onClick={props.onClick}
  >
    <FontAwesome name='check' />
  </ButtonDone> 
);

DoneButton.propTypes = {
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

export default DoneButton;