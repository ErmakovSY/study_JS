import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import FontAwesome from 'react-fontawesome';
import SectionTitle from './../../components/sectionTitle.jsx';
import './main.scss';

export default class Work extends Component {
  render() {
    let items = [
      {icon: "cogs", title: "Easy theme setup", text: "Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum."},
      {icon: "pencil", title: "Pixel perfect design", text: "Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum."},
      {icon: "mobile", title: "Responsive display", text: "Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum."},
      {icon: "clock-o", title: "24/7 support", text: "Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum."},
      {icon: "cogs", title: "Easy theme setup", text: "Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum."},
      {icon: "pencil", title: "Pixel perfect design", text: "Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum."},
      {icon: "mobile", title: "Responsive display", text: "Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum."},
      {icon: "clock-o", title: "24/7 support", text: "Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum."}
    ];
    return (
      <div className="section__work" name="section_work">
        <div className="container">
          <ScrollAnimation 
            animateIn="fadeInRight"
          >
            <SectionTitle titleClass="section__title section__title--dark" text="What we do." />
          </ScrollAnimation>
          <ScrollAnimation 
            animateIn="fadeInLeft"
            offset={ 50 }
          >
            <div className="section__content-wrapper work__wrapper">
              {
                items.map((item, i) => {
                  return (
                    <div className="work__item" key={i}>
                      <p className="work__icon"><FontAwesome name={item.icon} /></p>
                      <p className="work__title">{item.title}</p>
                      <p className="work__text">{item.text}</p>
                    </div>
                  )
                })
              }
            </div>
          </ScrollAnimation>
        </div>
      </div>
    )
  }
}