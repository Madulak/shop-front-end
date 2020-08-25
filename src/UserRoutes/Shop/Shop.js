import React, { useEffect, useState } from 'react';
import classes from './Shop.module.css';

import Container from '../../Container/User/UserContainer';
import * as productActions from '../../store/actions/userActions/productActions';
import { useDispatch, useSelector } from 'react-redux';

import Image from '../../Components/Admin/Image/Image';
import { NavLink } from 'react-router-dom';

const Shop = React.memo((props) => {

    const url = 'http://localhost:8080/'
    const dispatch = useDispatch();
    const products = useSelector(state => state.userProduct.products);
    

    const path = props.location.pathname;


    useEffect(() => {
        if (path === '/shop') {
            dispatch(productActions.all_products())
        } else if (path === '/shop/top') {
            dispatch(productActions.get_top())
        } else if (path === '/shop/bottom') {
            dispatch(productActions.get_bottom()) 
        } else if (path === '/shop/dress') {
            dispatch(productActions.get_dress());
            
        }
    },[ path, dispatch, ])

    const productDetailHandler = (id) => {
        props.history.push('/shop/'+id)
    }

    return (
        <Container>
            <div className={classes.Shop}>
                <div className={classes.Categories}>
                    <span><NavLink className={classes.Link} exact activeStyle={{color: 'grey'}} to='/shop'>All</NavLink> </span> |
                    <span><NavLink className={classes.Link} activeStyle={{color: 'grey'}} to='/shop/top'>Top</NavLink> </span> |
                    <span><NavLink className={classes.Link} activeStyle={{color: 'grey'}} to='/shop/bottom'>bottom</NavLink> </span> |
                    <span><NavLink className={classes.Link} exact activeStyle={{color: 'grey'}} to='/shop/dress'>Dress</NavLink></span>
                </div>

                <div className={classes.Products}>
                    {!products? 'Loading...' : products.map(key => (
                        <div onClick={() => productDetailHandler(key._id)} className={classes.Product} key={key._id}>
                            <Image className={classes.Image} imageUrl={url+key.imageUrl} />
                            <div className={classes.ProductDetails}>
                                <p className={classes.Title}>{key.title}</p>
                                <p><span>price: </span>R {key.price}.00</p>
                            </div>
                            <div className={classes.Morebutton}>
                                <button>Quick View</button>
                            </div>
                        </div>
                    ))}

                    
                </div>
            </div>
        </Container>
    );
})

export default Shop;