import React from "react";
import "../Login/Login.css";
import logo from "../../../assets/logo.png";
import Form from "./Form";

const Login = ({ SetIsLoggedIn }) => {
  return (
    <>
      <div className="background-images">
        <div className="logo-holder">
          <img src={logo} alt="" />
        </div>
      </div>
      <Form SetIsLoggedIn={SetIsLoggedIn} />
    </>
  );
};

export default Login;
