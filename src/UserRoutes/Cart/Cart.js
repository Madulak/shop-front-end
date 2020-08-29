import React, { useEffect } from 'react';
import classes from './Cart.module.css';

import Container from '../../Container/User/UserContainer';
import * as cartActions from '../../store/actions/userActions/userCartActions';
import { useDispatch, useSelector } from 'react-redux';

const Cart = React.memo(() => {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.cart);
    const totalPrice = useSelector(state => state.cart.totalCart)
    console.log(totalPrice);

    useEffect(() => {
        dispatch(cartActions.get_cart());
        
    },[totalPrice, ])

    let urlImage = 'http://localhost:8080/';

    const deleteItem = (id) => {
        dispatch(cartActions.delete_cart_item(id));
    }

    return (
        <Container>
            <div className={classes.Cart}>
                <div className={classes.CheckoutContainer}>
                    <div>
                        <h3>Items in the Cart</h3>
                    </div> 
                    <div className={classes.Checkout}>
                        <h3>{totalPrice ? `Total Price: R ${totalPrice}.00`: ''}</h3>
                        <button className={classes.CheckoutButton}>Chechout</button>
                    </div>
                </div>
                <div className={classes.CartItems}>
                    
                    {cart.map(item => (
                        <div className={classes.CartItem} key={item._id}>
                            <div className={classes.CardContainer}>
                                <h3>{item.productId.title}</h3>
                                <div className={classes.Image}>
                                    <img src={urlImage+item.productId.imageUrl} />
                                    
                                </div>
                                <button onClick={() => deleteItem(item.productId._id)}>Remove</button>
                                <p>Price: R {item.productId.price}.00</p>
                                <p>Quantity: {item.quantity}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
})

export default Cart;