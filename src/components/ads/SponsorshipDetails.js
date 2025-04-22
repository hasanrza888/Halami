import React from "react";
import PropTypes from "prop-types";
import "../../assets/styles/SponsorshipDetails.css";

const SponsorshipDetails = ({ image, title, description, details, ctaText, ctaLink }) => {
  return (
    <div className="sponsorship-details container my-5">
      {/* Title */}
      <h1 className="text-center sponsorship-title mb-4">{title}</h1>

      {/* Image */}
      <div className="sponsorship-image-container mb-4">
        <img src={image} alt={title} className="img-fluid sponsorship-image" />
      </div>

      {/* Description */}
      <section className="sponsorship-description mb-4">
        <h2 className="sponsorship-section-title">About</h2>
        <p className="sponsorship-text">{description}</p>
      </section>

      {/* Details */}
      <section className="sponsorship-details-info mb-4">
        <h2 className="sponsorship-section-title">Details</h2>
        <ul className="sponsorship-list">
          {details.map((detail, index) => (
            <li key={index} className="sponsorship-list-item">
              {detail}
            </li>
          ))}
        </ul>
      </section>

      {/* Call-to-Action Button */}
      <div className="text-center">
        <a href={ctaLink} className="btn btn-primary sponsorship-cta">
          {ctaText}
        </a>
      </div>
    </div>
  );
};

SponsorshipDetails.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  details: PropTypes.arrayOf(PropTypes.string).isRequired,
  ctaText: PropTypes.string.isRequired,
  ctaLink: PropTypes.string.isRequired,
};

export default SponsorshipDetails;
