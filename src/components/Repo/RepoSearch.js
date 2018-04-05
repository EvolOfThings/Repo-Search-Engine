import React from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';
// import classes from './RepoSearch.css';
//testing

const Profile = () => {
    return (
    <div className='Profile'>
        <Grid>
            <Row>
                <Col sm={4} className='profileImage'>
                    <Image className='profilePic' src='#' rounded />
                </Col>
                <Col sm={8} >
                    <Row className="profileInfo">
                        <Col sm={6}>
                            <label> username: </label>
                        </Col>
                        <Col sm={6}>
                            <p> EvolOfThings </p>
                        </Col>

                        <Col sm={6}>
                            <label> repository: </label>
                        </Col>
                        <Col sm={6}>
                            <p> Burger-Builder </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Grid>
    </div>
    )};



export default Profile;