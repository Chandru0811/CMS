import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div class="app-wrapper-footer">
      <div class="app-footer">
        <div class="app-footer__inner">
          <div class="app-footer-left">
            <p style={{ marginBottom: "0px" }}>
              copyrights @ ECSCloudInfotech Pet Ltd
            </p>
          </div>
          <div class="app-footer-right">
            <ul class="nav">
              <li class="nav-item">
                <Link to="#">Terms and Condition</Link>
              </li>{" "}
              &nbsp;&nbsp;&nbsp;
              <li class="nav-item">
                <Link to="#">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
