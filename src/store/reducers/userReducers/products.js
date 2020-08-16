import { GET_SINGLE_PRODUCT } from "../../actions/prouctActions"

const { ALL_PRODUCTS } = require("../../actions/userActions/productActions")

const initialState = {
    products: [],
    product: {}
}

const productReducer = (state = initialState, action) => {
    
    switch (action.type) {

        case ALL_PRODUCTS:
            return {
                ...state,
                products: action.products
            }
        case GET_SINGLE_PRODUCT:
            return {
                ...state,
                product: action.product
            }
            
        default: 
            return state
    }
}

export default productReducer;