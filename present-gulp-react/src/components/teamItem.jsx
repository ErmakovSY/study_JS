import React from 'react';
import Social from './social.jsx';

/* Content block in Team-section */

class TeamItem extends React.Component {
  render() {
    return (
      <div className="team__item">
        <div className="team__image-wrapper">
          <img className="image" alt="img" src={this.props.image} />
          <div className="team__overlay">
            <Social items={this.props.social} className="team__social" />
          </div>
        </div>
        <p className="team__text">
          <span className="team__name">{this.props.name}</span>
          <span className="team__job">{this.props.job}</span>
        </p>
      </div>
    );
  }  
}

export default TeamItem;