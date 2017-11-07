import React from 'react';
import PropTypes from 'prop-types';
import './main.css';

const TodoItem = (props) => (
  <p>
    <span>{props.number}.</span>
    <span>{props.name}</span>
  </p>
);

TodoItem.propTypes = {
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
}

export default TodoItem;