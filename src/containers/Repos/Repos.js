import React, {Component, Fragment} from 'react';
import axios from 'axios';

class Repos extends Component {
    state = {
        url: ''
    }

    //get request for repos and map through it to put it in list
    //THIS IS WRONG
    getUser = (username) => { 
        const urlLink = 'https://api.github.com/users/';
       return axios.get(urlLink + username)
        .then((response) => response.data)
        .then(user => {
            this.setState({
                url: user.repos });
        });
    }

    render () {
        return (
            <Fragment>
            <ul>
                </ul>
            </Fragment>
        );
    }
}

export default Repos;