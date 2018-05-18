import React from 'react';
// import {Grid, Row, Col, Image} from 'react-bootstrap';
import classes from './RepoSearch.css';


const repo = (props) => (
    <div>
        <h4 style={{textAlign: 'center'}}>Repository</h4>
        <div className={classes.RepoSearch}>
            <img className={classes.ProfileImage} src={props.profileImage} alt="user profile image"/>
            <section>
            <p>Username: {props.username} </p>
            <p>Repository: <a href={props.repoLink}>repo name</a></p>
            <p>Issues: <a href='#'>Issues</a></p>
            </section>
        </div>
    </div>
);



export default repo;