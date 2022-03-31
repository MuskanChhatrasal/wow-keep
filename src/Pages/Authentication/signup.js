import React from 'react'
import './auth.css'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="wrapper" style={{marginLeft: '30rem'}}>
        <h2 style={{fontSize: '2rem'}}>Sign-Up</h2>
        <form>
            <div className="input-box">
                <input type="text" placeholder="Enter your name" required />
            </div>
            <div className="input-box">
                <input type="text" placeholder="Enter your email" required />
            </div>
            <div className="input-box">
                <input type="password" placeholder="Create password" required />
            </div>
            <div className="input-box">
                <input type="password" placeholder="Confirm password" required />
            </div>
            <div className="policy">
                <input type="checkbox" />
                <h3>I accept all terms & condition</h3>
            </div>
            <div className="input-box button" >
                <input type="Submit" value="Register Now" />
            </div>
            <div className="text">
                <h3>Already have an account? <Link to='/login'><a>Login now</a></Link></h3>
            </div>
        </form>
    </div>
  )
}

export default Signup