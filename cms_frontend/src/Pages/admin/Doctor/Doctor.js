import React from "react";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import DoctorAdd from "./DoctorAdd";
import DoctorView from "./DoctorView";
import DoctorEdit from "./DoctorEdit";
import { FaStar } from "react-icons/fa6";

function Doctor() {
  return (
    <section className="container my-4">
      <div className="card shadow border-0 mb-2 top-header">
        <div className="container-fluid py-4">
          <div className="row align-items-center justify-content-between ">
            <div className="col">
              <div className="d-flex align-items-center gap-4">
                <h1 className="h4 ls-tight">Doctor</h1>
              </div>
            </div>
            <div className="col-auto">
              <div className="hstack gap-2 justify-content-end">
                <DoctorAdd />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card shadow border-0 mb-2 top-header">
        <div className="container py-4">
          <div className="row g-3">
            <div className="table-responsive p-2">
              <table class="table">
                <thead>
                  <tr className="text-center">
                    <th scope="col">S.No</th>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Title</th>
                    <th scope="col">Rating</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center">
                    <td>1</td>
                    <td>
                      <img
                        style={{ height: "4rem" }}
                        src="http://localhost:3000/static/media/profile-1.0261bb4efe7a9075c56a.png"
                        alt="img1"
                      />
                    </td>
                    <td>Dr. Kathryn Murphy</td>
                    <td>General Surgeons</td>
                    <td>
                      4.7
                      <FaStar className="text-warning mb-1" />
                    </td>
                    <td>
                      <span>
                        <button className="btn btn-sm shadow-none border-none">
                          <DoctorView />
                        </button>
                      </span>
                      <span>
                        <button className="btn btn-sm shadow-none border-none">
                          <DoctorEdit />
                        </button>
                      </span>
                      <span>
                        <Link to="/">
                          <button className="btn btn-sm shadow-none border-none">
                            <MdDelete />
                          </button>
                        </Link>
                      </span>
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td>2</td>
                    <td>
                      <img
                        style={{ height: "4rem" }}
                        src="http://localhost:3000/static/media/profile-3.530bb2fd7ece3dd3b3be.png"
                        alt="img2"
                      />
                    </td>
                    <td>Dr. Jacob Jones</td>
                    <td>Hematologists</td>
                    <td>
                      4.9
                      <FaStar className="text-warning mb-1" />
                    </td>
                    <td>
                      <span>
                        <button className="btn btn-sm shadow-none border-none">
                          <DoctorView />
                        </button>
                      </span>
                      <span>
                        <button className="btn btn-sm shadow-none border-none">
                          <DoctorEdit />
                        </button>
                      </span>
                      <span>
                        <Link to="/">
                          <button className="btn btn-sm shadow-none border-none">
                            <MdDelete />
                          </button>
                        </Link>
                      </span>
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td>3</td>
                    <td>
                      <img
                        style={{ height: "4rem" }}
                        src="http://localhost:3000/static/media/profile-2.4752a9db34458eeffcfa.png"
                        alt="img3"
                      />
                    </td>
                    <td>Dr. Jenny Wilson</td>
                    <td>Endocrinologists</td>
                    <td>
                      4.5
                      <FaStar className="text-warning mb-1" />
                    </td>
                    <td>
                      <span>
                        <button className="btn btn-sm shadow-none border-none">
                          <DoctorView />
                        </button>
                      </span>
                      <span>
                        <button className="btn btn-sm shadow-none border-none">
                          <DoctorEdit />
                        </button>
                      </span>
                      <span>
                        <Link to="/">
                          <button className="btn btn-sm shadow-none border-none">
                            <MdDelete />
                          </button>
                        </Link>
                      </span>
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td>4</td>
                    <td>
                      <img
                        style={{ height: "4rem" }}
                        src="http://localhost:3000/static/media/profile-4.3c44185ab9c84614038f.png"
                        alt="img4"
                      />
                    </td>
                    <td>Dr. Albert Flores</td>
                    <td>Hematologists</td>
                    <td>
                      3.9
                      <FaStar className="text-warning mb-1" />
                    </td>
                    <td>
                      <span>
                        <button className="btn btn-sm shadow-none border-none">
                          <DoctorView />
                        </button>
                      </span>
                      <span>
                        <button className="btn btn-sm shadow-none border-none">
                          <DoctorEdit />
                        </button>
                      </span>
                      <span>
                        <Link to="/">
                          <button className="btn btn-sm shadow-none border-none">
                            <MdDelete />
                          </button>
                        </Link>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Doctor;
