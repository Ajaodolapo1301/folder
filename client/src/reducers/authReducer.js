import {REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED,AUTH_ERROR, LOGIN_SUCCESS,LOGOUT,  LOGIN_FAIL} from '../actions/types'


const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    isLoading: true,
    user: null
}



export default function(state= initialState, action) {
        switch (action.type) {
            case USER_LOADED:
                return{
                    ...state,
                    isAuthenticated:true,
                    isLoading: false,
                    user: action.payload
                }

            case REGISTER_SUCCESS:
            case LOGIN_SUCCESS:
                localStorage.setItem("token", action.payload.token)
                return {
                    ...state,
                    ...action.payload,
                    isAuthenticated:true,
                    isLoading: false
                }
        
            case REGISTER_FAIL:
            case AUTH_ERROR:
            case LOGIN_FAIL:
            case LOGOUT:        
                localStorage.removeItem("token")
                return {
                    ...state,
                    token: null,
                    isAuthenticated: false,
                    isLoading: false
                }


            default:
             return state;
        }
}