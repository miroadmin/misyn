import React, { Component } from 'react';
import ContainedButtons from "./Buttons.js";
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1  className="App-title">Welcome to React</h1>
        </header>
          <p className="App-intro" style={{color: "red"}}>Všetko je OK</p>
          <div>
              <ContainedButtons/>
          </div>
      </div>

    );
  }
}

export default App;
