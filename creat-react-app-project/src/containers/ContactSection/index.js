import React, { Component } from 'react';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
import SectionTitle from './../../components/sectionTitle';
import MapFancy from './../../components/map';
import Form from './../../components/form';
import Footer from './../../components/footer';
import './main.scss';

export default class Contact extends Component {
  render() {
    return (
      <div 
        className="section section__contact" 
        name="section_contact"
      >
        <div className="container">
          <Fade right big duration={400}>
            <SectionTitle 
              titleClass="section__title--dark contact__maintitle" 
              text="Stay in touch." 
            />
          </Fade>
        </div>
        <Fade duration={3000}>
          <MapFancy />
        </Fade>
        <div className="container">
          <div className="contact__wrapper">
            <Fade left>
              <p className="contact__title">
                Contact information
              </p>
              <p className="contact__text">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi metus, tristique nec dolor non, ornare sagittis dolor. Nulla vestibulum lacus sed molestie gravida.
                </span>
                <span>Cras fermentum elit quis magna congue, vel sodales arcu vestibulum. Nunc lobortis dui magna, quis dapibus lacus.
                </span>
              </p>
            </Fade>
            <Fade right>
              <Form />
            </Fade>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}