import React from 'react';
import classes from './Newsletter.module.css';

const Newsletter = () => {

    return (
        <div className={classes.Newsletter}>
            <div>
                <h3>Socials</h3>
                <p>Sign up for Weekly updates</p>
            </div>

            <div className={classes.Form}>
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