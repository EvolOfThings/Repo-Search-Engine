import React from 'react';
// import {Grid, Row, Col, Image} from 'react-bootstrap';
import classes from './Repo.css';


const repo = (props) => (
    <div>
        <h4 style={{textAlign: 'center'}}>Repository</h4>
        <div className={classes.Profile}>
            <img className={classes.ProfileImage} src={props.ProfileImage} alt="user profile image"/>
            <section>
            <p>Username: {props.username} </p>
            <p>Repository link: {props.repoLink}</p>
            </section>
        </div>
    </div>
);



export default repo;