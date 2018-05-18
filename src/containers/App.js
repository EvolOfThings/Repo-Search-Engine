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
          <Home />
          
          <footer 
            className={classes.Footer}>This app was built for <a style={{color: '#ff3b30', textDecorationLine:'none'}} href="https://aircto.com/">aircto </a> by <a style={{color: 'rgb(94, 208, 86)', textDecorationLine:'none'}} href="https://rishad.me/">Rishad Yamnoor</a> 
          </footer>
        </div>
      </BrowserRouter>
      // <Spinner />
    );
  }
}



export default App;


