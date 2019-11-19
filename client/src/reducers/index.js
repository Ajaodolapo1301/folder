import {combineReducers} from "redux"
import alertReducer from "./alertReducer"
import authReducer from "./authReducer"
import staffReducer from "./staffReducer"

export default combineReducers({
    alert: alertReducer,
    auth : authReducer,
    staff : staffReducer
})

    
    