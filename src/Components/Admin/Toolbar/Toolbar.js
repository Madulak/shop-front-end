import React from 'react';
import classes from './Toolbar.module.css';
import {  NavLink } from 'react-router-dom';

const Toolbar = () => {

    return (
        <div className={classes.Toolbar}>
            <div className={classes.Links}>
                
                <h2>Shop</h2>
                <h3>Admin</h3>
            </div>
            <div className={classes.BrandName}>
                <div>
                    <NavLink className={classes.Link} to="/admin/dashboard">DashBoard</NavLink>
                </div>
                 <div>
                    <NavLink className={classes.Link} to="/admin/manage">Manage</NavLink>
                    
                </div>
                
                <div>
                    <NavLink className={classes.Link} to="/admin/add-product">Add Products</NavLink>
                </div>
                
            </div>
            <div className={classes.SocialLinks}>
                <h3>Social Media</h3>
            </div>
        </div>
    );
}

export default Toolbar;