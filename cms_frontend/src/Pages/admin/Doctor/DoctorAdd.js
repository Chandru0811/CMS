import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaStar } from "react-icons/fa";

function DoctorAdd() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState();

  const validationSchema = Yup.object({
    doctorName: Yup.string().required("*Name is required"),
    doctorImage: Yup.string().required("*Doctor image is required"),
    doctorTitle: Yup.string().required("*Title is required"),
  });

  const formik = useFormik({
    initialValues: {
      doctorName: "",
      doctorTitle: "",
      doctorImage: "",
      rating: null,
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
        className="btn btn-outline-primary"
      >
        Add
      </button>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Doctor Add</Modal.Title>
        </Modal.Header>
        <form onSubmit={formik.handleSubmit}>
          <Modal.Body>
            <div className="row">
              <div className="col-md-6 col-12 mb-3">
                <label className="form-label">
                  Doctor Image<span className="text-danger">*</span>
                </label>
                <input
                  type="file"
                  {...formik.getFieldProps("doctorImage")}
                  className={`form-control ${
                    formik.touched.doctorImage && formik.errors.doctorImage
                      ? "is-invalid"
                      : ""
                  }`}
                />
                {formik.touched.doctorImage && formik.errors.doctorImage && (
                  <div className="invalid-feedback">
                    {formik.errors.doctorImage}
                  </div>
                )}
              </div>
              <div className="col-md-6 col-12 mb-3">
                <label className="form-label">
                  Name<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  {...formik.getFieldProps("doctorName")}
                  className={`form-control ${
                    formik.touched.doctorName && formik.errors.doctorName
                      ? "is-invalid"
                      : ""
                  }`}
                />
                {formik.touched.doctorName && formik.errors.doctorName && (
                  <div className="invalid-feedback">
                    {formik.errors.doctorName}
                  </div>
                )}
              </div>
              <div className="col-md-6 col-12 mb-2">
                <lable className="form-lable">
                  Title<span className="text-danger">*</span>
                </lable>
                <div className="mb-3">
                  <input
                    type="text"
                    name="doctorTitle"
                    className={`form-control  ${
                      formik.touched.doctorTitle && formik.errors.doctorTitle
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("doctorTitle")}
                  />
                  {formik.touched.doctorTitle && formik.errors.doctorTitle && (
                    <div className="invalid-feedback">
                      {formik.errors.doctorTitle}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-6 col-12 mb-2">
                Rating: {rating}
                <br />
                {[...Array(5)].map((star, index) => {
                  const ratingValue = index + 1;

                  return (
                    <label key={index}>
                      <input
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        onClick={() => {
                          setRating(ratingValue);
                          formik.setFieldValue("rating", ratingValue);
                        }}
                        style={{ visibility: "hidden" }}
                      />
                      <FaStar
                        className="star"
                        color={
                          ratingValue <= (hover || rating)
                            ? "#ffc107"
                            : "#e4e5e9"
                        }
                        size={25}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                      />
                    </label>
                  );
                })}
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

export default DoctorAdd;
