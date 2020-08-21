import React, { useState, useCallback } from 'react';
import classes from './Login.module.css';

import * as loginActions from '../../../../store/actions/userActions/userAuthActions';
import { useDispatch, useSelector} from 'react-redux'

const Login = (props) => {

    const dispatch = useDispatch();
    const loginState = useSelector(state => state.userAuth.token);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = (event) => {
        event.preventDefault();
        
        const loginData = {
            email: email,
            password: password
        }
        dispatch(loginActions.login(loginData))
        setEmail('');
        setPassword('');
        
        return props.isCart
    }

    return (
        <div className={classes.Login}>
            <div className={classes.Form}>
                <h3>Login</h3>
                <form onSubmit={loginHandler}>
                    <input type='email' value={email} onChange={event => setEmail(event.target.value) } placeholder='Enter Email' />
                    <input type='password' value={password} onChange={event => setPassword(event.target.value)} placeholder='Enter Password' />
                    <button type='submit'>Login</button>
                </form>

                <p>I Don't have Account I want to <button className={classes.Switch} onClick={props.click}>Sign up</button></p>
            </div>
        </div>
    );
}

export default Login