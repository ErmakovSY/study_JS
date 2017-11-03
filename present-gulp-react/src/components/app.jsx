import React from 'react';
import Section from './section.jsx';
import SliderBlock from './sliderBlock.jsx';
import ButtonUp from './scrollUpButton.jsx';

/* Main component */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.getPositions = this.getPositions.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.scrollAnchor = this.scrollAnchor.bind(this);
    this.state = {
      positions: [],
      activeLink: 0
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  getPositions(y) {
    if(this.state.positions.length != 7) {
      this.setState(prevState => ({
        positions: [...prevState.positions, y]
      }))
    }
  }
  handleScroll() {
    let pos = this.state.positions;
    pos.forEach((item, i, pos) => {
      if (window.scrollY > item-200) this.setState({activeLink: i})
    });
  }
  scrollAnchor(index) {
    window.scrollTo(0, this.state.positions[index]);
    console.log(this.state.positions[index]);
  }
  render() {
    return (
      <div className="app">
        <Section sectionClass="section__main" getPositions={this.getPositions} activeLink={this.state.activeLink} scrollAnchor={this.scrollAnchor} />
        <Section sectionClass="section__about" getPositions={this.getPositions} />
        <Section sectionClass="section__team" getPositions={this.getPositions} />
        <Section sectionClass="section__portfolio" getPositions={this.getPositions} />
        <Section sectionClass="section__work" getPositions={this.getPositions} />
        <Section sectionClass="section__features" getPositions={this.getPositions} />
        <Section sectionClass="section__contact" getPositions={this.getPositions} />
        <ButtonUp />
     </div>
    );
  }
}

export default App;