import React from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const Map = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBb7wZFJHwk6nWfeMdQy4fMPfIelzwdSpU&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `350px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
)

export default class MapFancy extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isMarkerShown: false
    }
  }
  componentDidMount() {
    this.delayedShowMarker
  }
  delayedShowMarker() {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }
  handleMarkerClick() {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker
  }
  render() {
    return (
      <div className="contact__map">
        <Map
          isMarkerShown={this.state.isMarkerShown}
          onMarkerClick={this.handleMarkerClick}
        />
      </div>
    )
  }
}