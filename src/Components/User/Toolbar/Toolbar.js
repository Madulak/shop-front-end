import React, { useEffect } from 'react';
import classes from './Toolbar.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Toolbar = () => {

    const isAuth = useSelector(state => state.userAuth.token);

    return (
        <div className={classes.Toolbar}>
            <div>
                <NavLink className={classes.Link} to="/shop">Shop</NavLink>
                <NavLink className={classes.Link} to="/about">About</NavLink>
                <NavLink className={classes.Link} to="/contact">Contact</NavLink>
                {isAuth ? <NavLink className={classes.Link} to="/cart">Cart</NavLink> : ''}
            </div>
            <div>
                <h3><NavLink to="/">Shop</NavLink></h3>
            </div>
            <div>
                <h3>Links to Social media</h3>
            </div>
        </div>
    );
}

export default Toolbar;