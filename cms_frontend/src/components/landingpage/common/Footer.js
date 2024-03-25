import React from "react";
// import "../../style/custom.css";
import Logo from "../../../assets/images/Logo.png";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const handleClick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function Footer() {
  return (
    <section>
      <div className="d-flex flex-column align-items-center footerSection py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12 mb-3 d-flex flex-column justify-content-center">
              <img
                src={Logo}
                alt="WWG"
                className="img-fluid"
                width={100}
                height={100}
              />
              <p className="footerText my-4">
              A Content Management System (CMS) is a powerful tool that simplifies the creation, editing, and management of digital content.
              </p>
              <span className="d-flex">
                <Nav.Link
                  href="https://www.instagram.com/thesunriseyc?igsh=MTUyanZwZmM2eXNrZw=="
                  style={{ border: "0px" }}
                  target="_blank"
                >
                  <FaInstagram className="footerIcon" />
                </Nav.Link>
                <Nav.Link
                  href="https://www.facebook.com/wwgem?mibextid=hIlR13"
                  style={{ border: "0px" }}
                  target="_blank"
                >
                  <FaFacebook className="footerIcon" />
                </Nav.Link>
                <FaXTwitter className="footerIcon" />
                <FaWhatsapp className="footerIcon" />
              </span>
            </div>
            <div className="col-lg-8 col-md-9 col-12">
              <div className="row footerRow">
                <div className="col-md-6 col-12">
                  <p className="footerHeading mt-3">Get Involved</p>
                  <hr />
                  <span className="d-flex flex-column">
                    <Link
                      to="/about"
                      onClick={handleClick}
                      style={{ textDecoration: "none" }}
                    >
                      <span className="footerContent">Home</span>
                    </Link>
                    <Link
                      to="/program"
                      onClick={handleClick}
                      style={{ textDecoration: "none" }}
                    >
                      <span className="footerContent">Products</span>
                    </Link>
                    <Link
                      to="/join/member"
                      onClick={handleClick}
                      style={{ textDecoration: "none" }}
                    >
                      <span className="footerContent">Contact Us</span>
                    </Link>
                    <Link
                      to="/program"
                      onClick={handleClick}
                      style={{ textDecoration: "none" }}
                    >
                      <span className="footerContent">About Us</span>
                    </Link>
                  </span>
                </div>
                <div className="col-md-6 col-12">
                  <p className="footerHeading mt-3">Contact</p>
                  <hr />
                  <span className="d-flex flex-column">
                    <span
                      className="footerContent"
                      style={{ marginBottom: "20px" }}
                    >
                      XYZ, <br />
                      Singapore
                    </span>
                    <span className="footerContent">
                      admin@gmail.com <br />
                      management@gmail.com <br />
                      +65 8269 4567
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="d-flex flex-column align-items-center py-3"
        style={{ backgroundColor: "#170a5f", color: "#fff" }}
      >
        <span className="footerCopyrights">
          copyrights @ ECS CMS 2023
        </span>
      </div>
    </section>
  );
}

export default Footer;
