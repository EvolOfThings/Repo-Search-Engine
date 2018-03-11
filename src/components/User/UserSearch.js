import React from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';
// import styles from './UserSearch.css';

let Repository = () => {
    return (
        <div className='Profile'>
            <Grid>
                <Row>
                    <Col sm={4} className='profileImage'>
                        <Image className='profilePic' src='#' rounded />
                    </Col>
                    <Col sm={8} className='Repos' >
                            <ul>
                            <li className='repoItem'>repo A </li>
                            <li className='repoItem'>repo B </li>
                            <li className='repoItem'>repo C </li>
                            </ul>
                    </Col>
                </Row>
            </Grid>
        </div>
    )};



export default Repository;