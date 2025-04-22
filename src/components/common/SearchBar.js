import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../assets/styles/SearchBar.css";

const SearchBar = ({ placeholder, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
    // }
  };

  return (
    <div className="search-bar my-3">
      <form className="d-flex" onSubmit={handleSearch}>
        <input
          type="text"
          className="form-control search-bar-input"
          placeholder={placeholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="btn btn-primary ms-2">
          Search
        </button>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  placeholder: "Search...",
};

export default SearchBar;
