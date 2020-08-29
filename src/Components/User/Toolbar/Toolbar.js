import React, { useEffect } from 'react';
import classes from './Toolbar.module.css';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import Tooltip from '@material-ui/core/Tooltip';

const Toolbar = (props) => {

    const isAuth = useSelector(state => state.userAuth.token);

    return (
        <div className={classes.Toolbar}>
            
            <div>
                <NavLink className={classes.Link} to="/shop">Shop</NavLink>
                {/* <NavLink className={classes.Link} to="/about">About</NavLink> */}
                <NavLink className={classes.Link} to="/contact">Contact</NavLink>
            </div>
            <div>
                <h3><NavLink to="/">Shop</NavLink></h3>
            </div>
            <div>
                <a href='https://twitter.com/ShoZillastro' target='_blank'><TwitterIcon style={{color: 'rgb(122, 121, 121)'}} /></a>
                <a href='https://www.instagram.com/palazzomadul/' target='_blank'><InstagramIcon style={{color: '#72ed87'}} /></a>
                
                {isAuth ?<Link to='/cart' >
                    <ShoppingCartIcon style={{color : isAuth ? '#72ed87' : '#ed7272' }} />
                </Link> :
                <Tooltip title='Please Login to access Cart'> 
                    <button style={{backgroundColor: 'white', borderColor: 'white', borderWidth: 0}} onClick={props.openbackdrop} >
                        <ShoppingCartIcon style={{color : isAuth ? '#72ed87' : '#ed7272' }} />
                    </button>
                </Tooltip>}
            </div>
        </div>
    );
}

export default Toolbar;