import React, { useState } from "react";
import PageHeader from "../components/layout/PageHeader";
import FAQAccordion from "../components/helpCenter/FAQAccordion";
import GuideCard from "../components/helpCenter/GuideCard";
import SearchBar from "../components/common/SearchBar";

const HelpCenterPage = () => {
  // Sample FAQ data
  const faqs = [
    { question: "How do I make a reservation?", answer: "Visit our booking page, select your dates, and follow the steps to reserve your room." },
    { question: "What is the cancellation policy?", answer: "You can cancel your reservation up to 24 hours before check-in without any charge." },
    { question: "How can I contact support?", answer: "You can reach us via email at support@halami.com or call our helpline at +123 456 7890." },
  ];

  // Sample Guides data
  const guides = [
    {
      id: "1",
      title: "How to Book a Hotel Room",
      thumbnail: "https://www.thetravelerbd.com/wp-content/uploads/2024/06/book-a-hotel-room.jpg",
      description: "Learn the step-by-step process for booking a hotel room online.",
    },
    {
      id: "2",
      title: "Travel Insurance 101",
      thumbnail: "https://u4d5i5m9.rocketcdn.me/wp-content/uploads/2022/10/Travel-Insurancec4.jpg",
      description: "Everything you need to know about purchasing travel insurance.",
    },
    {
      id: "3",
      title: "Packing Tips for a Stress-Free Trip",
      thumbnail: "https://www.totalwardrobecare.co.uk/cdn/shop/articles/PACKING_CUBE.jpg?v=1715260933",
      description: "Organize your packing with these expert tips.",
    },
  ];

  const [filteredGuides, setFilteredGuides] = useState(guides);

  // Handle search in guides
  const handleSearch = (query) => {
    if(query){
        const results = guides.filter((guide) =>
            guide.title.toLowerCase().includes(query.toLowerCase())
        );
        return setFilteredGuides(results);
    }

    return setFilteredGuides([...guides]);
    
  };

  console.log(filteredGuides)
  return (
    <div>
      {/* Page Header */}
      <PageHeader
        title="Help Center"
        subtitle="Find answers to your questions or explore helpful guides."
        backgroundImage="/assets/images/help-center-header.jpg"
      />

      {/* Search Bar */}
      <section className="container my-5">
        <SearchBar placeholder="Search guides..." onSearch={handleSearch} />
      </section>

      {/* FAQ Section */}
      <section className="container my-5">
        {/* <h2 className="text-center mb-4">Frequently Asked Questions</h2> */}
        <FAQAccordion faqs={faqs} />
      </section>

      {/* Guides Section */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Helpful Guides</h2>
        <div className="row g-4">
          {filteredGuides.map((guide) => (
            <div key={guide.id} className="col-md-4">
              <GuideCard
                title={guide.title}
                thumbnail={guide.thumbnail}
                description={guide.description}
                guideId={guide.id}
              />
            </div>
          ))}
        </div>
        {filteredGuides.length === 0 && (
          <p className="text-center mt-4">No guides match your search criteria.</p>
        )}
      </section>
    </div>
  );
};

export default HelpCenterPage;
