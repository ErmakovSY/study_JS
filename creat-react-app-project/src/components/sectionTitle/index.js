import React from 'react';
import PropTypes from 'prop-types';

const SectionTitle = (props) => (
  <p className={props.titleClass}>
    {props.text}
  </p>
)

SectionTitle.propTypes = {
  titleClass: PropTypes.string,
  text: PropTypes.string.isRequired
}

export default SectionTitle;