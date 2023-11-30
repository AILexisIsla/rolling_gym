import React from "react";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <div className="form-container">
      <form className="form-login">
        <input
          type="text"
          name="nameUser"
          className="input-login"
          placeholder="NameUser"
        ></input>
        <input
          type="number"
          name="telefono"
          className="input-login"
          placeholder="Telefono"
        ></input>
        <input
          type="email"
          name="emailUser"
          className="input-login"
          placeholder="EmailUser"
        ></input>
        <input
          type="password"
          name="passwordUser"
          className="input-login"
          placeholder="Password"
        ></input>

        <div className="sign-in-button">
          <button type="submit" className="btn sign-in">
            REGISTER
          </button>
          <p>
            <span>
              <Link className="sign-up">| Sign IN |</Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
