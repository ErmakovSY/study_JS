import React from 'react';
import classnames from 'classnames';

class HeaderLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: false};
  }
  click() {
    this.setState({active: !this.state.active});
    this.props.clickToItem.bind(this)
  }
  render() {
    let classes = classnames(
      {'header__nav-item': true},
      {'header__nav-item--active': this.state.active}
    );
    return (
      <a 
        className={classes}
        onClick={this.click.bind(this)} 
        href={this.props.href}
      >
        {this.props.title}
      </a>
    );
  }
}

export default HeaderLink;