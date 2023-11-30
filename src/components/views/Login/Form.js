import React from "react";
import { Link } from "react-router-dom";

const Form = () => {
  return (
    <div className="form-container">
      <form className="form-login">
        <input
          type="email"
          className="input-login"
          placeholder="UserName"
        ></input>
        <input
          type="password"
          className="input-login"
          placeholder="password"
        ></input>

        <div className="sign-in-button">
          <button type="submit" className="btn sign-in">
            SIGN IN
          </button>
          <p>
            <Link className="forget-password">Forget Password |</Link>
            <span>
              <Link className="sign-up">Sign UP |</Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Form;
