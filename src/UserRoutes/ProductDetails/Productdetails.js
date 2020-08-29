import React, { useEffect, useState } from 'react';
import classes from './Productdetails.module.css';

import Container from '../../Container/User/UserContainer';
import Login from '../../Components/User/Auth/Login/Login';
import Signup from '../../Components/User/Auth/Signup/Signup';

import * as productActions from '../../store/actions/userActions/productActions';
import * as cartActions from '../../store/actions/userActions/userCartActions';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '@material-ui/core';

const Productdetails = (props) => {
    
    const urlImage = 'http://localhost:8080/';
    const productId = props.match.params.id;
    const dispatch = useDispatch();
    
    const [backdrop, setBackdrop] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [isCart, setIsCart] = useState(false);
    const [size, setSize] = useState('');
    // const [quantity, setQuantity] = useState(1);
    
    const isToken = useSelector(state => state.userAuth.token);
    const product = useSelector(state => state.userProduct.product);

    useEffect(() => {
        dispatch(productActions.get_single_product(productId));
    },[isToken,isCart,backdrop])

    console.log(isToken);
    

    const backdropHandler = (event) => {
        event.preventDefault();
        if (isToken !== null) {
            setIsCart(true);
            setBackdrop(false);
            
            const cartData = {
                productId: productId,
                size: size
            }
            dispatch(cartActions.add_to_cart(cartData))
        } else {
            setBackdrop(state => !state);
        }
        
    }

    const gotoCart = (event) => {
        event.preventDefault();
        props.history.push('/cart');
    }

    const gotoShopping = (event) => {
        event.preventDefault();
        props.history.push('/shop');
    }

    const isLoginHandler = () => {
        setIsLogin(state => !state);
    }
    
    return (
        <Container style={backdrop ? {position: 'fixed'}: null} >
            
                {backdrop ? 
                
                <Modal open={backdrop} onClose={backdropHandler}
                    style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    {isLogin ? <Signup click={isLoginHandler} /> : 
                    <Login isCart={() => setIsCart(state => !state.isCart)} click={isLoginHandler} />}
                </Modal>
            
            
            : ''}
            <div  className={classes.Productdetails}>
                
                <h3>Product Details</h3>
                <div className={classes.Product}>
                    
                    <div className={classes.Image}>
                        <img src={urlImage+product.imageUrl} />
                    </div>

                    <div className={classes.ProductDetail}>
                        
                        <h2>{product.title}</h2>
                        <h4>R {product.price}.00</h4>
                        <h5>Description:</h5>
                        <p>{product.description}</p>
                        
                        <div className={classes.Form}>
                            <form>
                                <select onChange={(event) => setSize(event.target.value)}>
                                    <option>Select Size</option>
                                    <option value='small'>Small</option>
                                    <option value='medium'>Medium</option>
                                    <option value='large'>Large</option>
                                </select>
                                {/* <label>Quantity</label>
                                <input type='number' min='1' max='10' value={quantity} onChange={event => setQuantity(event.target.value)} />  */}
                                
                                {isCart ? 
                                    <div className={classes.CartButtons}>
                                        <button onClick={gotoCart}>Go Cart</button>
                                        <button onClick={gotoShopping}>Continue Shopping</button>
                                    </div> : <button onClick={backdropHandler}>Add to Cart</button>}
                            </form>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </Container>
    );
}

export default Productdetails;