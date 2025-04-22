import React from "react";
import PropTypes from "prop-types";
import "../../assets/styles/BlogContent.css";

const BlogContent = ({ title, featuredImage, publishDate, author, body }) => {
  return (
    <article className="blog-content container my-5">
      {/* Title */}
      <h1 className="blog-content-title text-center mb-4">{title}</h1>

      {/* Metadata */}
      <div className="blog-content-metadata text-center mb-4 text-muted">
        <span className="me-3">
          <i className="fas fa-calendar-alt me-2"></i>
          {publishDate}
        </span>
        <span>
          <i className="fas fa-user me-2"></i>
          By {author}
        </span>
      </div>

      {/* Featured Image */}
      {featuredImage && (
        <div className="blog-content-image text-center mb-4">
          <img
            src={featuredImage}
            alt={title}
            className="img-fluid rounded"
          />
        </div>
      )}

      {/* Body */}
      <div className="blog-content-body">
        {body.split("\n").map((paragraph, index) => (
          <p key={index} className="mb-3">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
};

BlogContent.propTypes = {
  title: PropTypes.string.isRequired,
  featuredImage: PropTypes.string,
  publishDate: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

BlogContent.defaultProps = {
  featuredImage: null,
};

export default BlogContent;
