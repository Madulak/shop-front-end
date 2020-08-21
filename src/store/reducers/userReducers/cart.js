const { GET_CART } = require("../../actions/userActions/userCartActions")

const initialState = {
    cart: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CART:
            return {
                ...state,
                cart: action.cart
            }
        default: 
            return state
    }
}

export default cartReducer;