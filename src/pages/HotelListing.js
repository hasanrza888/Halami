import React, { useState } from 'react';
import FilterBar from '../components/forms/FilterBar';
import HotelGrid from '../components/hotels/HotelGrid';
import Sidebar from '../components/layout/Sidebar';
import '../assets/styles/hotelListing.css';

const HotelListing = () => {
  
  const [hotels, setHotels] = useState([
    {
      id: 1,
      name: 'Luxury Palace',
      image: 'https://via.placeholder.com/800x500',
      rating: 4.8,
      price: 250,
      location: 'New York, USA',
      amenities: ['WiFi', 'Pool', 'Gym', 'Spa'],
      description: 'A luxurious hotel located in the heart of New York City.',
      gallery: [
        'https://via.placeholder.com/800x500',
        'https://via.placeholder.com/800x500/111111',
        'https://via.placeholder.com/800x500/222222',
      ],
      rooms: [
        {
          id: 101,
          name: 'Deluxe Room',
          price: 120,
          image: 'https://via.placeholder.com/400x300',
        },
        {
          id: 102,
          name: 'Suite Room',
          price: 250,
          image: 'https://via.placeholder.com/400x300',
        },
      ],
    },
    {
      id: 2,
      name: 'Beachside Resort',
      image: 'https://via.placeholder.com/800x500',
      rating: 4.6,
      price: 180,
      location: 'Maldives',
      amenities: ['WiFi', 'Parking', 'Private Beach', 'Free Breakfast'],
      description:
        'A relaxing resort with stunning beachfront views and premium services.',
      gallery: [
        'https://via.placeholder.com/800x500/333333',
        'https://via.placeholder.com/800x500/444444',
        'https://via.placeholder.com/800x500/555555',
      ],
      rooms: [
        {
          id: 201,
          name: 'Ocean View Room',
          price: 200,
          image: 'https://via.placeholder.com/400x300',
        },
        {
          id: 202,
          name: 'Beachfront Bungalow',
          price: 350,
          image: 'https://via.placeholder.com/400x300',
        },
      ],
    },
    {
      id: 3,
      name: 'Mountain Escape Lodge',
      image: 'https://via.placeholder.com/800x500',
      rating: 4.9,
      price: 300,
      location: 'Swiss Alps',
      amenities: ['Pool', 'Parking', 'Ski-in/Ski-out', 'Fireplace'],
      description:
        'A serene mountain lodge offering breathtaking views and cozy accommodations.',
      gallery: [
        'https://via.placeholder.com/800x500/666666',
        'https://via.placeholder.com/800x500/777777',
        'https://via.placeholder.com/800x500/888888',
      ],
      rooms: [
        {
          id: 301,
          name: 'Standard Room',
          price: 150,
          image: 'https://via.placeholder.com/400x300',
        },
        {
          id: 302,
          name: 'Luxury Suite',
          price: 400,
          image: 'https://via.placeholder.com/400x300',
        },
      ],
    },
    {
      id: 4,
      name: 'City Center Inn',
      image: 'https://via.placeholder.com/800x500',
      rating: 4.3,
      price: 120,
      location: 'London, UK',
      amenities: ['WiFi', '24/7 Reception', 'Bar', 'Restaurant'],
      description: 'A budget-friendly hotel in the heart of London with modern amenities.',
      gallery: [
        'https://via.placeholder.com/800x500/999999',
        'https://via.placeholder.com/800x500/AAAAAA',
        'https://via.placeholder.com/800x500/BBBBBB',
      ],
      rooms: [
        {
          id: 401,
          name: 'Standard Single Room',
          price: 80,
          image: 'https://via.placeholder.com/400x300',
        },
        {
          id: 402,
          name: 'Family Room',
          price: 150,
          image: 'https://via.placeholder.com/400x300',
        },
      ],
    },
    {
      id: 5,
      name: 'Desert Mirage Hotel',
      image: 'https://via.placeholder.com/800x500',
      rating: 4.7,
      price: 200,
      location: 'Dubai, UAE',
      amenities: ['Rooftop Pool', 'Free Breakfast', 'Airport Transfers'],
      description: 'A stunning hotel offering a mix of desert views and luxury amenities.',
      gallery: [
        'https://via.placeholder.com/800x500/CCCCCC',
        'https://via.placeholder.com/800x500/DDDDDD',
        'https://via.placeholder.com/800x500/EEEEEE',
      ],
      rooms: [
        {
          id: 501,
          name: 'Deluxe Suite',
          price: 300,
          image: 'https://via.placeholder.com/400x300',
        },
        {
          id: 502,
          name: 'Presidential Suite',
          price: 600,
          image: 'https://via.placeholder.com/400x300',
        },
      ],
    },
  ]);

  const [filters, setFilters] = useState({});
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilter = (filterData) => {
    setFilters(filterData);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const filteredHotels = hotels
    .filter((hotel) => {
      if (searchQuery && !hotel.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      if (filters.location && !hotel.location.toLowerCase().includes(filters.location.toLowerCase())) {
        return false;
      }
      if (filters.priceRange) {
        const [min, max] = filters.priceRange.split('-').map(Number);
        if (hotel.price < min || (max && hotel.price > max)) {
          return false;
        }
      }
      if (filters.amenities?.length) {
        return filters.amenities.every((amenity) => hotel.amenities.includes(amenity));
      }
      return true;
    })
    .sort((a, b) => {
      if (sortOption === 'priceLowToHigh') return a.price - b.price;
      if (sortOption === 'priceHighToLow') return b.price - a.price;
      if (sortOption === 'rating') return b.rating - a.rating;
      if (sortOption === 'name') return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <div className="container mt-4 py-5">
        {/* Search and Sorting Section */}
        <section className="mb-4">
            <h2 className="text-center">Search for Hotels</h2>
            <form className="row mt-3 justify-content-center g-2">
                {/* Search Input */}
                <div className="col-12 col-lg-6 col-md-6">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search by hotel name..."
                    value={searchQuery}
                    onChange={handleSearch}
                />
                </div>

                {/* Sort By Dropdown */}
                <div className="col-12 col-lg-3 col-md-6">
                <select
                    className="form-select"
                    value={sortOption}
                    onChange={handleSortChange}
                >
                    <option value="">Sort By</option>
                    <option value="priceLowToHigh">Price: Low to High</option>
                    <option value="priceHighToLow">Price: High to Low</option>
                    <option value="rating">Rating</option>
                    <option value="name">Name</option>
                </select>
                </div>
            </form>

            {/* Open Filters Button for Mobile */}
            <div className="d-lg-none mt-3 text-center">
                <button
                className="btn btn-outline-primary"
                onClick={() => setSidebarVisible(true)}
                >
                Open Filters
                </button>
            </div>
        </section>

        {/* Main Content: Filters + Hotel Grid */}
        <div className="row">
            {/* Filter Section */}
            <div className="col-lg-3 d-none d-lg-block"> {/* Hidden on screens <992px */}
            <FilterBar onFilter={handleFilter} />
            </div>

            {/* Hotel Grid */}
            <div className="col-12 col-lg-9">
            <HotelGrid hotels={filteredHotels} />
            </div>
        </div>

        {/* Sidebar for Filters (Mobile) */}
        <Sidebar
            title="Filters"
            content={<FilterBar onFilter={handleFilter} />}
            isVisible={isSidebarVisible}
            onClose={() => setSidebarVisible(false)}
        />
    </div>
  );
};

export default HotelListing;
