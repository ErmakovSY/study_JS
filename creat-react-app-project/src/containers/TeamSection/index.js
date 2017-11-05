import React, { Component } from 'react';
import SectionTitle from './../../components/sectionTitle.jsx';
import SliderBlock from './../../components/sliderBlock.jsx';
import './main.css';

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
        ame: "Andrew Duglas", 
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
      <div className="section__team" ref={"team"}>
        <div className="container">
          <SectionTitle titleClass="section__title section__title--dark" text="Meet the team." />
          <div className="section__content-wrapper">
            <SliderTeam content={itemsInfo} />
          </div>
        </div>
      </div>
    )
  }
}