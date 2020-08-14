const { FETCH_PRODUCTS, GET_SINGLE_PRODUCT } = require("../actions/prouctActions")

const initialState = {
    products: [],
    product: {}
}

const productReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                products: action.products
            }
        case GET_SINGLE_PRODUCT:
            return {
                ...state,
                product: action.product
            } 

        default:
            return state;
    }
}

export default productReducer;