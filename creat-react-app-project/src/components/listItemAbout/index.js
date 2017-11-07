import React from 'react';
import PropTypes from 'prop-types';

const ListItem = (props) => (
  <div className="list__item">
    <div className="list__image">
      <span className="list__number">{props.number}</span>
    </div>
    <div className="list__text-wrapper">
      <p className="list__title">{props.title}</p>
      <p className="list__text">{props.text}</p>
    </div>
  </div>
)

ListItem.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default ListItem;