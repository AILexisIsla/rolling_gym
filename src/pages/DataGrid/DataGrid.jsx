import React from "react";
import { Table } from "react-bootstrap";
import "./DataGrid.css";
import { Link } from "react-router-dom";
const DataGrid = ({ user }) => {
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
                <td className="w-25"><div className=" hero-buttons">
                  <Link
                    to={`/class/edit/${userItem?._id}`}
                    className="btn-edit-delete"
                  >
                    Declarar Admin
                  </Link>
                  <Link className="btn-edit-delete">Eliminar</Link>
                </div></td>
                
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
