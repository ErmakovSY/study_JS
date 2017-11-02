import React from 'react';

class Textarea extends React.Component {
  render() {
    return (
      <textarea className="contact__textarea" placeholder={this.props.placeholder} />
    );
  }
}
export default Textarea;