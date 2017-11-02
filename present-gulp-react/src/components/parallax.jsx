import React from 'react';
import { Parallax, Background } from 'react-parallax';

class ParallaxContainer extends React.Component{
  render() {
    return (
      <div>
        <Parallax strength={300}>
          <Background>
            <img src="http://www.fillmurray.com/400/300"/>
            <div style={{
               width: 800, 
               height: 300, 
               backgroundColor: '#450093'
              }}></div>
            <img src="http://www.fillmurray.com/500/300"/>
          </Background>
          <h1>something else</h1>
        </Parallax>
      </div>
    )
  }
}
export default ParallaxContainer;