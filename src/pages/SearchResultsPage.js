import React, { useState } from "react";
import PageHeader from "../components/layout/PageHeader";
import FilterBar from "../components/search/FilterBar";
import SearchResultCard from "../components/search/SearchResultCard";
import Pagination from "../components/common/Pagination";
import NoResultsMessage from "../components/search/NoResultsMessage";

const SearchResultsPage = () => {
  // Sample Results Data
  const sampleResults = [
    {
      id: "1",
      image: "/assets/images/hotel1.jpg",
      title: "Luxury Beach Hotel",
      description: "A luxurious beachside retreat with stunning views.",
      price: 200,
      rating: 5,
      location: "Miami", // Added location
    },
    {
      id: "2",
      image: "/assets/images/hotel2.jpg",
      title: "Mountain Escape",
      description: "Enjoy breathtaking mountain views and fresh air.",
      price: 150,
      rating: 4,
      location: "Denver", // Added location
    },
    {
      id: "3",
      image: "/assets/images/hotel3.jpg",
      title: "City Center Stay",
      description: "Perfect for exploring the heart of the city.",
      price: 100,
      rating: 3,
      location: "New York", // Added location
    },
  ];
  

  const [resultsPerPage] = useState(2); // Number of results per page
  const [results, setResults] = useState(sampleResults);
  const [currentPage, setCurrentPage] = useState(1);

  const [filters, setFilters] = useState({
    location: "",
    priceRange: "",
    starRating: "",
  });
  
  const handleApplyFilter = (field, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [field]: value }));
  
    // Filter results dynamically
    const filteredResults = sampleResults.filter((result) => {
      let isValid = true;
  
      // Location Filter
      if (filters.location && filters.location !== result.location) {
        isValid = false;
      }
  
      // Price Range Filter
      if (filters.priceRange) {
        const price = result.price;
        if (
          (filters.priceRange === "low" && price > 100) ||
          (filters.priceRange === "medium" && (price < 100 || price > 300)) ||
          (filters.priceRange === "high" && price < 300)
        ) {
          isValid = false;
        }
      }
  
      // Star Rating Filter
      if (filters.starRating && Number(filters.starRating) !== Math.floor(result.rating)) {
        isValid = false;
      }
  
      return isValid;
    });
  
    setResults(filteredResults);
  };
  

  const handleResetFilter = () => {
    setFilters({
      location: "",
      priceRange: "",
      starRating: "",
    });
    setResults(sampleResults); // Reset to default results
  };

  const currentResults = results.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Implement pagination logic if needed, e.g., fetch results for a specific page
  };
  
  return (
    <div>
      {/* Page Header */}
      <PageHeader
        title="Search Results"
        subtitle="Find the best hotels and accommodations for your stay."
        backgroundImage="/assets/images/search-results-header.jpg"
      />

      {/* Filter Bar */}
      <FilterBar
        filters={filters}
        onApplyFilter={handleApplyFilter}
        onResetFilter={handleResetFilter}
      />

      {/* Results Section */}
      <section className="container my-5">
        {currentResults.length === 0 ? (
          <NoResultsMessage
            title="No Results Found"
            subtitle="We couldn't find any matches. Try adjusting your filters."
            image="/assets/images/no-results.png"
          />
        ) : (
          currentResults.map((result) => (
            <SearchResultCard
              key={result.id}
              image={result.image}
              title={result.title}
              description={result.description}
              price={result.price}
              rating={result.rating}
              id={result.id}
            />
          ))
        )}
      </section>

      {/* Pagination */}
      {results.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={5} // Example total pages
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default SearchResultsPage;
