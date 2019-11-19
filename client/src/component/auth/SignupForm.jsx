import React, { Fragment, useState} from 'react'
import {Link, Redirect } from 'react-router-dom'



function SignupForm(props) {
const [formData, setformData] = useState({
    name: " ", 
    email: " ",
    password:" ",
    password2:" "
})



    const { name, email, password, password2} = formData
    
    // onchange method
    const onChange = (e) => setformData({...formData, [e.target.name]: e.target.value})
    

    // onSubmit method
    const onSubmit = ( e) =>{
        e.preventDefault()
        if(password !== password2){
          props.setAlert("password not match", "danger")

        }else{
           props.register({name,email, password})
        }
       
    }
    
    if (props.isAuthenticated) {
        return <Redirect to="/dashboard"/>
    }

    return (
        <Fragment>
            <section className="container">
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>

      <form onSubmit={e=>{onSubmit(e)}}>
                        <div className="form-group col-md-4">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter email" 
                            value={email}
                            name="email"
                            onChange={e=>{onChange(e)}}/>
                        
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"
                             name="password"
                             placeholder="Password" value={password}
                             onChange={e=>{onChange(e)}}/>
                        </div>
                        <div className ="form-group col-md-4">
                            <label htmlFor="exampleInputname1">name</label>
                            <input type="text" className="form-control" id="exampleInputname1"
                            placeholder="Enter name" 
                             name="name"
                             value={name} 
                             onChange={e=>{onChange(e)}}/>
                        
                        </div>
                 
                        
                        <button type="submit"  className="btn btn-primary">Submit</button>
                    </form>
           <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </section>
        </Fragment>
    )
}

export default SignupForm
