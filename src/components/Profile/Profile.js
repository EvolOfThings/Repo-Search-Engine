import React from 'react';
// import {Grid, Row, Col, Image} from 'react-bootstrap';
import classes from './Profile.css';
import Repos from '../../containers/Repos/Repos'

const profile = (props) => (
        <div>
            <h4 style={{textAlign: 'center'}}>User Profile</h4>
            <div className={classes.Profile}>
                <div>
                    <p>Name: {props.name}</p>
                    <img className={classes.ProfileImage} src={props.profileImage} alt="user image"/>
                    <div>
                        {/* <ul className={classes.UserDetails}>
                            <li>followers: {props.followers}</li>
                            <li>following: {props.following}</li>
                            <li>location: {props.location}</li>
                        </ul> */}
                    </div>
                </div>
                <Repos url={props.url}/>
            </div>
        </div>
    );



export default profile;