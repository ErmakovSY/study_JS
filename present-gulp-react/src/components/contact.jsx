import React from 'react';
import Form from './form.jsx';

class Contact extends React.Component {
  render() {
    return (
      <div className="contact__wrapper">
        <p className="contact__title">Contact information</p>
        <p className="contact__text">
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi metus, tristique nec dolor non, ornare sagittis dolor. Nulla vestibulum lacus sed molestie gravida.</span>
          <span>Cras fermentum elit quis magna congue, vel sodales arcu vestibulum. Nunc lobortis dui magna, quis dapibus lacus.</span>
        </p>
        <Form />
      </div>
    );
  }
}
export default Contact;