import React, { useState } from 'react'
import './auth.css'
import { Link } from 'react-router-dom'
import { useAuth } from '../../Context/authContext';

const Login = () => {
  const [userDetails, setUserDetails] = useState({email: '', password: ''});
  const [error, setError] = useState({isError: false, text: ''});

  const {login, testlogin} = useAuth();


  const loginHandler = () =>{

    if(!userDetails.email || !userDetails.password){
        setError({isError: true, text: 'Please enter all the fields'})
    }else if(!userDetails.email.includes('@')){
        setError({isError: true, text: 'Please enter valid email id.'})
    }else{
        login(userDetails)
        setUserDetails({email: '', password: ''})
    }
  }

  return (
     <div className="wrapper login-wrapper" style={{marginLeft: '30rem'}}>
        <h2 style={{fontSize: '2rem'}}>Login</h2>
        {error.isError && <span style={{color: 'red'}}>{error.text}</span>}
        <form onSubmit={(e)=>{e.preventDefault()}}>
            <div className="input-box">
                <input type="text" placeholder="Enter your email" value={userDetails.email} onChange={(e)=>setUserDetails({...userDetails, email: e.target.value})} />
            </div>
            <div className="input-box">
                <input type="password" placeholder="Create password" value={userDetails.password} onChange={(e)=>setUserDetails({...userDetails, password: e.target.value})} />
            </div>
            <div className="input-box">
                <input type="Submit" value="Login Now" onClick={()=>loginHandler()} />
            </div>
            <div className="input-box">
                <input type="Submit" value="Test Login" onClick={()=>testlogin()} />
            </div>
            <div className="text">
                <h3>Not having an account? <Link to='/signup'><a>Signup now</a></Link></h3>
            </div>
        </form>
    </div>

  )
}

export default Login