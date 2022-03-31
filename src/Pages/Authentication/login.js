import React from 'react'
import './auth.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
     <div className="wrapper login-wrapper" style={{marginLeft: '30rem'}}>
        <h2 style={{fontSize: '2rem'}}>Login</h2>
        <form>
            <div className="input-box">
                <input type="text" placeholder="Enter your email" required />
            </div>
            <div className="input-box">
                <input type="password" placeholder="Create password" required />
            </div>
            <div className="input-box button">
                <input type="Submit" value="Login Now" />
            </div>
            <div className="text">
                <h3>Not having an account? <Link to='/signup'><a>Signup now</a></Link></h3>
            </div>
        </form>
    </div>

  )
}

export default Login