import React from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";

function AdminService() {

  const validationSchema = Yup.object({
    heading: Yup.string().required("*Heading is required"),
    content: Yup.string().required("*Content is required"),
    subHeading1: Yup.string().required("*Sub heading 1 is required"),
    subContent1: Yup.string().required("*Sub content 1 is required"),
    subHeading2: Yup.string().required("*Sub heading 2 is required"),
    subContent2: Yup.string().required("*Sub content 2 is required"),
    subHeading3: Yup.string().required("*Sub heading 3 is required"),
    subContent3: Yup.string().required("*Sub content 3 is required")
  });

  const formik = useFormik({
    initialValues: {
      heading: "",
      content: "",
      subHeading1: "",
      subContent1: "",
      subHeading2: "",
      subContent2: "",
      subHeading3: "",
      subContent3: ""
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log("Admin Service Datas:", values);
    },
  });

  return (
    <section className="container my-4">
      <div className="card mx-2 p-3">
        <form className="row g-3" onSubmit={formik.handleSubmit}>
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
            <textarea rows="5"
              {...formik.getFieldProps('content')}
              className={`form-control ${formik.touched.content && formik.errors.content ? "is-invalid" : ""}`} ></textarea>
            {formik.touched.content && formik.errors.content && (
              <div className="invalid-feedback">{formik.errors.content}</div>
            )}
          </div>
          <div className='col-md-4 col-12'>
            <div className='card p-3' style={{ border: "2px solid #d7d3d3" }}>
              <div className='mb-3'>
                <label className='form-label'>Sub Heading 1<span className="text-danger">*</span></label>
                <input type='text'
                  {...formik.getFieldProps('subHeading1')}
                  className={`form-control ${formik.touched.subHeading1 && formik.errors.subHeading1 ? "is-invalid" : ""}`} />
                {formik.touched.subHeading1 && formik.errors.subHeading1 && (
                  <div className="invalid-feedback">{formik.errors.subHeading1}</div>
                )}
              </div>
              <label className='form-label'>Sub Content 1<span className="text-danger">*</span></label>
              <textarea rows='5'
                {...formik.getFieldProps('subContent1')}
                className={`form-control ${formik.touched.subContent1 && formik.errors.subContent1 ? "is-invalid" : ""}`} />
              {formik.touched.subContent1 && formik.errors.subContent1 && (
                <div className="invalid-feedback">{formik.errors.subContent1}</div>
              )}
            </div>
          </div>
          <div className='col-md-4 col-12'>
            <div className='card p-3' style={{ border: "2px solid #d7d3d3" }}>
              <div className='mb-3'>
                <label className='form-label'>Sub Heading 2<span className="text-danger">*</span></label>
                <input type='text'
                  {...formik.getFieldProps('subHeading2')}
                  className={`form-control ${formik.touched.subHeading2 && formik.errors.subHeading2 ? "is-invalid" : ""}`} />
                {formik.touched.subHeading2 && formik.errors.subHeading2 && (
                  <div className="invalid-feedback">{formik.errors.subHeading2}</div>
                )}
              </div>
              <label className='form-label'>Sub Content 2<span className="text-danger">*</span></label>
              <textarea rows='5'
                {...formik.getFieldProps('subContent2')}
                className={`form-control ${formik.touched.subContent2 && formik.errors.subContent2 ? "is-invalid" : ""}`} ></textarea>
              {formik.touched.subContent2 && formik.errors.subContent2 && (
                <div className="invalid-feedback">{formik.errors.subContent2}</div>
              )}
            </div>
          </div>
          <div className='col-md-4 col-12'>
            <div className='card p-3' style={{ border: "2px solid #d7d3d3" }}>
              <div className='mb-3'>
                <label className='form-label'>Sub Heading 3<span className="text-danger">*</span></label>
                <input type='text'
                  {...formik.getFieldProps('subHeading3')}
                  className={`form-control ${formik.touched.subHeading3 && formik.errors.subHeading3 ? "is-invalid" : ""}`} />
                {formik.touched.subHeading3 && formik.errors.subHeading3 && (
                  <div className="invalid-feedback">{formik.errors.subHeading3}</div>
                )}
              </div>
              <label className='form-label'>Sub Content 3<span className="text-danger">*</span></label>
              <textarea rows='5'
                {...formik.getFieldProps('subContent3')}
                className={`form-control ${formik.touched.subContent3 && formik.errors.subContent3 ? "is-invalid" : ""}`} ></textarea>
              {formik.touched.subContent3 && formik.errors.subContent3 && (
                <div className="invalid-feedback">{formik.errors.subContent3}</div>
              )}
            </div>
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

export default AdminService;