import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Admin.css";
import axios from "../../../config/axios";
import Swal from "sweetalert2";

const Admin = ({ classes, getClassApi }) => {
  const STATUS_OK = 200;
  const URL = process.env.REACT_APP_GYMNASIO_ROLLING_CLASS;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Estas seguro de querer eliminar la clase?",
      text: "No podrás revertirlo.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios.delete(`${URL}/${id}`, {
            headers: {
              "Content-Type": "application/json",
              "x-token": JSON.parse(localStorage.getItem("user-token")).token,
            },
          });

          console.log(res);
          if (res.status === STATUS_OK) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            getClassApi();
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

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
                        to={`/class/edit/${classItem?._id}`}
                        className="btn-edit-delete"
                      >
                        Editar
                      </Link>
                      <Link
                        className="btn-edit-delete"
                        onClick={() => handleDelete(classItem?._id)}
                      >
                        Eliminar
                      </Link>
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
