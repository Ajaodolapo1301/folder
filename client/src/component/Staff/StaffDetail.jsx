import React, { useEffect} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {getStaff,deleteStaff } from "../../actions/staffAction"
import {Link } from 'react-router-dom'
import Moment from "react-moment"


const StaffDetail = ({getStaff, staff, deleteStaff,history, match}) => {
    useEffect(() => {
        getStaff(match.params.id)
      
    }, [getStaff,match.params.id])
    return (
        <div>
             <div>
             <div>
                <div className="row">
                    <div className="col-md-6">
                        <Link to="/" className="btn btn-link">
                            <i className="fas fa-arrow-circle-left"></i>back to dashboard
                        </Link>
                    </div>  
                        <div className="col-md-6">
                            <div className="btn-group float-right">
                                <Link to={`/edit/${staff._id}`} className="btn btn-dark">
                                Edit
                                </Link>
                                {" "}
                                <div onClick={()=>deleteStaff(staff._id,history)} className="button btn btn-danger">delete</div>    
                            </div>  
                        </div>
                    <hr/>
                   
                </div>
                <img src={staff.profilePics} alt=""/>
                <br/>
                <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-8 col-sm-6">
                                  <h4> Name : <span>  {staff.First_name} {staff.Last_name}</span></h4>   
                                </div>
                                <div className="col-md-4 col-sm-6">
                                  
                                </div>
                            </div>
                        <hr/>
                        <ul className="list-group">
                            <li className="list-group-item">Email: {staff.email}</li>
                            <li className="list-group-item">State of Origin: <span className="text-uppercase">{staff.state_of_origin}</span></li>
                            <li className="list-group-item">Date of birth:<Moment format="YYYY/MM/DD">{staff.dob}</Moment></li>
                    
                            
                        </ul>
                        <hr/>

                        </div>
                    </div>

            </div>
            </div>
        </div>
    )
}

StaffDetail.propTypes = {
getStaff: PropTypes.func.isRequired,
deleteStaff: PropTypes.func.isRequired,
staff: PropTypes.object.isRequired,
}


const mapStateToProps = (state) => ({
    staff: state.staff.staff
})




export default connect(mapStateToProps, {getStaff, deleteStaff }) (StaffDetail)
