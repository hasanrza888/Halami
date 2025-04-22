import React, { useState } from "react";
import PageHeader from "../components/layout/PageHeader";
import BlogFilterBar from "../components/blog/BlogFilterBar";
import BlogCard from "../components/blog/BlogCard";
import Pagination from "../components/common/Pagination";

const BlogPage = () => {
  const categories = ["Travel Tips", "News", "Destination Guides", "Lifestyle"];
  const blogs = [
    {
      id: "1",
      title: "Top 10 Travel Destinations for 2024",
      thumbnail: "https://imageio.forbes.com/specials-images/imageserve/6518920b4cb81fadd99954e8/Landscape-with-Halong-bay/960x0.jpg?format=jpg&width=960",
      excerpt: "Discover the best places to visit in 2024, from tropical beaches to bustling cities.",
      publishDate: "November 20, 2024",
    },
    {
      id: "2",
      title: "How to Save Money While Traveling",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA27fdgCU8179iYezG9Uu3BZH1MgCNyhtEVA&s",
      excerpt: "Learn practical tips for cutting costs while enjoying your adventures.",
      publishDate: "November 18, 2024",
    },
    {
      id: "3",
      title: "Why Sustainable Travel Matters",
      thumbnail: "https://media.licdn.com/dms/image/C4D12AQFw6enWN8ky0g/article-cover_image-shrink_600_2000/0/1560521110380?e=2147483647&v=beta&t=unREMnOzCn71fTfYQ7YnzJXsLwV0ppd3gLI-8gss-TA",
      excerpt: "Explore how you can reduce your carbon footprint while exploring the world.",
      publishDate: "November 15, 2024",
    },
    {
      id: "4",
      title: "A Guide to Halal-Friendly Hotels",
      thumbnail: "https://visitturkey.in/wp-content/uploads/2024/07/halal-tourism.webp",
      excerpt: "Discover hotels that cater specifically to Muslim travelers.",
      publishDate: "November 12, 2024",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const blogsPerPage = 3;
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page after search
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page after category change
  };

  // Filter blogs by category and search query
  const filteredBlogs = blogs.filter(
    (blog) =>
      (selectedCategory === "" || blog.title.includes(selectedCategory)) &&
      (searchQuery === "" || blog.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Paginate filtered blogs
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  return (
    <div className="pb-5">
      {/* Page Header */}
      <PageHeader
        title="Our Blog"
        subtitle="Discover travel tips, news, and insights."
        backgroundImage="/assets/images/blog-header.jpg"
      />

      {/* Filter Bar */}
      <BlogFilterBar
        categories={categories}
        onSearch={handleSearch}
        onCategorySelect={handleCategorySelect}
      />

      {/* Blog Cards */}
      <div className="container mt-4">
        <div className="row g-4">
          {paginatedBlogs.map((blog) => (
            <div key={blog.id} className="col-md-6">
              <BlogCard
                title={blog.title}
                thumbnail={blog.thumbnail}
                excerpt={blog.excerpt}
                publishDate={blog.publishDate}
                blogId={blog.id}
              />
            </div>
          ))}
        </div>

        {/* No Blogs Message */}
        {paginatedBlogs.length === 0 && (
          <p className="text-center mt-4">No blogs found matching your criteria.</p>
        )}

        {/* Pagination */}
        {filteredBlogs.length > blogsPerPage && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

export default BlogPage;
