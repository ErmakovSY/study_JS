import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import PropTypes from 'prop-types';
import './style.scss';

const GalleryFancy = (props) => (
	<div 
		className="section__content-wrapper portfolio__content" 
		style={{
			display: "block",
			minHeight: "1px",
			width: "100%",
			overflow: "auto"
		}}
	>
		<Gallery 
			images={props.images} 
			enableImageSelection={false}
			backdropClosesModal={true} 
			margin={15}
			rowHeight={265}
		/>
	</div>
)

GalleryFancy.propTypes = {
  images: PropTypes.array.isRequired
}

export default GalleryFancy;