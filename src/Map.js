import React, { Component } from 'react'
import ReactMapGL from 'react-map-gl'
import { BusCollection } from './BusCollection'

export class Map extends Component {
  state = {
    viewport: {
      latitude: 49.2827,
      longitude: -123.1207,
      zoom: 12,
    },
  }

  onViewportChange = viewport => {
    const { width, height, ...etc } = viewport
    this.setState({ viewport: etc })
  }

  render() {
    return (
      <ReactMapGL
        width="100%"
        height="100VH"
        {...this.state.viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={viewport => this.onViewportChange(viewport)}
      >
        <BusCollection />
      </ReactMapGL>
    )
  }
}
