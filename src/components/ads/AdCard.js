import React from "react";
import PropTypes from "prop-types";
import "../../assets/styles/AdCard.css";

const AdCard = ({ image, title, description, ctaText, onClick }) => {
  return (
    <div className="ad-card card shadow-sm h-100">
      {/* Image */}
      <div className="ad-card-image-container">
        <img src={image} alt={title} className="card-img-top ad-card-image" />
      </div>
      {/* Card Body */}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title ad-card-title">{title}</h5>
        <p className="card-text ad-card-description">{description}</p>
        <button onClick={onClick} className="btn btn-primary mt-auto">
          {ctaText}
        </button>
      </div>
    </div>
  );
};

AdCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ctaText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default AdCard;
