import React from 'react';

class Textarea extends React.Component {
  render() {
    return (
      <textarea className="form__textarea" placeholder={this.props.placeholder} />
    );
  }
}
export default Textarea;