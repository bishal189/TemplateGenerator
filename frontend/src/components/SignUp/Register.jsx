import React from 'react'
import facebooklogo from '../../assets/facebook.png'
import googlelogo from '../../assets/google.png'
import Header from '../Signin/Header'
import './Register.css'

const Register = () => {
  return (
    <>

      <Header />
      <div className="login-container">
        <h1>Sign up for a free account</h1>
        {/* <div className="social-login">
        <button className="login-with-google">
          <img src={googlelogo} alt="Google logo" className='googlelogo'/>
          Log in with Google
        </button>
        <button className="login-with-facebook">
          <img src={facebooklogo} alt="Facebook logo" className='facebooklogo' />
          Log in with Facebook
        </button>
      </div> */}



        <div className="form-container">
          <form id="login-form">
            <input type="email" id="email" placeholder=" Email" required />
            <input type="password" id="password" placeholder="password(8 characters or more)" required />
            <div className="checkbox-container">

            </div>

            <button type="submit" className='login_button'>Create Account</button>
          </form>
          <div className='middle'>
            <span>or Sign Up With</span>
          </div>


          <div className="sociallogin">
            <button className="logingoogle">
              <img src={googlelogo} alt="Google logo" className='googlelogo' />
              Google
            </button>
            <button className="loginfacebook">
              <img src={facebooklogo} alt="Facebook logo" className='facebooklogo' />
              Facebook
            </button>
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