import React, {PureComponent} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import logo from './logo.svg';

const Vancouver = {name:"Vancouver", longitude:-123.107176 ,latitude:49.282842}
const CITIES = [Vancouver];

// PureComponent ensures that the markers are only rerendered when data changes
export class Markers extends PureComponent {
  render() {
    return CITIES.map(
      city => <Marker key={city.name} longitude={city.longitude} latitude={city.latitude} ><img src={logo}className="App-logo" alt="logo"  /></Marker>
    )
  }
}

