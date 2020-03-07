import React, {PureComponent} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import logo from './school-bus.svg';

const BusAtHome = {name:"Home", longitude:-123.107176 ,latitude:49.282842}
const BusAtWork = {name:"Work", longitude:-123.103000 ,latitude:49.282650}

// PureComponent ensures that the markers are only rerendered when data changes
export class BusCollection extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      Buses: [BusAtWork]
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
    const someBus = this.state.Buses[0]
    if( someBus.name===BusAtHome.name ){
      this.setState(
        {
          Buses: [BusAtWork]
        }
      )
    }
      else {
      this.setState(
        {
          Buses: [BusAtHome]
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

