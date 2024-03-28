import React from "react";
import Header from "../Components/Admin/Header";
import Sidebar from "../Components/Admin/Sidebar";
import Content from "../Components/Admin/Content";
import Footer from "../Components/Admin/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../Styles/admin/Admin.css";
import AdminHome from "../Pages/admin/AdminHome";
import AdminAbout from "../Pages/admin/AdminAbout";

function Admin() {
  return (
    <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
      <BrowserRouter>
        <Header />

        <div class="app-main">
          <Sidebar />
          <div class="app-main__outer">
            <div className="minHeight">
              <Routes>
                <Route path="/" element={<Content />} />
                <Route path="/admin/home" element={<AdminHome />} />
                <Route path="/admin/about" element={<AdminAbout />} />
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
