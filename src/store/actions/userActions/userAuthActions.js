import Axios from "axios";

export const LOGIN = 'LOGIN';
export const SIGNUP = 'SIGNUP';

const urllogin = 'http://localhost:8080/login';
const urlsignup = 'http://localhost:8080/signup'

export const login = (loginData) => {
    return async dispatch => {

        let response;

        try {
            response = await Axios.post(urllogin, loginData)
            console.log(response);
        } catch (error) {
            console.log(error);
        }

        dispatch({type: LOGIN, token: response.data.token, userId: response.data.userId })
    }
}

export const signup = (signupData) => {
    return async dispatch => {
        let response;
        try {
            response = await Axios.post(urlsignup, signupData)
            console.log(response);
        } catch (error) {
            console.log(error);
        }

        dispatch({ type: SIGNUP })
    }
}