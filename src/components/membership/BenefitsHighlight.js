import React from "react";
import PropTypes from "prop-types";
import "../../assets/styles/BenefitsHighlight.css";

const BenefitsHighlight = ({ benefits }) => {
  return (
    <section className="benefits-highlight py-5">
      <div className="container">
        <div className="row text-center">
          {benefits.map((benefit, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="benefit-card p-4 shadow-sm h-100">
                <div className="benefit-icon mb-3">
                  <i className={`${benefit.icon} text-primary fs-2`}></i>
                </div>
                <h5 className="benefit-title fw-bold">{benefit.title}</h5>
                <p className="benefit-description text-muted">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

BenefitsHighlight.propTypes = {
  benefits: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired, // Icon class (e.g., FontAwesome or Bootstrap icon)
      title: PropTypes.string.isRequired, // Title of the benefit
      description: PropTypes.string.isRequired, // Description of the benefit
    })
  ).isRequired,
};

export default BenefitsHighlight;
