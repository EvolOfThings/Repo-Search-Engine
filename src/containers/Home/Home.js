import React, {Component} from 'react';

import classes from './Home.css';

class Home extends Component {
    state = {
        user: {}
    }
    render() {
        const { user } = this.state;
        return (
                <div>
                    <label> Username : </label>
                    <input className={classes.Input} type='text' onClick={this.getUser}/>
                    <label>Repository :</label>
                    <input className={classes.Input} type='text' />
                    {/* <button>Search</button> */}
                </div>
        );
    }
}

export default Home;