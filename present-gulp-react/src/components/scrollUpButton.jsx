import React from "react";
import ScrollUpButton from "react-scroll-up-button";
 
export default class ButtonUp extends React.Component {
  render() {
    return (
      <div>
        <ScrollUpButton
          StopPosition={0} 
          TransitionBtnPosition={150} 
          EasingType='easeOutCubic' 
          AnimationDuration={500} 
          ContainerClassName='ScrollUpButton__Container'
          TransitionClassName='ScrollUpButton__Toggled'
        />
      </div>
    );
  }
}