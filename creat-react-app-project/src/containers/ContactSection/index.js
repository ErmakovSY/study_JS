import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import SectionTitle from './../../components/sectionTitle.jsx';
import MapFancy from './../../components/map.jsx';
import Form from './../../components/form.jsx';
import Footer from './../../components/footer.jsx';
import './main.scss';

export default class Contact extends Component {
  render() {
    return (
      <div className="section__contact" name="section_contact">
        <div className="container">
          <ScrollAnimation 
            animateIn="fadeInRight"
          >
            <SectionTitle titleClass="section__title section__title--dark contact__maintitle" text="Stay in touch." />
          </ScrollAnimation>
        </div>
        <MapFancy />
        <div className="container">
          <div className="contact__wrapper">
            <ScrollAnimation 
              animateIn="fadeInLeft"
            >
              <p className="contact__title">Contact information</p>
              <p className="contact__text">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi metus, tristique nec dolor non, ornare sagittis dolor. Nulla vestibulum lacus sed molestie gravida.</span>
                <span>Cras fermentum elit quis magna congue, vel sodales arcu vestibulum. Nunc lobortis dui magna, quis dapibus lacus.</span>
              </p>
            </ScrollAnimation>
            <ScrollAnimation 
              animateIn="fadeInRight"
            >
              <Form />
            </ScrollAnimation>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}