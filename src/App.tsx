import * as React from 'react';
import Stopwatch from './containers/Stopwatch';
import './App.css';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Stopwatch</h2>
        </div>
        <Stopwatch />
      </div>
    );
  }
}

export default App;
