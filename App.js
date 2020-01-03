import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Cancel } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import './App.css';

const list=[{title:'React',url:'htpp',author:'Jordan',num_commnets:3,points:4,objectID:0},
            {title:'React1',url:'htpps',author:'Miro',num_commnets:7,points:5,objectID:1}];
const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


class App extends Component {

  render() {
  const classes = useStyles();
    return (
      <div className="App">
        <header className="App-header">
          <h1  className="App-title">Welcome to React</h1>
        </header>
          <p className="App-intro" style={{color: "red"}}>Všetko je OK</p>
          <div className={classes.root}>
              <Button variant="contained" color="primary">

              OK
            </Button>

            <Button variant="contained" color="primary">
              <Cancel/>
            </Button>
          </div>
      </div>

    );
  }
}

export default App;
