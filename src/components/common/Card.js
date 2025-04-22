import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/styles/card.css';

const Card = ({ 
  image = null,
  title,
  description = '',
  footer = null,
  onClick = null,
 }) => {
  return (
    <div className="card h-100 shadow-sm mb-4" onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
      {image && <img src={image} className="card-img-top" alt={title} />}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-muted">{description}</p>
        <div className="mt-auto">
          {footer}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  footer: PropTypes.node,
  onClick: PropTypes.func,
};

export default Card;
