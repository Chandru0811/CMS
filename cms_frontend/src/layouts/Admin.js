import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../styles/sidebar.css";
import "boxicons/css/boxicons.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Dashboard from "../pages/Dashboard";
import Sidebar from "../components/common/Sidebar";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { ToastContainer } from "react-bootstrap";


function Admin({ handleLogout }) {
  useEffect(() => {
    let sidebar = document.querySelector(".sidebar");
    let sidebarBtn = document.querySelector(".sidebarBtn");
    sidebarBtn.onclick = function () {
      sidebar.classList.toggle("active");
      if (sidebar.classList.contains("active")) {
        sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
      } else sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    };
  }, []);

  return (
    <div>
      <BrowserRouter>
        <ToastContainer position="top-center" />
        <Sidebar />
        <section className="home-section">
          <Header onLogout={handleLogout} />
          <div className="home-content" style={{ minHeight: "95vh" }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </div>
          <Footer />
        </section>
      </BrowserRouter>
    </div>
  );
}

export default Admin;
