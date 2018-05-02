import React, {Component} from 'react';

import Profile from '../../components/Profile/Profile';
import Repo from '../../components/Repo/Repo';
import Modal from '../Modal/Modal';
import Backdrop from '../../components/UI/Backdrop/Backdrop'
import classes from './Home.css';
import axios from 'axios';

class Home extends Component {
    state = {
        username: '',
        repo: ''
    }

getUser = (username) => {
    axios.get('https://api.github.com/users/' + username)
    .then(response => {
        console.log(response);
        return response;
    });
}

updateInputValue = (eve) => {
    console.log(eve.target.value);
    let inputUsername = eve.target.value;
    this.getUser(inputUsername);

    this.setState({
        username: eve.target.value
    });
}

    render() {
        const { user } = this.state;
        return (
                <div>
                    <label> Username : </label>
                    <input className={classes.Input} type='text' value={this.state.username} onChange={this.updateInputValue}/>
                    {/* <p style={{textAlign:'center',margin:'auto'}}>or</p>
                    <label>Repository :</label>
                    <input className={classes.Input} type='text' onChange={(event) => this.setState({username: event.target.value})}/> */}
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