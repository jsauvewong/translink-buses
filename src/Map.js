import React, {Component} from 'react';
import ReactMapGL from 'react-map-gl';
import { Markers } from './Marker';

export class Map extends Component {

  state = {
    viewport: {
      width: 1400,
      height: 1000,
      latitude: 49.2827,
      longitude: -123.1207,
      zoom: 12
    }
  };


  render() {

    const mapboxApiAccessToken = 'pk.eyJ1IjoianNhdXZld29uZyIsImEiOiJjazcxZTZ5N3YwNTlvM29ud3kyODE1d2d4In0.FvUD3otlw2hc8We2yH1YnQ'

    return (
      <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken={mapboxApiAccessToken}
        onViewportChange={(viewport) => this.setState({viewport})}
      >
          <Markers />
       </ReactMapGL>
    );
  }
}