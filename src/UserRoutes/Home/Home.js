import React, { useEffect } from 'react';
import classes from './Home.module.css';

import Container from '../../Container/User/UserContainer';
import { NavLink } from 'react-router-dom';

import * as productActions from '../../store/actions/userActions/productActions';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {

    const dispatch = useDispatch();

    const products = useSelector(state => state.userProduct.product3);
    const url = 'http://localhost:8080/'

    useEffect(() => {
        dispatch(productActions.get_three());
    },[])

    console.log(products)

    return (
        <Container>
            <div className={classes.Home}>
                <div className={classes.NewIn}>
                    <h2>New In</h2>
                    <NavLink className={classes.ShopNow} to='/shop'>Shop Now</NavLink>
                </div>
                <div className={classes.Shop}>
                     {products ? products.map(key => (
                        <NavLink key={key._id} exact to={'/shop/'+key._id}><div className={classes.Product} >
                            <div className={classes.Image}>
                                <img src={url+key.imageUrl} />
                            </div>
                            <p>{key.title}</p>
                        </div></NavLink>
                        )) : ''}
                </div>
            </div>
        </Container>
    );
}

export default Home;