import React, { Component } from 'react';


let Profile = () {
    return (
    <div id="RepoResult">
        <div className='profilePic'>
            <img src='#' />
        </div>
        <div className="profileInfo">
            <label> username:
            <p> username is fetched </p>
            </label>
            <label> repository:
            <p> repository link </p>
            </label>
        </div>
    </div>
    )};

class RepoSearch extends Component {
    mount(){
        ReactDOM.render(<App />, document.getElementById('results'))
    }
    render(){
        return (
            <div>
            <label> Name of a repository:
            <input type="text" onChange={this.mount.bind(this)}/>
            </label>
            </div>
        )
    }
}




export default RepoSearch;