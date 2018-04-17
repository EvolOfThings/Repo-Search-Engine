import React, {Component} from 'react';

import classes from './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <label> Username </label>
                    <input className={classes.Input} type='text' />
                    <label>Repository</label>
                    <input className={classes.Input} type='text' />
                    {/* <button>Search</button> */}
                </div>
             </div>
        );
    }
}

export default Home;