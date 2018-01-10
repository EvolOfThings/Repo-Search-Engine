import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GitHub Repo Search</h1>
        </header>
      </div>
    );
  }
}

class RepoSearchBar extends Component {
  render() {
    const repoName = this.props.repoName;
    return (
      <form>
        <input type="text" placeholder="Repository name"/>
      </form>
      );
  }
}




export default App;


