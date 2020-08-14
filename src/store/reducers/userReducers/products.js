const { ALL_PRODUCTS } = require("../../actions/userActions/productActions")

const initialState = {
    products: []
}

const productReducer = (state = initialState, action) => {
    
    switch (action.type) {

        case ALL_PRODUCTS:
            return {
                ...state,
                products: action.products
            }
            
        default: 
            return state
    }
}

export default productReducer;