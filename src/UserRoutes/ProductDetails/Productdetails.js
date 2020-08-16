import React, { useEffect, useState } from 'react';
import classes from './Productdetails.module.css';

import Container from '../../Container/User/UserContainer';
import Backdrop from '../../Components/User/Backdrop/Backdrop';
import Login from '../../Components/User/Auth/Login/Login';
import Signup from '../../Components/User/Auth/Signup/Signup';

import * as productActions from '../../store/actions/userActions/productActions';
import { useDispatch, useSelector } from 'react-redux';

const Productdetails = (props) => {
    
    const urlImage = 'http://localhost:8080/';
    const productId = props.match.params.id;
    const dispatch = useDispatch();

    const [backdrop, setBackdrop] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

    const product = useSelector(state => state.userProduct.product);

    useEffect(() => {
        dispatch(productActions.get_single_product(productId));
    },[])

    

    const backdropHandler = (event) => {
        event.preventDefault();
        setBackdrop(state => !state);
    }

    

    const isLoginHandler = () => {
        setIsLogin(state => !state);
    }
    
    return (
        <Container style={backdrop ? {position: 'fixed'}: null} >
            {backdrop ? <Backdrop click={backdropHandler}>
                {isLogin ? <Signup click={isLoginHandler} /> : <Login click={isLoginHandler} />}
                
            </Backdrop> 
            
            : ''}
            <div  className={classes.Productdetails}>
                
                <h3>Product Details</h3>
                <div className={classes.Product}>
                    
                    <div className={classes.Image}>
                        <img src={urlImage+product.imageUrl} />
                    </div>

                    <div className={classes.ProductDetails}>
                        
                        <h2>{product.title}</h2>
                        <h4>R {product.price}.00</h4>
                        <h5>Description:</h5>
                        <p>{product.description}</p>
                        
                        <div className={classes.Form}>
                            <form>
                                <select>
                                    <option>Select Size</option>
                                    <option value='small'>Small</option>
                                    <option value='medium'>Medium</option>
                                    <option value='large'>large</option>
                                </select>
                                <label>Quantity</label>
                                <input type='number' /> 
                                <button onClick={backdropHandler}>Add to Cart</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Productdetails;