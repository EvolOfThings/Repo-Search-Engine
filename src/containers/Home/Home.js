import React, {Component} from 'react';

import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <h2>Git Repo Search</h2>
                <div>
                    <label> Username </label>
                    <input type='text' />
                    <label>Repository</label>
                    <input type='text' />
                    {/* <button>Search</button> */}
                </div>
             </div>
        );
    }
}

export default Home;