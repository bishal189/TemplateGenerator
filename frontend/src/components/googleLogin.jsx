import { useState, useEffect } from 'react';
import axios from 'axios';
import './Signin/Signin.css'
import googlelogo from '../assets/google.png'
import './SignUp/Register.css'

const GoogleLogin = (props) => {
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    // Function to handle the callback after Google login
    const handleCallback = async () => {
      try {
        // Parse the authorization code from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        console.log(window.location.origin+"/google")
        if (code) {
          // Send the authorization code to the backend to exchange for an ID token
          const response = await axios.post('http://localhost:8000/api/auth/google', {
            code: code
          });

          // Handle the response from the backend if needed
          console.log('Backend response:', response.data);

          // Clear the URL to remove the authorization code
          window.history.replaceState({}, document.title, window.location.pathname);
        }
      } catch (error) {
        console.error('Error sending authorization code to backend:', error);
        setErrorMessage('An error occurred. Please try again.');
      }
    };

    handleCallback(); // Invoke handleCallback function when component mounts

  }, []); // Run once on component mount

  const handleGoogleLogin = () => {
    try {
      const loginUrl = 'https://accounts.google.com/o/oauth2/v2/auth?' +
        new URLSearchParams({
          client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
          redirect_uri: window.location.origin+"/google", // Redirect back to the same page
          scope: 'profile email',
          response_type: 'code', // Get authorization code
          access_type: 'offline', // Optional for refresh tokens
        }).toString();
        alert(loginUrl)
      console.log(window.location.origin)
      window.location.href = loginUrl; // Redirect to Google login page

    } catch (error) {
      console.error('Error initiating Google login:', error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
  props.type=="signin"?(
     <button onClick={handleGoogleLogin} className="login-with-google">
          <img src={googlelogo} alt="Google logo" className='googlelogo'/>
          Log in with Google
        </button>):(
         < button onClick={handleGoogleLogin} className="logingoogle">
            <img src={googlelogo} alt="Google logo" className='googlelogo' />
              Google
            </button>
        )
  );
};

export default GoogleLogin;
