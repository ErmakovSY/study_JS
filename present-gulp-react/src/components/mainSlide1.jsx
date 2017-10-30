import React from 'react';
import Button from './button.jsx';

class MainSlide_1 extends React.Component {
  render() {
    return (
      <div className="slider__content">
        <div className="slider__content-wrapper container">
          <p className="slider__title">Welcome to our Marketplace</p>
          <p className="slider__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi metus, tristique      ndolor non, ornare sagittis dolor. Nulla vestibulu lacus ...</p>
          <div className="button-wrapper--horizontal">
            <Button className="button button--trp" title={"View more"}/>
            <Button className="button button--trp" title={"Video tour"}/>
          </div>
        </div>
      </div>
    );
  }
}

export default MainSlide_1;