import React, { useEffect } from 'react';
import classes from './Cart.module.css';

import Container from '../../Container/User/UserContainer';
import * as cartActions from '../../store/actions/userActions/userCartActions';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.cart)

    useEffect(() => {
        dispatch(cartActions.get_cart());
    },[])

    let urlImage = 'http://localhost:8080/';

    return (
        <Container>
            <div className={classes.Cart}>
                <div className={classes.CheckoutContainer}>
                    <div>
                        <h3>Items in the Cart</h3>
                    </div> 
                    <div>
                        <button>Chechout</button>
                    </div>
                </div>
                <div className={classes.CartItems}>
                    
                    {cart.map(item => (
                        <div className={classes.CartItem} key={item._id}>
                            <div >
                                <h3>{item.productId.title}</h3>
                                <div className={classes.Image}>
                                    <img src={urlImage+item.productId.imageUrl} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
}

export default Cart;