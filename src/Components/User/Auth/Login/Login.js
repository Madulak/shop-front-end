import React from 'react';
import classes from './Login.module.css';

const Login = (props) => {

    return (
        <div className={classes.Login}>
            <div className={classes.Form}>
                <form>
                    <input type='email' placeholder='Enter Email' />
                    <input type='password' placeholder='Enter Password' />
                    <button type='submit'>Login</button>
                </form>

                <p>I Don't have Account I want to <button onClick={props.click}>Sign up</button></p>
            </div>
        </div>
    );
}

export default Login