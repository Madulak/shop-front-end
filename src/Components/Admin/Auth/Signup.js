import React, { useState } from 'react';
import classes from './Signup.module.css';

import { useDispatch } from 'react-redux';

import * as authActions from '../../../store/actions/authActions';

const Signup = () => {

    const [username, setUsername] = useState('Admin');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const onSubmitHandler = (event) => {
        event.preventDefault(); 
        dispatch(authActions.signup(username, email, password))
        setEmail('');
        setPassword('');
        setUsername('Admin');
    }

    return (
        <div className={classes.Signup}>
            <div className={classes.Form}>
                <h3>Signup</h3>
                <form onSubmit={onSubmitHandler}>
                    <input onChange={(event) => setEmail(event.target.value)} value={email} type='email' placeholder='email' />
                    <input onChange={(event) => setPassword(event.target.value)} value={password} type='password' placeholder='password' />
                    <div>
                        <button type='submit'>Sign up</button>
                        
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
