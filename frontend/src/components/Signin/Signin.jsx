import React from 'react';
import './Signin.css'
import facebooklogo from '../../assets/facebook.png'
import googlelogo from '../../assets/google.png'
import Header from './Header';
function Signin() {
  return (
    <>
    
    <Header/>
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

       <div className='middle'>
        <span>or</span>
       </div>

      <div className="form-container">
        <form id="login-form">
          <input type="email" id="email" placeholder=" Email" required />
          <input type="password" id="password" placeholder="password" required />
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
