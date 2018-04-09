import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home/Home';

import {Grid, Row, Col} from 'react-bootstrap';

import './App.css';


class App extends Component {

//the search bar value is updated

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Home />
        </div>
      </BrowserRouter>
    );
  }
}



export default App;


