import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../assets/styles/BlogCard.css";

const BlogCard = ({ title, thumbnail, excerpt, publishDate, blogId }) => {
  return (
    <div className="blog-card card shadow-sm h-100">
      <Link to={`/blogs/${blogId}`} className="blog-card-link">
        <img
          src={thumbnail}
          alt={title}
          className="card-img-top blog-card-thumbnail"
        />
      </Link>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title blog-card-title">{title}</h5>
        <p className="card-text blog-card-excerpt">{excerpt}</p>
        <p className="blog-card-date text-muted mt-auto">{publishDate}</p>
        <Link
          to={`/blogs/${blogId}`}
          className="btn btn-primary mt-3 align-self-start"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired,
  blogId: PropTypes.string.isRequired,
};

export default BlogCard;
