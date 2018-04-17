import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home/Home';

import {Grid, Row, Col} from 'react-bootstrap';

import classes from './App.css';


class App extends Component {

//the search bar value is updated

  render() {
    return (
      <BrowserRouter>
        <div>
          <h2 className={classes.AppTitle}>Git Repo Search</h2> 
          <Home />
        </div>
      </BrowserRouter>
    );
  }
}



export default App;


