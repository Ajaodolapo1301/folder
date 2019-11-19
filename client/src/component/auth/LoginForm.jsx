import React ,{useState}from 'react'
import { Redirect} from 'react-router-dom'

function LoginForm(props) {
const [formData, setformData] = useState({
    email: " ",
    password: " "    
})


const {  email, password, } = formData
    
// onchange method
const onChange = (e) => setformData({...formData, [e.target.name]: e.target.value})

    const onSubmit =(e)=>{
        e.preventDefault()
        props.login({ email, password})
    }    

  if (props.isAuthenticated) {
   return <Redirect to="/dashboard"/>
  }

return (<div className="container">
        
   <h1 className="large text-primary">Sign In</h1>
   <p className="lead"><i className="fas fa-user"></i> Sign into Your Account</p>
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
         placeholder="Password" value={password} onChange={e=>{onChange(e)}}/>
    </div>
    
    <button type="submit"  className="btn btn-primary">Submit</button>
</form>
</div>
           )
}

export default LoginForm
