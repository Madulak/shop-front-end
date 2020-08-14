import Axios from "axios";

export const ALL_PRODUCTS = 'ALL_PRODUCTS';


const urlallProducts = 'http://localhost:8080/user/all-products';

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