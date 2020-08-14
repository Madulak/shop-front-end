import React from 'react';
import classes from './Toolbar.module.css';
import { NavLink } from 'react-router-dom';

const Toolbar = () => {

    return (
        <div className={classes.Toolbar}>
            <div>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
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