import React, { useEffect } from 'react';
import classes from './Manageproducts.module.css';

import Container from '../../Container/Admin/AdminContainer';
import Image from '../../Components/Admin/Image/Image';

import { useDispatch, useSelector } from 'react-redux';
import * as productActions from '../../store/actions/prouctActions';

const Manageproducts = React.memo((props) => {

    const dispatch = useDispatch();
    const products = useSelector(state => state.product.products);

    useEffect(() => {
        dispatch(productActions.fetch_product())
    },[])
    
    useEffect(() => {

    },[dispatch, products])
    console.log(products);

    const deleteProductHandler = (id) => {
        dispatch(productActions.delete_product(id))
    }

    const editProductHandler = (id) => {
        props.history.push('/admin/edit-product/'+id)
    }

    const urlImage = 'http://localhost:8080/';
    
    return (
        <Container>
            <div className={classes.Manageproducts}>
                <h3>Manage Products</h3>
                <div className={classes.Products}>
                    {products.map(key => (
                        <div  className={classes.Product} key={key._id}>
                            <p className={classes.Title}>{key.title}</p>
                            <Image imageUrl={urlImage+key.imageUrl} alt={key.title} />
                            <p><span>price: </span>R {key.price}.00</p>
                            <p><span>quantity</span> {key.quantity}</p>
                            <p><span>description:</span> {key.description}</p>
                            <div className={classes.Buttons}>
                                <button onClick={(event) => {
                                    event.preventDefault();
                                    editProductHandler(key._id)
                                }} >Edit</button>
                                <button onClick={(event) => {
                                    event.preventDefault();
                                    deleteProductHandler(key._id)}}>Delete</button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
})

export default Manageproducts;