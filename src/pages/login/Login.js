import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {

  return (
    <div className='login'>
        <span className='loginTitle'>Login</span>
        <form className='loginForm'>
            <label>Email</label>
            <input type="email" className='loginInput' placeholder="Enter your email...."/>
            <label>Password</label>
            <input type="password" className='loginInput' placeholder="Enter your password...."/>
            <button className='loginButton'>Login</button>
        </form>
        <button className='loginRegisterButton'>
        <Link to='/register' className='link'>Register</Link>
        </button>

    </div>
  )
}

export default Login