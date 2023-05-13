import React from 'react'
import './Register.css'
import {Link} from 'react-router-dom'

function Register() {
  return (
    <div className='register'>
         <span className='registerTitle'>Register</span>
        <form className='registerForm'>
        <label>Username</label>
            <input type="text" className='registerInput' placeholder="Enter your username...."/>
            <label>Email</label>
            <input type="email" className='registerInput' placeholder="Enter your email...."/>
            <label>Password</label>
            <input type="password" className='registerInput' placeholder="Enter your password...."/>
            <button className='registerButton'><Link to='/posts' className='link'>Register</Link></button>
        </form>
        <button className='registerLoginButton'><Link to='/login' className='link'>Login</Link></button>


    </div>
  )
}

export default Register