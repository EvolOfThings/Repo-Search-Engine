import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';




class RepoSearchBar extends React.Component {
  render() {
    const repoName = this.props.repoName;
    return (
      <form>
        <input type="text" placeholder="Repository name"/>
      </form>
      );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();