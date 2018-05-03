import React, {Component} from 'react';

import Profile from '../../components/Profile/Profile';
import Repo from '../../components/Repo/Repo';
import Modal from '../Modal/Modal';
import Backdrop from '../../components/UI/Backdrop/Backdrop'
import classes from './Home.css';
import axios from 'axios';

class Home extends Component {
    state = {
        user: '',
        picture: [],
        repo: ''
    }

getUser = (username) => { 
    const url = 'https://api.github.com/users/';
    axios.get(url + username)
    .then((response) => console.log(response.data))
    .then(data => this.setState({
        user: data.login,
        picture: data.avatar_url,
        repo: data.repos_url
    }));
}

updateInputValue = (eve) => {
    console.log(eve.target.value);
    let inputUsername = eve.target.value;
    this.getUser(inputUsername);
}

    render() {
       
        return (
                <div>
                    <label> Username : </label>
                    <input className={classes.Input} type='text'  onChange={this.updateInputValue}/>
                    {/* <p style={{textAlign:'center',margin:'auto'}}>or</p>
                    <label>Repository :</label>
                    <input className={classes.Input} type='text' onChange={(event) => this.setState({username: event.target.value})}/> */}
                    {/* <button>Search</button> */}
                    <Profile 
                        profileImage={this.state.picture}
                        repoLink ={this.state.repo} />
                    <Repo 
                        profileImage={this.state.picture}
                        username={this.state.user}
                        repoLink ={this.state.repo}/>
                        {this.state.picture}
                        {this.state.repo}
                    {/* <Modal /> */}
                    {/* <Backdrop /> */}
                </div>
        );
    }
}

export default Home;