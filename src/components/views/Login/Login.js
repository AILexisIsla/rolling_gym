import React from "react";
import "../Login/Login.css";
import logo from "/Proyectos HTML/React/rolling_gym/src/assets/logo.png";
import Form from "./Form";

const Login = () => {
  return (
    <>
      <div className="background-image">
        <div className="logo-holder">
          <img src={logo} alt="" />
        </div>
      </div>
      <Form />
    </>
  );
};

export default Login;
