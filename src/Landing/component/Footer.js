import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <footer
        class="  "
        style={{ margin: "0 20%", borderTop: "1px solid #E5ECF4" }}
      >
        <div class="container p-4">
          <div class="row">
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <p className="mb-3" style={{ fontSize: "18px" }}>
                About Us
              </p>

              <ul class="list-unstyled mb-0" style={{ lineHeight: "35px" }}>
                <li style={{ fontSize: "14px", color: "#02073E" }}>
                  Support Center
                </li>
                <li style={{ fontSize: "14px", color: "#02073E" }}>
                  Customer Support
                </li>
                <li style={{ fontSize: "14px", color: "#02073E" }}>About Us</li>
                <li style={{ fontSize: "14px", color: "#02073E" }}>
                  Copyright
                </li>
                <li style={{ fontSize: "14px", color: "#02073E" }}>
                  Popular Campaign
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <p className="mb-3" style={{ fontSize: "18px" }}>
                Our Information
              </p>

              <ul class="list-unstyled mb-0" style={{ lineHeight: "35px" }}>
                <li style={{ fontSize: "14px", color: "#02073E" }}>
                  Return Policy
                </li>
                <li style={{ fontSize: "14px", color: "#02073E" }}>
                  Privacy Policy
                </li>
                <li style={{ fontSize: "14px", color: "#02073E" }}>
                  Terms & Conditions
                </li>
                <li style={{ fontSize: "14px", color: "#02073E" }}>Site Map</li>
                <li style={{ fontSize: "14px", color: "#02073E" }}>
                  Store Hours
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <p className="mb-3" style={{ fontSize: "18px" }}>
                My Account
              </p>

              <ul class="list-unstyled mb-0" style={{ lineHeight: "35px" }}>
                <li style={{ fontSize: "14px", color: "#02073E" }}>
                  Press inquiries
                </li>
                <li style={{ fontSize: "14px", color: "#02073E" }}>
                  Social media
                </li>
                <li style={{ fontSize: "14px", color: "#02073E" }}>
                  directories
                </li>
                <li style={{ fontSize: "14px", color: "#02073E" }}>
                  Images & B-roll
                </li>
                <li style={{ fontSize: "14px", color: "#02073E" }}>
                  Permissions
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <p className="mb-3" style={{ fontSize: "18px" }}>
                Policy
              </p>

              <ul class="list-unstyled mb-0" style={{ lineHeight: "35px" }}>
                <li style={{ fontSize: "14px", color: "#02073E" }}>
                  Application Security
                </li>
                <li style={{ fontSize: "14px", color: "#02073E" }}>
                  Software prinicples
                </li>
                <li style={{ fontSize: "14px", color: "#02073E" }}>
                  Unwanted software policy
                </li>
                <li style={{ fontSize: "14px", color: "#02073E" }}>
                  Resopnsible supply chain
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
