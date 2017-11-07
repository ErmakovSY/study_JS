import React, { Component } from 'react';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
import SectionTitle from './../../components/sectionTitle';
import SliderTeam from './../../components/sliderTeam';
import './main.scss';

const ITEMS_INFO = [
  {
    image: './img/team-1.png', 
    name: "Tomas Newman", 
    job: "CEO and Founder", 
    social: [
      {
        id: 0,
        brand: 'facebook',
        href: '#'
      }, 
      {
        id: 1,
        brand: 'twitter', 
        href: '#'
      }
    ]
  },
  {
    image: './img/team-2.png', 
    name: "John Backer", 
    job: "Head of Development", 
    social: [
      {
        id: 2,
        brand: 'instagram', 
        href: '#'
      }
    ]
  },
  {
    image: './img/team-3.png', 
    name: "Mark Conor", 
    job: "Graphic Designer", 
    social: [
      {
        id: 3,
        brand: 'vimeo', 
        href: '#'
      }, 
      {
        id: 4,
        brand: 'instagram', 
        href: '#'
      }, 
      {
        id: 5,
        brand: 'facebook', 
        href: '#'
      }
    ]
  },
  {
    image: './img/team-4.png', 
    name: "Nick Zelman", 
    job: "Client Service Director", 
    social: [
      {
        id: 6,
        brand: 'twitter', 
        href: '#'
      },
      {
        id: 7,
        brand: 'instagram',
        href: '#'
      }
    ]
  },
  {
    image: './img/team-1.png', 
    name: "Andrew Duglas", 
    job: "Project Manager", 
    social: [
      {
        id: 8,
        brand: 'skype', 
        href: '#'
      }
    ]
  },
  {
    image: './img/team-2.png', 
    name: "Bruce Grand", 
    job: "Sales Manager", 
    social: [
      {
        id: 9,
        brand: 'twitter', 
        href: '#'
      },
      {
        id: 10,
        brand: 'pinterest', 
        href: '#'
      }, 
      {
        id: 11,
        brand: 'facebook', 
        href: '#'
      }
    ]
  }
];

export default class Team extends Component {
  render() {
    return (
      <div 
        className="section section__team" 
        name="section_team"
      >
        <div className="container">
          <Fade right big duration={400}>
            <SectionTitle 
              titleClass="section__title section__title--dark" 
              text="Meet the team." 
            />
          </Fade>
          <Zoom>
            <div className="section__content-wrapper">
              <SliderTeam content={ITEMS_INFO} />
            </div>
          </Zoom>
        </div>
      </div>
    )
  }
}