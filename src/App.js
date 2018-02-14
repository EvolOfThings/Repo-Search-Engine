import React, { Component } from 'react';
import './App.css';
import UserSearch from './UserSearch';
import {Grid, Row, Col} from 'react-bootstrap';

// const searchBar = () {
//  return (
//   <div className="SearchBar">
//       <form onSubmit={this.handleSubmit.bind(this)}>
//       <label> Name of a repository:
//         <input ref="repository" className="RepoBar" type="text" placeholder="Repository name"  onChange={this.handleChange}/>
//       </label><br/>
//       <p>or</p>
//       <label> Username:
//         <input ref="username" className="UsernameBar" type="text" placeholder="username"  onChange={this.handleChange}/>
//       </label><br/>
//         <input className="btn btn-primary" type="submit" value="Submit"/>
//       </form>
//   </div>
//   )};

class App extends Component {
    constructor(){
        super();
        this.state = {
            repoTxt: '',
            usernameTxt: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
//the search bar value is updated
    handleChange(){
        this.setState({
            repoTxt: this.refs.repository.value,
            usernameTxt: this.refs.username.value
        })
    }
  render() {
    console.log('rendered');
    return (
      <div className="App">
        <AppTitle text='GitHub Repo Search'/>
        <div className="SearchBar">
        <p className='SearchTitle'> Search by <em>username</em> or <em>repository name</em> </p>
        <Grid fluid='true'>
            <Row>
              <Col md={6} >
                <label> Name of a repository:
                  <input ref="repository" className="RepoBar" type="text" placeholder="Repository name"  onChange={this.handleChange}/>
                </label>
              </Col>
              <Col md={6} >
                <label> Username:
                  <input ref="username" className="UsernameBar" type="text" placeholder="username"  onChange={this.handleChange}/>
                </label>
              </Col>
            </Row>
          </Grid>
        </div>
        <div className='Results'>
          <h2> Repository: {this.state.repoTxt} <br/> Username: {this.state.usernameTxt} </h2>
          <UserSearch />
          <UserSearch />
        </div>
      </div>
    );
  }
}





class AppTitle extends Component {
    render(){
      const {text} = this.props;
        return (
            <div>
              <header className="App-header">
                <h1 className="App-title">{text}</h1>
              </header>
            </div>
        )
    }
}


export default App;


