import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";

function DoctorView() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <span onClick={handleShow}>
        <FaEye />
      </span>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Body>
          <div className="row m-5">
            <div class="card" style={{ width: "18rem" }}>
              <img
                class="card-img-top"
                src="http://localhost:3000/static/media/profile-1.0261bb4efe7a9075c56a.png"
                alt="img1"
              />
              <div class="card-body">
                <h5 class="card-title">Dr. Kathryn Murphy</h5>
                <p class="card-text">General Surgeons</p>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-secondary"
            type="button"
            onClick={handleClose}
          >
            Close
          </button>
          <button type="submit" className="btn btn-danger">
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DoctorView;
