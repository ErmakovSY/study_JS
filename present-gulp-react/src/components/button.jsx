import React from 'react';

/* Form button component */

class Button extends React.Component {
  render() {
    return (
      <button className={this.props.className}>{this.props.title}</button>
    );
  }
}

export default Button;