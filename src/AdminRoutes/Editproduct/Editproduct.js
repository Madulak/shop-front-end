import React, { useEffect, useState } from 'react';
import classes from './Editproduct.module.css';

import Container from '../../Container/Admin/AdminContainer';
import ImageEdit from '../../Components/Admin/EditImage/EditImage';
import { useDispatch, useSelector } from 'react-redux';
import * as editActions from '../../store/actions/prouctActions'

const Editproduct = React.memo((props) => {

    const dispatch = useDispatch();
    const product = useSelector(state => state.product.product);
    const prodId = props.match.params.id;

    const [productId, setProductId] = useState('');
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    

    useEffect(() => {
        dispatch(editActions.get_single_product(prodId))
    },[])

    useEffect(() => {
        if (product) {
            setProductId(product._id);
            setTitle(product.title);
            setImage(product.imageUrl);
            setDescription(product.description);
            setPrice(product.price);
            setQuantity(product.quantity);
            console.log(product._id)
        }
    },[product,dispatch])

    const updateProductHandler = (event) => {
        event.preventDefault();

        const data = {
            productId: prodId,
            title: title,
            // image: image,
            description: description,
            price: price,
            quantity: quantity
        }

        dispatch(editActions.update_product(data));
    }

    

    return (
        <Container>
            <div className={classes.Editproduct}>
                {/* <Editproduct imageUrl={product ? 'http://localhost:8080/'+product.imageUrl : ''} alt={'hello'} /> */}
                <h3>Edit product</h3>
                
                <div className={classes.Product} >
                    <div className={classes.EditImage}>
                        <img src={product ? 'http://localhost:8080/'+product.imageUrl : ''} alt={'hello'} />
                    </div>

                    <div className={classes.Form}>
                        
                        <form onSubmit={updateProductHandler}>
                            <input type='text' value={title} onChange={event => setTitle(event.target.value)} />
                            <input type='number' onChange={event => setPrice(event.target.value)} value={product ? price : ''} />
                            <input type="file" onChange={event => setImage(event.target.files[0])} />
                            <textarea  value={description} onChange={event => setDescription(event.target.value)}
                                 maxLength='150' rows='6' cols='30' 
                                 placeholder="Description">
                            </textarea>
                            <input type='number' onChange={(event) => setQuantity(event.target.value)} value={quantity}/>
                            <div>
                                <button type='submit'>Update</button>
                                <button type='reset'>Cancel</button>
                            </div>
                        </form>
                        
                    </div>
                </div>

            </div>
        </Container>
    );
})

export default Editproduct;