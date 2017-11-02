import React from 'react';
import Gallery from 'react-grid-gallery';

class Example extends React.Component {
  constructor(props){
        super(props);
        this.state = {
            images: this.props.images,
        };
    }
render() {
    return (

         <div style={{
                    display: "block",
                    minHeight: "1px",
                    width: "100%",
                    border: "1px solid #ddd",
                    overflow: "auto"}}>
        <Gallery 
          images={this.state.images} 
          enableImageSelection={false}
          backdropClosesModal={true} 
          margin={30}
          rowHeight={265}
        />
        </div>

    );
  }
}
export default Example;

//https://www.npmjs.com/package/react-grid-gallery