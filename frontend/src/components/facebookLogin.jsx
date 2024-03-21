import React, { useState, useEffect } from "react";

const FacebookLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // Load the Facebook SDK asynchronously
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: "356967017345989",
        autoLogAppEvents: true,
        xfbml: true,
        version: "v13.0" // Use the latest version
      });

      // Check login status when SDK is initialized
      window.FB.getLoginStatus(response => {
        if (response.status === "connected") {
          setIsLoggedIn(true);
          console.log(response.authResponse);
          setUserData(response.authResponse);
        }
      });
    };

    // Load the SDK asynchronously
    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  const handleLogin = () => {
    window.FB.login(
      response => {
        if (response.authResponse) {
          setIsLoggedIn(true);
          console.log(response.authResponse);
          var userID = response.authResponse.userID;
          var accessToken = response.authResponse.accessToken;

          // Make a request to the Facebook Graph API
          fetch(
            "https://graph.facebook.com/v12.0/" +
              userID +
              "?fields=name&access_token=" +
              accessToken
          )
            .then(response => response.json())
            .then(data => {
              console.log(data);
              console.log("User's name:", data.email);
            })
            .catch(error => {
              console.error("Error fetching user's name:", error);
            });
          setUserData(response.authResponse);
        } else {
          setIsLoggedIn(false);
          setUserData({});
        }
      },
      { scope: "public_profile,email" }
    );
  };

  const handleLogout = () => {
    window.FB.logout(response => {
      setIsLoggedIn(false);
      setUserData({});
    });
  };

  return (
    <div>
      {isLoggedIn ? (
      ) : (
        <button onClick={handleLogin}>Login with Facebook</button>
      )}
    </div>
  );
};

export default FacebookLogin;
