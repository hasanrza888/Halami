import React, { useState } from "react";
import HotelCard from "./HotelCard";
import Modal from "../common/Modal";
import Slider from "react-slick";


const HotelGrid = ({ hotels }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const handleQuickView = (hotel) => {
    setSelectedHotel(hotel);
    setIsModalOpen(true);
  };

  return (
    <div className="row">
      {/* Render Hotel Cards */}
      {hotels.map((hotel) => (
        <div className="col-12 col-sm-6 col-md-4 mb-4" key={hotel.id}>
          <HotelCard
            id={hotel.id}
            gallery={hotel.gallery}
            name={hotel.name}
            rating={hotel.rating}
            price={hotel.price}
            location={hotel.location}
            onQuickView={() => handleQuickView(hotel)}
          />
        </div>
      ))}

      {/* Quick View Modal */}
      {isModalOpen && selectedHotel && (
        <Modal
          title={`${selectedHotel.name} - Quick View`}
          isVisible={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          content={(
            <>
              {/* Gallery Slider */}
              <Slider {...sliderSettings} className="modal-slider">
                {selectedHotel.gallery.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt={`Hotel Slide ${index + 1}`}
                      className="img-fluid"
                    />
                  </div>
                ))}
              </Slider>
              {/* Hotel Details */}
              <div className="mt-3">
                <p><strong>Location:</strong> {selectedHotel.location}</p>
                <p><strong>Description:</strong> {selectedHotel.description}</p>
                <p><strong>Amenities:</strong> {selectedHotel.amenities.join(', ')}</p>
                <p><strong>Price:</strong> ${selectedHotel.price}/night</p>
                <p><strong>Rating:</strong> ⭐ {selectedHotel.rating}</p>
              </div>
            </>
          )}
        />
      )}
    </div>
  );
};

export default HotelGrid;
