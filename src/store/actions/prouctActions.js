import Axios from "axios";

export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'; 

const urlcreateProduct = 'http://localhost:8080/dashboard/create';
const urlfetchProduct = 'http://localhost:8080/dashboard/products';
const urldeleteProduct = `http://localhost:8080/dashboard/`
const urlgetsingleProduct = 'http://localhost:8080/dashboard/product/'
const urlupdateProduct = 'http://localhost:8080/dashboard/productedit/'

export const create_product = (formData) => {
    return async (dispatch, getState) => {
        const token = getState().auth.token;
        console.log(token);

        const config = { 
            headers: {
                'content-type': 'multipart/form-data',
                Authorization: 'Bearer '+token
            }
        }
        try {
            const response = await Axios.post(urlcreateProduct, formData, config)
            console.log(response);
        } catch (err) {
            console.log(err);
            throw err;
        }
        dispatch({type : CREATE_PRODUCT })
    }
}

export const fetch_product = () => {
    return async dispatch => {
        let response;
        try {
            response = await Axios.get(urlfetchProduct)
            // console.log(response.data.data);
        } catch (error) {
            console.log(error);
        }

        dispatch({type: FETCH_PRODUCTS, products: response.data.data })
    }
}

export const delete_product = (id) => {
    return async (dispatch, getState) => {
        const token = getState().auth.token;
        let response;
        console.log(id);
        console.log(token);
        

        try {
            // const config = { 
            //     headers: {
            //         Authorization: 'Bearer '+token,
            //         'content-type': 'application/json'
            //     }
            // }
            response = await Axios.post(urldeleteProduct+id)
            console.log(response);
        } catch (error) {
            console.log(error)
        }

        dispatch({type: DELETE_PRODUCT })
    }
}

export const get_single_product = (id) => {
    return async dispatch => {

        let response;

        try {
            response = await Axios.get(urlgetsingleProduct+id)
            console.log(response.data.data);
        } catch (error) {
            console.log(error);
        }

        dispatch({ type: GET_SINGLE_PRODUCT, product: response.data.data })
    }
}

export const update_product = (updateData) => {
    return async dispatch => {
        let response;
        console.log(updateData.productId)

        const config = { 
            headers: {
                'content-type': 'application/json'
            }
        }

        try {
            response = await Axios.post(urlupdateProduct+updateData.productId, updateData)
            console.log(response);
        } catch (error) {
            console.log(error);
        }

        dispatch({ type: UPDATE_PRODUCT })
    }
}
