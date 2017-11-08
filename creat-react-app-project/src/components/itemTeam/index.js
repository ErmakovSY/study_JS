import React from 'react';
import PropTypes from 'prop-types';
import Social from './../social';
import './style.scss';

const ItemTeam = (props) => (
  <div className="team__item">
    <div className="team__image-wrapper">
      <img className="image" alt="img" src={props.image} />
      <div className="team__overlay">
        <Social items={props.social} className="team__social" />
      </div>
    </div>
    <p className="team__text">
      <span className="team__name">{props.name}</span>
      <span className="team__job">{props.job}</span>
    </p>
  </div>
)

ItemTeam.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  social: PropTypes.array.isRequired
}

export default ItemTeam;