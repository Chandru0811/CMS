import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import Profiles from "./Profiles";
import { FaTrash, FaEdit, FaEye } from "react-icons/fa";

function Doctor() {
  const navigate = useNavigate();

  const handleEdit = (id, name, title, stars) => {
    localStorage.setItem("name", name);
    localStorage.setItem("title", title);
    localStorage.setItem("star", stars);
    localStorage.setItem("id", id);
  };

  const handleDelete = (id) => {
    var index = Profiles.map(function (e) {
      return e.id;
    }).indexOf(id);
    Profiles.splice(index, 1);
    navigate("/admin/doctor");
  };

  return (
    <Fragment>
      <div style={{ margin: "3rem" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr className="text-center">
              <th>Image</th>
              <th>Name</th>
              <th>Title</th>
              <th>Stars</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Profiles && Profiles.length > 0
              ? Profiles.map((item) => {
                  return (
                    <tr key={item.id} className="text-center">
                      <td>
                        <img
                          src={`${item.image}`}
                          alt={item.name}
                          style={{ width: "50px", height: "50px" }}
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.title}</td>
                      <td>{item.stars}</td>
                      <td>
                        <span>
                          <Link to={`/admin/doctor/view/${item.id}`}>
                            <Button
                              variant="warning"
                              style={{ margin: "1rem" }}
                            >
                              <FaEye />
                            </Button>
                          </Link>
                        </span>
                        <span>
                          <Link to="/admin/doctor/edit">
                            <Button
                              variant="primary"
                              style={{ margin: "1rem" }}
                              onClick={() =>
                                handleEdit(
                                  item.id,
                                  item.name,
                                  item.title,
                                  item.stars
                                )
                              }
                            >
                              <FaEdit />
                            </Button>
                          </Link>
                        </span>
                        <span>
                          <Button
                            variant="danger"
                            style={{ margin: "1rem" }}
                            onClick={() => handleDelete(item.id)}
                          >
                            <FaTrash />
                          </Button>
                        </span>
                      </td>
                    </tr>
                  );
                })
              : "No data availabe"}
          </tbody>
        </Table>
        <Link to="/admin/doctor/add">
          <Button variant="primary" style={{ margin: "1rem" }}>
            Add New Card
          </Button>
        </Link>
      </div>
    </Fragment>
  );
}

export default Doctor;
