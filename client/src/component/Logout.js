import React from "react";
import { GoogleLogout } from "react-google-login";

const Logout = (props) => {
  const logout = () => {
    console.log("logout successful");
    props.response();
  };
  const clientId =
    "770954014094-li1c8gc7g71fiobgf3oahstmc59kkpd0.apps.googleusercontent.com";
  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={logout}
      ></GoogleLogout>
    </div>
  );
};

export default Logout;
