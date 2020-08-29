import React from 'react';
import classes from './Newsletter.module.css';

import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const Newsletter = () => {

    

    return (
        <div className={classes.Newsletter}>
            <div className={classes.SocialMedia}>
                <a href='https://twitter.com/ShoZillastro' target='_blank'><TwitterIcon style={{color: 'rgb(122, 121, 121)'}} /></a>
                <a href='https://www.instagram.com/palazzomadul/' target='_blank'><InstagramIcon style={{color: '#72ed87'}} /></a>
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