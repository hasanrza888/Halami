import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        {/* Logo */}
        <NavLink to="/" className="navbar-brand fw-bold fs-4 text-dark">
          Halami
        </NavLink>

        {/* Toggler for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "nav-link active text-primary" : "nav-link text-dark")}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/hotels"
                className={({ isActive }) => (isActive ? "nav-link active text-primary" : "nav-link text-dark")}
              >
                Hotels
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/blogs"
                className={({ isActive }) => (isActive ? "nav-link active text-primary" : "nav-link text-dark")}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/membership"
                className={({ isActive }) => (isActive ? "nav-link active text-primary" : "nav-link text-dark")}
              >
                Membership
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/help-center"
                className={({ isActive }) => (isActive ? "nav-link active text-primary" : "nav-link text-dark")}
              >
                Help Center
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/our-sponsors"
                className={({ isActive }) => (isActive ? "nav-link active text-primary" : "nav-link text-dark")}
              >
                Our Sponsors
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/search-results" className="nav-link">
                Search Results
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
