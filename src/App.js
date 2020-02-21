import React from 'react';
import { Header } from './Header'
import './App.css';

class App extends React.Component {
  render() {
    const name = "JS"
    return (
      <div className="App">
        <Header firstName={name} />
      </div>
    )
  }
}

export default App;
