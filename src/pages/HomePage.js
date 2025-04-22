import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/homepage.css';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section with Carousel */}
      <section className="hero">
        <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="Slide 1" />
              <div className="carousel-caption d-none d-md-block">
                <h1 className="display-4">Welcome to Halami</h1>
                <p className="lead mb-4">Discover Muslim-friendly accommodations and experiences worldwide.</p>
                <Link to="/hotels">
                  <Button label="Get Started" variant="light" />
                </Link>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1439130490301-25e322d88054?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="Slide 2" />
              <div className="carousel-caption d-none d-md-block">
                <h1 className="display-4">Your Comfort, Our Priority</h1>
                <p className="lead mb-4">Book hotels with separate amenities for men and women.</p>
                <Link to="/hotels">
                  <Button label="Get Started" variant="light" />
                </Link>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="Slide 3" />
              <div className="carousel-caption d-none d-md-block">
                <h1 className="display-4">Exclusive Deals</h1>
                <p className="lead mb-4">Take advantage of our exclusive deals and packages.</p>
                <Link to="/hotels">
                  <Button label="Get Started" variant="light" />
                </Link>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* Muslim-Friendly Features Section */}
      <section className="muslim-friendly py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Why Choose Us?</h2>
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="text-center">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Separate Pools"
                  className="mb-3"
                  style={{ width: '80px', height: '80px' }}
                />
                <h5>Separate Pools for Women</h5>
                <p className="text-muted">
                  Relax in privacy with gender-separated swimming pools, designed for your comfort.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="text-center">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Alcohol-Free Packages"
                  className="mb-3"
                  style={{ width: '80px', height: '80px' }}
                />
                <h5>Alcohol-Free Packages</h5>
                <p className="text-muted">
                  Stay in accommodations offering alcohol-free environments for a halal experience.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="text-center">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Halal Dining Options"
                  className="mb-3"
                  style={{ width: '80px', height: '80px' }}
                />
                <h5>Halal Dining Options</h5>
                <p className="text-muted">
                  Enjoy delicious meals prepared according to Islamic dietary guidelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="services py-5">
        <div className="container">
          <h2 className="text-center mb-4">Our Services</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <Card
                image="https://via.placeholder.com/300x200"
                title="Hotel Reservations"
                description="Book Muslim-friendly hotels with separate amenities for men and women."
                footer={<Button label="Learn More" variant="primary" />}
              />
            </div>
            <div className="col-md-4 mb-4">
              <Card
                image="https://via.placeholder.com/300x200"
                title="Airport Transfers"
                description="Enjoy hassle-free transportation to and from your destination."
                footer={<Button label="Learn More" variant="primary" />}
              />
            </div>
            <div className="col-md-4 mb-4">
              <Card
                image="https://via.placeholder.com/300x200"
                title="Special Offers"
                description="Take advantage of our exclusive deals and packages."
                footer={<Button label="Learn More" variant="primary" />}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="special-offers bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Special Offers</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <Card
                image="https://via.placeholder.com/300x200"
                title="50% Off Maldives Packages"
                description="Enjoy paradise with a discount! Limited time offer."
                footer={<Button label="Book Now" variant="success" />}
              />
            </div>
            <div className="col-md-6 mb-4">
              <Card
                image="https://via.placeholder.com/300x200"
                title="Early Bird Discounts"
                description="Plan ahead and save big on your next adventure."
                footer={<Button label="Learn More" variant="success" />}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
