import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  validateEmailuser,
  validateNameuser,
  validatePassworduser,
  validateTelefono,
} from "../../helpers/ValidateFormRegister";
import { userInstance } from "../../../config/axios";

const RegisterForm = ({ SetLoading }) => {
  const [user, SetUser] = useState({
    nameUser: "",
    telefono: "",
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

    // validar los campos
    if (
      !validateNameuser(user.nameUser) ||
      !validateTelefono(user.telefono) ||
      !validateEmailuser(user.emailUser) ||
      !validatePassworduser(user.passwordUser)
    ) {
      Swal.fire({
        title: "Oops...",
        text: "Algunos datos no son válidos!",
        icon: "error",
        customClass: {
          popup: "swal-custom-style",
        },
      });
      return;
    }
    // envío de datos a guardar
    const newUser = {
      nameUser: user.nameUser,
      telefono: user.telefono,
      emailUser: user.emailUser,
      passwordUser: user.passwordUser,
    };

    try {
      const res = await userInstance.post(`${URL}/Register`, newUser);

      if (res && res.data) {
        if (res.status === 201) {
          Swal.fire({
            title: "Creado!",
            text: "Tu usuario ha sido creado.",
            icon: "success",
            showClass: {
              popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `,
            },
            hideClass: {
              popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `,
            },
            customClass: {
              popup: "swal-custom-style",
            },
          });
          const data = res.data;
          SetLoading(data);
          localStorage.setItem("user-token", JSON.stringify(data));
          navigate("/Login");
        }
      } else {
        console.error("Error: Response or response data is undefined");
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
          type="text"
          name="nameUser"
          className="input-login"
          placeholder="Nombre"
          value={user.nameUser || ""}
          onChange={(e) => handleChange(e)}
          required
        ></input>
        <input
          type="number"
          name="telefono"
          className="input-login"
          placeholder="Telefono"
          value={user.telefono || ""}
          onChange={(e) => handleChange(e)}
          required
        ></input>
        <input
          type="email"
          name="emailUser"
          className="input-login"
          placeholder="Email"
          value={user.emailUser || ""}
          onChange={(e) => handleChange(e)}
          required
        ></input>
        <input
          type="password"
          name="passwordUser"
          className="input-login"
          placeholder="Contraseña"
          value={user.passwordUser || ""}
          onChange={(e) => handleChange(e)}
          required
        ></input>
        {error && <p className="error-message">{error}</p>}
        <div className="sign-in-button">
          <button type="submit" className="btn sign-in">
            REGISTRATE
          </button>
          <p>
            <span>
              <Link to="/Login" className="sign-up">
                | Inicia Sesion |
              </Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
