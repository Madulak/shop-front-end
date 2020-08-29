import Axios from "axios";

export const ADD_TO_CART = 'ADD_TO_CART';
export const GET_CART = 'GET_CART';
export const DELETE_CART_ITEM = 'DELETE_CART_ITEM';

const urladdtocart = 'http://localhost:8080/user/add-to-cart/';
const urlgetcart = 'http://localhost:8080/user/get-card/';
const urldeletecartitem = 'http://localhost:8080/user/cart/delete/'

export const add_to_cart = (productData) => {
    return async (dispatch, getState) => {
        const token = getState().userAuth.token;

        try {
            let response;
            const config = {
                headers: {
                    Authorization: 'Bearer '+token
                }
            }
            response = await Axios.post(urladdtocart+productData.productId, productData, config)
        } catch (error) {
            console.log(error);
        }

        dispatch({ type: ADD_TO_CART })
    }
}

export const get_cart = () => {
    return async (dispatch, getState) => {
        const userId = getState().userAuth.userId;
        console.log(userId);
        let response;
        try {
            response = await Axios.get(urlgetcart+userId);
            console.log(response.data.data);
        } catch (error) {
            console.log(error);
        }

        dispatch({ type: GET_CART, cart: response.data.data, totalPrice: response.data.total })
    }
}

export const delete_cart_item = (id) => {
    return async (dispatch, getState) => {
        const token = getState().auth.token;
        console.log(token);
        let response;
        try {
            const config = { 
                headers: {
                    'content-type': 'application/json',
                    Authorization: 'Bearer '+token
                }
            }
            const data = {
                userId: token
            }
            response = await Axios.post(urldeletecartitem+id, data, config);
            console.log(response);
        } catch (error) {
            console.log(error);
        }

        dispatch({ type: DELETE_CART_ITEM })
    }
}

