import Axios from "axios";

export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';

const urlSignup = 'http://localhost:8080/admin/signup';
const urlLogin = 'http://localhost:8080/admin/login';

export const signup = (username, email, password) => {
    return async dispatch => {
        const auth = {
            username: username,
            email: email,
            password: password
        }
       try {
        const response = await Axios.post(urlSignup, auth)
        
        console.log(response);
       } catch (error) {
           console.log(error)
       }
       dispatch({type: SIGNUP})
    }
}

export const login = (email, password) => {
    return async dispatch => {
        console.log(password);
        const auth = {
            email: email,
            password: password
        }
        let resp;
       try {
        const response = await Axios.post(urlLogin, auth)
        resp = response;
        console.log(response.data);

       } catch (error) {
           console.log(error)
           throw error;
       }
       dispatch({type: LOGIN, token: resp.data.token, userId: resp.data.userId, username: resp.data.username}) 
       
    }
}