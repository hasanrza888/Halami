import React from "react";
import PropTypes from "prop-types";
import "../../assets/styles/FilterBar.css";

const FilterBar = ({ filters, onApplyFilter, onResetFilter }) => {
  const handleFilterChange = (field, value) => {
    onApplyFilter(field, value);
  };

  return (
    <div className="filter-bar container my-4">
      <form className="row g-3">
        {/* Location Filter */}
        <div className="col-md-3">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <select
            id="location"
            name="location"
            className="form-select"
            onChange={(e) => handleFilterChange("location", e.target.value)}
            value={filters.location}
          >
            <option value="">All Locations</option>
            <option value="Miami">Miami</option>
            <option value="Denver">Denver</option>
            <option value="New York">New York</option>
          </select>

        </div>

        {/* Price Range Filter */}
        <div className="col-md-3">
          <label htmlFor="priceRange" className="form-label">
            Price Range
          </label>
          <select
            id="priceRange"
            name="priceRange"
            className="form-select"
            onChange={(e) => handleFilterChange("priceRange", e.target.value)}
            value={filters.priceRange}
          >
            <option value="">All Prices</option>
            <option value="low">Low ($0 - $100)</option>
            <option value="medium">Medium ($100 - $300)</option>
            <option value="high">High ($300+)</option>
          </select>
        </div>

        {/* Star Rating Filter */}
        <div className="col-md-3">
          <label htmlFor="starRating" className="form-label">
            Star Rating
          </label>
          <select
            id="starRating"
            name="starRating"
            className="form-select"
            onChange={(e) => handleFilterChange("starRating", e.target.value)}
            value={filters.starRating}
          >
            <option value="">All Ratings</option>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
          </select>
        </div>

        {/* Apply & Reset Buttons */}
        <div className="col-md-3 d-flex align-items-end">
          <button
            type="button"
            className="btn btn-primary w-100 me-2"
            onClick={() => handleFilterChange()}
          >
            Apply Filters
          </button>
          <button
            type="button"
            className="btn btn-secondary w-100"
            onClick={onResetFilter}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

FilterBar.propTypes = {
  filters: PropTypes.shape({
    location: PropTypes.string,
    priceRange: PropTypes.string,
    starRating: PropTypes.string,
  }).isRequired,
  onApplyFilter: PropTypes.func.isRequired,
  onResetFilter: PropTypes.func.isRequired,
};

export default FilterBar;
