import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "../components/common/ScrollToTop";
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HomePage from '../pages/HomePage';
import HotelListing from '../pages/HotelListing';
import HotelDetails from '../pages/HotelDetails';
import BookingConfirmation from '../pages/BookingConfirmation';
import PaymentPage from '../pages/PaymentPage';
import BookingSuccess from '../pages/BookingSuccess';
import MembershipPage from '../pages/MembershipPage';
import BlogPage from '../pages/BlogPage';
import BlogDetailsPage from '../pages/BlogDetailsPage';
import HelpCenterPage from '../pages/HelpCenterPage';
import AdsSponsorshipPage from '../pages/AdsSponsorshipPage';
import SearchResultsPage from '../pages/SearchResultsPage';
// import ErrorPage from '../pages/ErrorPage';
import Notification from "../components/common/Notification";

const App = () => {

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
  

  return (
    <Router>
      <div className="app">
        <ScrollToTop />
        <Navbar />
        <Notification />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hotels" element={<HotelListing />} />
            <Route path="/hotels/:hotelId" element={<HotelDetails hotels={hotels} />} />
            <Route path="/booking-confirmation" element={<BookingConfirmation />} />
            <Route path="payment" element={<PaymentPage />} />
            <Route path="/booking-success" element={<BookingSuccess />} />
            <Route path="/membership" element={<MembershipPage />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/blogs/:id" element={<BlogDetailsPage />} />
            <Route path="/help-center" element={<HelpCenterPage />} />
            <Route path="/our-sponsors" element={<AdsSponsorshipPage />} />
            <Route path="/search-results" element={<SearchResultsPage />} />

            {/* Catch-All Route for Errors */}
            {/* <Route path="*" element={<ErrorPage />} /> */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;