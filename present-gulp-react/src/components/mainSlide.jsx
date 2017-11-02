import React from 'react';
import Button from './button.jsx';

/* Component for rendering content for each slide */

class MainSlide extends React.Component {
  render() {
    switch (this.props.slideNumber) {
      case 1: {
        return (
          <div className="slider__content">
            <div className="slider__content-wrapper container">
              <p className="slider__title main__title">Welcome to our Marketplace</p>
              <p className="slider__text main__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi metus, tristique ndolor non, ornare sagittis dolor. Nulla vestibulu lacus ...</p>
              <div className="button__wrapper button__wrapper--horizontal">
                <Button className="button main__button" title={"View more"}/>
                <Button className="button main__button" title={"Video tour"}/>
              </div>
            </div>
          </div>
        );
      }
      case 2: {
        return (
          <div className="slider__content">
            <div className="slider__content-wrapper container">
              <p className="slider__title main__title">Second slide</p>
              <p className="slider__text main__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi metus, tristique ndolor non, ornare sagittis dolor. Nulla vestibulu lacus ...</p>
              <div className="button__wrapper button__wrapper--horizontal">
                <Button className="button main__button" title={"View more"}/>
                <Button className="button main__button" title={"Video tour"}/>
              </div>
            </div>
          </div>
        );
      }
      case 3: {
        return (
          <div className="slider__content">
            <div className="slider__content-wrapper container">
              <p className="slider__title main__title">Third slide</p>
              <p className="slider__text main__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi metus, tristique ndolor non, ornare sagittis dolor. Nulla vestibulu lacus ...</p>
              <div className="button__wrapper button__wrapper--horizontal">
                <Button className="button main__button" title={"View more"}/>
                <Button className="button main__button" title={"Video tour"}/>
              </div>
            </div>
          </div>
        );
      }
      default: {
        return (
          <div className="slider__content"></div>
        );
      }
    }
    
  }
}

export default MainSlide;