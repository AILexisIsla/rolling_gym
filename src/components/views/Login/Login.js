import React from "react";
import "../Login/Login.css";
import logo from "../../../assets/logo.png";
import Form from "./Form";

const Login = ({ SetLoading }) => {
  return (
    <>
      <div className="background-images">
        <div className="logo-holder">
          <img src={logo} alt="" />
        </div>
      </div>
      <Form SetLoading={SetLoading} />
    </>
  );
};

export default Login;
