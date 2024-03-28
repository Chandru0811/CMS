import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../App.css";
import "../Styles/Login.css";
import Home from "../Pages/Home";
import Legal from "../Pages/Legal";
// import NotFound from "../Pages/NotFound";
import Appointment from "../Pages/Appointment";
import Login from "../Pages/Login";
import { ToastContainer } from "react-toastify";

function User({ handleLogin }) {
  return (
    <div className="App">
      <Router>
        <ToastContainer position="top-center" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default User;
