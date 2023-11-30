import React from "react";

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
            Forget Password | <span>Sign UP |</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Form;
