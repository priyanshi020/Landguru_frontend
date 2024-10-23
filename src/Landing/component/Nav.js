// src/Navbar.js
import React from "react";
import "./CSS/Navbar.css";
import logo from "../../Images/logo.png";
import Button from "../../component/Button";
const Nav = () => {
  return (
    <nav className="navbar d-flex " style={{ margin: "0% 5%" }}>
      <div className="navbar-brand">
        <img src={logo} className="" style={{ marginRight: "10px" }} />
        Landinguru
      </div>
      <div>
        <ul className="navbar-links mt-3">
          <li>Home</li>
          <li>Advertise</li>
          <li>Support</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <Button
          text="Try free"
          color="#EF9E48"
          size="sm"
          block={true}
          className=""
        />
      </div>
    </nav>
  );
};

export default Nav;
