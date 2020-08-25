import Axios from "axios";

export const ALL_PRODUCTS = 'ALL_PRODUCTS';
export const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT'; 
export const GET_THREE = 'GET_THREE';

export const GET_TOP = 'GET_TOP';
export const GET_BOTTOM = 'GET_BOTTOM';
export const GET_DRESS = 'GET_DRESS';


const urlallProducts = 'http://localhost:8080/user/all-products';
const urlgetsingleProduct = 'http://localhost:8080/user/product/';
const urlget3 = 'http://localhost:8080/user/get-3';

const urlget_top = 'http://localhost:8080/user/get-top/top';
const urlget_bottom = 'http://localhost:8080/user/get-bottom/bottom';
const urlget_dress = 'http://localhost:8080/user/get-dress/dress';

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

export const get_three = () => {
    return async dispatch => {
        let response;
        try {
            response = await Axios.get(urlget3);
            console.log(response);
        } catch(error) {
            console.log(error);
        }

        dispatch({type: GET_THREE, product3: response.data.data})
    }
}


export const get_top = () => {

    return async dispatch => {

        let response;
        try {
            response = await Axios.get(urlget_top);
            console.log(response);
        } catch (error) {
            console.log(error);
        }

        dispatch({ type: GET_TOP, top: response.data.data })
    }
}

export const get_bottom = () => {

    return async dispatch => {

        let response;
        try {
            response = await Axios.get(urlget_bottom);
            console.log(response);
        } catch (error) {
            console.log(error);
        }

        dispatch({ type: GET_BOTTOM, bottom: response.data.data })
    }
}

export const get_dress = () => {

    return async dispatch => {

        let response;
        try {
            response = await Axios.get(urlget_dress);
            console.log(response);
        } catch (error) {
            console.log(error);
        }

        dispatch({ type: GET_DRESS, dress: response.data.data })
    }
}