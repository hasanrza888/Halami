import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../common/Button';

const FilterBar = ({ onFilter }) => {
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [amenities, setAmenities] = useState([]);

  const handleFilter = () => {
    onFilter({ location, priceRange, amenities });
  };

  const toggleAmenity = (amenity) => {
    setAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((item) => item !== amenity)
        : [...prev, amenity]
    );
  };

  return (
    <div className="card p-3 shadow-sm">
      <h5 className="card-title">Filter Hotels</h5>
      <div className="d-flex flex-column gap-3">
        {/* Location Filter */}
        <div>
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            type="text"
            className="form-control"
            id="location"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        {/* Price Range Filter */}
        <div>
          <label htmlFor="priceRange" className="form-label">
            Price Range
          </label>
          <select
            className="form-select"
            id="priceRange"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="">Select price range</option>
            <option value="0-100">$0 - $100</option>
            <option value="100-200">$100 - $200</option>
            <option value="200-300">$200 - $300</option>
            <option value="300+">$300+</option>
          </select>
        </div>

        {/* Amenities Filter */}
        <div>
          <label className="form-label">Amenities</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="pool"
              value="Pool"
              onChange={() => toggleAmenity('Pool')}
            />
            <label className="form-check-label" htmlFor="pool">
              Pool
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="wifi"
              value="WiFi"
              onChange={() => toggleAmenity('WiFi')}
            />
            <label className="form-check-label" htmlFor="wifi">
              Free WiFi
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="parking"
              value="Parking"
              onChange={() => toggleAmenity('Parking')}
            />
            <label className="form-check-label" htmlFor="parking">
              Parking
            </label>
          </div>
        </div>
      </div>

      {/* Apply Filter Button */}
      <div className="mt-3">
        <Button label="Apply Filters" onClick={handleFilter} variant="primary" size="sm" block />
      </div>
    </div>
  );
};

FilterBar.propTypes = {
  onFilter: PropTypes.func.isRequired, // Callback function to handle filter changes
};

export default FilterBar;
