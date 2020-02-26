import React, {PureComponent} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import logo from './school-bus.svg';

const Vancouver = {name:"Vancouver", longitude:-123.107176 ,latitude:49.282842}
const CITIES = [Vancouver];

// PureComponent ensures that the markers are only rerendered when data changes
export class Markers extends PureComponent {
  render() {
    return CITIES.map(
      city => <Marker key={city.name} 
                longitude={city.longitude} 
                latitude={city.latitude} 
                offsetLeft={-25} 
                offsetTop={-25} >
          <img src={logo} style={{height:50}} alt="logo"  />
      </Marker>
    )
  }
}

