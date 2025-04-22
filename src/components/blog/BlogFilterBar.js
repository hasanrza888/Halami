import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../assets/styles/BlogFilterBar.css";

const BlogFilterBar = ({ categories, onSearch, onCategorySelect }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleCategoryChange = (category) => {
    onCategorySelect(category);
  };

  return (
    <div className="blog-filter-bar container my-4 col-lg-8 col-md-12">
      <div className="row align-items-center">
        {/* Search Bar */}
        <div className="col-md-6 mb-3 mb-md-0">
          <form onSubmit={handleSearch} className="d-flex">
            <input
              type="text"
              className="form-control blog-search-input me-2"
              placeholder="Search blogs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </form>
        </div>

        {/* Category Filter */}
        <div className="col-md-6 text-md-end">
          <select
            className="form-select blog-category-select"
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

BlogFilterBar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSearch: PropTypes.func.isRequired,
  onCategorySelect: PropTypes.func.isRequired,
};

export default BlogFilterBar;
