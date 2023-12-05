import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Admin.css";

const Admin = ({ classes }) => {
  return (
    <div>
      <Container className="container-admin">
        <div>
          <h1>Clases</h1>
          <hr />
          <Link to="/class/create" className="btn">
            Crear Clase
          </Link>
        </div>

        {classes?.length !== 0 ? (
          <Table bordered hover responsive className="table-admin">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Details</th>
                <th>Date</th>
                <th>Time</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {classes?.map((classItem, index) => (
                <tr key={classItem?._id}>
                  <td>{index + 1}</td>
                  <td>{classItem?.nameClass}</td>
                  <td>{classItem?.detailsClass}</td>
                  <td>{classItem?.dateClass}</td>
                  <td>{classItem?.timeClass}</td>
                  <td className="w-25">
                    <div className=" hero-buttons">
                      <Link
                        to={`/class/edit/${classes?._id}`}
                        className="btn-edit-delete"
                      >
                        Editar
                      </Link>
                      <Link className="btn-edit-delete">Eliminar</Link>
                    </div>
                  </td>
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
