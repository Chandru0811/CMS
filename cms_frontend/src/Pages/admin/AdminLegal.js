import React from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";

function AdminLegal() {

    const validationSchema = Yup.object({
        generalInfo: Yup.string().required("*General info is required"),
        privacyPolicy: Yup.string().required("*Privacy policy is required"),
        termsOfService: Yup.string().required("*Terms of service is required"),
        consultations: Yup.string().required("*Consultations is required"),
        howItWorks: Yup.string().required("*How it works is required")
    });

    const formik = useFormik({
        initialValues: {
            generalInfo: "",
            privacyPolicy: "",
            termsOfService: "",
            consultations: "",
            howItWorks: ""
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            console.log("Admin Legal Datas:", values);
        },
    });

    return (
        <section className="container my-4">
            <div className="card mx-2 p-3">
                <form className="row g-3" onSubmit={formik.handleSubmit}>
                    <div className="col-12 mb-3">
                        <label className='form-label'>General Info<span className='text-danger'>*</span></label>
                        <textarea rows="5"
                            {...formik.getFieldProps('generalInfo')}
                            className={`form-control ${formik.touched.generalInfo && formik.errors.generalInfo ? "is-invalid" : ""}`} />
                        {formik.touched.generalInfo && formik.errors.generalInfo && (
                            <div className="invalid-feedback">{formik.errors.generalInfo}</div>
                        )}
                    </div>
                    <div className="col-12 mb-3">
                        <label className='form-label'>Privacy Policy<span className='text-danger'>*</span></label>
                        <textarea rows="5"
                            {...formik.getFieldProps('privacyPolicy')}
                            className={`form-control ${formik.touched.privacyPolicy && formik.errors.privacyPolicy ? "is-invalid" : ""}`} />
                        {formik.touched.privacyPolicy && formik.errors.privacyPolicy && (
                            <div className="invalid-feedback">{formik.errors.privacyPolicy}</div>
                        )}
                    </div>
                    <div className="col-12 mb-3">
                        <label className='form-label'>Terms of Service<span className='text-danger'>*</span></label>
                        <textarea rows="5"
                            {...formik.getFieldProps('termsOfService')}
                            className={`form-control ${formik.touched.termsOfService && formik.errors.termsOfService ? "is-invalid" : ""}`} />
                        {formik.touched.termsOfService && formik.errors.termsOfService && (
                            <div className="invalid-feedback">{formik.errors.termsOfService}</div>
                        )}
                    </div>
                    <div className="col-12 mb-3">
                        <label className='form-label'>Consultations<span className='text-danger'>*</span></label>
                        <textarea rows="5"
                            {...formik.getFieldProps('consultations')}
                            className={`form-control ${formik.touched.consultations && formik.errors.consultations ? "is-invalid" : ""}`} />
                        {formik.touched.consultations && formik.errors.consultations && (
                            <div className="invalid-feedback">{formik.errors.consultations}</div>
                        )}
                    </div>
                    <div className="col-12 mb-3">
                        <label className='form-label'>How it Works<span className='text-danger'>*</span></label>
                        <textarea rows="5"
                            {...formik.getFieldProps('howItWorks')}
                            className={`form-control ${formik.touched.howItWorks && formik.errors.howItWorks ? "is-invalid" : ""}`} />
                        {formik.touched.howItWorks && formik.errors.howItWorks && (
                            <div className="invalid-feedback">{formik.errors.howItWorks}</div>
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
    )
}

export default AdminLegal;