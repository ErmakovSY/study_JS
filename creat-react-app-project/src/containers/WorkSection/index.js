import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './main.css';

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
      <div className="section__work">
        <div className="container">
          <SectionTitle titleClass="section__title section__title--dark" text="What we do." />
          <div className="section__content-wrapper work__wrapper">
            {
              items.map((item) => {
                return (
                  <div className="work__item" key={item.title}>
                    <p className="work__icon"><FontAwesome name={item.icon} /></p>
                    <p className="work__title">{item.title}</p>
                    <p className="work__text">{item.text}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}