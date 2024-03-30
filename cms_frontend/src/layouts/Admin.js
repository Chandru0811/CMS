import React from "react";
import Header from "../Components/Admin/Header";
import Sidebar from "../Components/Admin/Sidebar";
import Content from "../Components/Admin/Content";
import Footer from "../Components/Admin/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../Styles/admin/Admin.css";
import AdminCommon from "../Pages/admin/AdminCommon";
import AdminHome from "../Pages/admin/AdminHome";
import AdminAbout from "../Pages/admin/AdminAbout";
import AdminService from "../Pages/admin/AdminService";
import AdminWhyChooseUs from "../Pages/admin/AdminWhyChooseUs";
import AdminLegal from "../Pages/admin/AdminLegal";
import { ToastContainer } from "react-toastify";
import Doctor from "../Pages/admin/Doctor/Doctor";
import DoctorAdd from "../Pages/admin/Doctor/DoctorAdd";
import DoctorEdit from "../Pages/admin/Doctor/DoctorEdit";
import DoctorView from "../Pages/admin/Doctor/DoctorView";
import Review from "../Pages/admin/Review/Review";
import ReviewAdd from "../Pages/admin/Review/ReviewAdd";
import ReviewEdit from "../Pages/admin/Review/ReviewEdit";
import ReviewView from "../Pages/admin/Review/ReviewView";
// import Settings from "../Components/Admin/Settings";

function Admin({ handleLogout }) {
  return (
    <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
      <BrowserRouter>
        <ToastContainer position="top-center" />

        <Header onLogout={handleLogout} />
        {/* <Settings /> */}

        <div class="app-main">
          <Sidebar />
          <div class="app-main__outer">
            <div className="minHeight">
              <Routes>
                <Route path="/" element={<Content />} />
                <Route path="/admin/common" element={<AdminCommon />} />
                <Route path="/admin/home" element={<AdminHome />} />
                <Route path="/admin/about" element={<AdminAbout />} />
                <Route path="/admin/service" element={<AdminService />} />
                <Route path="/admin/whychooseus" element={<AdminWhyChooseUs/>}/>
                <Route path="/admin/legal" element={<AdminLegal />} />

                {/* Doctor  */}
                <Route path="/admin/doctor" element={<Doctor />} />
                <Route path="/admin/doctor/add" element={<DoctorAdd />} />
                <Route path="/admin/doctor/edit" element={<DoctorEdit />} />
                <Route path="/admin/doctor/view" element={<DoctorView />} />

                {/* Review  */}
                <Route path="/admin/review" element={<Review />} />
                <Route path="/admin/review/add" element={<ReviewAdd />} />
                <Route path="/admin/review/edit" element={<ReviewEdit />} />
                <Route path="/admin/review/view" element={<ReviewView />} />

                <Route path="*" element={<Content />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Admin;
