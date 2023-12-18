import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { userInstance } from "../../../config/axios.js";

const Form = ({ SetLoading }) => {
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
      const res = await userInstance.post(`${URL}/Login`, {
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
          customClass: {
            popup: "swal-custom-style",
          },
        });
        const data = res.data;
        SetLoading(data);
        localStorage.setItem("user-token", JSON.stringify(data));
        navigate("/");
      }
    } catch (error) {
      console.error("Error al iniciar sesion del usuario", error.response.data);

      if (
        error.response.data.message ===
        "Correo electrónico o contraseña incorrectos"
      ) {
        // Contraseña incorrecta
        setError("Algunos datos son incorrectos. Verifica tus credenciales.");
      } else {
        setError(error.response.data.message);
      }
    }
  };
  return (
    <div className="form-container">
      <form className="form-login" onSubmit={handleSubmit}>
        <input
          type="email"
          name="emailUser"
          className="input-login"
          placeholder="Email"
          value={user.emailUser || ""}
          onChange={(e) => handleChange(e)}
        ></input>
        <input
          type="password"
          name="passwordUser"
          className="input-login"
          placeholder="Contraseña"
          value={user.passwordUser || ""}
          onChange={(e) => handleChange(e)}
        ></input>
        {error && <p className="error-message">{error}</p>}

        <div className="sign-in-button">
          <button type="submit" className="btn sign-in">
            INGRESAR
          </button>
          <p>
            <Link to="*" className="forget-password">
              Olvidaste tu contraseña ? |
            </Link>
            <span>
              <Link to="/Register" className="sign-up">
                Registrate |
              </Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Form;
