import { useState } from 'react';

const GoogleLogin = () => {
  const [errorMessage, setErrorMessage] = useState(null);

  const handleGoogleLogin = async () => {
    try {
      const loginUrl = 'https://accounts.google.com/o/oauth2/v2/auth?' +
        new URLSearchParams({
          client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
          redirect_uri: 'http://localhost:8000/api/auth/google', // Replace with your server redirect URI
          scope: 'profile email',
          response_type: 'code',
          access_type: 'offline', // Optional for refresh tokens
        }).toString();

      // Open Google login page in a new browser tab
      const googleLoginWindow = window.open(loginUrl, '_blank');

      // Close the window after 3 minutes (adjust as needed)
      setTimeout(() => {
        if (googleLoginWindow && !googleLoginWindow.closed) {
          googleLoginWindow.close();
        }
      }, 3 * 60 * 1000); // 3 minutes

    } catch (error) {
      console.error('Error initiating Google login:', error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <button onClick={handleGoogleLogin}>
      Login with Google
    </button>
  );
};

export default GoogleLogin;
