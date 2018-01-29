import React, { Component } from 'react';


class RepoResult extends Component {
    mount(){
        ReactDOM.render(<App />, document.getElementById('results'))
    }
    render(){
        return (
            <div>
            <label> Name of a repository:
            <input type="text" onChange={this.mount.bind(this)}/>
            </label>
                <div id="results"></div>
            </div>
        )
    }
}




export default RepoResult;