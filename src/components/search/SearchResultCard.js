import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../assets/styles/SearchResultCard.css";

const SearchResultCard = ({ image, title, description, price, rating, id }) => {
  return (
    <div className="search-result-card card shadow-sm mb-4">
      <div className="row g-0">
        {/* Image Section */}
        <div className="col-md-4">
          <img
            src={image}
            alt={title}
            className="img-fluid search-result-card-image"
          />
        </div>

        {/* Content Section */}
        <div className="col-md-8">
          <div className="card-body d-flex flex-column h-100">
            <h5 className="card-title">{title}</h5>
            <p className="card-text search-result-description">
              {description}
            </p>

            <div className="mt-auto">
              {/* Price and Rating */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="search-result-price">${price} / night</span>
                <span className="search-result-rating">
                  {rating} ⭐
                </span>
              </div>

              {/* View Details Button */}
              <Link
                to={`/hotels/${id}`}
                className="btn btn-primary w-100 search-result-button"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SearchResultCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default SearchResultCard;
