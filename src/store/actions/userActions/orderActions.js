import Axios from "axios";

export const POST_ORDER = 'POST_ORDER';

const urlpostOrder = 'http://localhost:8080/user/post-order';

export const post_order = () => {
    return async dispatch => {
        let response;
        try {
            response = await Axios.post(urlpostOrder);
            console.log(response);
        } catch (error) {
            console.log(error);
        }

        dispatch({type: POST_ORDER })
    }
}