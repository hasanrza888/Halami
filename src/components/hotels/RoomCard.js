import React from 'react';
import PropTypes from 'prop-types';
import Button from '../common/Button';
import '../../assets/styles/roomCard.css';

const RoomCard = ({ name, image, price, description, onBookNow }) => {
  return (
    <div className="card room-card mb-4">
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text mb-3">{description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <span className="text-success fw-bold">${price}/night</span>
          <Button label="Book Now" variant="primary" size="sm" onClick={onBookNow}/>
        </div>
      </div>
    </div>
  );
};

RoomCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default RoomCard;
