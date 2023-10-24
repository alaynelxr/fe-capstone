import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Welcomebanner from "../components/Welcomebanner";
// import FeaturedMoves from "../components/FeaturedMoves";
import BlogArticle from "../components/BlogArticle";
import SearchBar from "../components/SearchBar";
import { getAuth } from "firebase/auth";

const Home = () => {
  const auth = getAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  auth.onAuthStateChanged((user) => {
    if (user) {
      setIsLoggedIn(true);
      console.log(isLoggedIn);
    }
  });

  return (
    <div>
      {isLoggedIn && <Welcomebanner />}
      <Navbar />
      <SearchBar />
      <Slider />
      <BlogArticle />
      {/* <FeaturedMoves /> */}
      <Footer />
    </div>
  );
};

export default Home;
