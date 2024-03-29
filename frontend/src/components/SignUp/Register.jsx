import React from 'react'
import Header from '../Signin/Header'
import './Register.css'
import axios from 'axios'
import GoogleLogin from '../googleLogin'
import FacebookLogin from '../facebookLogin'
import { useState } from 'react'
const Register = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    
   
      const response =  axios.post('http://localhost:8000/auth/register/', {
        email,
        password
      })
      .then(res=>{
      const accessToken =res.data.access;
      localStorage.setItem("accessToken", accessToken);
      window.location.href = "/";

      })
      .catch(err=>{
        console.log('err',err)

      })

      
      
    }

 
  return (
    <>

      <Header />
      <div className="login-container">
        <h1>Sign up for a free account</h1>
       
       <div className="form-container">
          <form id="login-form" onSubmit={handleSubmit}>
            <input type="email" id="email" placeholder=" Email"  onChange={(e) => setEmail(e.target.value)}  required />
            <input type="password" id="password" placeholder="password(8 characters or more)" onChange={(e) => setPassword(e.target.value)}  required />
            <div className="checkbox-container">

            </div>

            <button type="submit" className='login_button'>Create Account</button>
          </form>
          <div className='middle'>
            <span>or Sign Up With</span>
          </div>


          <div className="sociallogin">
            <GoogleLogin />
           <FacebookLogin />
          </div>

          <p>Already have an account? <a href="#"><span className='signup'>Log in</span></a></p>
          <div className='policy'>
            By clicking “Create Account”, you acknowledge that you have read, understood, and agree to Legal Template’s <a href="">Terms of Use</a> and <a href="">Privacy Policy</a>.
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
