import React, { Component } from 'react';
import './App.css';

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
    let items = this.state.items;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GitHub Repo Search</h1>
        </header>
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
              <div>
              {items.map(item =>
                <Person key={item.name} person={item} />)}
              </div>
            </form>
        </div>
      </div>
    );
  }
}

const Person = (props) => <h4>{props.person.name}</h4>

// class RepoResult extends Component {
//     mount(){
//         ReactDOM.render(<App />, document.getElementById('results'))
//     }
//     render(){
//         return (
//             <div>
//             <label> Name of a repository:
//             <input type="text" onChange={this.mount.bind(this)}/>
//             </label>
//                 <div id="results"></div>
//             </div>
//         )
//     }
// }

// class UsernameResult extends Component {
//     render(){
//         return (
//             <div>
//                 <h2>Username: {this.state.usernameTxt} </h2>
//             </div>
//         )
//     }
// }


// class RepoSearchBar extends Component {
//   render() {
//     return (
//         <div>
//           <form>
//             <input type="text" placeholder="Repository name"/>
//           </form>
//       </div>
//       );
//   }
// }




export default App;


