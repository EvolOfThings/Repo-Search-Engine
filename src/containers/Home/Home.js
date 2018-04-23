import React, {Component} from 'react';

import Profile from '../../components/Profile/Profile';
import Repo from '../../components/Repo/Repo';
import Modal from '../Modal/Modal';
import classes from './Home.css';

class Home extends Component {
    state = {
        user: {}
    }
getUser = () => {
    const name = this.state 
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
                    <Profile />
                    <Repo />
                    {/* <Modal /> */}
                </div>
        );
    }
}

export default Home;