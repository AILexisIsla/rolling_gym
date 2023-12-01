import axios from "axios";
import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const RegisterForm = () => {
  const [user, SetUser] = useState({});
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const URL = process.env.REACT_APP_API_USER;

  const handleChange = (event) => {
    const name = event.target.name; // Utiliza el atributo 'name' del campo de entrada
    const value = event.target.value;
    SetUser((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validar los campos

    // envío de datos a guardar
    const newUser = {
      nameUser: user.nameUser,
      telefono: user.telefono,
      emailUser: user.emailUser,
      passwordUser: user.passwordUser,
    };

    try {
      const res = await axios.post(`${URL}`, newUser);
      console.log(res);

      if (res && res.data) {
        if (res.status === 201) {
          Swal.fire("Created!", "Your user has been created.", "success");
          const data = res.data;
          console.log(data);
          // Realizar las acciones necesarias después de un registro exitoso
          // Por ejemplo, almacenar datos en el local storage, establecer el usuario autenticado, etc.
          // ...
        }
      } else {
        console.error("Error: Response or response data is undefined");
      }
    } catch (error) {
      console.log(error);
      setError(true);
      error.response?.data?.message &&
        setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div className="form-container">
      <form className="form-login" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nameUser"
          className="input-login"
          placeholder="NameUser"
          value={user.nameUser || ""}
          onChange={(e) => handleChange(e)}
        ></input>
        <input
          type="number"
          name="telefono"
          className="input-login"
          placeholder="Telefono"
          value={user.telefono || ""}
          onChange={(e) => handleChange(e)}
        ></input>
        <input
          type="email"
          name="emailUser"
          className="input-login"
          placeholder="EmailUser"
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

        <div className="sign-in-button">
          <button type="submit" className="btn sign-in">
            REGISTER
          </button>
          <p>
            <span>
              <Link to='/Login' className="sign-up">| Sign IN |</Link>
            </span>
          </p>
        </div>
      </form>
      {error ? (
        <Alert variant="danger" onClick={() => setError(false)} dismissible>
          {errorMessage}
        </Alert>
      ) : null}
    </div>
  );
};

export default RegisterForm;
