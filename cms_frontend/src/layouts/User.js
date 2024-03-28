import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../App.css";
import "../Styles/Login.css";
import Home from "../Pages/Home";
import Legal from "../Pages/Legal";
import NotFound from "../Pages/NotFound";
import Appointment from "../Pages/Appointment";
import Login from "../Pages/Login";

function User({ handleLogin }) {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default User;
