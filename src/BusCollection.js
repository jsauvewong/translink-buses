import React, {PureComponent} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import logo from './school-bus.svg';

const BusAtHome = {name:"Vancouver", longitude:-123.107176 ,latitude:49.282842}
const BusAtWork = {name:"Vancouver", longitude:-123.103000 ,latitude:49.282650}

// PureComponent ensures that the markers are only rerendered when data changes
export class BusCollection extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      Buses: [BusAtHome, BusAtWork]

    }
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
    if(this.state.Buses.length=== 0){
      this.setState(
        {
          Buses: [BusAtHome, BusAtWork]
        }
      )
    }
      else {
      this.setState(
        {
          Buses: []
        }
      )
      }
    }






  render() {
    return this.state.Buses.map(
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

