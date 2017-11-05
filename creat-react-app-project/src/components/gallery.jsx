import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';

export default class GalleryFancy extends Component {
  constructor(props){
		super(props);
		this.state = {
			images: this.props.images
		}
	}
	render() {
		return (
			<div 
				className="section__content-wrapper portfolio__content" 
				style={{
					display: "block",
					minHeight: "1px",
					width: "100%",
					overflow: "auto"}}
			>
				<Gallery 
					images={this.state.images} 
					enableImageSelection={false}
					backdropClosesModal={true} 
					margin={15}
					rowHeight={265}
				/>
			</div>
    )
	}
}

//https://www.npmjs.com/package/react-grid-gallery