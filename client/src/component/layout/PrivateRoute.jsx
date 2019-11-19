import React, { Component } from 'react';
import {connect} from "react-redux"
import {Route, Redirect} from "react-router-dom"

class PrivateRoute extends Component {
    state = {  }
    render() { 
        
        const {isAuthenticated,isLoading, component:Component, ...rest}= this.props
        return ( 
             
            <Route {...rest} render={props=> !isAuthenticated && !isLoading ? <Redirect to="/login"/>:  (<Component{...props}/>)  }/>
         );
    }
}
const mapStateToProps = (state) =>({
    isAuthenticated: state.auth.isAuthenticated,
    isLoading: state.auth.isLoading
    })
export default connect(mapStateToProps)(PrivateRoute);