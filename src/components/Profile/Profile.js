import React from 'react';
// import {Grid, Row, Col, Image} from 'react-bootstrap';
import classes from './Profile.css';


const profile = (props) => (
        <div>
            <h4 style={{textAlign: 'center'}}>User Profile </h4>
            <div className={classes.Profile}>
                <div>
                    <p>Name: {props.name}</p>
                    <img className={classes.ProfileImage} src={props.profileImage} alt="user"/>
                    <div>
                        <ul className={classes.UserDetails}>
                            <li>followers: {props.followers}</li>
                            <li>following: {props.following}</li>
                            <li>location: {props.location}</li>
                        </ul>
                    </div>
                    <p className={classes.RepositoryLink}>Repository: {props.repoLink}</p>
                </div>
                {/* <Repos url={props.url}/> */}
            </div>
        </div>
    );



export default profile;