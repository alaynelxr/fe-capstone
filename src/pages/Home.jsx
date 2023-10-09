import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Welcomebanner from "../components/Welcomebanner";
import FeaturedMoves from "../components/FeaturedMoves";
import BlogArticle from "../components/BlogArticle";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <div>
      <Welcomebanner />
      <Navbar />
      <SearchBar />
      <Slider />
      <BlogArticle />
      <FeaturedMoves />
      <Footer />
    </div>
  );
};

export default Home;
