import React from 'react';
// import {Grid, Row, Col, Image} from 'react-bootstrap';
import classes from './Profile.css';

const profile = (props) => (
        <div>
            <h4 style={{textAlign: 'center'}}>User Profile</h4>
            <div className={classes.Profile}>
                <div>
                    <img className={classes.ProfileImage} src={props.profileImage} alt="user profile image"/>
                    <p>Name: {props.name}</p>
                    <div>
                        <ul className={classes.UserDetails}>
                            <li>followers: {props.followers}</li>
                            <li>following: {props.following}</li>
                            <li>location: {props.location}</li>
                        </ul>
                    </div>
                </div>
                <section>
                    <p>Repos: <a href={props.repoLink}>link </a></p>
                </section>
            </div>
        </div>
    );



export default profile;