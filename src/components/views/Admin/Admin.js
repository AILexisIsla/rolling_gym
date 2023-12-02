import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardClasses from "./CardCasses";
import { Link } from "react-router-dom";
import './Admin.css'

const Admin = ({ classes }) => {
  return (
    <div>
      <Container className="py-5">
        <h1>Clases</h1>
        <Link className="btn" to="/CreateClass">
          Crear Clase
        </Link>
        {classes?.length !== 0 ? (
          <Row>
            {classes?.map((classItem) => (
              <Col xl={3} md={6} key={classItem?._id}>
                <CardClasses
                  dateClass={classItem.dateClass}
                  detailsClass={classItem.detailsClass}
                  nameClass={classItem.nameClass}
                  timeClass={classItem.timeClass}
                />
              </Col>
            ))}
          </Row>
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
