import React, { useState, Fragment } from 'react';
import classes from './UserContainer.module.css';

import Toolbar from '../../Components/User/Toolbar/Toolbar';
import Newsletter from '../../Components/User/Newsletter/Newsletter';

import Backdrop from '../../Components/User/Backdrop/Backdrop';
import Login from '../../Components/User/Auth/Login/Login';
import Signup from '../../Components/User/Auth/Signup/Signup';
import { Modal } from '@material-ui/core';




const Usercontainer = (props) => {

    const [backdrop, setBackdrop] = useState(false);
    
    const [isLogin, setIsLogin] = useState(true);
    const isLoginHandler = () => {
        setIsLogin(state => !state);
    }

    const backdropHandler = () => {
        setBackdrop(state => !state)
    }

    return (
        
            
            <div style={{...props.style, position: backdrop ? 'fixed' : null }} className={classes.Usercontainer}>
                {backdrop ? 
                <Modal style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                     open={backdrop} onClose={backdropHandler}>

                    {isLogin ? <Signup click={isLoginHandler} /> : 
                    <Login click={isLoginHandler} />}
                
                </Modal>: ''}

                <Toolbar openbackdrop={() => setBackdrop(true)} />
                {props.children}
                <Newsletter />
            </div>
        
    );
}

export default Usercontainer;