import React, { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import * as Yup from 'yup';
import { useFormik } from "formik";
function AdminAbout() {
  const [rows, setRows] = useState([{}]);
  const validationSchema = Yup.object({
    heading: Yup.string().required("*Heading is required"),
    mainContent: Yup.string().required("*Main content is required"),
    subHeading: Yup.string().required("*Sub heading is required"),
    aboutImage: Yup.string().required("*About image is required"),
    solutionName: Yup.string().required("*Soution name is required"),
    solutionContent: Yup.string().required("*Soultion content is required")
  });
  const formik = useFormik({
    initialValues: {
      heading: "",
      mainContent: "",
      subHeading: "",
      aboutImage: "",
      solutionName: "",
      solutionContent: ""
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log("About Page datas:", values);
    },
  });
  return (
    <section className="container my-4 ">
      <div className="card mx-2 p-3">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-md-6 col-12 mb-2">
              <lable className="form-lable">Heading<span className="text-danger">*</span></lable>
              <div className="mb-3">
                <input
                  type="text"
                  className={`form-control  ${formik.touched.heading && formik.errors.heading
                    ? "is-invalid"
                    : ""
                    }`}
                  {...formik.getFieldProps("heading")}
                />
                {formik.touched.heading &&
                  formik.errors.heading && (
                    <div className="invalid-feedback">
                      {formik.errors.heading}
                    </div>
                  )}
              </div>
            </div>
            <div className="col-md-6 col-12 mb-2">
              <lable className="form-lable">Main Content<span className="text-danger">*</span></lable>
              <div className="mb-3">
                <textarea className={`form-control  ${formik.touched.mainContent && formik.errors.mainContent
                  ? "is-invalid"
                  : ""
                  }`}
                  {...formik.getFieldProps("mainContent")}></textarea>
                {formik.touched.mainContent &&
                  formik.errors.mainContent && (
                    <div className="invalid-feedback">
                      {formik.errors.mainContent}
                    </div>
                  )}
              </div>
            </div>
            <div className="col-md-6 col-12 mb-2">
              <lable className="form-lable">Sub Heading<span className="text-danger">*</span></lable>
              <div className="mb-3">
                <input
                  type="text"
                  className={`form-control  ${formik.touched.subHeading && formik.errors.subHeading
                    ? "is-invalid"
                    : ""
                    }`}
                  {...formik.getFieldProps("subHeading")}
                />
                {formik.touched.subHeading &&
                  formik.errors.subHeading && (
                    <div className="invalid-feedback">
                      {formik.errors.subHeading}
                    </div>
                  )}
              </div>
            </div>
            <div className="col-md-6 col-12 mb-2">
              <lable className="form-lable">About Image<span className="text-danger">*</span></lable>
              <div className="mb-3">
                <input
                  type="file"
                  className={`form-control  ${formik.touched.aboutImage && formik.errors.aboutImage
                    ? "is-invalid"
                    : ""
                    }`}
                  {...formik.getFieldProps("aboutImage")}
                />
                {formik.touched.aboutImage &&
                  formik.errors.aboutImage && (
                    <div className="invalid-feedback">
                      {formik.errors.aboutImage}
                    </div>
                  )}
              </div>
            </div>
          </div>
          <div className="row flex-nowrap">
          <div className="col-1 text-end d-flex justify-content-center align-items-end ">
              {rows.length > 1 && (
                <button
                  type="button"
                  className="btn"
                  style={{ marginBottom: "1.0rem" }}
                >
                  <IoIosCloseCircleOutline
                    onClick={() => setRows((pr) => pr.slice(0, -1))}
                    style={{ fontSize: "2rem", color: "red", background: "none" }}
                  />
                </button>
              )}
            </div>
      <div className="col-11 mt-3">
              <lable className="form-lable">Solution Points<span className="text-danger">*</span></lable>
                <div className="table-responsive table-bordered">
                  <table class="table table-light table-nowrap">
                    <thead className="thead-light">
                      <tr>
                        <th>Solution Name <span className="text-danger">*</span></th>
                        <th>Solution Content <span className="text-danger">*</span></th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((row) => {
                        return (
                          <tr>
                            <td>
                              {" "}
                              <input
                                className={`form-control  ${formik.touched.solutionName && formik.errors.solutionName
                                  ? "is-invalid"
                                  : ""
                                  }`}
                                {...formik.getFieldProps("solutionName")}
                                type="text"
                              />
                              {formik.touched.solutionName &&
                                formik.errors.solutionName && (
                                  <div className="invalid-feedback">
                                    {formik.errors.solutionName}
                                  </div>
                                )}
                            </td>
                            <td>
                              {" "}
                              <textarea className={`form-control  ${formik.touched.solutionContent && formik.errors.solutionContent
                                ? "is-invalid"
                                : ""
                                }`}
                                {...formik.getFieldProps("solutionContent")}></textarea>
                              {formik.touched.solutionContent &&
                                formik.errors.solutionContent && (
                                  <div className="invalid-feedback">
                                    {formik.errors.solutionContent}
                                  </div>
                                )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
            </div>
          </div>
          <div className="row d-flex justify-content-start align-items-start">
              <div className="col-12 mb-3 mt-3">
                <button
                  type="button"
                  className="btn btn-sm btn-danger me-2"
                  onClick={() => {
                    setRows((pr) => [...pr, {}]);
                  }}
                >
                  <FaPlus />  Add Points
                </button>
              </div>
            </div>
          <div className="col d-flex justify-content-end align-items-end">
            <div className="mb-3">
              <button type="submit" className="btn btn-primary">Update</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AdminAbout;
