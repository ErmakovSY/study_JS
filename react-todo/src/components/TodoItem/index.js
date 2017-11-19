import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Checkbox from 'material-ui/Checkbox';
import DeleteButton from './../ButtonDelete';
import { ItemWrapper } from './../../components/styledComponents.js';
import './main.css';

export default class TodoItem extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
    }
  }
  updateCheck = () => {
    this.setState({
      checked: !this.state.checked
    });
  }

  render() {
    const { number, name, onClickDelete } = this.props;
    const labelCheckbox = <p>
                            <span>{number}. </span>
                            <span>{name}</span>
                          </p>;
    const labelDelete = <span>X</span>;
    const STYLES = {
      labelStyle: {
        width: '100%',
        color: '#5e5e5e',
        textDecoration: this.state.checked ? 'line-through' : 'none',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      },
      iconStyle: {
        fill: '#8fa375'
      }
    };
    return (
      <ItemWrapper>
        <DeleteButton
          label={labelDelete}
          id={number}
          onClick={onClickDelete}
        />
        <MuiThemeProvider>
          <Checkbox
            label={labelCheckbox}
            checked={this.state.checked}
            onCheck={this.updateCheck}
            labelStyle={STYLES.labelStyle}
            iconStyle={STYLES.iconStyle}
            style={{display: 'block', width: '100%', overflow: 'hidden'}}
          />
        </MuiThemeProvider>
      </ItemWrapper>
    )
  }
}

TodoItem.propTypes = {
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onClickDelete: PropTypes.func.isRequired

}