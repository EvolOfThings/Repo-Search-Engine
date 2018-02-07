import React, { Component } from 'react';


let Repository = () => {
    return (
    <div className='repos'>
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
            <div className='profile'>
                <div className='profileImage'>
                    <img className='profilePic' src='#' />
                </div>
                <div>
                    <Repository />
                </div>
            </div>
            );
    }
}


export default UserSearch;