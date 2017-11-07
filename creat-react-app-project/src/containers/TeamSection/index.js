import React, { Component } from 'react';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
import SectionTitle from './../../components/sectionTitle.jsx';
import SliderTeam from './../../components/sliderTeam.jsx';
import './main.scss';

export default class Team extends Component {
  render() {
    let itemsInfo = [
      {
        image: './img/team-1.png', 
        name: "Tomas Newman", 
        job: "CEO and Founder", 
        social: [
          {
            brand: 'facebook',
            href: '#'
          }, 
          {
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
            brand: 'vimeo', 
            href: '#'
          }, 
          {
            brand: 'instagram', 
            href: '#'
          }, 
          {
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
            brand: 'twitter', 
            href: '#'
          },
          {
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
            brand: 'twitter', 
            href: '#'
          },
          {
            brand: 'pinterest', 
            href: '#'
          }, 
          {
            brand: 'facebook', 
            href: '#'
          }
        ]
      },
    ];
    return (
      <div className="section section__team" name="section_team">
        <div className="container">
          <Fade right big duration={ 400 }>
            <SectionTitle titleClass="section__title section__title--dark" text="Meet the team." />
          </Fade>
          <Zoom>
            <div className="section__content-wrapper">
              <SliderTeam content={itemsInfo} />
            </div>
          </Zoom>
        </div>
      </div>
    )
  }
}