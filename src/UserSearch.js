import React, { Component } from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';

let Repository = () => {
    return (
    <div className='Repos'>
        <ul>
        <li className='repoItem'>repo A </li>
        <li className='repoItem'>repo B </li>
        <li className='repoItem'>repo C </li>
        </ul>
    </div>
    )};

class UserSearch extends Component {
    render() {
        return (
            <div className='Profile'>
                <Grid>
                    <Row>
                        <Col sm={4} className='profileImage'>
                            <Image className='profilePic' src='#' rounded />
                        </Col>
                        <Col sm={8} >
                            <Repository />
                        </Col>
                    </Row>
                </Grid>
            </div>
            );
    }
}


export default UserSearch;