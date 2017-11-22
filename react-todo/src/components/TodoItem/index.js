import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DoneButton from './../ButtonDone';
import EditButton from './../ButtonEdit';
import DeleteButton from './../ButtonDelete';
import { ItemWrapper, Text } from './../../components/styledComponents';

export default class TodoItem extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
    }
  }

  updateCheck = (e) => {
    e.preventDefault();
    this.setState({
      checked: !this.state.checked
    });
  }

  render() {
    const { number, name, onClickEdit, onClickDelete } = this.props;

    return (
      <ItemWrapper>
        <EditButton
          id={number}
          onClick={onClickEdit}
        />
        <DeleteButton
          id={number}
          onClick={onClickDelete}
        />
        <DoneButton
          id={number}
          onClick={this.updateCheck}
        />
        <Text checked={this.state.checked}>
          <span>{number}. </span>
          <span>{name}</span>
        </Text>
      </ItemWrapper>
    )
  }
}

TodoItem.propTypes = {
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onClickEdit: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired
}