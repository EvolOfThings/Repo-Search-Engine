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
        picture: [],
        repo: '',
        followers: '',
        following: '',
        location: ''
    }

getUser = (username) => { 
    const url = 'https://api.github.com/users/';
   return axios.get(url + username)
    .then((response) => response.data)
    .then(user => {
        this.setState({
            username: user.login, 
            picture: user.avatar_url, 
            repo: user.repos_url,
            followers: user.followers,
            following: user.following,
            location: user.location });
    });
}

updateInputValue = (eve) => {
    console.log(eve.target.value);
    let inputUsername = eve.target.value;
    this.getUser(inputUsername);
    
}

    render() {
       let user;
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
                        repoLink ={this.state.repo}
                        name ={this.state.username}
                        followers ={this.state.followers}
                        following={this.state.following}
                        location= {this.state.location} />
                    <Repo 
                        profileImage={this.state.picture}
                        username={this.state.username}
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