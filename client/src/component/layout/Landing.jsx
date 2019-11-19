import React,{Fragment} from 'react'
import {Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


function landing(props) {
  if (props.isAuthenticated) {
    return <Redirect to="/dashboard"/>
  }
    return (
        <Fragment>
                      <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large text-dark" >Staff management</h1>
          <p className="lead text-dark" >
            Create a staff list and manage them
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">Sign Up</Link>
            <Link to="/login" className="btn btn-light">Login</Link>
          </div>
        </div>
      </div>
    </section>
      
        </Fragment>
    )
}


 const mapStateToProps = (state) => ({
   isAuthenticated: state.auth.isAuthenticated
 })
 

 
export default connect(mapStateToProps) (landing)
