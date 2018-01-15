import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            repoTxt: '',
            usernameTxt: ''
        }
    }
    handleChangeRepo(e){
        this.setState({
            repoTxt: e.target.value
        })
    }
    handleChangeUser(eve){
        this.setState({
            usernameTxt: eve.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        console.log(this.state)
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GitHub Repo Search</h1>
        </header>
        <div className="SearchBar">
            <form onSubmit={this.handleSubmit.bind(this)}>
            <label> Name of a repository:
              <input name="repository" className="RepoBar" type="text" placeholder="Repository name"  onChange={this.handleChangeRepo.bind(this)}/>
              </label><br/>
              <label> Username:
                <input name="username" className="UsernameBar" type="text" placeholder="Repository name"  onChange={this.handleChangeUser.bind(this)}/>
                </label>
              <input className="btn btn-primary" type="submit" value="Submit"/>
              <h2> Repository: {this.state.repoTxt} Username: {this.state.usernameTxt} </h2>
            </form>
        </div>
      </div>
    );
  }
}

App.propTypes = {

}

// class ResultBox extends Component {
//     render() {
//         return (
//             <h2> Results:</h2>
//         );
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


