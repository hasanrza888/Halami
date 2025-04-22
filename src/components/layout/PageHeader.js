import React from "react";
import PropTypes from "prop-types";
import "../../assets/styles/pageHeader.css";

const PageHeader = ({ title, subtitle, backgroundImage }) => {
  return (
    <header
      className="page-header py-5 text-light text-center"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: backgroundImage ? "rgba(0, 0, 0, 0.5)" : "#007bff", // Fallback color if no image
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="container">
        <h1 className="fw-bold">{title}</h1>
        {subtitle && <p className="mt-3 fs-5">{subtitle}</p>}
      </div>
    </header>
  );
};

// Define PropTypes for better validation
PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  backgroundImage: PropTypes.string,
};

// Default Props
PageHeader.defaultProps = {
  subtitle: null,
  backgroundImage: null,
};

export default PageHeader;
