import React, { Component } from 'react';
import classNames from 'classnames';
import Input from './../input';
import Textarea from './../textarea';
import Button from './../button';
import Checkbox from './../checkbox';
import validator from './../validator';

export default class Form extends Component {
  constructor() {
    super();
    this.inputBlurHandler = this.inputBlurHandler.bind(this);
    this.checkHandler = this.checkHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.state = {
      nameValue: '',
      emailValue: '',
      messageValue: '',
      nameValid: '',
      emailValid: '',
      messageValid: '',
      checkboxValid: ''
    }
  }

  checkHandler(e) {
    this.setState({
      checkboxValid: validator(e.target.checked, e.target.name)
    }); 
  }

  inputBlurHandler(e) {
    switch(e.target.name) {
      case "name": {
        this.setState({
          nameValid: validator(e.target.value, e.target.name),
          nameValue: e.target.value
        }); 
        break;
      }
      case "email": {
        this.setState({
          emailValid: validator(e.target.value, e.target.name),
          emailValue: e.target.value
        });
        break;
      }
      case "message": {
        this.setState({
          messageValid: validator(e.target.value, e.target.name),
          messageValue: e.target.value
        }); 
        break;
      }
    }
  }
  submitHandler(e) {
    e.preventDefault();
    let reject = 0;
    for(let item in this.state) {
      if (!this.state[item]) {
        let newState = {};
        newState[item] = false;
        this.setState(newState);
        reject = 1;
      }
    }
    return reject;
  }

  render() {
    let inputNameClasses = classNames({
      'input': this.state.nameValid === '',
      'input input--invalid': this.state.nameValid === false,
      'input input--valid': this.state.nameValid === true
    });
    let inputEmailClasses = classNames({
      'input': this.state.emailValid === '',
      'input input--invalid': this.state.emailValid === false,
      'input input--valid': this.state.emailValid === true
    });
    let textareaClasses = classNames({
      'textarea': this.state.messageValid === '',
      'textarea textarea--invalid': this.state.messageValid === false,
      'textarea textarea--valid': this.state.messageValid === true
    });
    let checkboxClasses = classNames({
      'checkbox': this.state.checkboxValid === '',
      'checkbox checkbox--invalid': this.state.checkboxValid === false,
      'checkbox checkbox--valid': this.state.checkboxValid === true
    });
    return (
      <form className="form contact__form">
        <Input 
          className={inputNameClasses}
          name="name" 
          placeholder="Name..." 
          onBlur={this.inputBlurHandler}
          value={this.state.nameValue}
        />
        <Input 
          className={inputEmailClasses} 
          name="email"
          placeholder="Email..." 
          onBlur={this.inputBlurHandler}
          value={this.state.emailValue}
        />
        <Textarea 
          className={textareaClasses}
          onBlur={this.inputBlurHandler}
          value={this.state.messageValue}
          name="message"
          placeholder="Message..." 
        />
        <Button 
          className="button contact__button" 
          title="Send message"
          onClick={this.submitHandler}
        />
        <Checkbox 
          title="Send me last news"
          name="chkbox"
          className={checkboxClasses} 
          onChange={this.checkHandler}
        />
      </form>
    )
  }
}