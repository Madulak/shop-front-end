import React, { useState, useCallback, useEffect } from 'react';
import classes from './Addproducts.module.css';
// import ImageUploader from 'react-images-upload';

import Container from '../../Container/Admin/AdminContainer';
import * as actionTypes from '../../store/actions/prouctActions';

import { useDispatch } from 'react-redux';

const Addproducts = React.memo(() => {

    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState();
    const [quantity, setQuantity] = useState();

    const dispatch = useDispatch();
    
    const onSubmitHandler = useCallback((event) => {
        event.preventDefault();
        

        
        // const productDetails = {
        //     title: title,
        //     description: description,
        //     price: price,
        //     quantity: quantity,
        //     imageUrl: image
        // }
        let formData = new FormData();
        formData.append('image', image);
        formData.set('title', title);
        formData.set('description', description);
        formData.set('price', price);
        formData.set('quantity', quantity);
        
        console.log(formData);
        

        dispatch(actionTypes.create_product(formData))
    },[dispatch, title, image, description, price,quantity])

    useEffect(() => {
        

    }, [onSubmitHandler])

    return (
        <Container>
            <div className={classes.Addproducts}>
                <h3>Add Product</h3>
                <div className={classes.Form}>
                    <form onSubmit={onSubmitHandler} encType='multipart/form-data'>
                        <input type='text' placeholder='title of the Product' value={title} onChange={event => setTitle(event.target.value)} />
                        <input type="file" onChange={event => setImage(event.target.files[0])} />
                        <textarea value={description} onChange={event => setDescription(event.target.value)} maxLength='150' rows='6' cols='30' placeholder="Description"></textarea>
                        <input type='number' placeholder='Enter price' value={price} onChange={event => setPrice(event.target.value)} />
                        <input type='number' placeholder='Enter quantity' value={quantity} onChange={event => setQuantity(event.target.value)} />
                        <div>
                            <button >Submit</button>
                            <button type='reset'>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    );
})

export default Addproducts;