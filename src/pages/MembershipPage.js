import React, { useRef, useState } from "react";
import PageHeader from "../components/layout/PageHeader";
import MembershipForm from "../components/forms/MembershipForm";
import BenefitsHighlight from "../components/membership/BenefitsHighlight";
import MembershipTierCard from "../components/membership/MembershipTierCard";
import "../assets/styles/MembershipPage.css";

const MembershipPage = () => {
  // Ref for Membership Form
  const formRef = useRef(null);

  // State for preselected membership tier
  const [selectedTier, setSelectedTier] = useState("Basic");

  const membershipBenefits = [
    {
      icon: "fas fa-percent", // FontAwesome icon class
      title: "Exclusive Discounts",
      description: "Get up to 20% off on all bookings as a valued member.",
    },
    {
      icon: "fas fa-gift", // FontAwesome icon class
      title: "Special Offers",
      description: "Receive exclusive offers and promotions every month.",
    },
    {
      icon: "fas fa-headset", // FontAwesome icon class
      title: "Priority Support",
      description: "Enjoy 24/7 customer support with our premium services.",
    },
  ];

  const membershipTiers = [
    {
      tierName: "Basic",
      price: 10,
      benefits: [
        "Access to standard hotels",
        "5% discount on bookings",
        "Monthly newsletter",
      ],
    },
    {
      tierName: "Premium",
      price: 20,
      benefits: [
        "Access to premium hotels",
        "10% discount on bookings",
        "Priority customer support",
        "Monthly newsletter",
      ],
    },
    {
      tierName: "VIP",
      price: 50,
      benefits: [
        "Access to VIP hotels",
        "20% discount on bookings",
        "Exclusive offers and gifts",
        "Dedicated customer manager",
      ],
    },
  ];

  const handleJoinNow = (tierName) => {
    setSelectedTier(tierName); // Set the selected tier
    formRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll to the form
  };

  // const handleFormSubmit = (data) => {
  //   console.log("Form Submitted:", data);
  //   alert(`Thank you, ${data.name}, for joining the ${data.tier} membership!`);
  // };

  return (
    <div>
      {/* Page Header */}
      <PageHeader
        title="Membership & Discounts"
        subtitle="Unlock exclusive benefits and discounts."
        backgroundImage="/assets/images/membership-header.jpg"
      />

      {/* Benefits Section */}
      <BenefitsHighlight benefits={membershipBenefits} />

      {/* Membership Tiers Section */}
      <section className="membership-tiers py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4 fw-bold">Choose Your Membership Plan</h2>
          <div className="row g-4">
            {membershipTiers.map((tier, index) => (
              <div key={index} className="col-md-4">
                <div className="h-100">
                  <MembershipTierCard
                    tierName={tier.tierName}
                    price={tier.price}
                    benefits={tier.benefits}
                    onJoin={() => handleJoinNow(tier.tierName)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Form Section */}
      <section className="membership-form-section py-5" ref={formRef}>
        <div className="container">
          <h2 className="text-center mb-4 fw-bold">Sign Up for Membership</h2>
          <MembershipForm
            // onSubmit={handleFormSubmit}
            preselectedTier={selectedTier}
          />
        </div>
      </section>
    </div>
  );
};

export default MembershipPage;
