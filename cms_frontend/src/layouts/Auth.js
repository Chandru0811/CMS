import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../styles/client.css";
import Header from "../components/landingpage/common/Header.js";
import Home from "../pages/Landingpage/Home.js";
import About from "../pages/Landingpage/About";
import Contact from "../pages/Landingpage/Contact";
import Footer from "../components/landingpage/common/Footer";
import TopBar from "../components/landingpage/common/TopBar";
import PrivacyPolicy from "../pages/Landingpage/PrivacyPolicy";
import TermsConditions from "../pages/Landingpage/TermsConditions";
import Login from "../pages/auth/Login.js";
import { ToastContainer } from "react-toastify";
function Auth({ handleLogin }) {
  return (
    <BrowserRouter>
      <ToastContainer position="top-center" />
      <TopBar />
      <Header />
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/terms&conditions" element={<TermsConditions />} />
        <Route path="*" element={<Login onLogin={handleLogin} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Auth;
