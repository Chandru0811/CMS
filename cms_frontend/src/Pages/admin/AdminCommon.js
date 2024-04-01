import React from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";


function AdminCommon() {

    const validationSchema = Yup.object({
        logo: Yup.string().required("*Logo is required"),
        footerContent: Yup.string().required("*Footer content is required"),
        footerSubHeading: Yup.string().required("*Footer sub heading is required"),
        emailID1: Yup.string().required("*Email id 1 is required"),
        emailID2: Yup.string().required("*Email id 2 is required"),
        phoneNo1: Yup.string().required("*Phone no 1 is required"),
        phoneNo2: Yup.string().required("*Phone no 2 is required"),
        copyright: Yup.string().required("*Copyright is required"),
        linkedIn: Yup.string().required("*LinkedIn url is required"),
        facebook: Yup.string().required("*Facebook url is required"),
        twitter: Yup.string().required("*Twitter url is required")
    });

    const formik = useFormik({
        initialValues: {
            logo: "",
            footerContent: "",
            footerSubHeading: "",
            emailID1: "",
            emailID2: "",
            phoneNo1: "",
            phoneNo2: "",
            copyright: "",
            linkedIn: "",
            facebook: "",
            twitter: ""
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            console.log("Admin Common Datas:", values);
        },
    });

    return (
        <div>
            <section className="container my-4">
                <div className="card mx-2 p-3">
                    <form className="row g-3" onSubmit={formik.handleSubmit}>
                        <div className='col-md-6 col-12 mb-3'>
                            <label className='form-label'>Logo<span className='text-danger'>*</span></label>
                            <input type="file"
                                {...formik.getFieldProps('logo')}
                                className={`form-control ${formik.touched.logo && formik.errors.logo ? "is-invalid" : ""}`} />
                            {formik.touched.logo && formik.errors.logo && (
                                <div className="invalid-feedback">{formik.errors.logo}</div>
                            )}
                        </div>
                        <div className='col-12 mb-3'>
                            <label className='form-label'>Footer Content<span className='text-danger'>*</span></label>
                            <textarea rows="5"
                                {...formik.getFieldProps('footerContent')}
                                className={`form-control ${formik.touched.footerContent && formik.errors.footerContent ? "is-invalid" : ""}`} ></textarea>
                            {formik.touched.footerContent && formik.errors.footerContent && (
                                <div className="invalid-feedback">{formik.errors.footerContent}</div>
                            )}
                        </div>
                        <div className='col-md-6 col-12 mb-3'>
                            <label className='form-label'>Footer Sub Heading<span className='text-danger'>*</span></label>
                            <input type="text"
                                {...formik.getFieldProps('footerSubHeading')}
                                className={`form-control ${formik.touched.footerSubHeading && formik.errors.footerSubHeading ? "is-invalid" : ""}`} />
                            {formik.touched.footerSubHeading && formik.errors.footerSubHeading && (
                                <div className="invalid-feedback">{formik.errors.footerSubHeading}</div>
                            )}
                        </div>
                        <div className='col-md-6 col-12 mb-3'></div>
                        <div className='col-md-6 col-12 mb-3'>
                            <label className='form-label'>Email ID 1<span className='text-danger'>*</span></label>
                            <input type="email"
                                {...formik.getFieldProps('emailID1')}
                                className={`form-control ${formik.touched.emailID1 && formik.errors.emailID1 ? "is-invalid" : ""}`} />
                            {formik.touched.emailID1 && formik.errors.emailID1 && (
                                <div className="invalid-feedback">{formik.errors.emailID1}</div>
                            )}
                        </div>
                        <div className='col-md-6 col-12 mb-3'>
                            <label className='form-label'>Email ID 2<span className='text-danger'>*</span></label>
                            <input type="email"
                                {...formik.getFieldProps('emailID2')}
                                className={`form-control ${formik.touched.emailID2 && formik.errors.emailID2 ? "is-invalid" : ""}`} />
                            {formik.touched.emailID2 && formik.errors.emailID2 && (
                                <div className="invalid-feedback">{formik.errors.emailID2}</div>
                            )}
                        </div>
                        <div className='col-md-6 col-12 mb-3'>
                            <label className='form-label'>Phone No 1<span className='text-danger'>*</span></label>
                            <input type="tel"
                                {...formik.getFieldProps('phoneNo1')}
                                className={`form-control ${formik.touched.phoneNo1 && formik.errors.phoneNo1 ? "is-invalid" : ""}`} />
                            {formik.touched.phoneNo1 && formik.errors.phoneNo1 && (
                                <div className="invalid-feedback">{formik.errors.phoneNo1}</div>
                            )}
                        </div>
                        <div className='col-md-6 col-12 mb-3'>
                            <label className='form-label'>Phone No 2<span className='text-danger'>*</span></label>
                            <input type="tel"
                                {...formik.getFieldProps('phoneNo2')}
                                className={`form-control ${formik.touched.phoneNo2 && formik.errors.phoneNo2 ? "is-invalid" : ""}`} />
                            {formik.touched.phoneNo2 && formik.errors.phoneNo2 && (
                                <div className="invalid-feedback">{formik.errors.phoneNo2}</div>
                            )}
                        </div>
                        <div className='col-md-6 col-12 mb-3'>
                            <label className='form-label'>Copyright<span className='text-danger'>*</span></label>
                            <input type='text'
                                {...formik.getFieldProps('copyright')}
                                className={`form-control ${formik.touched.copyright && formik.errors.copyright ? "is-invalid" : ""}`} />
                            {formik.touched.copyright && formik.errors.copyright && (
                                <div className="invalid-feedback">{formik.errors.copyright}</div>
                            )}
                        </div>
                        <div className='col-md-6 col-12 mb-3'>
                            <label className='form-label'>LinkedIn URL<span className='text-danger'>*</span></label>
                            <input type='url'
                                {...formik.getFieldProps('linkedIn')}
                                className={`form-control ${formik.touched.linkedIn && formik.errors.linkedIn ? "is-invalid" : ""}`} />
                            {formik.touched.linkedIn && formik.errors.linkedIn && (
                                <div className="invalid-feedback">{formik.errors.linkedIn}</div>
                            )}
                        </div>
                        <div className='col-md-6 col-12 mb-3'>
                            <label className='form-label'>Facebook URL<span className='text-danger'>*</span></label>
                            <input type='url'
                                {...formik.getFieldProps('facebook')}
                                className={`form-control ${formik.touched.facebook && formik.errors.facebook ? "is-invalid" : ""}`} />
                            {formik.touched.facebook && formik.errors.facebook && (
                                <div className="invalid-feedback">{formik.errors.facebook}</div>
                            )}
                        </div>
                        <div className='col-md-6 col-12 mb-3'>
                            <label className='form-label'>Twitter URL<span className='text-danger'>*</span></label>
                            <input type='url'
                                {...formik.getFieldProps('twitter')}
                                className={`form-control ${formik.touched.twitter && formik.errors.twitter ? "is-invalid" : ""}`} />
                            {formik.touched.twitter && formik.errors.twitter && (
                                <div className="invalid-feedback">{formik.errors.twitter}</div>
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
        </div>
    )
}

export default AdminCommon;