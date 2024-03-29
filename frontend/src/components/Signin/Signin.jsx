import React from 'react';
import './Signin.css'
import Header from './Header';
import { useState } from 'react';
import axios from 'axios';
import GoogleLogin from '../googleLogin'
import FacebookLogin from '../facebookLogin'

function Signin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError('');
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate email
    if (!email) {
      setEmailError('Email is required');
    }

    // Validate password
    if (!password) {
      setPasswordError('Password is required');
    } else if (password.length < 2) {
      setPasswordError('Password must be at least 2 characters long');
    }

    // If both email and password are valid, proceed with form submission
    if (email && password && password.length >= 8) {
      console.log('Form submitted:', { email, password });
    }

    const userData = {
      email: email,
      password: password
    };
    const response =axios.post('http://localhost:8000/auth/login/', userData)
    .then(res=>{
      console.log(res.data.access)
      const accessToken =res.data.access;
      localStorage.setItem("accessToken", accessToken);
      window.location.href = "/";
    }).catch(err=>{
      console.log('err',err)
    })

  };



  return (
    <>
    
    <Header/>
    <div className="login-container">
      <h1>Log In</h1>
      <div className="social-login">
       <GoogleLogin type="signin" />
       <FacebookLogin type="signin" />
      </div>

       <div className='middle'>
        <span>or</span>
       </div>

      <div className="form-container">
        <form id="login-form" onSubmit={handleSubmit}>
          <input type="email" id="email" placeholder=" Email"  value={email} onChange={handleEmailChange}/>
          {emailError && <em className="form_error">{emailError}</em>}
          <input type="password" id="password" placeholder="password" value={password}
              onChange={handlePasswordChange} required />
          {passwordError && <em className="form_error">{passwordError}</em>}    
          
          <div className="checkbox-container">
            <div>
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me" className='rememberme'>Remember Me</label>
            </div>
            <div>
            <a href="#">Forgot password?</a>
            </div>
          </div>
        
          <button type="submit" className='login_button'>Log In</button>
        </form>
        <p>Don't have an account? <a href="#"><span className='signup'>Sign up</span></a></p>
      </div>
    </div>
    </>
  );
}

export default Signin;
