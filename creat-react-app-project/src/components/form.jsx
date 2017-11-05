import React, { Component } from 'react';
import Input from './input.jsx';
import Textarea from './textarea.jsx';
import Button from './button.jsx';

export default class Form extends Component {
  render() {
    return (
      <form className="contact__form">
        <Input placeholder="Name..." />
        <Input placeholder="Email..." />
        <Textarea placeholder="Message..." />
        <Button 
          className="button contact__button" 
          title="Send message"
        />
      </form>
    )
  }
}