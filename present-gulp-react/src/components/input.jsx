import React from 'react';

class Input extends React.Component {
  render() {
    return (
      <input type="text" className="contact__input" placeholder={this.props.placeholder} />
    );
  }
}
export default Input;