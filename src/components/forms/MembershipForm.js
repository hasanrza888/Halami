import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../../assets/styles/MembershipForm.css";
import { notifySuccess, notifyError } from "../common/Notification";

const MembershipForm = ({preselectedTier }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tier: preselectedTier || "Basic",
  });

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      tier: preselectedTier,
    }));
  }, [preselectedTier]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation for example purposes
    if (!formData.name || !formData.email || !formData.phone) {
      notifyError("Please fill out all fields.");
      return;
    }

    // onSubmit(formData);
    notifySuccess(`Thank you, ${formData.name}, for joining the ${formData.tier} membership!`);

    // Clear form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      tier: "Basic",
    });
    
  };

  return (
    <div className="membership-form-container p-4 shadow rounded">
      <h3 className="text-center mb-4">Join Our Membership</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control membership-input"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control membership-input"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="form-control membership-input"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tier" className="form-label">Select Membership Tier</label>
          <select
            id="tier"
            name="tier"
            className="form-select membership-select"
            value={formData.tier}
            onChange={handleChange}
            required
          >
            <option value="Basic">Basic - $10/month</option>
            <option value="Premium">Premium - $20/month</option>
            <option value="VIP">VIP - $50/month</option>
          </select>
        </div>
        <div className="text-center mt-4">
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </div>
      </form>
    </div>
  );
};

MembershipForm.propTypes = {
  // onSubmit: PropTypes.func.isRequired,
  preselectedTier: PropTypes.string,
};

MembershipForm.defaultProps = {
  preselectedTier: "Basic",
};

export default MembershipForm;
