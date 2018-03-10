import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Counter from './components/Counter';
import PropsExample from './components/PropsExample';
import Weather from './components/Weather';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">HorchataJS - UDB</h1>
        </header>
        <div className="App-intro">

          <h3>DEMO PROPS</h3>
          <PropsExample />

          <br />

          <h3>DEMO STATE</h3>
          <Counter />

          <br />

          <h3>DEMO WEATHER</h3>
          <Weather />
        </div>
      </div>
    );
  }
}

export default App;
