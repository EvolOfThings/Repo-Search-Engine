import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home/Home';

import Spinner from '../components/UI/Spinner/Spinner'
// import {Grid, Row, Col} from 'react-bootstrap';

import classes from './App.css';


class App extends Component {

//the search bar value is updated

  render() {
    return (
      <BrowserRouter>
        <div>
          <h2 className={classes.AppTitle}>Github Repo Finder</h2> 
          <p>Prajj. You've got this! The job is yours!!</p>
          <Home />
        </div>
      </BrowserRouter>
      // <Spinner />
    );
  }
}



export default App;


