import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { ButtonAdd } from './../styledComponents';

const SubmitButton = (props) => (
  <ButtonAdd onClick={props.onClick}>
    <FontAwesome name={props.editMode ? 'plus' : 'check'} />
  </ButtonAdd> 
);

SubmitButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  editMode: PropTypes.bool.isRequired
}

export default SubmitButton;