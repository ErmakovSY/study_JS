import React from 'react';

class Features extends React.Component {
  render() {
    let items = [
      {src: "./img/features-1.png", title: "Product Design: Eames Chairs", text: "Eames designs are certainly iconic. Everyone of us know at least two or three of their famous chairs. I would even risk saying that most of us dream about having a nice Eames."},
      {src: "./img/features-2.png", title: "Elegant and Colorful Logos", text: "I’ve always found logo design to be one of the most challenging things to get right. There’s so much that a logo can say about a brand without actually saying it."},
      {src: "./img/features-3.png", title: "A Showcase of Creative", text: "It’s always interesting to see another designer’s take on a famous website, app or even physical product. Different designers add their own personality and style."}
    ];
    return (
      <div className="section__content-wrapper features__wrapper">
      {
        items.map((item, i) => {
          return (
            <div className="features__item" key={i}>
              <div className="features__image">
                <img className="image" src={item.src} alt={item.title} />
              </div>
              <p className="features__title">{item.title}</p>
              <p className="features__text">{item.text}</p>
            </div>
          )
        })
      }
      </div>
    );
  }
}
export default Features;