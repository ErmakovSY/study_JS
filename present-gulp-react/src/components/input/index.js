import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

const STYLES = {
  errorStyle: {
    color: 'orange',
  },
  underlineStyle: {
    borderColor:' orange',
  },
  floatingLabelStyle: {
    color: 'orange',
  },
  floatingLabelFocusStyle: {
    color: 'blue',
  },
};

const Input = (props) => (
  
  <TextField
    className='input__wrapper'
    name={props.name} 
    onChange={props.onBlur}
    errorStyle={STYLES.errorStyle}
    fullWidth={false}
    multiLine={false}
    hintText='hint'
    floatingLabelText='label'
  />
)

// Input.propTypes = {
//   placeholder: PropTypes.string.isRequired,
//   className: PropTypes.string.isRequired,
//   onBlur: PropTypes.func.isRequired,
// }

export default Input;

// <div className="input__wrapper">
  //   <label
  //     className="input__placeholder"
  //   >
  //     <input 
  //       type="text" 
  //       name={props.name} 
  //       className={props.className}
  //       onBlur={props.onBlur}
  //     />
  //     <span 
  //       style={{ 
  //         transform: (props.value == "") ? "" : "translateY(-70%)",
  //         fontSize: (props.value == "") ? "" : "12px"
  //       }}
  //     >
  //       {props.placeholder}
  //     </span>
  //   </label>
  // </div>