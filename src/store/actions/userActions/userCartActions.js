import Axios from "axios";

export const ADD_TO_CART = 'ADD_TO_CART';
export const GET_CART = 'GET_CART';


const urladdtocart = 'http://localhost:8080/user/add-to-cart/';
const urlgetcart = 'http://localhost:8080/user/get-card/'

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

        dispatch({ type: GET_CART, cart: response.data.data })
    }
}