import React from "react";
import { Link } from "react-router-dom";

const Form = () => {
  return (
    <div className="form-container">
      <form className="form-login">
        <input
          type="email"
          name="emailUser"
          className="input-login"
          placeholder="UserName"
        ></input>
        <input
          type="password"
          name="passwordUser"
          className="input-login"
          placeholder="Password"
        ></input>

        <div className="sign-in-button">
          <button type="submit" className="btn sign-in">
            SIGN IN
          </button>
          <p>
            <Link className="forget-password">Forget Password |</Link>
            <span>
              <Link to="/Register" className="sign-up">
                Sign UP |
              </Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Form;
