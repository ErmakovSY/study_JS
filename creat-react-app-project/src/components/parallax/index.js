import React from 'react';
import { Parallax } from 'react-parallax';
import Button from './../button';

const ParalaxMain = () => (
  <Parallax 
    bgImage="./img/main-bg.jpg" 
    strength={300}
  >
    <div className="main__parallax-wrapper">
      <div className="main__content-wrapper container">
        <p className="main__title">Welcome to our Marketplace</p>
        <p className="main__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi metus, tristique ndolor non, ornare sagittis dolor. Nulla vestibulu lacus ...
        </p>
        <div className="button__wrapper button__wrapper--horizontal">
          <Button 
            className="button main__button" 
            title="View more" 
          />
          <Button 
            className="button main__button" 
            title="Video tour" 
          />
        </div>
      </div>
    </div>
  </Parallax>
)

export default ParalaxMain;