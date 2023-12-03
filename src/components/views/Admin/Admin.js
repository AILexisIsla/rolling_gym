import React from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Admin.css";

const Admin = ({ classes }) => {
  return (
    <div>
      <Container className="py-5">
        <h1>Clases</h1>
        <Link className="btn" to="/CreateClass">
          Crear Clase
        </Link>
        {classes?.length !== 0 ? (
          <Table bordered hover responsive className="align-middle mx-3">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Details</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {classes?.map((classItem, index) => (
                <tr key={classItem?._id}>
                  <td>{index + 1}</td>
                  <td>{classItem.nameClass}</td>
                  <td>{classItem.detailsClass}</td>
                  <td>{classItem.dateClass}</td>
                  <td>{classItem.timeClass}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <div className="no-classes-found d-flex align-items-center justify-content-center">
            <h1>No classes found</h1>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Admin;
