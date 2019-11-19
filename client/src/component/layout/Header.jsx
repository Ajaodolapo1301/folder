import React, {Fragment}from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {logout} from "../../actions/authAction";
import { Link } from 'react-router-dom'

const Header = ({logout,auth:{isAuthenticated,isLoading}}) => {

  const authLink=(
    <ul className="navbar-nav mr-auto">
      <li>
          <a  onClick={logout} href="#!" className="nav-link">   <i className="fas fa-arrow-right"></i>Logout</a>
      </li>
    </ul>
  )

const guestLink=(
<ul className="navbar-nav mr-auto">
<li className="nav-item">
 <Link to="/register" className="nav-link"> 
     Register
 </Link>
 </li>
 <li>
 <Link to="/login" className="nav-link"><i className="fas fa-plus"></i>
 Login
 </Link>
 </li>

 
  
</ul>
)

  return (
    <div>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
<div className="container">   
            <Link to="/" className="navbar-brand">
            <i className="fas fa-home"></i>  Dashboard
            </Link>   
</div>
{!isLoading && <Fragment>{!isAuthenticated ? guestLink :authLink }</Fragment>}
</nav>

</div>
      
  )
}

Header.propTypes = {
logout: PropTypes.func.isRequired,
}


const mapStateToProps = (state) => ({
  auth: state.auth  
})




export default connect(mapStateToProps,{logout}) (Header)
