import React from 'react';
import PropTypes from 'prop-types';
import Button from './../Button';
import './main.css';

const TodoItem = (props) => (
  <div>
    <p>
      <span>{props.number}.</span>
      <span>{props.name}</span>
    </p>
    <Button
      label="Delete"
      onClick={props.deletetodo}
    />
  </div>
);

TodoItem.propTypes = {
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  deletetodo: PropTypes.func.isRequired

}

export default TodoItem;