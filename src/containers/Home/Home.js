import React, {Component} from 'react';

import Profile from '../../components/Profile/Profile';
import Repo from '../../components/Repo/Repo';
import Modal from '../Modal/Modal';
import Backdrop from '../../components/UI/Backdrop/Backdrop'
import classes from './Home.css';

class Home extends Component {
    state = {
        username: '',
        repo: ''
    }
getUser = () => {
    const name = this.state 
}

    render() {
        const { user } = this.state;
        return (
                <div>
                    <label> Username : </label>
                    <input className={classes.Input} type='text' />
                    <label>Repository :</label>
                    <input className={classes.Input} type='text' onChange={(event) => this.setState({username: event.target.value})}/>
                    {/* <button>Search</button> */}
                    <Profile />
                    <Repo />
                    {/* <Modal /> */}
                    {/* <Backdrop /> */}
                </div>
        );
    }
}

export default Home;