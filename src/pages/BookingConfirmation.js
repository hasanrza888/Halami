import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "../components/common/Button";
import RoomCard from "../components/hotels/RoomCard";
import "../assets/styles/bookingConfirmation.css";

const BookingConfirmation = () => {
    
  const [includeTransfer, setIncludeTransfer] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Extract booking details from state passed via navigation
  const bookingDetails = location.state;

  if (!bookingDetails) {
    return (
      <div className="container mt-5">
        <h2>Booking details are missing!</h2>
        <Button
          label="Go Back"
          variant="secondary"
          onClick={() => navigate(-1)} // Navigate back to the previous page
        />
      </div>
    );
  }

  const { room, dates, guests, totalCost } = bookingDetails;
  

  const handleConfirm = () => {
    // Redirect to success page or payment gateway
    alert("Booking confirmed!");
    navigate("/payment", {
        state: {
          room,
          dates,
          guests,
          totalCost,
          includeTransfer,
        },
      });
  };

  const handleModifyBooking = (room, hotelId) => {
    // Navigate back to HotelDetails with the selected room info
    navigate(`/hotels/${hotelId}`, {
        state: { selectedRoom: room.name },
    });
  };
  

  return (
    <div className="container booking-confirmation py-5">
      <h1 className="mb-4 text-center text-success fs-2">Booking Confirmation</h1>

      {/* Booking Summary */}
      <section className="booking-summary mb-4">
        <h2>Booking Summary</h2>
        <RoomCard
          name={room.name}
          image={room.image}
          price={room.price}
          description={`${room.name} for ${guests} guest(s)`}
          onBookNow={() => handleModifyBooking(room, room.id)}
        />
        <p><strong>Check-In:</strong> {dates.checkIn}</p>
        <p><strong>Check-Out:</strong> {dates.checkOut}</p>
        <p><strong>Total Guests:</strong> {guests}</p>
        <p><strong>Total Cost:</strong> ${totalCost}</p>
      </section>

      {/* Airport Transfer Option */}
      <section className="airport-transfer mb-4">
        <h2>Extras</h2>
        <div className="form-check">
          <input
            type="checkbox"
            id="airportTransfer"
            className="form-check-input"
            checked={includeTransfer}
            onChange={() => setIncludeTransfer(!includeTransfer)}
          />
          <label htmlFor="airportTransfer" className="form-check-label">
            Add Airport Transfer (+ $50)
          </label>
        </div>
      </section>

      {/* Confirmation Actions */}
      <div className="actions">
        <Button
          label="Confirm Booking"
          variant="primary"
          size="lg"
          onClick={handleConfirm}
        />
        <Button
          label="Cancel"
          variant="secondary"
          size="lg"
          onClick={() => navigate(-1)}
        />
      </div>
    </div>
  );
};

BookingConfirmation.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
  dates: PropTypes.shape({
    checkIn: PropTypes.string.isRequired,
    checkOut: PropTypes.string.isRequired,
  }),
  guests: PropTypes.number.isRequired,
  totalCost: PropTypes.number.isRequired,
};

export default BookingConfirmation;
