import React, { useState } from "react";
import {
  validarDetalleClase,
  validarDia,
  validarHorario,
  validarNombreClase,
  validarNombreTeacher,
} from "../../../helpers/ValidateForm";
import Swal from "sweetalert2";
import axios from "../../../config/axios";
import { useNavigate } from "react-router";
import { Alert } from "react-bootstrap";

const CreateClass = ({ URL, getClassApi }) => {
  const [inputs, SetInputs] = useState({});
  const navigate = useNavigate();
  const STATUS_CREATECLASS = 201;

  const [errorMessage, setErrorMessage] = useState(null);
  const [show, setShow] = useState(false);

  const handleChange = (event) => {
    const { value, name } = event.target;
    SetInputs((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inputs:", inputs);
    if (Object.values(inputs).some((value) => value.trim() === "")) {
      console.log("Datos inválidos: Campos vacíos");
      Swal.fire({
        title: "Oop!!",
        text: "Algunos datos no son válidos",
        icon: "error",
        customClass: {
          popup: "swal-custom-style",
        },
      });
      return;
    }

    // Verificar las validaciones individuales
    if (
      !validarNombreClase(inputs.nameClass) ||
      !validarNombreTeacher(inputs.Teacher) ||
      !validarDetalleClase(inputs.detailsClass) ||
      !validarDia(inputs.dateClass) ||
      !validarHorario(inputs.timeClass)
    ) {
      console.log("Datos inválidos: Nombre de clase");
    }

    const newClass = {
      nameClass: inputs.nameClass,
      Teacher: inputs.Teacher,
      detailsClass: inputs.detailsClass,
      dateClass: inputs.dateClass,
      timeClass: inputs.timeClass,
    };
    Swal.fire({
      title: "Estás seguro?",
      text: "No podrás revertir esto.!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#f87c00",
      cancelButtonColor: "#d33",
      confirmButtonText: "Save",
      customClass: {
        popup: "swal-custom-style",
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios.post(URL, newClass, {
            headers: {
              "Content-Type": "application/json",
              "x-token": JSON.parse(localStorage.getItem("user-token")).token,
            },
          });
          if (res.status === STATUS_CREATECLASS) {
            Swal.fire({
              title: "Creado",
              text: "Su producto se ha creado correctamente",
              icon: "success",
              customClass: {
                popup: "swal-custom-style",
              },
            });
            e.target.reset();
            getClassApi();
            navigate("/Admin");
          }
        } catch (error) {
          console.error(error.response); // Imprime la respuesta completa en la consola
          setErrorMessage("Error en la creación de la clase");
          setShow(true);
        }
      }
    });
  };

  return (
    <div className="background-images-create-class">
      <div className="form-container">
        <h1>Create Class</h1>
        <form className="form-login" onSubmit={handleSubmit}>
          <input
            type="text"
            name="nameClass"
            className="input-login"
            placeholder="Name Class"
            onChange={handleChange}
          ></input>
          <input
            type="text"
            name="Teacher"
            className="input-login"
            placeholder="Teacher"
            onChange={handleChange}
          ></input>
          <input
            type="text"
            name="detailsClass"
            className="input-login"
            placeholder="Details Class"
            onChange={handleChange}
          ></input>
          <input
            type="date"
            name="dateClass"
            className="input-login"
            placeholder="Date Class"
            onChange={handleChange}
          ></input>
          <input
            type="time"
            name="timeClass"
            className="input-login"
            placeholder="Time Class"
            onChange={handleChange}
          ></input>

          <div className="sign-in-button">
            <button type="submit" className="btn sign-in">
              SAVE
            </button>
          </div>
        </form>
        {show && (
          <Alert
            key={errorMessage}
            variant="danger"
            onClose={() => setShow(false)}
            dismissible
          >
            {errorMessage}
          </Alert>
        )}
      </div>
    </div>
  );
};

export default CreateClass;
