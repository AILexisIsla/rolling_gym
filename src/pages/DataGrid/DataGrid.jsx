import React from "react";
import { Table } from "react-bootstrap";
import "./DataGrid.css";
import Swal from "sweetalert2";
import { userInstance } from "../../config/axios";

const DataGrid = ({ user, getUserApi }) => {
  const URLUSER = process.env.REACT_APP_GYMNASIO_ROLLING_USER;

  const handleDeleteClick = (id) => {
    Swal.fire({
      title: "Estas seguro de eliminar el usuario?",
      text: "No podras arrepentirte de esta accion!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await userInstance.delete(`${URLUSER}/User/${id}`, {
            headers: {
              "Content-Type": "application/json",
              "x-token": JSON.parse(localStorage.getItem("user-token")).token,
            },
          });
          if (response.status === 200) {
            Swal.fire(
              "Eliminado!",
              "El usuario fue eliminado con exito.",
              "success"
            );
            getUserApi();
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  const handleEditRolAdmin = (id) => {
    Swal.fire({
      title: "Estas seguro de dar los permisos de Administrador?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Editar",
    }).then(async (result) => {
      console.log("hola");
      if (result.isConfirmed) {
        try {
          const response = await userInstance.put(
            `${URLUSER}User/${id}`,
            { rol: "admin" },
            {
              headers: {
                "Content-Type": "application/json",
                "x-token": JSON.parse(localStorage.getItem("user-token")).token,
              },
            }
          );
          console.log(response.data); // Agrega esta línea para verificar la respuesta del servidor
          if (response.status === 200) {
            console.log("aqui toy ");
            Swal.fire(
              "Editado!",
              "El usuario ahora es Administrador.",
              "success"
            );
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <div>
      {user?.length !== 0 ? (
        <Table bordered hover responsive className="table-datagrid">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Telefono</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {user?.map((userItem, index) => (
              <tr key={userItem?._id}>
                <td>{index + 1}</td>
                <td>{userItem?.nameUser}</td>
                <td>{userItem?.telefono}</td>
                <td>{userItem?.emailUser}</td>
                <td>{userItem?.rol}</td>
                <td className="w-25">
                  <div className=" hero-buttons">
                    <button
                      onClick={() => handleEditRolAdmin(userItem?._id)}
                      className="btn-edit-delete"
                    >
                      Declarar Admin
                    </button>
                    <button
                      onClick={() => handleDeleteClick(userItem?._id)}
                      className="btn-edit-delete"
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
        <div className="no-classes-found d-flex align-items-center justify-content-center">
          <h1>No user found</h1>
        </div>
      )}
    </div>
  );
};

export default DataGrid;
