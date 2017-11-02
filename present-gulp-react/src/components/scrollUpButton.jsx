import React from "react";
import ScrollUpButton from "react-scroll-up-button";
import FontAwesome from 'react-fontawesome';
 
export default class ButtonUp extends React.Component {
  render() {
    return (
      <div>
        <ScrollUpButton
          ContainerClassName='button__up'
          TransitionClassName='button__up--toggled'
        >
          <FontAwesome name="angle-double-up" />
        </ScrollUpButton>
      </div>
    );
  }
}