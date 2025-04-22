import React, { useRef } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../assets/styles/hotelCard.css";

// StarRating Component
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} className="text-warning" />);
    } else if (rating > i - 1) {
      stars.push(<FaStarHalfAlt key={i} className="text-warning" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-warning" />);
    }
  }
  return <div>{stars}</div>;
};

// HotelCard Component
const HotelCard = ({ id, gallery, name, rating, price, location, onQuickView }) => {
  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false, 
    autoplaySpeed: 800,
    // Initial autoplay is disabled
    pauseOnHover: false, // Allow manual control of autoplay
  };

  const handleMouseEnter = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay(); // Start autoplay on hover
    }
  };

  const handleMouseLeave = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPause(); // Pause autoplay on mouse leave
    }
  };

  return (
    <div 
      className="card shadow-sm h-100 hotel-card" 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Gallery Slider */}
      <Slider {...sliderSettings} ref={sliderRef} className="image-slider">
        {gallery.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className="card-img-top" />
          </div>
        ))}
      </Slider>

      {/* Card Body */}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{name}</h5>
        <p className="card-text text-muted">{location}</p>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <StarRating rating={rating} />
          <span className="text-success fw-bold">${price}/night</span>
        </div>
        {/* Buttons */}
        <div className="d-flex justify-content-between mt-auto">
          <button
            onClick={onQuickView}
            className="btn btn-outline-primary btn-sm"
          >
            Quick View
          </button>
          <Link to={`/hotels/${id}`} className="btn btn-primary btn-sm">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

HotelCard.propTypes = {
  id: PropTypes.number.isRequired,
  gallery: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  onQuickView: PropTypes.func.isRequired,
};

export default HotelCard;
