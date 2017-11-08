import React from 'react';
import { Parallax, Background } from 'react-parallax';
import Button from './../button';
import './style.scss';

const ParalaxMain = () => (
  <Parallax strength={300}>
    <Background>
      <img src="./img/main-bg.jpg"/>
    </Background>
    <div className="main__parallax-wrapper">
      <div className="main__content-wrapper container">
        <p className="main__title">Welcome to our Marketplace</p>
        <p className="main__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi metus, tristique ndolor non, ornare sagittis dolor. Nulla vestibulu lacus ...
        </p>
        <div className="button__wrapper button__wrapper--horizontal">
          <Button 
            className="main__button" 
            title="View more" 
          />
          <Button 
            className="main__button" 
            title="Video tour" 
          />
        </div>
      </div>
    </div>
  </Parallax>
)

export default ParalaxMain;