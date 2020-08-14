import React from 'react';
import classes from './Newsletter.module.css';

const Newsletter = () => {

    return (
        <div className={classes.Newsletter}>
            <div>
                <h3>Socials</h3>
                <p>Sign up to Receive</p>
            </div>
            <div>
            <form>
                <input type='email' />
                    <button>Sign up</button>
                </form>
            </div>
            <p>Made by Shop</p>
        </div>
    );
}

export default Newsletter;