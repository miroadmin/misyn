import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './App.css';
const list=[{title:'React',url:'htpp',author:'Jordan',num_commnets:3,points:4,objectID:0},
            {title:'React1',url:'htpps',author:'Miro',num_commnets:7,points:5,objectID:1}];
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1  className="App-title">Welcome to React</h1>
        </header>
          <p className="App-intro" style={{color: "red"}}>Všetko je OK</p>
          <Button variant="contained" color="primary">
          Pekný gombíček
        </Button>
      </div>

    );
  }
}

export default App;
