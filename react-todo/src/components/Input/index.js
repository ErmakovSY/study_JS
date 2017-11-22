import React from 'react';
import PropTypes from 'prop-types';
import { InputWrapper, InputField, ErrorText } from './../styledComponents';

const Input = (props) => {
  const { isValid, name, placeholder, value, onChange, errorText } = props;

  return (
    <InputWrapper> 
      <InputField
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        borderColor={isValid ? '#c0af97' : '#d48672'}
      />
      <ErrorText visible={isValid ? 0 : 1}>
        {errorText}
      </ErrorText> 
    </InputWrapper>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errorText: PropTypes.string.isRequired,
  isValid: PropTypes.bool.isRequired
}

export default Input;