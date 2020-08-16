import Axios from "axios";

export const ALL_PRODUCTS = 'ALL_PRODUCTS';
export const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT'; 


const urlallProducts = 'http://localhost:8080/user/all-products';
const urlgetsingleProduct = 'http://localhost:8080/user/product/';

export const all_products = () => {
    return async dispatch => {

        let response;
        try {
            response = await Axios.get(urlallProducts)
            console.log(response);
        } catch (error) {
            console.log(error);
        }

        dispatch({type: ALL_PRODUCTS, products: response.data.data })
    }
}

export const get_single_product = (productId) => {
    return async dispatch => {

        let response;
        try {
            response = await Axios.get(urlgetsingleProduct+productId)
            console.log(response);
        } catch (error) {
            console.log(error);
        }

        dispatch({type: GET_SINGLE_PRODUCT, product: response.data.data })
    }
}