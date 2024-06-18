import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../TypeAction/UserTypes";

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true };
            
        case USER_LOGIN_SUCCESS:
            return  { loading: false, userInfo : action.payload};
                
        case USER_LOGIN_FAIL:
            action.payload = "Incorrect email or password! Please try again.";
            return { loading: false, error: action.payload };
        
        case USER_LOGOUT:
            return ""

        default:
            return state;
    }
}
