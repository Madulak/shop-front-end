import { GET_SINGLE_PRODUCT } from "../../actions/prouctActions"

const { ALL_PRODUCTS, GET_THREE, GET_TOP, GET_BOTTOM, GET_DRESS } = require("../../actions/userActions/productActions")

const initialState = {
    products: [],
    product: {},
    product3: [],
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
        case GET_THREE:
            return {
                ...state,
                product3: action.product3
            }

        case GET_TOP: {
            return {
                ...state,
                products: action.top
            }
        }

        case GET_BOTTOM: {
            return {
                ...state,
                products: action.bottom
            }
        }

        case GET_DRESS: {
            return {
                ...state,
                products: action.dress
            }
        }
            
        default: 
            return state
    }
}

export default productReducer;