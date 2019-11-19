import React, {useState, Fragment}from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {addStaff} from '../../actions/staffAction'
import { Link } from 'react-router-dom'


const AddStaffs = ({addStaff, history}) => {
   
    const [formData, setformData] = useState({
        First_name: "",
        Last_name: "",
        dob: "",
        email:"",
        state_of_origin:" ",
    })


    const {First_name, Last_name,email, dob, state_of_origin}= formData
    const onChange = (e) => setformData({...formData, [e.target.name]: e.target.value})

    const onSubmit=(e)=>{
        e.preventDefault()
        addStaff(formData)
        history.push("/dashboard")
 } 
    
    return (
        <Fragment>
            <div className="row">
                <div className="col-md-6">
                    <Link to="/" className="btn btn-link">
                        <i className="fas fa-arrow-circle-left">Back to dashboard</i>
                    </Link>
                </div>
            </div>
            <form action="" onSubmit={e=>onSubmit(e)}>
                        <label htmlFor="">email</label>
                        <div className="form-group">
                            <input type="email"
                            className="form-control" 
                            placeholder="email" 
                            name="email" 
                            value={email}
                            onChange={e=>onChange(e)}
                            required />
                            </div>
                            <label htmlFor="">First Name</label>
                        <div className="form-group">
                            <input type="text"
                            className="form-control" 
                            placeholder="First Name" 
                            name="First_name" 
                            value={First_name}
                            onChange={e=>onChange(e)}
                            required />
                            </div>
                            <label htmlFor="">last Name</label>
                        <div className="form-group">
                            <input type="text"
                            className="form-control" 
                            placeholder="last Name" 
                            name="Last_name" 
                            value={Last_name}
                            onChange={e=>onChange(e)}
                            required />
                            </div>
                            <label htmlFor="">Date of birth</label>
                        <div className="form-group">
                            <input type="Date"
                            className="form-control" 
                            placeholder="Date of birth" 
                            value={dob}
                            name="dob" 
                            onChange={e=>onChange(e)}
                            required />
                            </div>

                            <label htmlFor="">State of Origin</label>
                        <div className="form-group">
                            <input type="text"
                            className="form-control" 
                            placeholder="state of origin" 
                            value={state_of_origin}
                            name="state_of_origin" 
                            onChange={e=>onChange(e)}
                            required />
                            </div>
                                <input type="submit" className="btn btn-primary my-1" />


                       </form>
        </Fragment>
    )
}

AddStaffs.propTypes = {
addStaff: PropTypes.func.isRequired,
}

export default connect(null,{addStaff})(AddStaffs)
