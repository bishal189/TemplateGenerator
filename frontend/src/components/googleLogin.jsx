import { useEffect } from "react";
import axiosInstance from "../axiosInstance";
import "./css/facebookLogin.css"
const GoogleLogin = () => {
  useEffect(() => {
    // Function to handle the Google Sign-In response
    const handleCredentialResponse = async response => {
      if (response.credential) {
        var id_token = response.credential;
        const apiResponse = await axiosInstance.post(
          `auth/google/`,
          { id_token },
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        );

        const data = apiResponse.data; // or response.text() depending on the response content type
        // Process the data
        console.log(data);
      }
    };

    // Load Google Sign-In library and configure it
    window.onload = function() {
      window.google.accounts.id.initialize({
        client_id: `${import.meta.env.VITE_GOOGLE_CLIENT_ID}`,
        callback: handleCredentialResponse // Set the callback function
      });
      window.google.accounts.id.renderButton(
        document.getElementById("g_id_signin"), // Specify the element ID
        {
          theme: "outline",
          type: "standard",
          size: "large"
        }
      );
       const customButton = document.getElementById("custom-google-btn");

    customButton.addEventListener('click', () => {
    document.querySelector('#g_id_signin div[role=button]').click();
});

    };
  }, []); // Ensure that this effect runs only once on component mount

  return (
    <>
    <button id="custom-google-btn">Continue with Google</button>
      <div id="g_id_signin" />
      </>
  )
};

export default GoogleLogin;
