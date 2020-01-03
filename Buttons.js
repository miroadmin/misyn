import React from 'react';
import Button from '@material-ui/core/Button';
import { Cancel } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  
  export default function ContainedButtons() {
    const classes = useStyles();
  
    return (
      <div className="App-button">
      <div className={classes.root}> 
      
        <Button variant="contained" size="small" color="secondary">
          Add
        </Button>
        <Button variant="contained" size="small" color="secondary">
          List
        </Button>
        <Button variant="contained" size="small" color="secondary">
          Delete
        </Button>
        <Button variant="contained" size="small" color="primary" href="#contained-buttons">
          Detail
        </Button>
      </div>
      </div>

    );
  }