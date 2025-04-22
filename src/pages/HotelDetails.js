import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import RoomCard from '../components/hotels/RoomCard';
import BookingForm from '../components/forms/BookingForm';
import '../assets/styles/hotelDetails.css';
import { useParams } from 'react-router-dom';
import Slider from "react-slick";

const HotelDetails = ({ hotels }) => {
  const [mainSlider, setMainSlider] = useState(null);
  const [thumbSlider, setThumbSlider] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState("");
  const navigate = useNavigate();
  const { hotelId } = useParams();

  // Find the matching hotel from the hotels array
  const hotel = hotels.find((h) => h.id === parseInt(hotelId, 10));

  if (!hotel) {
    return <div className="container mt-5"><h2>Hotel not found!</h2></div>;
  }

  // Handle Booking Form Submission
  const handleBookingSubmit = (bookingData) => {
    const room = hotel.rooms.find((r) => r.name === bookingData.roomType);

    if (!room) {
      alert("Invalid room selection!");
      return;
    }

    const totalNights =
      (new Date(bookingData.checkOut) - new Date(bookingData.checkIn)) /
      (1000 * 60 * 60 * 24);
    const totalCost = totalNights * room.price;

    // Redirect to Booking Confirmation Page
    navigate("/booking-confirmation", {
      state: {
        room,
        dates: {
          checkIn: bookingData.checkIn,
          checkOut: bookingData.checkOut,
        },
        guests: bookingData.guests,
        totalCost,
      },
    });
  };

  const mainSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    asNavFor: thumbSlider,
  };

  const thumbSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: mainSlider,
    arrows: true,
  };

  const handleBookNow = (room) => {
    // Scroll to the BookingForm section
    const bookingFormSection = document.querySelector(".booking-form-container");
    if (bookingFormSection) {
      bookingFormSection.scrollIntoView({ behavior: "smooth" });
    }
  
    // Optionally, pre-fill the form
    setSelectedRoom(room.name);
  };
  
  return (
    <div className="hotel-details container mt-4 py-5">
      {/* Hotel Name and Introduction */}
      <section className="hotel-intro mb-5">
        <h1 className="hotel-name">{hotel.name}l</h1>
        <p className="text-muted">{hotel.description}</p>
      </section>

      {/* Image Gallery */}
      <section className="hotel-gallery mb-5 col-lg-10 col-md-12">
        <h2 className="section-title">Photo Gallery</h2>

         {/* Main Slider */}
         <Slider
          {...mainSliderSettings}
          ref={(slider) => setMainSlider(slider)}
          className="main-slider"
        >
          {hotel.gallery.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="gallery-image img-fluid"
              />
            </div>
          ))}
        </Slider>

        {/* Thumbnail Slider */}
        <Slider
          {...thumbSliderSettings}
          ref={(slider) => setThumbSlider(slider)}
          className="thumbnail-slider mt-3"
        >
          {hotel.gallery.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Thumbnail Image ${index + 1}`}
                className="thumbnail-image img-fluid"
              />
            </div>
          ))}
        </Slider>
      </section>

      {/* Hotel Information */}
      <section className="hotel-info mb-4">
        <h2>Details</h2>
        <p>
          <strong>Location:</strong> {hotel.location}
        </p>
        <p>
          <strong>Price:</strong> ${hotel.price}/night
        </p>
        <p>
          <strong>Rating:</strong> {hotel.rating}
        </p>
        <p>
          <strong>Amenities:</strong> {hotel.amenities.join(", ")}
        </p>
      </section>
      
      {/* Room Types */}
      <section className="room-types mb-5">
        <h2 className="section-title">Room Types</h2>
        <div className="row">
        {hotel.rooms.map((room) => (
            <div className="col-md-4" key={room.id}>
              <RoomCard
                name={room.name}
                image={room.image}
                price={room.price}
                description={`${room.name} - starting at $${room.price}/night`}
                onBookNow={() => handleBookNow(room)}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="booking-form-container">
        {/* <h2 className="section-title">Book Your Stay</h2> */}
        <BookingForm
          onSubmit={handleBookingSubmit}
          roomTypes={hotel.rooms}
          selectedRoom={selectedRoom}
        />
      </section>
    </div>
  );
};

HotelDetails.propTypes = {
  hotels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      gallery: PropTypes.arrayOf(PropTypes.string).isRequired,
      description: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      amenities: PropTypes.arrayOf(PropTypes.string).isRequired,
      rooms: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired,
          image: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};


export default HotelDetails;