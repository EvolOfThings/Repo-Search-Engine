import React, { Component } from 'react';


let Repository = (
    <div className='repos'>
        <ul>
        <li className='repoItem'>repo A </li>
        <li className='repoItem'>repo B </li>
        <li className='repoItem'>repo C </li>
        </ul>
    </div>
    );

class UserSearch extends Component {
    render() {
        return (
            <div>
                <div className='profileImage'>
                    <img className='profilePic' src='#' />
                </div>
                <div className='repos'>
                    <ul>
                    <li className='repoItem'>repo A </li>
                    <li className='repoItem'>repo B </li>
                    <li className='repoItem'>repo C </li>
                    </ul>
                </div>
            </div>
            );
    }
}


export default UserSearch;