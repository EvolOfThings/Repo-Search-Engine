import React, {Component, Fragment} from 'react';

import classes from './Modal.css';

class Modal extends Component {
    render () {
        return (
            <Fragment>
                {/* <Backdrop /> */}
                <div
                className={classes.Modal}>
                <h5>Issues</h5>
                <ul>
                    <li>Issue: 1</li>
                    <li>Issue: 2</li>
                    <li>Issue: 3</li>
                </ul>
                </div>
            </Fragment>
        );
    }
}

export default Modal;