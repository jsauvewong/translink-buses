import React from 'react';
import { Header } from './Header'
import { Map } from './Map'
import './App.css';

class App extends React.Component {
  render() {
    const name = "JS"
    return (
      <div className="App">
        <Map
          />
        <Header 
          firstName={name}
         />
         <Header 
          firstName={name}
         />
      </div>
    )
  }
}

export default App;
