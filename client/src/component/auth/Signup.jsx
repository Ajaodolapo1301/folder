import React , { Fragment} from 'react'
import SignupForm from './SignupForm'
import {connect} from "react-redux"
import {setAlert} from "../../actions/alertAction"
import PropTypes from 'prop-types';
import {register} from "../../actions/authAction"



function Signup(props) {
    const {setAlert, register, isAuthenticated}=props
    
    return (
        <Fragment>
            <SignupForm  setAlert={setAlert} register={register} isAuthenticated={isAuthenticated} />
        </Fragment>
    )
}


Signup.propTypes= {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
}


const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated  
})




export default connect(mapStateToProps ,{setAlert, register}) (Signup)
