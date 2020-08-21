const { LOGIN } = require("../../actions/userActions/userAuthActions")

const initialState = {
    token: null,
    userId: null
}

const userAuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                token: action.token,
                userId: action.userId
            }
        default:
            return state
    }
}

export default userAuthReducer;