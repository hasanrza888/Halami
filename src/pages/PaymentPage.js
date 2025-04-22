import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../assets/styles/paymentPage.css";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingDetails = location.state;

  const [userInfo, setUserInfo] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
  });
  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [errors, setErrors] = useState({}); // To track validation errors

  if (!bookingDetails) {
    return (
      <div className="container mt-5">
        <h2>Booking details are missing!</h2>
        <button onClick={() => navigate(-1)} className="btn btn-secondary">
          Go Back
        </button>
      </div>
    );
  }

  const { room, dates, guests, totalCost, includeTransfer } = bookingDetails;
  const finalTotal = totalCost + (includeTransfer ? 50 : 0);

  // Helper Functions for Validation
  const validateUserInfo = () => {
    const newErrors = {};
    if (!userInfo.name.trim()) newErrors.name = "First name is required.";
    if (!userInfo.surname.trim()) newErrors.surname = "Last name is required.";
    if (!/^\+?\d{7,15}$/.test(userInfo.phone))
      newErrors.phone = "Enter a valid phone number.";
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userInfo.email))
      newErrors.email = "Enter a valid email address.";
    return newErrors;
  };

  const validateCardInfo = () => {
    const newErrors = {};
    if (!/^\d{16}$/.test(cardInfo.cardNumber))
      newErrors.cardNumber = "Card number must be 16 digits.";
    if (!/^\d{2}\/\d{2}$/.test(cardInfo.expiryDate))
      newErrors.expiryDate = "Enter expiry date in MM/YY format.";
    if (!/^\d{3}$/.test(cardInfo.cvv))
      newErrors.cvv = "CVV must be 3 digits.";
    return newErrors;
  };
   

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleCardInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "expiryDate") {
        // Format expiry date to MM/YY
        const formattedValue = value
        .replace(/\D/g, "") // Remove non-numeric characters
        .slice(0, 4) // Limit to 4 characters
        .replace(/(\d{2})(\d{1,2})?/, "$1/$2"); // Insert "/"
        setCardInfo({ ...cardInfo, [name]: formattedValue });
    } else {
        setCardInfo({ ...cardInfo, [name]: value });
    }
  };

  const handlePayment = (e) => {
    e.preventDefault();
  
    const userErrors = validateUserInfo();
    const cardErrors = validateCardInfo();
    const allErrors = { ...userErrors, ...cardErrors };
  
    setErrors(allErrors);
  
    if (Object.keys(allErrors).length === 0) {
      // If no errors, navigate to success page
      navigate("/booking-success", {
        state: {
          userInfo,
          bookingDetails: {
            room,
            dates,
            guests,
            finalTotal,
            includeTransfer,
          },
        },
      });
    }
  };
  

  return (
    <div className="container payment-page mt-5 py-5">
      <h1 className="mb-4">Payment</h1>

      {/* Booking Summary */}
      <section className="booking-summary mb-4">
        <h2>Booking Summary</h2>
        <p><strong>Room:</strong> {room.name}</p>
        <p><strong>Price per Night:</strong> ${room.price}</p>
        <p><strong>Check-In:</strong> {dates.checkIn}</p>
        <p><strong>Check-Out:</strong> {dates.checkOut}</p>
        <p><strong>Guests:</strong> {guests}</p>
        {includeTransfer && <p><strong>Airport Transfer:</strong> $50</p>}
        <p><strong>Total Cost:</strong> ${finalTotal}</p>
      </section>

      {/* User Information Form */}
      <section className="user-info-form mb-4">
        <h2>User Information</h2>
        <form onSubmit={handlePayment}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="name" className="form-label">First Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                value={userInfo.name}
                onChange={handleInputChange}
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="surname" className="form-label">Last Name</label>
              <input
                type="text"
                id="surname"
                name="surname"
                className={`form-control ${errors.surname ? "is-invalid" : ""}`}
                value={userInfo.surname}
                onChange={handleInputChange}
              />
              {errors.surname && <div className="invalid-feedback">{errors.surname}</div>}
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                value={userInfo.phone}
                onChange={handleInputChange}
                placeholder="0123456789"
              />
              {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                value={userInfo.email}
                onChange={handleInputChange}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
          </div>

          {/* Card Payment Form */}
          <section className="card-payment-form my-4">
            <h2>Payment Details</h2>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="cardNumber" className="form-label">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  className={`form-control ${errors.cardNumber ? "is-invalid" : ""}`}
                  value={cardInfo.cardNumber}
                  onChange={handleCardInputChange}
                />
                {errors.cardNumber && (
                  <div className="invalid-feedback">{errors.cardNumber}</div>
                )}
              </div>

              <div className="col-md-3 mb-3">
                <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
                <input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    className={`form-control ${errors.expiryDate ? "is-invalid" : ""}`}
                    value={cardInfo.expiryDate}
                    onChange={handleCardInputChange}
                    placeholder="MM/YY"
                />
                {errors.expiryDate && (
                    <div className="invalid-feedback">{errors.expiryDate}</div>
                )}
               </div>

              <div className="col-md-3 mb-3">
                <label htmlFor="cvv" className="form-label">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  className={`form-control ${errors.cvv ? "is-invalid" : ""}`}
                  value={cardInfo.cvv}
                  onChange={handleCardInputChange}
                />
                {errors.cvv && <div className="invalid-feedback">{errors.cvv}</div>}
              </div>
            </div>
          </section>

          {/* Payment Action */}
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary btn-lg"
            >
              Confirm Payment
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default PaymentPage;
