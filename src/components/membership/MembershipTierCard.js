import React from "react";
import PropTypes from "prop-types";
import Button from "../common/Button";
import "../../assets/styles/membershipTierCard.css";

const MembershipTierCard = ({ tierName, price, benefits, onJoin }) => {
  return (
    <div className="card membershipTierCard shadow-sm h-100 d-flex flex-column">
      <div className="card-body d-flex flex-column justify-content-between">
        {/* Tier Name */}
        <div>
          <h4 className="fw-bold text-primary">{tierName}</h4>
          <p className="text-muted fs-5">${price}/month</p>
        </div>

        {/* Benefits */}
        <ul className="list-unstyled my-4 flex-grow-1">
          {benefits.map((benefit, index) => (
            <li key={index} className="mb-2">
              <i className="fas fa-check-circle text-success me-2"></i>
              {benefit}
            </li>
          ))}
        </ul>

        {/* Join Now Button */}
        <div className="text-center mt-3">
          <Button
            label="Join Now"
            variant="primary"
            size="lg"
            onClick={onJoin}
          />
        </div>
      </div>
    </div>
  );
};

MembershipTierCard.propTypes = {
  tierName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  benefits: PropTypes.arrayOf(PropTypes.string).isRequired,
  onJoin: PropTypes.func.isRequired,
};

export default MembershipTierCard;
