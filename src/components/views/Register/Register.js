import React from "react";
import logo from "/Proyectos HTML/React/rolling_gym/src/assets/logo.png";
import RegisterForm from "./RegisterForm";
import "../Register/Register.css";

const Register = () => {
  return (
    <>
      <div className="background-image">
        <div className="logo-holder">
          <img src={logo} alt="" />
        </div>
      </div>
      <RegisterForm />
    </>
  );
};

export default Register;
