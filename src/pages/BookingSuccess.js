import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import "../assets/styles/bookingSuccess.css";

const BookingSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingData = location.state;

  if (!bookingData) {
    return (
      <div className="container mt-5">
        <h2>No booking details found!</h2>
        <button onClick={() => navigate("/")} className="btn btn-primary">
          Back to Home
        </button>
      </div>
    );
  }

  const { userInfo, bookingDetails } = bookingData;
  const { room, dates, guests, finalTotal, includeTransfer } = bookingDetails;

  return (
    <div className="container booking-success mt-5 py-5">
      <div className="text-center">
        <FaCheckCircle className="success-icon" />
        <h1 className="mt-3">Booking Confirmed!</h1>
        <p className="text-muted">Thank you for your booking. A confirmation email has been sent to <strong>{userInfo.email}</strong>.</p>
      </div>

      {/* Booking Details */}
      <section className="booking-summary mt-4">
        <h2>Booking Details</h2>
        <p><strong>Room:</strong> {room.name}</p>
        <p><strong>Price per Night:</strong> ${room.price}</p>
        <p><strong>Check-In:</strong> {dates.checkIn}</p>
        <p><strong>Check-Out:</strong> {dates.checkOut}</p>
        <p><strong>Total Nights:</strong> {(new Date(dates.checkOut) - new Date(dates.checkIn)) / (1000 * 60 * 60 * 24)}</p>
        <p><strong>Guests:</strong> {guests}</p>
        {includeTransfer && <p><strong>Airport Transfer:</strong> $50</p>}
        <p><strong>Total Cost:</strong> ${finalTotal}</p>
      </section>

      {/* User Information */}
      <section className="user-info mt-4">
        <h2>User Information</h2>
        <p><strong>Name:</strong> {userInfo.name} {userInfo.surname}</p>
        <p><strong>Phone:</strong> {userInfo.phone}</p>
        <p><strong>Email:</strong> {userInfo.email}</p>
      </section>

      {/* Navigation Options */}
      <div className="text-center mt-4">
        <button
          onClick={() => navigate("/")}
          className="btn btn-secondary me-2"
        >
          Back to Home
        </button>
        <button
          onClick={() => navigate("/hotels")}
          className="btn btn-primary"
        >
          View More Hotels
        </button>
      </div>
    </div>
  );
};

export default BookingSuccess;
