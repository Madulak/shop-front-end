import React, { useState } from 'react';
import classes from './Signup.module.css';
import { useDispatch } from 'react-redux';

import * as signupActions from '../../../../store/actions/userActions/userAuthActions';

const Signup = (props) => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const onSignupHandler = (event) => {
        event.preventDefault();
        if (email !== '' && password === confirm && password !== '') {
            const signupData = {
                email: email,
                password: password
            }
            dispatch(signupActions.signup(signupData))
            
            setEmail('');
            setPassword('');
            setConfirm('');
            return props.click
        } 
    }

    return (
        <div className={classes.Signup}>
            <div className={classes.Form}>
                <form onSubmit={onSignupHandler}>
                    <input type='email' value={email} onChange={event => setEmail(event.target.value)} placeholder='Enter Email' />
                    <input type='password' value={password} onChange={event => setPassword(event.target.value)} placeholder='Enter Password' />
                    <input type='password' value={confirm} onChange={event => setConfirm(event.target.value)} placeholder='Confirm Password' />
                    <button type='submit'>Sign up</button>
                </form>
                <p>Already Have an Account I want to <button onClick={props.click}>Login</button></p>
            </div>
        </div>
    );
}

export default Signup;