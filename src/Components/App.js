import React, { Component } from 'react';
import '../App.css';


class App extends Component {
    constructor(){
        super();
        this.state = {
            repoTxt: '',
            usernameTxt: '',
            items: []
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
    handleSubmit(e){
        e.preventDefault();
        console.log(this.state)
    }
    componentWillMount(){
        fetch('https://swapi.co/api/people/?format=json')
        .then( response => response.json() )
        .then( ({results: items}) => this.setState({items}))
    }
    componentDidMount(){
        console.log('componentDidMount')
    }
  render() {
    console.log('rendered');
    return (
      <div className="App">
        <AppTitle text='GitHub Repo Search'/>
        <div className="SearchBar">
            <form onSubmit={this.handleSubmit.bind(this)}>
            <label> Name of a repository:
              <input ref="repository" className="RepoBar" type="text" placeholder="Repository name"  onChange={this.handleChange}/>
              </label><br/>
              <label> Username:
                <input ref="username" className="UsernameBar" type="text" placeholder="username"  onChange={this.handleChange}/>
                </label>
              <input className="btn btn-primary" type="submit" value="Submit"/>
              <hr />
              <h2> Repository: {this.state.repoTxt} <br/> Username: {this.state.usernameTxt} </h2>
            </form>
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


