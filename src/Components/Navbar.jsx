import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Navbar.css"; // Importing the external CSS file
import Logo from "./Styles/Logo_book (1).ico";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
      <div className="container d-flex justify-content-center navbar-container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={Logo} alt="Cafe Logo" width="120" height="80" />
          <span className="brand-text text-bold ">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bookify
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-bold" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-bold" to="/products">
                Books
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-bold" to="/authors">
                Authors
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
