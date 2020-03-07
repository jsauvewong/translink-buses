import React, {PureComponent} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import logo from './school-bus.svg';
import axios from 'axios'

// const BusAtHome = {name:"Home", longitude:-123.107176 ,latitude:49.282842}
// const BusAtWork = {name:"Work", longitude:-123.103000 ,latitude:49.282650}

// PureComponent ensures that the markers are only rerendered when data changes
export class BusCollection extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      Buses: []
    }
  }
  

  componentDidMount() {
    this.getBuses()
    this.timerID = setInterval(
      () => { 
        this.tick()
      },
      5000
    );
  }

  tick() {
    this.getBuses()
  }

  async getBuses() {
    console.log('we are inside of getBuses!')
    try {
      const response = await axios.get('https://api.translink.ca/rttiapi/v1/buses?apikey=il7IjMbdih0VQt3hEDzG');
      console.log("help",response.data);
      this.setState(
        {
          Buses: response.data
        }
      )
    } 
      catch (error) {
      console.error(error);
    }
  }

  render() {
    return this.state.Buses.map(
      (bus) => {
        return (
          <Marker key={bus.VehicleNo} 
                  longitude={bus.Longitude} 
                  latitude={bus.Latitude} 
                  offsetLeft={-25} 
                  offsetTop={-25} >
            <img src={logo} style={{height:50}} alt="logo"  />
          </Marker>
        ) 
      }
    )
  }
}

