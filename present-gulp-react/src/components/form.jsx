import React from 'react';
import Input from './input.jsx';
import Textarea from './textarea.jsx';
import Button from './button.jsx';

class Form extends React.Component {
  render() {
    return (
      <form className="contact__form">
        <Input placeholder="Name..." />
        <Input placeholder="Email..." />
        <Textarea placeholder="Message..." />
        <Button className="button contact__button" title={"Send message"}/>
      </form>
    );
  }
}
export default Form;