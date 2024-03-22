import React from 'react';
import './Signin.css'
import facebooklogo from '../../assets/facebook.png'
import googlelogo from '../../assets/google.png'
function Signin() {
  return (
    <div className="login-container">
      <h1>Log In</h1>
      <div className="social-login">
        <button className="login-with-google">
          <img src={googlelogo} alt="Google logo" className='googlelogo'/>
          Log in with Google
        </button>
        <button className="login-with-facebook">
          <img src={facebooklogo} alt="Facebook logo" className='facebooklogo' />
          Log in with Facebook
        </button>
      </div>

      
      <div className="form-container">
        <form id="login-form">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />
          <div className="checkbox-container">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember Me</label>
          </div>
          <a href="#">Forgot password?</a>
          <button type="submit">Log In</button>
        </form>
        <p>Don't have an account? <a href="#">Sign up</a></p>
      </div>
    </div>
  );
}

export default Signin;
