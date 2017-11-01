import React from 'react';

class SectionTitle extends React.Component {
  render() {
    return (
      <p className={this.props.titleClass}>{this.props.text}</p>
    );
  }
}

export default SectionTitle;