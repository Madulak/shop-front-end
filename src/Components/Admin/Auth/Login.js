import React, { useState, useCallback, useEffect } from 'react';
import classes from './Login.module.css';

import { useDispatch } from 'react-redux';

import * as authActions from '../../../store/actions/authActions';

const Login = React.memo(({history}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    console.log(password)
    const dispatch = useDispatch();

    

    const onSubmitHandler = useCallback((event) => {
        event.preventDefault(); 
        dispatch(authActions.login( email, password))
        setEmail('');
        setPassword('');
        history.push('/admin/add-product')
    },[ dispatch, email, password])

    useEffect(() => {

    },[dispatch, onSubmitHandler, history])

    return (
        <div className={classes.Login}>
            <div className={classes.Form}>
                <h3>Login</h3>
                <form onSubmit={onSubmitHandler}>
                    <input onChange={(event) => setEmail(event.target.value)} value={email} type='email' placeholder='email' />
                    <input onChange={(event) => setPassword(event.target.value)} value={password} type='password' placeholder='password' />
                    <div>
                        <button type='submit'>Login</button>
                        
                    </div>
                </form>
            </div>
        </div>
    );
})

export default Login;
