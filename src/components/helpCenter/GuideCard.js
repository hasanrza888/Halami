import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../assets/styles/GuideCard.css";

const GuideCard = ({ title, thumbnail, description, guideId }) => {
  return (
    <div className="guide-card card shadow-sm h-100">
      <Link to={`/guides/${guideId}`} className="guide-card-link">
        <img
          src={thumbnail}
          alt={title}
          className="card-img-top guide-card-thumbnail"
        />
      </Link>
      <div className="card-body d-flex flex-column">
        {/* Title */}
        <h5 className="card-title guide-card-title">
          <Link to={`/guides/${guideId}`} className="text-dark">
            {title}
          </Link>
        </h5>
        {/* Description */}
        <p className="card-text guide-card-description">{description}</p>
        {/* Read More Button */}
        <Link to={`/guides/${guideId}`} className="btn btn-primary mt-auto">
          Read More
        </Link>
      </div>
    </div>
  );
};

GuideCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  guideId: PropTypes.string.isRequired,
};

export default GuideCard;
