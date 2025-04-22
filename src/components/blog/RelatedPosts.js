import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../assets/styles/relatedPosts.css";

const RelatedPosts = ({ posts }) => {
  return (
    <div className="container related-posts my-5">
      <h3 className="related-posts-title mb-4">Related Posts</h3>
      <div className="row g-4">
        {posts.map((post) => (
          <div key={post.id} className="col-md-4">
            <div className="card related-post-card h-100 shadow-sm">
              {/* Thumbnail */}
              <Link to={`/blogs/${post.id}`} className="related-post-link">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="card-img-top related-post-thumbnail"
                />
              </Link>
              <div className="card-body">
                {/* Title */}
                <h5 className="card-title related-post-title">
                  <Link to={`/blogs/${post.id}`} className="text-dark">
                    {post.title}
                  </Link>
                </h5>
                {/* Excerpt */}
                <p className="card-text related-post-excerpt">
                  {post.excerpt}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

RelatedPosts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default RelatedPosts;
