import React from 'react';
import Social from './social.jsx';
import ListItem from './listitemAbout.jsx';

/* Content block in About-section */

class ContentAbout extends React.Component {
  render() {
    switch (this.props.block) {
      case "left": {
        let socialItems = [
          {brand: 'facebook', href: '#'}, 
          {brand: 'twitter', href: '#'}, 
          {brand: 'google', href: '#'}, 
          {brand: 'dribbble', href: '#'}, 
          {brand: 'behance', href: '#'}
        ];
        return (
          <div className="section__content section__content--left">
            <p className="section__text">
              <span>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi metus, tristique ndolor non, ornare sagittis dolor. Nulla vestibulu lacus sed molestie gravida. Crferm entum  quismagna congue, vel sodales arcu vestibulum. Nunc lobortis dui magna, quis lacusullamcorper at."}</span>
              <span>{"Phasellus sollicitudin ante eros ornare, "}<b>{"sit amet luctus lorem semper"}</b>{". Suspendisse posuere, quamdictum consectetur, augue metus pharetra tellus, eu feugiatloreg egetnisi. Cras ornare bibendum ante, ut bibendum odio convallis eget. vel sodales arcu vestibulum"}</span>
            </p>
            <Social items={socialItems} className="social__wrapper" />
          </div>
        );
      }
      case "right": {
        let list = [
          {title: "Dedication to the customers", 
          text: "Integer vel lacus non dui ullamcorper venenatis. Aliquam vitae tristique nisi, vitae ullamcorper risus. Nam porttitor blandit "},
          {title: "Working closely with our clients", 
          text: "Sed blandit nisi urna, sed pellentesque enim consectetur vitae. Suspendisse ut vehicula nibh."},
          {title: "Increase happiness", 
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend laoreet euismod."}
        ];
        return (
          <div className="section__content section__content--right">
            {
              list.map((item, i) => {
                return <ListItem 
                    number={(i < 10) ? "0"+(i+1) : i+1} 
                    title={item.title} 
                    text={item.text} 
                    key={i}
                  />
              })
            }
          </div>
        );
      }
    }
  }
}

export default ContentAbout;