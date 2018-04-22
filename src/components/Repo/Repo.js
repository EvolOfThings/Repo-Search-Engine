import React from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import classes from './Repo.css';


const repo = () => (
    <div>
        <h4 style={{textAlign: 'center'}}>Repository</h4>
        <div className={classes.Profile}>
            <img className={classes.ProfileImage} src="#" alt="user profile image"/>
            <section>
            <p>Username: </p>
            <p>Repository link:</p>
            </section>
        </div>
    </div>
);



export default repo;