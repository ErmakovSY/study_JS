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
          nameValid: validator(e.target.value, e.target.name)
        }); 
        break;
      }
      case "email": {
        this.setState({
          emailValid: validator(e.target.value, e.target.name)
        });
        break;
      }
      case "message": {
        this.setState({
          messageValid: validator(e.target.value, e.target.name)
        }); 
        break;
      }
    }
  }
  submitHandler(e) {
    e.preventDefault();
    let reject = 0;
    for(let item in this.state) {
      if (this.state[item] !== true) {
        let newState = {};
        newState[item] = false;
        this.setState(newState);
        reject = 1;
      }
    }
    return reject ? false : true;
  }

  render() {
    let inputNameClasses = classNames({
      'input': !this.state.nameValid,
      'input input--valid': this.state.nameValid
    });
    let inputEmailClasses = classNames({
      'input': !this.state.emailValid,
      'input input--valid': this.state.emailValid
    });
    let textareaClasses = classNames({
      'textarea': !this.state.messageValid,
      'textarea textarea--valid': this.state.messageValid
    });
    let checkboxClasses = classNames({
      'checkbox': !this.state.checkboxValid,
      'checkbox checkbox--valid': this.state.checkboxValid
    });
    return (
      <form className="form contact__form">
        <Input 
          className={inputNameClasses}
          name="name" 
          placeholder="Name..." 
          onBlur={this.inputBlurHandler}
          validStatus={this.state.nameValid}
        />
        <Input 
          className={inputEmailClasses} 
          name="email"
          placeholder="Email..." 
          onBlur={this.inputBlurHandler}
          validStatus={this.state.emailValid}
        />
        <Textarea 
          className={textareaClasses}
          onBlur={this.inputBlurHandler}
          name="message"
          placeholder="Message..." 
          validStatus={this.state.messageValid}
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