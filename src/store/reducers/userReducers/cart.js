const { GET_CART } = require("../../actions/userActions/userCartActions")

const initialState = {
    cart: [],
    totalCart: 0
}

const cartReducer = (state = initialState, action) => {
    console.log(action.totalPrice);
    switch (action.type) {
        case GET_CART:
            
            return {
                ...state,
                cart: action.cart,
                totalCart: action.totalPrice
            }
        
        default: 
            return state
    }
}

export default cartReducer;