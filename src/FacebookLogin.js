import React from "react";
import FacebookLogin from "react-facebook-login";

const FacebookLoginButton = ({ handleFacebookLogin }) => {
  return (
    <FacebookLogin
      appId="259551760081536"
      autoLoad={false}
      fields="name,email,picture"
      callback={handleFacebookLogin}
    />
  );
};

export default FacebookLoginButton;
