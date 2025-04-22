import React from "react";
import PropTypes from "prop-types";
import "../../assets/styles/Pagination.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li
          key={i}
          className={`page-item ${i === currentPage ? "active" : ""}`}
          onClick={() => handlePageClick(i)}
        >
          <span className="page-link">{i}</span>
        </li>
      );
    }
    return pages;
  };

  return (
    <nav className="pagination-container my-5">
      <ul className="pagination justify-content-center">
        {/* Previous Button */}
        <li
          className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
          onClick={() => handlePageClick(currentPage - 1)}
        >
          <span className="page-link">&laquo;</span>
        </li>

        {/* Page Numbers */}
        {renderPageNumbers()}

        {/* Next Button */}
        <li
          className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
          onClick={() => handlePageClick(currentPage + 1)}
        >
          <span className="page-link">&raquo;</span>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
