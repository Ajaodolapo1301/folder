import React,{useEffect, Fragment} from 'react'
import PropTypes from 'prop-types'
import {  Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {getStaffs} from '../../actions/staffAction'
import Moment from "react-moment"
import Spinner from "../layout/Spinner"

const Staff = ({getStaffs, staffs:{staffs, isLoading}}) => {
    useEffect(() => {
        getStaffs()
    }, [getStaffs])
  
  
    return (
        <div>
            {isLoading=== false ? 
                (<Fragment>
                     <div className="row">
                    <div className="col-md-6"> 
                         <h2>
                             {" "}
                             <i className="fas fa-users"></i>Staffs {" "}
                             </h2>
                    </div>
                    <div className="col-md-6">

                    </div>
                </div>

                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">date of birth</th>
                        <th/>
                        </tr>
                    </thead>
                    <tbody>
                    {staffs.map(staff =>(
                        <tr key= {staff.id}>
                        
                        <td> {staff.First_name} {staff.Last_name}</td>
                        <td>{staff.email}</td>
                        <td><Moment format="YYYY/MM/DD">{staff.dob}</Moment></td>
                        <td>
                            <Link to={`/staff/${staff._id}`} className="btn btn-secondary btn-sm"><i className="fas fa-arrow-circle-right"></i>Details
                            
                            </Link>
                        </td>
                        </tr>
                        ))}    
                    </tbody> 
            </table>
            
            </Fragment>) : (<Spinner/>)}
        </div>
    )
}

Staff.propTypes = {
getStaffs:PropTypes.func.isRequired,
staffs: PropTypes.object.isRequired,
}


const mapStateToProps = (state) => ({
staffs: state.staff   
})


export default  connect(mapStateToProps,{getStaffs})(Staff)
