import React, { useEffect } from 'react';
import classes from './Shop.module.css';

import Container from '../../Container/User/UserContainer';
import * as productActions from '../../store/actions/userActions/productActions';
import { useDispatch, useSelector } from 'react-redux';

import Image from '../../Components/Admin/Image/Image';

const Shop = (props) => {

    const url = 'http://localhost:8080/'
    const dispatch = useDispatch();
    const products = useSelector(state => state.userProduct.products);

    useEffect(() => {
        dispatch(productActions.all_products())
    },[])

    useEffect(() => {

    },[products])

    const productDetailHandler = (id) => {
        props.history.push('/shop/'+id)
    }

    return (
        <Container>
            <div className={classes.Shop}>

                <div className={classes.Products}>
                    {!products ? 'Loading...' : products.map(key => (
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
}

export default Shop;