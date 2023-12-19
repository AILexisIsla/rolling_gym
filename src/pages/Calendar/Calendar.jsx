import { useRef, useState } from "react";
import Calendar from "react-calendar";
import styled from "styled-components";
import { classInstance } from "../../config/axios";
import { Alert, Container, Table } from "react-bootstrap";
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

const MyCalendar = ({ classes, getClassApi }) => {
  const [value, setValue] = useState(new Date());
  const [errorMessage, setErrorMessage] = useState(null);
  const [show, setShow] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingClassId, setEditingClassId] = useState(null);
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

  const handleGetOneClass = async (id) => {
    setIsEditing(true);
    setEditingClassId(id);

    try {
      const response = await classInstance.get(`${URLCLASS}/class/${id}`);
      const classApi = response.data;

      SetFormData({
        nameClass: classApi.nameClass,
        Teacher: classApi.Teacher,
        detailsClass: classApi.detailsClass,
        dateClass: classApi.dateClass,
        timeClass: classApi.timeClass,
      });
    } catch (error) {
      console.log(error);
      // Puedes manejar el error según tus necesidades, por ejemplo, mostrando un mensaje al usuario.
    }
  };

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
      let response;

      if (isEditing) {
        // Modo edición: Actualizar la clase existente
        response = await classInstance.put(
          `${URLCLASS}/class/${editingClassId}`,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
              "x-token": JSON.parse(localStorage.getItem("user-token")).token,
            },
          }
        );
      } else {
        // Modo creación: Crear una nueva clase
        response = await classInstance.post(URLCLASS, formData, {
          headers: {
            "Content-Type": "application/json",
            "x-token": JSON.parse(localStorage.getItem("user-token")).token,
          },
        });
      }

      if (response.status === STATUS_CREATECLASS) {
        Swal.fire({
          title: isEditing ? "Actualizado" : "Creado",
          text: `Su ${isEditing ? "clase" : "producto"} se ha ${
            isEditing ? "actualizado" : "creado"
          } correctamente`,
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
        setIsEditing(false);
        setEditingClassId(null);
      }
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

  const handleDeleteClick = (id) => {
    Swal.fire({
      title: "Estas seguro de eliminar el usuario?",
      text: "No podras arrepentirte de esta accion!",
      icon: "warning",
      customClass: {
        popup: "swal-custom-style",
      },
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await classInstance.delete(
            `${URLCLASS}/class/${id}`,
            {
              headers: {
                "Content-Type": "application/json",
                "x-token": JSON.parse(localStorage.getItem("user-token")).token,
              },
            }
          );
          if (response.status === 200) {
            Swal.fire({
              title: "Eliminado!",
              text: "El usuario fue eliminado con exito.",
              icon: "success",
              customClass: {
                popup: "swal-custom-style",
              },
            });
            getClassApi();
            setIsEditing(false);
            setEditingClassId(null);
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <div>
      <Container>
        <div>
          <div className="calendar">
            <div>
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
                      {isEditing ? "ACTUALIZAR CLASE" : "AGREGAR CLASE"}
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
            <div>
              <StyledCalendar
                onChange={setValue}
                value={value}
                onClickDay={handleClickDay}
              />
            </div>
          </div>
        </div>

        <div className="calendar">
          <h1>Administrar Clases</h1>
          {classes.length !== 0 ? (
            <Table bordered hover responsive className="table-calendar">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre de la Clase</th>
                  <th>Detalle de la clase</th>
                  <th>Teacher</th>
                  <th>Fecha</th>
                  <th>Horario</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {classes.map((clase, index) => (
                  <tr key={clase?._id}>
                    <td>{index + 1}</td>
                    <td>{clase?.nameClass}</td>
                    <td>{clase?.detailsClass}</td>
                    <td>{clase?.Teacher}</td>
                    <td>{clase?.dateClass}</td>
                    <td>{clase?.timeClass}</td>
                    <td className="w-25">
                      <div className=" hero-buttonsDg">
                        <button
                          className="btn-edit-delete"
                          onClick={() => handleGetOneClass(clase?._id)}
                        >
                          Editar
                        </button>
                        <button
                          className="btn-edit-delete"
                          onClick={() => handleDeleteClick(clase?._id)}
                        >
                          Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <div>
              <h1 className="no-classes-found-Calendar">
                No hay clases encontradas
              </h1>
            </div>
          )}
          {errorMessage && (
            <Alert
              variant="danger"
              onClose={() => setErrorMessage(null)}
              dismissible
            >
              {errorMessage}
            </Alert>
          )}
        </div>
      </Container>
    </div>
  );
};

export default MyCalendar;
