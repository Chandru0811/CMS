import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useFormik } from "formik";
import * as Yup from "yup";

function ReviewAdd() {
  const validationSchema = Yup.object({
    reviewName: Yup.string().required("*Review Name is required"),
  });

  const formik = useFormik({
    initialValues: {
      reviewName: "",
      address: "",
      comments: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        onClick={handleShow}
        type="button"
        className="btn text-appointment-btn rounded-4 fs-6"
      >
        Add
      </button>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Associate Job Opening</Modal.Title>
        </Modal.Header>
        <form onSubmit={formik.handleSubmit}>
          <Modal.Body>
            <div className="row">
              <div className="col-md-12 col-12 mb-2">
                <label className="form-label">Review Content</label>
                <div className="mb-3">
                  <div className="form-floating">
                    <textarea
                      rows="5"
                      className="form-control"
                      {...formik.getFieldProps("content")}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12 mb-2">
                <label className="form-label">Review Address</label>
                <div className="mb-3">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      {...formik.getFieldProps("address")}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12 mb-2">
                <lable className="form-lable">
                  Review Name<span className="text-danger">*</span>
                </lable>
                <div className="mb-3">
                  <input
                    type="text"
                    name="reviewName"
                    className={`form-control  ${
                      formik.touched.reviewName && formik.errors.reviewName
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("reviewName")}
                  />
                  {formik.touched.reviewName && formik.errors.reviewName && (
                    <div className="invalid-feedback">
                      {formik.errors.reviewName}
                    </div>
                  )}
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
        </form>
      </Modal>
    </>
  );
}

export default ReviewAdd;
