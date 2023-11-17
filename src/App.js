import React from "react";
import FacebookLoginButton from "./FacebookLogin";

const App = () => {
  const handleFacebookLogin = (response) => {
    console.log(response); // Handle the user data as needed
  };

  return (
    <div className="App">
      <h1>React Facebook Login</h1>
      <FacebookLoginButton handleFacebookLogin={handleFacebookLogin} />
    </div>
  );
};

export default App;
