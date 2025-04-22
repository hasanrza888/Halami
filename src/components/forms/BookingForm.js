import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Button from '../common/Button';
import '../../assets/styles/bookingForm.css';

const BookingForm = ({ onSubmit, roomTypes, selectedRoom }) => {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [guests, setGuests] = useState(1);
  const [roomType, setRoomType] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (selectedRoom) {
      setRoomType(selectedRoom);
    }
  }, [selectedRoom]);
  

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!checkIn || !checkOut || !roomType) {
      setError('Please fill in all required fields.');
      return;
    }

    // Ensure check-out date is after check-in date
    if (checkIn >= checkOut) {
      setError('Check-Out date must be after Check-In date.');
      return;
    }

    // Clear error and pass booking data
    setError('');
    onSubmit({
      checkIn: checkIn.toISOString().split('T')[0], // Format to YYYY-MM-DD
      checkOut: checkOut.toISOString().split('T')[0],
      guests,
      roomType,
    });

    // Reset form fields
    setCheckIn(null);
    setCheckOut(null);
    setGuests(1);
    setRoomType('');
  };

  return (
    <div className="booking-form-wrapper d-flex align-items-center justify-content-center">
      <form
        onSubmit={handleFormSubmit}
        className="booking-form p-4 shadow rounded w-100"
      >
        <h3 className="mb-4 text-center">Reserve Your Stay</h3>

        {/* Error Message */}
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        <div className="row">
          {/* Check-in Date Picker */}
          <div className="col-12 col-md-6 mb-3">
            <label htmlFor="checkIn" className="form-label">Check-In Date</label>
            <DatePicker
              selected={checkIn}
              onChange={(date) => setCheckIn(date)}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              placeholderText="Select Check-In Date"
              className="form-control"
              required
            />
          </div>

          {/* Check-out Date Picker */}
          <div className="col-12 col-md-6 mb-3">
            <label htmlFor="checkOut" className="form-label">Check-Out Date</label>
            <DatePicker
              selected={checkOut}
              onChange={(date) => setCheckOut(date)}
              dateFormat="dd/MM/yyyy"
              minDate={checkIn || new Date()}
              placeholderText="Select Check-Out Date"
              className="form-control"
              required
            />
          </div>

          {/* Guests Input */}
          <div className="col-12 col-md-6 mb-3">
            <label htmlFor="guests" className="form-label">Number of Guests</label>
            <input
              type="number"
              id="guests"
              className="form-control"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value, 10))}
              min="1"
              max="10"
              required
            />
          </div>

          {/* Room Type Dropdown */}
          <div className="col-12 col-md-6 mb-3">
            <label htmlFor="roomType" className="form-label">Select Room Type</label>
            <select
              id="roomType"
              className="form-select"
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              required
            >
              <option value="">Choose...</option>
              {roomTypes && roomTypes.length > 0 ? (
                roomTypes.map((room) => (
                  <option key={room.id} value={room.name}>
                    {room.name} - ${room.price}/night
                  </option>
                ))
              ) : (
                <option disabled>No rooms available</option>
              )}
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-3">
          <Button
            label="Confirm Booking"
            variant="primary"
            size="lg"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

BookingForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  roomTypes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default BookingForm;
