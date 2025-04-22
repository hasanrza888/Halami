import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row gy-4">
          {/* About Section */}
          <div className="col-md-4">
            <h4 className="fw-bold text-uppercase mb-3 text-white">Halami</h4>
            <p className="text-light small">
              Discover the best halal-friendly hotels, insightful blogs, and exclusive membership offers. Your journey starts here.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5 className="fw-bold text-uppercase mb-3 text-white">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <NavLink
                  to="/hotels"
                  className={({ isActive }) => (isActive ? "text-primary small text-decoration-none" : "text-light small text-decoration-none")}
                >
                  Hotels
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="/blogs"
                  className={({ isActive }) => (isActive ? "text-primary small text-decoration-none" : "text-light small text-decoration-none")}
                >
                  Blog
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="/membership"
                  className={({ isActive }) => (isActive ? "text-primary small text-decoration-none" : "text-light small text-decoration-none")}
                >
                  Membership
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="/help-center"
                  className={({ isActive }) => (isActive ? "text-primary small text-decoration-none" : "text-light small text-decoration-none")}
                >
                  Help Center
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="/ads-sponsorship"
                  className={({ isActive }) => (isActive ? "text-primary small text-decoration-none" : "text-light small text-decoration-none")}
                >
                  Advertise
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="col-md-4">
            <h5 className="fw-bold text-uppercase mb-3 text-white">Follow Us</h5>
            <div className="d-flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-white fs-4"
                style={{ textDecoration: "none" }}
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-white fs-4"
                style={{ textDecoration: "none" }}
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-white fs-4"
                style={{ textDecoration: "none" }}
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-white fs-4"
                style={{ textDecoration: "none" }}
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <small className="text-light">&copy; {new Date().getFullYear()} Halami. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
