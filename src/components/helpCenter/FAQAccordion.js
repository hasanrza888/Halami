import React from "react";
import PropTypes from "prop-types";
import "../../assets/styles/FAQAccordion.css";

const FAQAccordion = ({ faqs }) => {
  return (
    <div className="faq-accordion container my-5">
      <h2 className="text-center mb-4 faq-title">Frequently Asked Questions</h2>
      <div className="accordion" id="faqAccordion">
        {faqs.map((faq, index) => (
          <div key={index} className="accordion-item">
            <h2 className="accordion-header" id={`heading-${index}`}>
              <button
                className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse-${index}`}
                aria-expanded={index === 0 ? "true" : "false"}
                aria-controls={`collapse-${index}`}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`collapse-${index}`}
              className={`accordion-collapse collapse ${
                index === 0 ? "show" : ""
              }`}
              aria-labelledby={`heading-${index}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

FAQAccordion.propTypes = {
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FAQAccordion;
