import React, { Component } from 'react';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
import FontAwesome from 'react-fontawesome';
import SectionTitle from './../../components/sectionTitle.jsx';
import './main.scss';

export default class Work extends Component {
  render() {
    let items = [
      {
        icon: "cogs", 
        title: "Easy theme setup", 
        text: "Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.",
        appearance: {
          duration: 400,
          delay: 0,
        }
      },
      {
        icon: "pencil", 
        title: "Pixel perfect design", 
        text: "Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.",
        appearance: {
          duration: 400,
          delay: 100,
        }
      },
      {
        icon: "mobile", 
        title: "Responsive display", 
        text: "Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.",
        appearance: {
          duration: 400,
          delay: 200,
        }
      },
      {
        icon: "clock-o", 
        title: "24/7 support", 
        text: "Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.",
        appearance: {
          duration: 400,
          delay: 300,
        }
      },
      {
        icon: "cogs", 
        title: "Easy theme setup", 
        text: "Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.",
        appearance: {
          duration: 400,
          delay: 400,
        }
      },
      {
        icon: "pencil", 
        title: "Pixel perfect design", 
        text: "Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.",
        appearance: {
          duration: 400,
          delay: 500,
        }
      },
      {
        icon: "mobile", 
        title: "Responsive display", 
        text: "Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.",
        appearance: {
          duration: 400,
          delay: 600,
        }
      },
      {
        icon: "clock-o", 
        title: "24/7 support", 
        text: "Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.",
        appearance: {
          duration: 400,
          delay: 700,
        }
      }
    ];
    return (
      <div className="section section__work" name="section_work">
        <div className="container">
          <Fade right big duration={ 400 }>
            <SectionTitle titleClass="section__title section__title--dark" text="What we do." />
          </Fade>
          <div className="section__content-wrapper work__wrapper">
            {
              items.map((item, i) => {
                return (
                  <Fade bottom 
                    duration={ item.appearance.duration } 
                    delay={ item.appearance.delay }
                    className="work__item"
                    key={ i }
                  >
                    <p className="work__icon">
                      <FontAwesome name={ item.icon } />
                    </p>
                    <p className="work__title">{ item.title }</p>
                    <p className="work__text">{ item.text }</p>
                  </Fade>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}