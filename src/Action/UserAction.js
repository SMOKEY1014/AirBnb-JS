import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../TypeAction/UserTypes";
import axios from "axios";

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST,
        })

        const config = {
            headers: {
                "Content-Type": "application/json",
            }
        };

        const { data } = await axios.post("http://localhost:4000/login", { email, password }, config)
        localStorage.setItem("userInfo", JSON.stringify(data));

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        });
    }
    catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.responce && error.responce.data.message ?  error.responce.data.message : error.message,
        })
    }
}

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
};