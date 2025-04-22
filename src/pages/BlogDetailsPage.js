import React from "react";
import PageHeader from "../components/layout/PageHeader";
import BlogContent from "../components/blog/BlogContent";
import RelatedPosts from "../components/blog/RelatedPosts";
import { useParams } from "react-router-dom";

// Mock Blog Data
const blogs = [
  {
    id: "1",
    title: "Why Sustainable Travel Matters",
    featuredImage: "https://imageio.forbes.com/specials-images/imageserve/6518920b4cb81fadd99954e8/Landscape-with-Halong-bay/960x0.jpg?format=jpg&width=960",
    publishDate: "November 15, 2024",
    author: "Jane Doe",
    body: `
      Travel is an incredible way to explore the world, but it comes with its challenges. Sustainable travel is about reducing your environmental footprint while ensuring positive impacts on local communities.
      
      One way to achieve this is by choosing eco-friendly accommodations, such as hotels that utilize renewable energy or prioritize waste reduction. Supporting local businesses, like family-owned restaurants and craft shops, also plays a vital role.
      
      Remember, every small step towards sustainability counts. Let’s travel responsibly and leave a positive mark on the places we visit.
    `,
  },
  {
    id: "2",
    title: "How to Save Money While Traveling",
    featuredImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA27fdgCU8179iYezG9Uu3BZH1MgCNyhtEVA&s",
    publishDate: "November 18, 2024",
    author: "John Smith",
    body: `
      Traveling doesn't have to be expensive. With a few strategic choices, you can significantly reduce your costs without sacrificing the experience.
      
      From booking flights during off-peak seasons to choosing budget-friendly accommodations, this guide provides actionable tips to help you save money.
    `,
  },
  {
    id: "3",
    title: "Top 10 Travel Destinations for 2024",
    featuredImage: "https://media.licdn.com/dms/image/C4D12AQFw6enWN8ky0g/article-cover_image-shrink_600_2000/0/1560521110380?e=2147483647&v=beta&t=unREMnOzCn71fTfYQ7YnzJXsLwV0ppd3gLI-8gss-TA",
    publishDate: "November 20, 2024",
    author: "Emily Rose",
    body: `
      The year 2024 brings a host of exciting travel destinations. From the beaches of Bali to the historic streets of Istanbul, this guide highlights the top 10 places you must visit this year.
      
      Discover why these destinations are trending and what makes each unique.
    `,
  },
];

// Related Posts Data
const relatedPosts = blogs.slice(1); // Mocked related posts for demonstration

const BlogDetailsPage = () => {
  const { id } = useParams();

  // Find the blog post by id
  const blog = blogs.find((b) => b.id === id);

  // If no blog post is found
  if (!blog) {
    return (
      <div className="text-center my-5">
        <h2>Blog not found!</h2>
        <p>We couldn't find the blog you're looking for.</p>
      </div>
    );
  }

  return (
    <div>
      {/* Page Header */}
      <PageHeader
        title={blog.title}
        subtitle="In-depth insights and stories"
        backgroundImage="/assets/images/blog-header.jpg"
      />

      {/* Blog Content */}
      <BlogContent
        title={blog.title}
        featuredImage={blog.featuredImage}
        publishDate={blog.publishDate}
        author={blog.author}
        body={blog.body}
      />

      {/* Related Posts */}
      <RelatedPosts posts={relatedPosts} />
    </div>
  );
};

export default BlogDetailsPage;
