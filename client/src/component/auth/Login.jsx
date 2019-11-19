import React from 'react'
import LoginForm from "./LoginForm"
import { connect } from 'react-redux'
import {login} from '../../actions/authAction'


function Login(props) {
    const {login, isAuthenticated} = props
    return (
        <div>
            <LoginForm login={login} isAuthenticated={isAuthenticated}/>
        </div>
    )
}


const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
})




export default connect(mapStateToProps,{login}) (Login)
