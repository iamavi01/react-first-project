import React from "react";
import "./stylenav.css";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <a className="navbar-brand" href="#">
        <img className="logo"src="https://nrskarmakar.com/images/company-logo/default-logo.png"/>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav projectnav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home 
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              about
            </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">
              projects
            </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">
              contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
