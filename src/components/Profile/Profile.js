import React from 'react';
// import {Grid, Row, Col, Image} from 'react-bootstrap';
import classes from './Profile.css';

const profile = (props) => (
        <div>
            <h4 style={{textAlign: 'center'}}>User Profile</h4>
            <div className={classes.Profile}>
                <img className={classes.ProfileImage} src={props.profileImage} alt="user profile image"/>
                <section>
                    <p>Repos</p>
                    <ul>
                        <li>repo 1</li>
                        <li>repo 2</li>
                        <li>repo 3</li>
                    </ul>
                </section>
            </div>
        </div>
    );



export default profile;