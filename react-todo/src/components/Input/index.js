import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import { InputWrapper, ErrorText } from './../styledComponents.js';

const STYLES = {
  errorStyle: {
    color: 'rgb(214,28,28)'
  },
  hintStyle: {
    color: '#a4aead'
  },
  inputStyle: {
    color: '#333b46',
    width: '100%',
    font: 'Quattrocento Sans',
    fontSize: '16px',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out'
  },
  underlineStyle: {
    borderColor:'#a4aead'
  },
  underlineFocusStyle: {
    borderColor: '#23b7a4' //cyan
  },
  floatingLabelStyle: {
    color: '#5b6168'
  }
};

const Input = (props) => {
  const { isValid, name, label, placeholder, value, onChange, errorText } = props;
  const errorLabel = <ErrorText>{errorText}</ErrorText>;

  return (
    <InputWrapper> 
      <MuiThemeProvider>
        <TextField
          floatingLabelText={label}
          hintText={placeholder}
          errorText={isValid ? '' : errorLabel}
          fullWidth={true}
          name={name}
          value={value}
          onChange={onChange}
          hintStyle={STYLES.hintStyle}
          inputStyle={STYLES.inputStyle}
          underlineStyle={STYLES.underlineStyle}
          underlineFocusStyle={STYLES.underlineFocusStyle}
          floatingLabelStyle={STYLES.floatingLabelStyle}
        />
      </MuiThemeProvider>
    </InputWrapper> 
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errorText: PropTypes.string.isRequired,
  isValid: PropTypes.bool.isRequired
}

export default Input;

{/* <InputWrapper> 
    <Input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={isValid ? {
          borderColor: 'black'
        } : {
          borderColor: 'red'
        }
      }
    /> 
  </InputWrapper> */}