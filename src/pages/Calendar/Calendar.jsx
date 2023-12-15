import { useRef, useState } from "react";
import Calendar from "react-calendar";
import styled from "styled-components";
import { classInstance } from "../../config/axios";
import { Alert, Container } from "react-bootstrap";
import Swal from "sweetalert2";
import {
  validarDetalleClase,
  validarDia,
  validarHorario,
  validarNombreClase,
  validarNombreTeacher,
} from "../../helpers/ValidateForm";
import "./Calendar.css";

const StyledCalendar = styled(Calendar)`
  .react-calendar {
    width: 350px;
    max-width: 100%;
    background: white;
    border: 1px solid #a0a096;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
  }
  .react-calendar__month-view__days__day--weekend {
    color: #d10000;
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #757575;
  }
`;

const MyCalendar = ({ getClassApi }) => {
  const [value, setValue] = useState(new Date());
  const [errorMessage, setErrorMessage] = useState(null);
  const [show, setShow] = useState(false);
  const [formData, SetFormData] = useState({
    nameClass: "",
    Teacher: "",
    detailsClass: "",
    dateClass: "",
    timeClass: "",
  });
  const formRef = useRef(null);
  const URLCLASS = process.env.REACT_APP_GYMNASIO_ROLLING_CLASS;
  const STATUS_CREATECLASS = 201;
  const handleChange = (event) => {
    const { value, name } = event.target;
    SetFormData((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleClickDay = async (date) => {
    const formattedDate = date.toISOString().slice(0, 10);
    SetFormData((prevValues) => ({ ...prevValues, dateClass: formattedDate }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(formData).some((value) => value.trim() === "")) {
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

    if (
      !validarNombreClase(formData.nameClass) ||
      !validarNombreTeacher(formData.Teacher) ||
      !validarDetalleClase(formData.detailsClass) ||
      !validarDia(formData.dateClass) ||
      !validarHorario(formData.timeClass)
    ) {
    }
    try {
      const resp = await classInstance.post(URLCLASS, formData, {
        headers: {
          "Content-Type": "application/json",
          "x-token": JSON.parse(localStorage.getItem("user-token")).token,
        },
      });
      if (resp.status === STATUS_CREATECLASS) {
        Swal.fire({
          title: "Creado",
          text: "Su producto se ha creado correctamente",
          icon: "success",
          customClass: {
            popup: "swal-custom-style",
          },
        });
        formRef.current.reset();
        SetFormData({
          nameClass: "",
          Teacher: "",
          detailsClass: "",
          dateClass: "",
          timeClass: "",
        });
        getClassApi();
      }

      console.log("Clase de gimnasio creada:", resp.data);
      // Puedes realizar acciones adicionales después de guardar, como mostrar una notificación de éxito.
    } catch (error) {
      if (error.response) {
        // Si la respuesta contiene datos, puedes acceder a ellos
        console.error("Error al crear la clase:", error.response.data);
      } else {
        // Si la respuesta no contiene datos, muestra un mensaje genérico
        console.error("Error al crear la clase:", error.message);
      }
      setErrorMessage("Error en la creación de la clase");
    }
  };

  return (
    <div>
      <Container>
        <div className="class-container">
          <h1>Crear Clase</h1>
          <form ref={formRef} className="form-class">
            <input
              type="text"
              name="nameClass"
              className="input-class"
              placeholder="Name Class"
              onChange={handleChange}
              value={formData.nameClass}
            ></input>
            <input
              type="text"
              name="Teacher"
              className="input-class"
              placeholder="Teacher"
              onChange={handleChange}
              value={formData.Teacher}
            ></input>
            <input
              type="text"
              name="detailsClass"
              className="input-class"
              placeholder="Details Class"
              onChange={handleChange}
              value={formData.detailsClass}
            ></input>
            <input
              type="text"
              name="dateClass"
              className="input-class"
              placeholder="dateClass"
              onChange={handleChange}
              value={formData.dateClass}
            ></input>
            <input
              type="time"
              name="timeClass"
              className="input-class"
              placeholder="Time Class"
              onChange={handleChange}
              value={formData.timeClass}
            ></input>
            <div className="sign-in-button">
              <button
                type="submit"
                className="btn sign-in"
                onClick={handleSubmit}
              >
                AGREGAR CLASE
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
        <StyledCalendar
          onChange={setValue}
          value={value}
          onClickDay={handleClickDay}
        />
      </Container>
    </div>
  );
};

export default MyCalendar;
