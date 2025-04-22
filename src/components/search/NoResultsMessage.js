import React from "react";
import PropTypes from "prop-types";
import "../../assets/styles/NoResultsMessage.css";

const NoResultsMessage = ({ title, subtitle, image }) => {
  return (
    <div className="no-results-message container text-center py-5">
      {image && <img src={image} alt="No results found" className="no-results-image mb-4" />}
      <h2 className="no-results-title">{title}</h2>
      {subtitle && <p className="no-results-subtitle">{subtitle}</p>}
    </div>
  );
};

NoResultsMessage.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  image: PropTypes.string,
};

NoResultsMessage.defaultProps = {
  subtitle: "Try adjusting your filters or search criteria.",
  image: "/assets/images/no-results.png", // Example default image
};

export default NoResultsMessage;
