import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Form = () => {
  const [user, SetUser] = useState({
    emailUser: "",
    passwordUser: "",
  });
  const [error, setError] = useState(false);
  const URL = process.env.REACT_APP_GYMNASIO_ROLLING_USER;

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    SetUser((values) => ({ ...values, [name]: value }));
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${URL}/Login`, {
        emailUser: user.emailUser,
        passwordUser: user.passwordUser,
      });
      if (res.status === 200) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logueado! Su usuario ha sido logueado.",
          showConfirmButton: false,
          timer: 1500,
        });
        const data = res.data;
        localStorage.setItem("user-token", JSON.stringify(data));
        navigate("/");
      }
    } catch (error) {
      console.error("Error al registrar el usuario", error.response.data);
      setError(error.response.data.message);
    }
  };
  return (
    <div className="form-container">
      <form className="form-login" onSubmit={handleSubmit}>
        <input
          type="email"
          name="emailUser"
          className="input-login"
          placeholder="UserName"
          value={user.emailUser || ""}
          onChange={(e) => handleChange(e)}
        ></input>
        <input
          type="password"
          name="passwordUser"
          className="input-login"
          placeholder="Password"
          value={user.passwordUser || ""}
          onChange={(e) => handleChange(e)}
        ></input>
        {error && <p className="error-message">{error}</p>}

        <div className="sign-in-button">
          <button type="submit" className="btn sign-in">
            SIGN IN
          </button>
          <p>
            <Link to="*" className="forget-password">
              Forget Password |
            </Link>
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
