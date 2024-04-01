import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useFormik } from "formik";
import * as Yup from "yup";
import { MdOutlineAdd } from "react-icons/md";

function ReviewAdd() {
  const validationSchema = Yup.object({
    reviewName: Yup.string().required("*Review Name is required"),
    content: Yup.string().required("*Review Content is required"),
    address: Yup.string().required("*Review Address is required"),
  });

  const formik = useFormik({
    initialValues: {
      reviewName: "",
      address: "",
      content: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      handleClose();
    },
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} type="button" className="btn btn-primary">
      <MdOutlineAdd /> Add
      </button>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Review</Modal.Title>
        </Modal.Header>
        <form onSubmit={formik.handleSubmit}>
          <Modal.Body>
            <div className="row">
              <div className="col-md-12 col-12 mb-2">
                <label className="form-label">
                  Review Content<span className="text-danger">*</span>
                </label>
                <div className="mb-3">
                  <textarea
                    className={`form-control ${
                      formik.touched.content && formik.errors.content
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("content")}
                  ></textarea>
                  {formik.touched.content && formik.errors.content && (
                    <div className="invalid-feedback">
                      {formik.errors.content}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-6 col-12 mb-2">
                <label className="form-label">Review Address</label>
                <div className="mb-3">
                  <textarea
                    className={`form-control ${
                      formik.touched.address && formik.errors.address
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("address")}
                  ></textarea>
                  {formik.touched.address && formik.errors.address && (
                    <div className="invalid-feedback">
                      {formik.errors.address}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-6 col-12 mb-2">
                <label className="form-label">
                  Review Name<span className="text-danger">*</span>
                </label>
                <div className="mb-3">
                  <input
                    type="text"
                    name="reviewName"
                    className={`form-control ${
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
