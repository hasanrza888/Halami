import React, { useState } from "react";
import PageHeader from "../components/layout/PageHeader";
import AdCard from "../components/ads/AdCard";
import SponsorshipDetails from "../components/ads/SponsorshipDetails";
import ContactForm from "../components/common/ContactForm";
import { notifySuccess } from "../components/common/Notification";

const AdsSponsorshipPage = () => {
  // Example Ads Data
  const ads = [
    {
      id: "1",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLYP9AlvHdyS-chiIEYx4flsDPqgOor0i_Kw&s",
      title: "Luxury Beach Resort",
      description: "Experience ultimate relaxation at our luxury beach resort.",
      ctaText: "View Details",
      details: [
        "Targeted audience of 1M+ monthly visitors.",
        "Feature placement on our homepage.",
        "Custom promotional campaigns tailored to your resort.",
      ],
    },
    {
      id: "2",
      image: "https://www.libertytravel.com/sites/default/files/styles/full_size/public/all%20inclusive-hero%20%281%29.jpg?itok=bjulYGFg",
      title: "Exclusive Travel Packages",
      description: "Explore the world with our exclusive travel deals.",
      ctaText: "View Details",
      details: [
        "Save up to 30% on group travel.",
        "Offers for over 100 destinations worldwide.",
        "24/7 customer support for all bookings.",
      ],
    },
    {
      id: "3",
      image: "https://media.cntraveler.com/photos/6012fc3124bb02c0f4a9a42c/master/w_1600%2Cc_limit/Qantas-A380-Premium-Economy-1.jpg",
      title: "Premium Airlines",
      description: "Fly comfortably with our premium airline services.",
      ctaText: "View Details",
      details: [
        "Access to over 50 premium lounges.",
        "Priority check-in and boarding.",
        "Award-winning in-flight experience.",
      ],
    },
  ];

  const [selectedAd, setSelectedAd] = useState(null);

  const handleAdClick = (adId) => {
    const ad = ads.find((item) => item.id === adId);
    setSelectedAd(ad);
  };

  const handleContactFormSubmit = (formData) => {
    console.log("Contact form submitted:", formData);
    notifySuccess("Your inquiry has been sent successfully!");
  };

  return (
    <div>
      {/* Page Header */}
      <PageHeader
        title="Our Sponsors"
        subtitle="Discover our exclusive partners and sponsorships."
        backgroundImage="/assets/images/ads-header.jpg"
      />

      {/* Ads Grid */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Our Sponsorships</h2>
        <div className="row g-4">
          {ads.map((ad) => (
            <div key={ad.id} className="col-md-4">
              <AdCard
                image={ad.image}
                title={ad.title}
                description={ad.description}
                ctaText="View Details"
                onClick={() => handleAdClick(ad.id)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Sponsorship Details */}
      {selectedAd && (
        <section className="container my-5">
          <SponsorshipDetails
            image={selectedAd.image}
            title={selectedAd.title}
            description={selectedAd.description}
            details={selectedAd.details}
            ctaText="Get Started"
            ctaLink="#"
          />
        </section>
      )}

      {/* Contact Form */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Contact Us</h2>
        <ContactForm onSubmit={handleContactFormSubmit} />
      </section>
    </div>
  );
};

export default AdsSponsorshipPage;
