import React from "react";
// import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ListItem from "../components/MoveItemSingle";
// import Products from "../components/Products";
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
      {/* <Categories /> */}
      {/* <Products /> */}
      <BlogArticle />
      <FeaturedMoves />
      <ListItem />
      <Footer />
    </div>
  );
};

export default Home;
