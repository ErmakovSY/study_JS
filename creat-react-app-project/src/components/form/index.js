import React, { Component } from 'react';
import Input from './../input';
import Textarea from './../textarea';
import Button from './../button';
import Checkbox from './../checkbox';
import './style.scss';

export default class Form extends Component {
  checkHandler() {
    //handle checkbox events
  }
  render() {
    return (
      <form className="form contact__form">
        <Input placeholder="Name..." />
        <Input placeholder="Email..." />
        <Textarea placeholder="Message..." />
        <Button 
          className="contact__button" 
          title="Send message"
        />
        <Checkbox 
          title="Send me last news"
          check={this.checkHandler}
        />
      </form>
    )
  }
}