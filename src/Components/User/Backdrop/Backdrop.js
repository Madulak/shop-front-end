import React from 'react';
import classes from './Backdrop.module.css';

const Backdrop = (props) => {

    return (
        <div  className={classes.Backdrop}>
            <div className={classes.Close} onClick={props.backdrop} >x</div>
            {props.children}
        </div>
    );
}

export default Backdrop;