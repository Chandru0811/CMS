import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';

function AdminHome() {

  const { quill, quillRef } = useQuill();

  const validationSchema = Yup.object({
    subHeading: Yup.string().required("*Sub heading is required"),
    heading: Yup.string().required("*Heading is required"),
    content: Yup.string().required("*Content is required"),
    receivePatients: Yup.string().required("*Receive patients is required"),
    expertDoctors: Yup.string().required("*Expert doctors is required"),
    yearsOfExperience: Yup.string().required("*Years of experience is required"),
    homeImage: Yup.string().required("*Home image is required")
  });

  const formik = useFormik({
    initialValues: {
      subHeading: "",
      heading: "",
      content: "",
      receivePatients: "",
      expertDoctors: "",
      yearsOfExperience: "",
      homeImage: ""
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log("Admin Home Datas:", values);
    },
  });

  return (
    <section className="container my-4">
      <div className="card mx-2 p-3">
        <form className="row g-3" onSubmit={formik.handleSubmit}>
          <div className="col-md-6 col-12 mb-3">
            <label className="form-label">
              Sub Heading<span className="text-danger">*</span>
            </label>
            <input type="text"
              {...formik.getFieldProps('subHeading')}
              className={`form-control ${formik.touched.subHeading && formik.errors.subHeading ? "is-invalid" : ""}`} />
            {formik.touched.subHeading && formik.errors.subHeading && (
              <div className="invalid-feedback">{formik.errors.subHeading}</div>
            )}
          </div>
          <div className="col-md-6 col-12 mb-3">
            <label className="form-label">
              Heading<span className="text-danger">*</span>
            </label>
            <input type="text"
              {...formik.getFieldProps('heading')}
              className={`form-control ${formik.touched.heading && formik.errors.heading ? "is-invalid" : ""}`} />
            {formik.touched.heading && formik.errors.heading && (
              <div className="invalid-feedback">{formik.errors.heading}</div>
            )}
          </div>
          <div className="col-12 mb-3">
            <label className="form-label">
              Content<span className="text-danger">*</span>
            </label>
            <textarea ref={quillRef} style={{ height: "150px" }} className={`form-control ${formik.touched.content && formik.errors.content ? "is-invalid" : ""}`}
              {...formik.getFieldProps('content')} />
            {formik.touched.content && formik.errors.content && (
              <div className="invalid-feedback">{formik.errors.content}</div>
            )}
          </div>
          <div className="col-md-6 col-12 mb-3">
            <label className="form-label">
              Receive Patients<span className="text-danger">*</span>
            </label>
            <input type="number"
              {...formik.getFieldProps('receivePatients')}
              className={`form-control ${formik.touched.receivePatients && formik.errors.receivePatients ? "is-invalid" : ""}`} />
            {formik.touched.receivePatients && formik.errors.receivePatients && (
              <div className="invalid-feedback">{formik.errors.receivePatients}</div>
            )}
          </div>
          <div className="col-md-6 col-12 mb-3">
            <label className="form-label">
              Expert Doctors<span className="text-danger">*</span>
            </label>
            <input type="number"
              {...formik.getFieldProps('expertDoctors')}
              className={`form-control ${formik.touched.expertDoctors && formik.errors.expertDoctors ? "is-invalid" : ""}`} />
            {formik.touched.expertDoctors && formik.errors.expertDoctors && (
              <div className="invalid-feedback">{formik.errors.expertDoctors}</div>
            )}
          </div>
          <div className="col-md-6 col-12 mb-3">
            <label className="form-label">
              Years of Experience<span className="text-danger">*</span>
            </label>
            <input type="number"
              {...formik.getFieldProps('yearsOfExperience')}
              className={`form-control ${formik.touched.yearsOfExperience && formik.errors.yearsOfExperience ? "is-invalid" : ""}`} />
            {formik.touched.yearsOfExperience && formik.errors.yearsOfExperience && (
              <div className="invalid-feedback">{formik.errors.yearsOfExperience}</div>
            )}
          </div>
          <div className="col-md-6 col-12 mb-3">
            <label className="form-label">
              Home Image<span className="text-danger">*</span>
            </label>
            <input type="file"
              {...formik.getFieldProps('homeImage')}
              className={`form-control ${formik.touched.homeImage && formik.errors.homeImage ? "is-invalid" : ""}`} />
            {formik.touched.homeImage && formik.errors.homeImage && (
              <div className="invalid-feedback">{formik.errors.homeImage}</div>
            )}
          </div>
          <div className="col-12 mt-3 mb-3">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AdminHome;