import {REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGOUT} from '../actions/types'
import axios from "axios"
import {setAlert} from "../actions/alertAction"
import setAuthToken from '../utils/setAuthToken'



// loading userand sending user info
export const loadUser =()=>async dispatch=>{
        if (localStorage.token) {
            setAuthToken(localStorage.token)
        }

    try {
        const res =  await axios("/api/user")
        dispatch({
            type: USER_LOADED,
            payload:res.data
        })
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}







// registering user
export const register = ({name, email, password}) =>async dispatch =>{
    const config ={
        headers:{
            "Content-Type": "application/json"
        }
    }    

    const body= JSON.stringify({name, email, password})
        try {
        const res = await axios.post("/api/auth/register", body,config) 
        console.log(res)
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
        dispatch(loadUser())
        } catch (err) {
            const errors = err.response.data.errors
            if (errors) {
                errors.forEach(error=>dispatch(setAlert(error.msg, "danger")
                ))
            }
            dispatch({
                type:REGISTER_FAIL
            })
        }
 
}

// LOGIN
export const login = ({ email, password} ) => async dispatch=>{
    const config ={
        headers:{
            "Content-Type": "application/json"
        }
    }    

    const body= JSON.stringify({ email, password})
    try {
        const res = await axios.post("/api/user/login", body, config)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
        dispatch(loadUser())
    } catch (err) {
     const errors = err.response.data.errors
        if (errors) {
            errors.forEach(error=>dispatch(setAlert(error.msg, "danger")))
        }   
    }

}


// LOGOUT
export const logout = () =>async dispatch=>{
    dispatch({
        type:LOGOUT
    })
}