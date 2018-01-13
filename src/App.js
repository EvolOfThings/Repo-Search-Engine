import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GitHub Repo Search</h1>
        </header>
        <div className="SearchBar">
            <form>
              <input className="RepoBar" type="text" placeholder="Repository name"/>
            </form>
            <form>
              <input className="UsernameBar" type="text" placeholder="username"/>
            </form>
        </div>
      </div>
    );
  }
}

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


