import React from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";


function AdminCommon() {

    const validationSchema = Yup.object({
        logo: "",
        footerContent: "",
        footerSubHeading: "",
        emailID1: "",
        emailID2: "",
        phoneNo1: "",
        phoneNo2: "",
        copyrights: "",
        url1: "",
        url2: "",
        url3: ""
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
            copyrights: "",
            url1: "",
            url2: "",
            url3: ""
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
                                className='form-control' />
                        </div>
                        <div className='col-12 mb-3'>
                            <label className='form-label'>Footer Content<span className='text-danger'>*</span></label>
                            <textarea rows="5"
                                className='form-control'></textarea>
                        </div>
                        <div className='col-md-6 col-12 mb-3'>
                            <label className='form-label'>Footer Sub Heading<span className='text-danger'>*</span></label>
                            <input type="text"
                                className='form-control' />
                        </div>
                        <div className='col-md-6 col-12 mb-3'></div>
                        <div className='col-md-6 col-12 mb-3'>
                            <label className='form-label'>Email ID 1<span className='text-danger'>*</span></label>
                            <input type="email"
                                className='form-control' />
                        </div>
                        <div className='col-md-6 col-12 mb-3'>
                            <label className='form-label'>Email ID 2<span className='text-danger'>*</span></label>
                            <input type="email"
                                className='form-control' />
                        </div>
                        <div className='col-md-6 col-12 mb-3'>
                            <label className='form-label'>Phone No 1<span className='text-danger'>*</span></label>
                            <input type="tel"
                                className='form-control' />
                        </div>
                        <div className='col-md-6 col-12 mb-3'>
                            <label className='form-label'>Phone No 2<span className='text-danger'>*</span></label>
                            <input type="tel"
                                className='form-control' />
                        </div>
                        <div className='col-md-6 col-12 mb-3'>
                            <label className='form-label'>Copyrights<span className='text-danger'>*</span></label>
                            <input type='text'
                                className='form-control' />
                        </div>
                        <div className='col-md-6 col-12 mb-3'>
                            <label className='form-label'>URL 1<span className='text-danger'>*</span></label>
                            <input type='url'
                                className='form-control' />
                        </div>
                        <div className='col-md-6 col-12 mb-3'>
                            <label className='form-label'>URL 2<span className='text-danger'>*</span></label>
                            <input type='url'
                                className='form-control' />
                        </div>
                        <div className='col-md-6 col-12 mb-3'>
                            <label className='form-label'>URL 3<span className='text-danger'>*</span></label>
                            <input type='url'
                                className='form-control' />
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